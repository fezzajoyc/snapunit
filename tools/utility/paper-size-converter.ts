import { unitTool } from "../_lib/unit-tool";
import { PaperSizeConverter } from "../_engines/paper-engine";

export default unitTool({
  slug: "paper-size-converter",
  icon: "layers",
  related: ["length-converter", "weight-converter", "temperature-converter", "fuel-economy-converter", "angle-converter"],
  engine: { component: PaperSizeConverter, props: {} },
  steps: {
    en: [
      "Pick the paper size you want from the dropdown.",
      "Read its exact width, height and area in mm, cm and inches — the preview shows the proportions at true aspect ratio.",
      "Scan the full table below: all 25 sizes are listed side by side, with your selection highlighted.",
    ],
    zh: [
      "在下拉框里选择纸张尺寸。",
      "直接读出宽、高和面积的毫米、厘米、英寸三套精确值——预览图按真实长宽比显示比例。",
      "下方表格一次性列出全部 25 种尺寸,当前选中行高亮显示。",
    ],
    ja: [
      "ドロップダウンで紙のサイズを選びます。",
      "幅・高さ・面積を mm・cm・インチの 3 種類の正確な値で読み取れます。プレビューは実際の縦横比で表示されます。",
      "下の表には全 25 サイズが並び、選択中の行がハイライトされます。",
    ],
    es: [
      "Elige el tamaño de papel en el desplegable.",
      "Lee su ancho, alto y área exactos en mm, cm y pulgadas; la vista previa respeta la proporción real.",
      "La tabla inferior muestra los 25 tamaños a la vez, con el seleccionado resaltado.",
    ],
    pt: [
      "Escolha o tamanho de papel no menu suspenso.",
      "Leia a largura, a altura e a área exatas em mm, cm e polegadas — a prévia mantém a proporção real.",
      "A tabela abaixo lista os 25 tamanhos de uma vez, com o selecionado em destaque.",
    ],
  },
  copy: {
    en: {
      name: "Paper Size Converter",
      tagline:
        "A4, A3, Letter, Legal and every ISO 216 paper size — exact mm, cm and inch dimensions at a glance.",
      intro: [
        "Pick any paper size — the whole A series from A0 to A10, the B series, or US Letter, Legal and Tabloid — and get its exact width and height in millimeters, centimeters and inches, plus the area.",
        "The table lists all 25 sizes side by side, so you can check A-series halving (A3 is exactly two A4 sheets), compare US Letter against A4, or pick the right envelope.",
      ],
      faq: [
        {
          q: "Why is A4 exactly 210 × 297 mm?",
          a: "ISO 216 fixes two rules: sides in the ratio 1:√2, so a sheet folded in half keeps its shape, and A0 with an area of exactly one square meter. Halving A0 (841 × 1189 mm) again and again lands on 210 × 297 mm at A4. The standard descends from Germany's DIN 476 of 1922 and became ISO 216 in 1975 — used almost everywhere except North America.",
        },
        {
          q: "Is US Letter bigger than A4?",
          a: "By a hair: Letter is 216 × 279 mm, so it is 6 mm wider but 18 mm shorter than A4 (210 × 297 mm). That mismatch is why a Letter-printed page leaves white strips on A4 paper and vice versa — always match the printer's paper setting to the sheet.",
        },
      ],
    },
    zh: {
      name: "纸张尺寸换算",
      tagline: "A4、A3、Letter、Legal 与全部 ISO 216 纸张尺寸——毫米、厘米、英寸精确尺寸一目了然。",
      intro: [
        "选择任意纸张尺寸——A0 到 A10 的整个 A 系列、B 系列,或美制 Letter、Legal、Tabloid——立即得到宽和高的毫米、厘米、英寸精确值以及面积。",
        "表格把 25 种尺寸并排列出,可以核对 A 系列的对折关系(A3 恰好是两张 A4)、对比美制 Letter 与 A4,或者挑对信封。",
      ],
      faq: [
        {
          q: "A4 为什么正好是 210 × 297 毫米?",
          a: "ISO 216 定了两条规则:长宽比为 1:√2(对折后形状不变),以及 A0 的面积恰为 1 平方米。把 A0(841 × 1189 mm)反复对折,到 A4 正好是 210 × 297 mm。该标准源自 1922 年德国 DIN 476,1975 年成为 ISO 216,除北美外几乎全球通用。",
        },
        {
          q: "美制 Letter 比 A4 大吗?",
          a: "只差一点:Letter 是 216 × 279 mm,比 A4(210 × 297 mm)宽 6 毫米、短 18 毫米。正因如此,按 Letter 打印的纸放在 A4 上会露白边,反之亦然——打印时纸张设置要与实际纸型一致。",
        },
      ],
    },
    ja: {
      name: "紙のサイズ変換",
      tagline: "A4・A3・レター・リーガルなど全 ISO 216 サイズの正確な mm・cm・インチ寸法を一覧。",
      intro: [
        "A0 から A10 までの A 判シリーズ、B 判シリーズ、そして米国のレター・リーガル・タブロイドから好きなサイズを選ぶと、幅と高さを mm・cm・インチで、面積も正確に表示します。",
        "表には全 25 サイズが並ぶので、A 判の半分ルール(A3 は A4 2 枚分)の確認、米レターと A4 の比較、封筒選びにそのまま使えます。",
      ],
      faq: [
        {
          q: "A4 はなぜ 210 × 297 mm なの?",
          a: "ISO 216 は 2 つのルールで定義されます:辺の比を 1:√2 にする(半分に折っても形が変わらない)、そして A0 の面積を正確に 1 平方メートルにする。A0(841 × 1189 mm)を半分にし続けると A4 でちょうど 210 × 297 mm になります。起源は 1922 年のドイツ DIN 476 で、1975 年に ISO 216 となり、北米以外のほぼ全世界で使われています。",
        },
        {
          q: "米レターは A4 より大きい?",
          a: "わずかです:レターは 216 × 279 mm で、A4(210 × 297 mm)より 6 mm 幅広く、18 mm 短い。この違いのせいで、レターで印刷した紙を A4 に載せると白い余白が出ます(逆も同様)。印刷時は用紙設定を実際の紙に合わせてください。",
        },
      ],
    },
    es: {
      name: "Conversor de tamaños de papel",
      tagline:
        "A4, A3, Carta, Legal y todos los tamaños ISO 216 — medidas exactas en mm, cm y pulgadas de un vistazo.",
      intro: [
        "Elige cualquier tamaño de papel — la serie A completa de A0 a A10, la serie B, o las estadounidenses Carta, Legal y Tabloide — y obtén su ancho y alto exactos en milímetros, centímetros y pulgadas, además del área.",
        "La tabla muestra los 25 tamaños lado a lado: para comprobar el plegado de la serie A (A3 son exactamente dos A4), comparar la Carta estadounidense con A4 o elegir el sobre correcto.",
      ],
      faq: [
        {
          q: "¿Por qué A4 mide exactamente 210 × 297 mm?",
          a: "ISO 216 fija dos reglas: lados en proporción 1:√2, para que una hoja doblada por la mitad conserve su forma, y A0 con un área de exactamente un metro cuadrado. Plegando A0 (841 × 1189 mm) una y otra vez se llega a 210 × 297 mm en A4. La norma desciende del DIN 476 alemán de 1922 y se convirtió en ISO 216 en 1975: se usa en todo el mundo salvo Norteamérica.",
        },
        {
          q: "¿La Carta estadounidense es más grande que A4?",
          a: "Por poco: la Carta mide 216 × 279 mm, así que es 6 mm más ancha pero 18 mm más corta que A4 (210 × 297 mm). Por eso una página impresa en Carta deja franjas blancas sobre papel A4 y al revés: ajusta siempre la configuración de papel de la impresora a la hoja real.",
        },
      ],
    },
    pt: {
      name: "Conversor de tamanhos de papel",
      tagline:
        "A4, A3, Carta, Legal e todos os tamanhos ISO 216 — medidas exatas em mm, cm e polegadas de relance.",
      intro: [
        "Escolha qualquer tamanho de papel — a série A inteira de A0 a A10, a série B, ou as norte-americanas Carta, Legal e Tabloide — e receba a largura e a altura exatas em milímetros, centímetros e polegadas, além da área.",
        "A tabela lista os 25 tamanhos lado a lado: para conferir a divisão da série A (A3 são exatamente duas folhas A4), comparar a Carta americana com o A4 ou escolher o envelope certo.",
      ],
      faq: [
        {
          q: "Por que o A4 tem exatamente 210 × 297 mm?",
          a: "A ISO 216 fixa duas regras: lados na proporção 1:√2, para que uma folha dobrada ao meio mantenha a forma, e A0 com área de exatamente um metro quadrado. Dobrando A0 (841 × 1189 mm) repetidamente chega-se a 210 × 297 mm no A4. A norma vem do DIN 476 alemão de 1922 e virou ISO 216 em 1975 — usada em quase todo o mundo, exceto na América do Norte.",
        },
        {
          q: "A Carta americana é maior que o A4?",
          a: "Por pouco: a Carta mede 216 × 279 mm, então é 6 mm mais larga e 18 mm mais curta que o A4 (210 × 297 mm). Por isso uma página impressa em Carta deixa faixas brancas no papel A4, e vice-versa — sempre ajuste a configuração de papel da impressora à folha real.",
        },
      ],
    },
  },
});
