import { z } from "zod";
import {
  UNIT_CATEGORIES,
  convertValue,
  formatNumber,
  paperAreaMm2,
  paperInches,
  paperSize,
} from "../tools/_lib/units";

/**
 * SnapUnit MCP 工具注册表:把 tools/_lib 的纯函数暴露为 AI 可执行工具。
 * 站上的同名工具在浏览器里跑(交互式),这里跑同一份经过测试的实现——
 * 人和 AI 用同一套逻辑,而不是两套各写各的。
 */

const num = (n: number) => (Number.isFinite(n) ? String(n) : "invalid input — see tool description for accepted ranges");
const json = (v: unknown) => ({ content: [{ type: "text" as const, text: JSON.stringify(v, null, 2) }] });
const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });

const CATEGORY_IDS = Object.keys(UNIT_CATEGORIES) as [string, ...string[]];
const FUEL_IDS = ["l100", "kml", "mpgus", "mpguk"] as const;

export type McpToolDef = {
  name: string;
  title: string;
  description: string;
  schema: Record<string, any>;
  run: (args: any) => { content: { type: "text"; text: string }[]; isError?: boolean };
};

export const MCP_TOOLS: McpToolDef[] = [
  {
    name: "list_unit_categories",
    title: "List unit categories",
    description:
      "List all unit conversion categories available in convert_unit (length, weight, area, volume, speed, data, time, temperature, pressure, energy, angle, fuel) with their unit ids and symbols. Note: fuel economy uses inverse units (L/100km vs km/L vs mpg).",
    schema: {},
    run: () => json(Object.fromEntries(
      Object.entries(UNIT_CATEGORIES).map(([id, cat]) => [
        id,
        cat.units.map((u) => `${u.id} (${u.symbol})`),
      ]),
    )),
  },
  {
    name: "convert_unit",
    title: "Convert unit",
    description:
      "Convert an amount between units. Get valid category/unit ids from list_unit_categories first. Examples: length m→ft, length ly→km, weight kg→lb, temperature c→f, angle deg→rad, fuel l100→mpgus (fuel is inverse: MPG ≈ 235.215 / (L/100km), US gallons).",
    schema: {
      category: z.enum(CATEGORY_IDS),
      from: z.string().describe("source unit id, e.g. 'm', 'kg', 'deg', 'l100'"),
      to: z.string().describe("target unit id"),
      amount: z.number().describe("amount to convert (must be positive for category 'fuel')"),
    },
    run: (a) => {
      const cat = UNIT_CATEGORIES[a.category];
      if (!cat) return { content: [{ type: "text", text: `unknown category: ${a.category}` }], isError: true };
      const value = convertValue(cat, a.amount, a.from, a.to);
      if (!Number.isFinite(value)) {
        const fuelHint =
          a.category === "fuel" && typeof a.amount === "number" && a.amount <= 0
            ? " — fuel economy must be a positive number"
            : "";
        return {
          content: [{ type: "text", text: `unknown units: ${a.from} → ${a.to} in category ${a.category}${fuelHint} — call list_unit_categories for valid ids` }],
          isError: true,
        };
      }
      return text(num(value));
    },
  },
  {
    name: "fuel_economy_convert",
    title: "Fuel economy conversion",
    description:
      "Convert fuel economy between L/100km, km/L, MPG (US) and MPG (UK). These units are reciprocals, not multiples: MPG (US) ≈ 235.215 / (L/100km), MPG (UK) ≈ 282.481 / (L/100km). Constants derive from the exact definitions 1 US gal = 3.785411784 L, 1 imperial gal = 4.54609 L, 1 mi = 1.609344 km. Value must be positive.",
    schema: {
      value: z.number().positive().describe("fuel economy value; must be > 0"),
      from: z.enum(FUEL_IDS),
      to: z.enum(FUEL_IDS),
    },
    run: (a) => {
      const out = convertValue(UNIT_CATEGORIES.fuel, a.value, a.from, a.to);
      if (!Number.isFinite(out)) {
        return { content: [{ type: "text", text: "fuel economy must be a positive number (L/100km, km/L and mpg are all positive quantities)" }], isError: true };
      }
      return text(num(out));
    },
  },
  {
    name: "paper_size_lookup",
    title: "Paper size dimensions",
    description:
      "Exact dimensions of a named paper size: ISO 216 A-series (a0–a10), B-series (b0–b10), and US Letter, Legal, Tabloid. Returns width × height in mm, cm and inches plus area. Values are the standard ISO millimeter figures; US sizes are exact inches × 25.4.",
    schema: {
      size: z.string().min(1).describe("paper size id: a0…a10, b0…b10, letter, legal or tabloid"),
    },
    run: (a) => {
      const p = paperSize(String(a.size).toLowerCase().trim());
      if (!p) {
        return {
          content: [{ type: "text", text: `unknown paper size '${a.size}' — valid ids: a0…a10, b0…b10, letter, legal, tabloid` }],
          isError: true,
        };
      }
      const inch = paperInches(p);
      return json({
        id: p.id,
        series: p.series,
        width_mm: p.wmm,
        height_mm: p.hmm,
        width_cm: p.wmm / 10,
        height_cm: p.hmm / 10,
        width_in: Math.round(inch.w * 10000) / 10000,
        height_in: Math.round(inch.h * 10000) / 10000,
        area_mm2: paperAreaMm2(p),
        area_cm2: paperAreaMm2(p) / 100,
      });
    },
  },
];
