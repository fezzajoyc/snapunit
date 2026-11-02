import type { Locale } from "@/lib/site";
import { TOOL_BY_SLUG } from "@/tools/registry";
import { toolCopy } from "@/lib/tool-copy";

/** nav 展示的 5 个换算入口(slug),文案取自各工具的本地化名称 */
const NAV_SLUGS = [
  "length-converter",
  "weight-converter",
  "temperature-converter",
  "fuel-economy-converter",
  "paper-size-converter",
];

export function navLinks(locale: Locale): { href: string; label: string }[] {
  return NAV_SLUGS.map((slug) => {
    const tool = TOOL_BY_SLUG.get(slug)!;
    return { href: `/${locale}/tools/${slug}`, label: toolCopy(tool, locale).name };
  });
}
