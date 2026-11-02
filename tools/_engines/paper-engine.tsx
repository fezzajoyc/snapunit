"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { ToolPanel } from "@/components/ui";
import {
  PAPER_SIZES,
  paperAreaMm2,
  paperInches,
  paperSize,
  type PaperSeries,
  type PaperSize,
} from "../_lib/units";

/** 纸张尺寸不是标量单位:查一个尺寸,给出 mm/cm/inch 三套精确尺寸 + 全尺寸对照表。 */
export function PaperSizeConverter() {
  const { locale, t } = useI18n();
  const [id, setId] = useState("a4");
  const size: PaperSize = paperSize(id) ?? PAPER_SIZES[4];
  const inches = paperInches(size);
  const areaMm2 = paperAreaMm2(size);

  const name = size.name[locale] ?? size.name.en;
  const grouped = useMemo(() => {
    const by: Record<PaperSeries, PaperSize[]> = { A: [], B: [], US: [] };
    for (const p of PAPER_SIZES) by[p.series].push(p);
    return by;
  }, []);

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-[1fr_2fr] sm:items-end">
        <div className="space-y-2">
          <label className="text-[13px] font-medium text-[var(--color-sub)]" htmlFor="paper-size">
            {t.unit.allUnits}
          </label>
          <select
            id="paper-size"
            className="field"
            value={size.id}
            onChange={(e) => setId(e.target.value)}
          >
            {(["A", "B", "US"] as PaperSeries[]).map((series) => (
              <optgroup key={series} label={seriesName(series, locale)}>
                {(series === "US" ? SERIES_US : series === "A" ? SERIES_A : SERIES_B).map((s) => (
                  <option key={s} value={s}>
                    {s.toUpperCase()}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div
          className="relative overflow-hidden rounded-xl border hairline bg-[var(--color-surface)] p-4"
          aria-live="polite"
        >
          <div
            aria-hidden="true"
            className="relative border border-[var(--color-accent)] bg-[var(--color-card)]"
            style={{
              aspectRatio: `${size.wmm} / ${size.hmm}`,
              maxWidth: size.wmm >= size.hmm ? "100%" : `${(size.wmm / size.hmm) * 100}%`,
              maxHeight: 132,
              marginInline: "auto",
            }}
          />
          <p className="mt-2 text-center text-[13px] text-[var(--color-sub)]">
            <strong className="font-semibold text-[var(--color-ink)]">{name}</strong>
            {" · "}
            {size.wmm} × {size.hmm} mm
          </p>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {[
          { k: t.unit.width, v: `${size.wmm} mm / ${inches.w.toFixed(2)} in` },
          { k: t.unit.height, v: `${size.hmm} mm / ${inches.h.toFixed(2)} in` },
          { k: t.unit.area, v: `${(areaMm2 / 100).toLocaleString("en-US")} cm²` },
          { k: "in²", v: (inches.w * inches.h).toFixed(2) },
        ].map((cell) => (
          <div key={cell.k} className="rounded-xl border hairline bg-[var(--color-card)] px-3.5 py-2.5">
            <dt className="text-[12px] font-medium text-[var(--color-sub)]">{cell.k}</dt>
            <dd className="mono mt-0.5 text-[15px] font-medium">{cell.v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-7">
        <h3 className="mb-3 text-[15px] font-semibold">{t.unit.allUnits}</h3>
        <div className="overflow-x-auto rounded-xl border hairline">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="bg-[var(--color-surface)] text-left text-[12.5px] uppercase tracking-wide text-[var(--color-sub)]">
                <th scope="col" className="px-3.5 py-2 font-semibold">—</th>
                <th scope="col" className="px-3.5 py-2 font-semibold">mm</th>
                <th scope="col" className="px-3.5 py-2 font-semibold">cm</th>
                <th scope="col" className="px-3.5 py-2 font-semibold">inch</th>
                <th scope="col" className="px-3.5 py-2 text-right font-semibold">cm²</th>
              </tr>
            </thead>
            <tbody>
              {PAPER_SIZES.map((p, i) => {
                const pin = paperInches(p);
                const active = p.id === size.id;
                return (
                  <tr
                    key={p.id}
                    className={`${i % 2 && !active ? "bg-[var(--color-surface)]" : ""} ${active ? "bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] font-medium" : ""}`}
                  >
                    <th scope="row" className="px-3.5 py-2 text-left">
                      {p.name[locale] ?? p.name.en}
                    </th>
                    <td className="mono px-3.5 py-2">{p.wmm} × {p.hmm}</td>
                    <td className="mono px-3.5 py-2 text-[var(--color-sub)]">
                      {p.wmm / 10} × {p.hmm / 10}
                    </td>
                    <td className="mono px-3.5 py-2 text-[var(--color-sub)]">
                      {pin.w.toFixed(2)} × {pin.h.toFixed(2)}
                    </td>
                    <td className="mono px-3.5 py-2 text-right text-[var(--color-sub)]">
                      {(paperAreaMm2(p) / 100).toLocaleString("en-US")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-5 text-[13px] leading-5 text-[var(--color-sub)]">
        {locale === "zh"
          ? "ISO 216 尺寸为标准毫米值;美制尺寸由英寸 × 25.4 精确换算。"
          : locale === "ja"
            ? "ISO 216 の寸法は規格のミリ値、米国判はインチ × 25.4 で換算した正確な値です。"
            : locale === "es"
              ? "Las medidas ISO 216 son los valores estándar en mm; las estadounidenses se convierten exactamente de pulgadas × 25,4."
              : locale === "pt"
                ? "As medidas ISO 216 são os valores padrão em mm; as norte-americanas são convertidas exatamente de polegadas × 25,4."
                : "ISO 216 sizes are the standard millimeter values; US sizes are converted exactly from inches × 25.4."}
      </p>
    </ToolPanel>
  );
}

const SERIES_LABEL: Record<string, string> = {
  en: "A series (ISO 216)",
  zh: "A 系列(ISO 216)",
  ja: "A 判(ISO 216)",
  es: "Serie A (ISO 216)",
  pt: "Série A (ISO 216)",
  fr: "Série A (ISO 216)",
  de: "A-Reihe (ISO 216)",
  ru: "Серия A (ISO 216)",
  it: "Serie A (ISO 216)",
  tr: "A serisi (ISO 216)",
  ko: "A 시리즈(ISO 216)",
  ar: "سلسلة A (ISO 216)",
  hi: "A श्रृंखला (ISO 216)",
  id: "Seri A (ISO 216)",
  vi: "Khổ A (ISO 216)",
};

const SERIES_A = ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"];
const SERIES_B = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"];
const SERIES_US = ["letter", "legal", "tabloid"];

const SERIES_NAMES: Record<PaperSeries, Record<string, string>> = {
  A: SERIES_LABEL,
  B: {
    en: "B series (ISO 216)", zh: "B 系列(ISO 216)", ja: "B 判(ISO 216)",
    es: "Serie B (ISO 216)", pt: "Série B (ISO 216)", fr: "Série B (ISO 216)",
    de: "B-Reihe (ISO 216)", ru: "Серия B (ISO 216)", it: "Serie B (ISO 216)",
    tr: "B serisi (ISO 216)", ko: "B 시리즈(ISO 216)", ar: "سلسلة B (ISO 216)",
    hi: "B श्रृंखला (ISO 216)", id: "Seri B (ISO 216)", vi: "Khổ B (ISO 216)",
  },
  US: {
    en: "US sizes", zh: "美式尺寸", ja: "アメリカ判",
    es: "Tamaños de EE. UU.", pt: "Tamanhos dos EUA", fr: "Formats US",
    de: "US-Formate", ru: "Размеры США", it: "Formati USA",
    tr: "ABD boyutları", ko: "미국 규격", ar: "المقاسات الأمريكية",
    hi: "अमेरिकी आकार", id: "Ukuran AS", vi: "Khổ Mỹ",
  },
};

function seriesName(series: PaperSeries, locale: string): string {
  const names = SERIES_NAMES[series];
  return names[locale] ?? names.en;
}
