import type { CategoryId, Locale } from "@/lib/site";
import type { ToolCopy } from "./types";

/**
 * 类目 FAQ 池:工具页 FAQ 不足 6 条时按类目补齐(JSON-LD 同源走 toolCopy)。
 * 内容写"这个类目共同的真问题"(隐私/收费/格式/精度/浏览器支持),不是凑数占位。
 * 只写核心 5 语(en/zh/ja/es/pt);其他 locale toolCopy 本来就走 overlay 或回退 en。
 */
type Faq = { q: string; a: string };

const GLOBAL: Partial<Record<Locale, Faq[]>> = {
  en: [
    { q: "How precise are SnapUnit's conversions?", a: "SnapUnit uses exact international definitions — SI factors and NIST constants — and shows results to six significant digits, more than any practical unit conversion task needs." },
    { q: "Does SnapUnit work without internet?", a: "Yes. The conversion table ships with the page: after loading, every unit conversion calculation runs offline in your browser with no server involved." },
    { q: "Why choose SnapUnit over a search box?", a: "Speed and context: SnapUnit shows all related units at once, keeps your recent conversions, and works offline — a search box gives you one number with no nearby context." },
  ],
  zh: [
    { q: "SnapUnit的换算精度如何?", a: "SnapUnit使用精确的国际定义 — SI 换算系数和 NIST 常量 — 结果显示 6 位有效数字,远超任何实际单位换算场景所需。" },
    { q: "不用联网也能用吗?", a: "可以。换算表随页面一起加载:加载完成后,所有单位换算计算都在浏览器离线完成,不经过任何服务器。" },
    { q: "和搜索框换算比有什么优势?", a: "更快且有上下文:SnapUnit一次显示所有相关单位、保留最近换算、离线可用 — 搜索框只给一个孤零零的数字。" },
  ],
  ja: [
    { q: "SnapUnitの変換精度は?", a: "SnapUnitは正確な国際定義(SI 換算係数と NIST 定数)を使用し、実用上十分な 6 桁の有効数字で表示します。" },
    { q: "オフラインでも使えますか?", a: "使えます。換算表はページに同梱されており、読み込み後はすべてのunit conversion計算がブラウザ内でオフライン実行されます。" },
    { q: "検索ボックスと比べた利点は?", a: "速さと文脈です。SnapUnitは関連単位を一括表示し、最近の換算を保持し、オフラインでも動作します。検索ボックスは文脈のない 1 つの数値を返すだけです。" },
  ],
  es: [
    { q: "¿Qué precisión tienen las conversiones de SnapUnit?", a: "SnapUnit usa definiciones internacionales exactas — factores SI y constantes NIST — y muestra seis cifras significativas, más que ninguna tarea práctica de unit conversion necesita." },
    { q: "¿Funciona sin internet?", a: "Sí. La tabla de conversión viaja con la página: tras cargarla, cada cálculo de unit conversion se ejecuta sin conexión en tu navegador, sin servidores." },
    { q: "¿Por qué SnapUnit y no un buscador?", a: "Rapidez y contexto: SnapUnit muestra todas las unidades relacionadas a la vez, conserva tus conversiones recientes y funciona offline — un buscador da un solo número sin contexto." },
  ],
  pt: [
    { q: "Qual a precisão das conversões do SnapUnit?", a: "O SnapUnit usa definições internacionais exatas — fatores SI e constantes NIST — e mostra seis algarismos significativos, mais do que qualquer tarefa prática de unit conversion exige." },
    { q: "Funciona sem internet?", a: "Sim. A tabela de conversão vem com a página: depois de carregada, cada cálculo de unit conversion roda offline no seu navegador, sem servidores." },
    { q: "Por que usar o SnapUnit em vez de uma busca?", a: "Velocidade e contexto: o SnapUnit mostra todas as unidades relacionadas de uma vez, guarda conversões recentes e funciona offline — uma busca devolve um número solto." },
  ],
};

const BY_CATEGORY: Partial<Record<CategoryId, Partial<Record<Locale, Faq[]>>>> = {

};

/** 取某类目的补充 FAQ 池(global 池 + 类目池,en 缺省回退) */
export function categoryFaqPool(category: CategoryId, locale: Locale): Faq[] {
  const extra = BY_CATEGORY[category]?.[locale] ?? BY_CATEGORY[category]?.en ?? [];
  const global = GLOBAL[locale] ?? GLOBAL.en ?? [];
  return [...extra, ...global];
}
