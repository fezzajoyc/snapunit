import { describe, expect, it } from "vitest";
import {
  ANGLE,
  FUEL,
  LENGTH,
  PAPER_SIZES,
  TEMPERATURE,
  UNIT_CATEGORIES,
  WEIGHT,
  convertValue,
  formatNumber,
  paperAreaMm2,
  paperInches,
  paperSize,
  type UnitCategory,
} from "@/tools/_lib/units";

const cv = (cat: UnitCategory, v: number, from: string, to: string) => convertValue(cat, v, from, to);

/* ------------------------------------------------------------------ */
/* 油耗 fuel:倒数关系(与 MPG/L-100km 的封闭公式比对)                  */
/* ------------------------------------------------------------------ */

describe("fuel economy (inverse units)", () => {
  // 封闭公式:MPG(US) = 100 × 3.785411784 / (1.609344 × L/100km),与实现相互独立
  const mpgUSfromL100 = (l100: number) => (100 * 3.785411784) / (1.609344 * l100);
  const mpgUKfromL100 = (l100: number) => (100 * 4.54609) / (1.609344 * l100);

  it("10 L/100km = 23.5215 MPG (US) — hand-computed against the closed formula", () => {
    expect(cv(FUEL, 10, "l100", "mpgus")).toBeCloseTo(23.5215, 3);
    expect(cv(FUEL, 10, "l100", "mpgus")).toBeCloseTo(mpgUSfromL100(10), 12);
  });

  it("10 L/100km = 28.2481 MPG (UK) — imperial gallon is bigger", () => {
    expect(cv(FUEL, 10, "l100", "mpguk")).toBeCloseTo(28.2481, 3);
    expect(cv(FUEL, 10, "l100", "mpguk")).toBeCloseTo(mpgUKfromL100(10), 12);
    expect(cv(FUEL, 10, "l100", "mpguk")).toBeGreaterThan(cv(FUEL, 10, "l100", "mpgus"));
  });

  it("10 L/100km is exactly 10 km/L (reciprocal identity)", () => {
    expect(cv(FUEL, 10, "l100", "kml")).toBeCloseTo(10, 12);
    expect(cv(FUEL, 5, "l100", "kml")).toBeCloseTo(20, 12);
  });

  it("halving consumption doubles MPG — no fixed factor can express this", () => {
    const at10 = cv(FUEL, 10, "l100", "mpgus");
    const at5 = cv(FUEL, 5, "l100", "mpgus");
    expect(at5 / at10).toBeCloseTo(2, 12);
  });

  it("roundtrips through every unit at relative tolerance 1e-9", () => {
    for (const a of FUEL.units) {
      for (const b of FUEL.units) {
        const v = 8.06;
        const there = cv(FUEL, v, a.id, b.id);
        const back = cv(FUEL, there, b.id, a.id);
        expect(back, `${a.id}→${b.id}→${a.id}`).toBeCloseTo(v, 9);
      }
    }
  });

  it("rejects zero, negative and non-finite input with NaN — no exceptions", () => {
    for (const v of [0, -5, NaN, Infinity, -Infinity]) {
      for (const a of FUEL.units) {
        for (const b of FUEL.units) {
          expect(Number.isNaN(cv(FUEL, v, a.id, b.id)), `${v} ${a.id}→${b.id}`).toBe(true);
        }
      }
    }
  });

  it("returns NaN for unknown unit ids without throwing", () => {
    expect(Number.isNaN(cv(FUEL, 10, "mpg", "l100"))).toBe(true);
    expect(Number.isNaN(cv(FUEL, 10, "l100", "nope"))).toBe(true);
  });
});

/* ------------------------------------------------------------------ */
/* 纸张 paper:ISO 216 数据表 + 命名查询                                */
/* ------------------------------------------------------------------ */

describe("paper sizes", () => {
  it("contains 11 A + 11 B + 3 US = 25 sizes with unique ids", () => {
    expect(PAPER_SIZES.length).toBe(25);
    const ids = PAPER_SIZES.map((p) => p.id);
    expect(new Set(ids).size).toBe(25);
    expect(PAPER_SIZES.filter((p) => p.series === "A").length).toBe(11);
    expect(PAPER_SIZES.filter((p) => p.series === "B").length).toBe(11);
    expect(PAPER_SIZES.filter((p) => p.series === "US").length).toBe(3);
  });

  it("A4 is exactly 210 × 297 mm; A3 is exactly two A4 sheets by area", () => {
    const a4 = paperSize("a4")!;
    expect(a4.wmm).toBe(210);
    expect(a4.hmm).toBe(297);
    const a3 = paperSize("a3")!;
    expect(paperAreaMm2(a3)).toBe(paperAreaMm2(a4) * 2);
    expect(paperAreaMm2(a4)).toBe(62370); // 210 × 297
  });

  it("A-series halves correctly (ISO half-rounding-down): A(n+1) width = A(n) height / 2, height = A(n) width", () => {
    const a = PAPER_SIZES.filter((p) => p.series === "A");
    for (let i = 1; i < a.length; i++) {
      // ISO 216 取整:.5 一律向下(594.5 → 594,420.5 → 420,52.5 → 52)
      expect(a[i].wmm).toBe(Math.floor(a[i - 1].hmm / 2 + 0.5 - 1e-9));
      expect(a[i].hmm).toBe(a[i - 1].wmm);
    }
    // A0 ≈ 1 m²(标准毫米取整后允许 ±1 cm² 的偏差)
    expect(Math.abs(paperAreaMm2(a[0]) - 1e6)).toBeLessThanOrEqual(100);
  });

  it("A/B aspect ratio stays 1:√2 within ISO rounding tolerance", () => {
    for (const p of PAPER_SIZES.filter((x) => x.series !== "US")) {
      const ratio = p.hmm / p.wmm;
      // 小尺寸(52×74 等)毫米取整会让偏差到 ~0.9%
      expect(Math.abs(ratio - Math.SQRT2), p.id).toBeLessThan(0.01);
    }
  });

  it("B-series is the geometric mean of the previous A size and A(n) (within rounding)", () => {
    // B(n) = √(A(n−1) · A(n)),A(−1) = 1189 × 1682 mm
    let prevW = 1189;
    let prevH = 1682;
    for (const n of [0, 1, 2, 3, 4, 5] as const) {
      const an = paperSize(`a${n}`)!;
      const bn = paperSize(`b${n}`)!;
      expect(Math.abs(bn.wmm - Math.sqrt(prevW * an.wmm)), `b${n} width`).toBeLessThanOrEqual(1);
      expect(Math.abs(bn.hmm - Math.sqrt(prevH * an.hmm)), `b${n} height`).toBeLessThanOrEqual(1.5);
      prevW = an.wmm;
      prevH = an.hmm;
    }
  });

  it("US sizes convert exactly from inches (1 in = 25.4 mm)", () => {
    const letter = paperSize("letter")!;
    expect(letter.wmm).toBeCloseTo(8.5 * 25.4, 10);
    expect(letter.hmm).toBeCloseTo(11 * 25.4, 10);
    expect(paperSize("legal")!.hmm).toBeCloseTo(14 * 25.4, 10);
    expect(paperSize("tabloid")!.wmm).toBeCloseTo(11 * 25.4, 10);
    expect(paperSize("tabloid")!.hmm).toBeCloseTo(17 * 25.4, 10);
  });

  it("paperInches: A4 is 8.27 × 11.69 in (210/25.4 exact math)", () => {
    const inch = paperInches(paperSize("a4")!);
    expect(inch.w).toBeCloseTo(210 / 25.4, 12);
    expect(inch.h).toBeCloseTo(297 / 25.4, 12);
    expect(inch.w).toBeCloseTo(8.2677, 3);
  });

  it("named lookup: case-sensitive ids, undefined for unknown", () => {
    expect(paperSize("a4")).toBeDefined();
    expect(paperSize("letter")).toBeDefined();
    expect(paperSize("A4")).toBeUndefined();
    expect(paperSize("a11")).toBeUndefined();
    expect(paperSize("")).toBeUndefined();
  });

  it("every size carries localized names for the 5 core locales", () => {
    for (const p of PAPER_SIZES) {
      for (const locale of ["en", "zh", "ja", "es", "pt"]) {
        expect(typeof p.name[locale], `${p.id}:${locale}`).toBe("string");
        expect(p.name[locale]!.length).toBeGreaterThan(0);
      }
    }
  });
});

/* ------------------------------------------------------------------ */
/* 角度 angle:线性单位,与 π 的封闭关系比对                            */
/* ------------------------------------------------------------------ */

describe("angle units", () => {
  it("180 degrees = π radians ≈ 3.14159", () => {
    expect(cv(ANGLE, 180, "deg", "rad")).toBeCloseTo(Math.PI, 12);
    expect(cv(ANGLE, 180, "deg", "rad")).toBeCloseTo(3.14159, 4);
  });

  it("a full turn = 360° = 2π rad = 400 grad", () => {
    expect(cv(ANGLE, 1, "turn", "deg")).toBe(360);
    expect(cv(ANGLE, 1, "turn", "rad")).toBeCloseTo(2 * Math.PI, 12);
    expect(cv(ANGLE, 1, "turn", "grad")).toBeCloseTo(400, 12);
  });

  it("90° = 100 grad (right angle), 1° = 60′ = 3600″", () => {
    expect(cv(ANGLE, 90, "deg", "grad")).toBeCloseTo(100, 12);
    expect(cv(ANGLE, 1, "deg", "arcmin")).toBeCloseTo(60, 12);
    expect(cv(ANGLE, 1, "deg", "arcsec")).toBeCloseTo(3600, 9);
    expect(cv(ANGLE, 1, "arcmin", "arcsec")).toBeCloseTo(60, 12);
  });

  it("roundtrips through every pair at 1e-9", () => {
    for (const a of ANGLE.units) {
      for (const b of ANGLE.units) {
        const back = cv(ANGLE, cv(ANGLE, 47.5, a.id, b.id), b.id, a.id);
        expect(back, `${a.id}→${b.id}`).toBeCloseTo(47.5, 9);
      }
    }
  });

  it("handles huge and tiny angles: 1e9°, 1e-9°", () => {
    expect(cv(ANGLE, 1e9, "deg", "turn")).toBeCloseTo(1e9 / 360, 6);
    expect(cv(ANGLE, 1e-9, "deg", "arcsec")).toBeCloseTo(3.6e-6, 15);
  });
});

/* ------------------------------------------------------------------ */
/* 扩展长度:天文单位(IAU 精确值)+ 传统单位                           */
/* ------------------------------------------------------------------ */

describe("extended length units", () => {
  it("1 light-year = 9.4607e15 m (IAU exact: 9 460 730 472 580 800 m)", () => {
    expect(cv(LENGTH, 1, "ly", "m")).toBe(9460730472580800);
    expect(cv(LENGTH, 1, "ly", "km")).toBeCloseTo(9.4607304725808e12, 0);
    // 与封闭公式比对:c × Julian year
    expect(cv(LENGTH, 1, "ly", "m")).toBeCloseTo(299792458 * 31557600, -6);
  });

  it("1 AU = 149 597 870 700 m exactly (IAU 2012)", () => {
    expect(cv(LENGTH, 1, "au", "m")).toBe(149597870700);
    // 1 pc = 648000/π AU
    expect(cv(LENGTH, 1, "pc", "au")).toBeCloseTo(648000 / Math.PI, 6);
  });

  it("1 parsec ≈ 3.0857e16 m", () => {
    expect(cv(LENGTH, 1, "pc", "m")).toBeCloseTo(3.0856775814913673e16, 8);
  });

  it("1 furlong = 201.168 m (= 1/8 statute mile); 1 nmi = 1852 m; 1 cubit = 0.4572 m", () => {
    expect(cv(LENGTH, 1, "furlong", "m")).toBe(201.168);
    expect(cv(LENGTH, 8, "furlong", "mi")).toBeCloseTo(1, 12);
    expect(cv(LENGTH, 1, "nmi", "m")).toBe(1852);
    expect(cv(LENGTH, 1, "cubit", "m")).toBe(0.4572);
    expect(cv(LENGTH, 1, "cubit", "in")).toBeCloseTo(18, 9);
  });

  it("still converts the classics exactly (1 in = 2.54 cm)", () => {
    expect(cv(LENGTH, 1, "in", "cm")).toBe(2.54);
    expect(cv(LENGTH, 1, "mi", "km")).toBeCloseTo(1.609344, 12);
  });

  it("astronomical roundtrip: m → ly → m within 1e-6 relative", () => {
    const v = 1e17;
    expect(cv(LENGTH, cv(LENGTH, v, "m", "ly"), "ly", "m")).toBeCloseTo(v, 6);
  });
});

/* ------------------------------------------------------------------ */
/* 扩展重量:金衡盎司 / 克拉 / 英石                                     */
/* ------------------------------------------------------------------ */

describe("extended weight units", () => {
  it("1 troy ounce = 31.1034768 g, ~10% heavier than an avoirdupois ounce", () => {
    expect(cv(WEIGHT, 1, "ozt", "g")).toBeCloseTo(31.1034768, 12);
    expect(cv(WEIGHT, 1, "ozt", "oz")).toBeGreaterThan(1.09);
    expect(cv(WEIGHT, 1, "ozt", "oz")).toBeLessThan(1.10);
  });

  it("1 carat = 0.2 g; 1 stone = 14 lb = 6.35029318 kg", () => {
    expect(cv(WEIGHT, 1, "ct", "g")).toBeCloseTo(0.2, 12);
    expect(cv(WEIGHT, 1, "st", "lb")).toBeCloseTo(14, 12);
    expect(cv(WEIGHT, 1, "st", "kg")).toBeCloseTo(6.35029318, 12);
    expect(cv(WEIGHT, 1, "kg", "ozt")).toBeCloseTo(32.150746568628, 6);
  });

  it("weight roundtrips and zero/negative pass-through for linear categories", () => {
    expect(cv(WEIGHT, cv(WEIGHT, 2.5, "kg", "ozt"), "ozt", "kg")).toBeCloseTo(2.5, 12);
    expect(cv(WEIGHT, 0, "kg", "lb")).toBe(0);
    expect(cv(WEIGHT, -3, "lb", "kg")).toBeCloseTo(-1.36077711, 8);
  });
});

/* ------------------------------------------------------------------ */
/* 温度:兰氏度 / 列氏度(非线性,封闭公式比对)                        */
/* ------------------------------------------------------------------ */

describe("temperature scales incl. Rankine and Réaumur", () => {
  it("water points: 0 °C = 32 °F = 273.15 K = 491.67 °R = 0 °Ré", () => {
    expect(cv(TEMPERATURE, 0, "c", "f")).toBe(32);
    expect(cv(TEMPERATURE, 0, "c", "k")).toBe(273.15);
    expect(cv(TEMPERATURE, 0, "c", "r")).toBeCloseTo(491.67, 12);
    expect(cv(TEMPERATURE, 0, "c", "re")).toBe(0);
  });

  it("100 °C = 212 °F = 373.15 K = 671.67 °R = 80 °Ré", () => {
    expect(cv(TEMPERATURE, 100, "c", "f")).toBe(212);
    expect(cv(TEMPERATURE, 100, "c", "k")).toBeCloseTo(373.15, 12);
    expect(cv(TEMPERATURE, 100, "c", "r")).toBeCloseTo(671.67, 12);
    expect(cv(TEMPERATURE, 100, "c", "re")).toBeCloseTo(80, 12);
  });

  it("absolute zero: 0 K = 0 °R = −273.15 °C = −459.67 °F", () => {
    expect(cv(TEMPERATURE, 0, "k", "r")).toBe(0);
    expect(cv(TEMPERATURE, 0, "k", "c")).toBeCloseTo(-273.15, 12);
    expect(cv(TEMPERATURE, 0, "k", "f")).toBeCloseTo(-459.67, 12);
  });

  it("1 °Ré = 1.25 °C and every pair roundtrips (incl. negatives)", () => {
    expect(cv(TEMPERATURE, 1, "re", "c")).toBeCloseTo(1.25, 12);
    for (const a of TEMPERATURE.units) {
      for (const b of TEMPERATURE.units) {
        const back = cv(TEMPERATURE, cv(TEMPERATURE, -17.25, a.id, b.id), b.id, a.id);
        expect(back, `${a.id}→${b.id}`).toBeCloseTo(-17.25, 9);
      }
    }
  });
});

/* ------------------------------------------------------------------ */
/* 注册表与数据完整性(标准矩阵:空值/非法/Unicode/往返)               */
/* ------------------------------------------------------------------ */

describe("unit category data integrity", () => {
  it("12 categories exist incl. the new angle and fuel", () => {
    expect(Object.keys(UNIT_CATEGORIES).sort()).toEqual(
      ["angle", "area", "data", "energy", "fuel", "length", "pressure", "speed", "temperature", "time", "volume", "weight"],
    );
  });

  it("every category's defaults resolve to real unit ids", () => {
    for (const cat of Object.values(UNIT_CATEGORIES)) {
      const ids = new Set(cat.units.map((x) => x.id));
      expect(ids.has(cat.defaults[0]), `${cat.id} default from`).toBe(true);
      expect(ids.has(cat.defaults[1]), `${cat.id} default to`).toBe(true);
      expect(new Set(cat.units.map((x) => x.id)).size).toBe(cat.units.length); // 无重复 id
    }
  });

  it("every unit in every category has names for the 5 core locales, CJK included", () => {
    const core = ["en", "zh", "ja", "es", "pt"] as const;
    for (const cat of Object.values(UNIT_CATEGORIES)) {
      for (const unit of cat.units) {
        for (const locale of core) {
          const name = unit.name[locale] ?? unit.name.en;
          expect(typeof name, `${cat.id}:${unit.id}:${locale}`).toBe("string");
          expect(name.length).toBeGreaterThan(0);
        }
        expect(unit.name.zh!.length, `${unit.id} CJK name`).toBeGreaterThan(0);
        expect(unit.symbol.length).toBeGreaterThan(0);
      }
    }
  });

  it("illegal inputs never throw: unknown ids and NaN return NaN; Infinity never becomes finite", () => {
    for (const cat of Object.values(UNIT_CATEGORIES)) {
      expect(Number.isNaN(cv(cat, 1, "€", "m"))).toBe(true);
      expect(Number.isNaN(cv(cat, 1, cat.units[0].id, "🍓"))).toBe(true);
      expect(Number.isNaN(cv(cat, NaN, cat.defaults[0], cat.defaults[1]))).toBe(true);
      // 线性类别 Infinity 传播为 Infinity(数学上自洽),fuel 的守卫返回 NaN——共同点是绝不变有限值
      expect(Number.isFinite(cv(cat, Infinity, cat.defaults[0], cat.defaults[1]))).toBe(false);
      expect(Number.isFinite(cv(cat, -Infinity, cat.defaults[0], cat.defaults[1]))).toBe(false);
    }
  });

  it("linear categories: zero maps to zero, negatives pass through", () => {
    for (const cat of [LENGTH, WEIGHT, ANGLE]) {
      expect(cv(cat, 0, cat.defaults[0], cat.defaults[1])).toBe(0);
      expect(cv(cat, -4, cat.defaults[0], cat.defaults[1])).toBeLessThan(0);
    }
  });

  it("extremes survive: 1e21 and 1e-9 keep their magnitude through conversion", () => {
    expect(cv(LENGTH, 1e21, "m", "km")).toBeCloseTo(1e18, -3);
    // 1e-9 km = 1e-6 m = 1e-3 mm
    expect(cv(LENGTH, 1e-9, "km", "mm")).toBeCloseTo(1e-3, 12);
  });

  it("every category roundtrips 12.75 through every unit pair (except documented special cases)", () => {
    for (const cat of Object.values(UNIT_CATEGORIES)) {
      for (const a of cat.units) {
        for (const b of cat.units) {
          const back = cv(cat, cv(cat, 12.75, a.id, b.id), b.id, a.id);
          expect(back, `${cat.id} ${a.id}→${b.id}→${a.id}`).toBeCloseTo(12.75, 9);
        }
      }
    }
  });
});

/* ------------------------------------------------------------------ */
/* formatNumber:紧凑可读格式的边界                                     */
/* ------------------------------------------------------------------ */

describe("formatNumber", () => {
  it("formats everyday values compactly", () => {
    expect(formatNumber(2.54)).toBe("2.54");
    expect(formatNumber(1 / 3)).toBe("0.33333333");
    expect(formatNumber(123456.78)).toBe("123456.78");
  });

  it("handles zero, negatives and non-finite sentinels", () => {
    expect(formatNumber(0)).toBe("0");
    expect(formatNumber(-0)).toBe("0");
    expect(formatNumber(-4.2)).toBe("-4.2");
    expect(formatNumber(NaN)).toBe("—");
    expect(formatNumber(Infinity)).toBe("—");
    expect(formatNumber(-Infinity)).toBe("—");
  });

  it("switches to exponential beyond 1e15 and below 1e-9", () => {
    expect(formatNumber(1e16)).toBe("1e+16");
    expect(formatNumber(9.4607304725808e15)).toContain("e+");
    expect(formatNumber(1e-10)).toContain("e-10");
    expect(formatNumber(9.4607e14)).toBe("946070000000000");
  });
});
