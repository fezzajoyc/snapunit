"use client";

import { useMemo, useState } from "react";
import { Icon } from "./icons";
import { LENGTH, convertValue, formatNumber, type UnitCategory } from "@/tools/_lib/units";

const WIDGET_UNITS = ["m", "ft", "cm", "in", "km", "mi"];

/**
 * 首页 hero 里的实时迷你换算器(默认 m ↔ ft):随输入即时更新,
 * 链接到完整换算页。同一份 units.ts 纯逻辑,首页与工具页结果一致。
 */
export function MiniConverter() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("m");
  const [to, setTo] = useState("ft");

  const category: UnitCategory = LENGTH;
  const value = Number(amount.replace(",", "."));
  const result = useMemo(
    () => (Number.isFinite(value) ? convertValue(category, value, from, to) : NaN),
    [category, value, from, to],
  );
  const fromUnit = category.units.find((x) => x.id === from)!;
  const toUnit = category.units.find((x) => x.id === to)!;

  const select = (v: string, set: (s: string) => void, label: string) => (
    <select
      className="field w-auto flex-none rounded-lg px-2 py-1.5 text-[13px]"
      value={v}
      onChange={(e) => set(e.target.value)}
      aria-label={label}
    >
      {WIDGET_UNITS.map((id) => {
        const unit = category.units.find((x) => x.id === id)!;
        return (
          <option key={id} value={id}>
            {unit.symbol}
          </option>
        );
      })}
    </select>
  );

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border hairline bg-[var(--color-card)] p-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-2">
        <input
          type="number"
          className="field bare mono min-w-0 flex-1 text-lg"
          value={amount}
          inputMode="decimal"
          onChange={(e) => setAmount(e.target.value)}
          aria-label="Amount"
        />
        {select(from, setFrom, "From unit")}
        <button
          type="button"
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
          className="inline-flex flex-none rounded-full border hairline p-2 text-[var(--color-sub)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
          aria-label="Swap units"
          title="Swap"
        >
          <Icon name="swap" size={16} />
        </button>
        {select(to, setTo, "To unit")}
      </div>
      <p className="mono mt-3 truncate text-[15px] text-[var(--color-sub)]" aria-live="polite">
        = <strong className="font-semibold text-[var(--color-ink)]">{formatNumber(result)}</strong>{" "}
        {toUnit.symbol}
      </p>
    </div>
  );
}
