import { describe, expect, it } from "vitest";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { createServer } from "@/mcp/server";

async function connect() {
  const server = createServer();
  const client = new Client({ name: "test", version: "0.0.0" });
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  await Promise.all([server.connect(serverTransport), client.connect(clientTransport)]);
  return client;
}

describe("snapunit MCP server", () => {
  it("exposes the full tool registry", async () => {
    const client = await connect();
    const { tools } = await client.listTools();
    expect(tools.length).toBeGreaterThanOrEqual(4);
    const names = new Set(tools.map((t) => t.name));
    for (const expected of [
      "list_unit_categories",
      "convert_unit",
      "fuel_economy_convert",
      "paper_size_lookup",
    ]) {
      expect(names.has(expected), expected).toBe(true);
    }
    await client.close();
  });

  it("lists every category including the new angle and fuel ones", async () => {
    const client = await connect();
    const res = await client.callTool({ name: "list_unit_categories", arguments: {} });
    const parsed = JSON.parse((res.content as { text: string }[])[0].text);
    for (const cat of ["length", "weight", "temperature", "angle", "fuel"]) {
      expect(Array.isArray(parsed[cat]), cat).toBe(true);
    }
    expect(parsed.angle.join(" ")).toContain("deg (°)");
    expect(parsed.angle.join(" ")).toContain("rad (rad)");
    expect(parsed.fuel.join(" ")).toContain("l100 (L/100km)");
    expect(parsed.length.join(" ")).toContain("ly (ly)");
    await client.close();
  });

  it("converts units: temperature, data, extended length and angle", async () => {
    const client = await connect();
    const c2f = await client.callTool({ name: "convert_unit", arguments: { category: "temperature", from: "c", to: "f", amount: 20 } });
    expect((c2f.content as any)[0].text).toBe("68");
    const gb = await client.callTool({ name: "convert_unit", arguments: { category: "data", from: "gb", to: "gib", amount: 1000 } });
    expect(Number((gb.content as any)[0].text)).toBeCloseTo(931.3225746, 4);
    const ly = await client.callTool({ name: "convert_unit", arguments: { category: "length", from: "ly", to: "m", amount: 1 } });
    expect(Number((ly.content as any)[0].text)).toBeCloseTo(9.4607304725808e15, -9);
    const rad = await client.callTool({ name: "convert_unit", arguments: { category: "angle", from: "deg", to: "rad", amount: 180 } });
    expect(Number((rad.content as any)[0].text)).toBeCloseTo(Math.PI, 12);
    await client.close();
  });

  it("converts fuel economy with the reciprocal relationship (10 L/100km = 23.5215 MPG US)", async () => {
    const client = await connect();
    const us = await client.callTool({ name: "fuel_economy_convert", arguments: { value: 10, from: "l100", to: "mpgus" } });
    expect(Number((us.content as any)[0].text)).toBeCloseTo(235.2145833 / 10, 6);
    const uk = await client.callTool({ name: "fuel_economy_convert", arguments: { value: 10, from: "l100", to: "mpguk" } });
    expect(Number((uk.content as any)[0].text)).toBeCloseTo(28.2480936, 6);
    const roundtrip = await client.callTool({ name: "fuel_economy_convert", arguments: { value: 23.5214583, from: "mpgus", to: "l100" } });
    expect(Number((roundtrip.content as any)[0].text)).toBeCloseTo(10, 6);
    // same conversion reachable through the generic convert_unit tool
    const generic = await client.callTool({ name: "convert_unit", arguments: { category: "fuel", from: "l100", to: "mpgus", amount: 10 } });
    expect(Number((generic.content as any)[0].text)).toBeCloseTo(23.5214583, 6);
    await client.close();
  });

  it("returns exact paper dimensions for ISO 216 and US sizes", async () => {
    const client = await connect();
    const textOf = (r: any) => (r.content as { text: string }[])[0].text;
    const a4 = JSON.parse(textOf(await client.callTool({ name: "paper_size_lookup", arguments: { size: "a4" } }))) as {
      width_mm: number; height_mm: number; area_cm2: number; series: string;
    };
    expect(a4.width_mm).toBe(210);
    expect(a4.height_mm).toBe(297);
    expect(a4.series).toBe("A");
    // A3 = 2 × A4 area
    const a3 = JSON.parse(textOf(await client.callTool({ name: "paper_size_lookup", arguments: { size: "a3" } }))) as { area_cm2: number };
    expect(a3.area_cm2).toBeCloseTo(a4.area_cm2 * 2, 6);
    const letter = JSON.parse(textOf(await client.callTool({ name: "paper_size_lookup", arguments: { size: "letter" } }))) as {
      width_mm: number; height_mm: number;
    };
    expect(letter.width_mm).toBe(215.9);
    expect(letter.height_mm).toBe(279.4);
    await client.close();
  });

  it("handles invalid input at two layers: schema (protocol error) and logic (isError)", async () => {
    const client = await connect();
    // 逻辑层:合法 schema 但无效单位 → handler isError
    const bad = await client.callTool({ name: "convert_unit", arguments: { category: "length", from: "nope", to: "m", amount: 1 } });
    expect((bad as any).isError).toBe(true);
    // 逻辑层:油耗必须为正(L/100km 是倒数关系,0 与负数无意义)→ 经 convert_unit 到 handler,isError
    const zeroGeneric = await client.callTool({ name: "convert_unit", arguments: { category: "fuel", from: "l100", to: "mpgus", amount: 0 } });
    expect((zeroGeneric as any).isError).toBe(true);
    expect((zeroGeneric.content as any)[0].text).toContain("positive");
    // schema 层:fuel_economy_convert 的 zod positive() 直接拒绝 0 → SDK 返回 isError 结果(不 throw)
    const zero = await client.callTool({ name: "fuel_economy_convert", arguments: { value: 0, from: "l100", to: "mpgus" } });
    expect((zero as any).isError).toBe(true);
    expect((zero.content as any)[0].text).toContain("-32602");
    // 逻辑层:未知纸张 id → isError 且列出合法 id
    const badPaper = await client.callTool({ name: "paper_size_lookup", arguments: { size: "a99" } });
    expect((badPaper as any).isError).toBe(true);
    expect((badPaper.content as any)[0].text).toContain("a0…a10");
    // schema 层:空字符串被 z.string().min(1) 拒绝 → -32602
    const schemaBad = await client.callTool({ name: "paper_size_lookup", arguments: { size: "" } });
    expect((schemaBad as any).isError).toBe(true);
    expect((schemaBad.content as any)[0].text).toContain("-32602");
    await client.close();
  });
});
