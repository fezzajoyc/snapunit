import { unitTool } from "../_lib/unit-tool";

export default unitTool({
  slug: "fuel-economy-converter",
  icon: "droplet",
  cat: "fuel",
  featured: true,
  related: ["length-converter", "weight-converter", "temperature-converter", "paper-size-converter", "angle-converter"],
  copy: {
    en: {
      name: "Fuel Economy Converter",
      tagline:
        "Convert L/100km to MPG (US and UK), km/L and back — the inverse relationship handled correctly.",
      intro: [
        "L/100km and MPG measure fuel economy in opposite directions: liters per 100 km falls as a car gets more efficient, while miles per gallon rises. No single multiplication factor can connect them — this converter inverts properly.",
        "Enter a value in any unit — L/100km, km/L, MPG (US) or MPG (UK) — and see all four at once. The US and UK gallon never get blurred: US gallon = 3.785 L, imperial gallon = 4.546 L.",
      ],
      faq: [
        {
          q: "Why can't I convert L/100km to MPG with one factor?",
          a: "Because the two are reciprocals, not multiples. MPG (US) = 100 × 3.785411784 ÷ (1.609344 × L/100km) ≈ 235.215 ÷ (L/100km). So 10 L/100km is 23.52 MPG (US) and 5 L/100km is 47.04 — halving the consumption doubles the MPG, a relationship no fixed factor can express.",
        },
        {
          q: "US or UK MPG — which one am I looking at?",
          a: "Both are miles per gallon, but the gallons differ: a US gallon is 3.785 L, an imperial (UK) gallon is 4.546 L. The same car reads 235.215 ÷ (L/100km) in US mpg but 282.481 ÷ (L/100km) in UK mpg — UK figures look about 20% higher for identical fuel use. US car ads use US mpg; British and Commonwealth sources usually use UK mpg.",
        },
      ],
    },
    zh: {
      name: "油耗换算",
      tagline: "L/100km 与 MPG(美制/英制)、km/L 双向换算——倒数关系正确处理,浏览器本地运行。",
      intro: [
        "L/100km 和 MPG 度量油耗的方向相反:车越省油,L/100km 越小,MPG 却越大。两者之间不存在固定倍率——这个换算器按倒数关系正确换算。",
        "输入任意单位的数值——L/100km、km/L、MPG(美制)或 MPG(英制)——四种单位同时显示。美制与英制加仑严格区分:1 美制加仑 = 3.785 升,1 英制加仑 = 4.546 升。",
      ],
      faq: [
        {
          q: "为什么 L/100km 换 MPG 不能用一个固定系数?",
          a: "因为两者是倒数关系,不是倍数关系。MPG(美制)= 100 × 3.785411784 ÷ (1.609344 × L/100km) ≈ 235.215 ÷ (L/100km)。所以 10 L/100km 是 23.52 MPG(美制),5 L/100km 是 47.04——油耗减半,MPG 翻倍,任何固定系数都表达不了这种关系。",
        },
        {
          q: "美制 MPG 和英制 MPG 有什么区别?",
          a: "两者都是“每加仑英里数”,但加仑不同:美制加仑 3.785 升,英制加仑 4.546 升。同一辆车按美制算是 235.215 ÷ (L/100km),按英制算是 282.481 ÷ (L/100km)——油耗相同时英制数字看着高约 20%。美国车商广告用美制 MPG,英国及英联邦媒体通常用英制 MPG。",
        },
      ],
    },
    ja: {
      name: "燃費換算",
      tagline: "L/100km と MPG(米・英)、km/L を正しい逆数処理で双方向に即時換算。",
      intro: [
        "L/100km と MPG は燃費を逆向きに測ります:車が効率化するほど L/100km は減り、MPG は増える。固定の倍率では変換できず、逆数処理が必要です。このツールはそれを正しく行います。",
        "L/100km・km/L・MPG(米)・MPG(英)のどれか 1 つを入れると、4 単位が一度に表示されます。米ガロン(3.785 L)と英ガロン(4.546 L)は常に明確に区別されます。",
      ],
      faq: [
        {
          q: "L/100km から MPG へ、なぜ固定係数で変換できないの?",
          a: "2 つは倍数ではなく互いの逆数だからです。MPG(米)= 100 × 3.785411784 ÷ (1.609344 × L/100km) ≈ 235.215 ÷ (L/100km)。つまり 10 L/100km は 23.52 MPG(米)、5 L/100km は 47.04。燃費が半分になると MPG が倍になる関係は固定係数では表せません。",
        },
        {
          q: "米 MPG と英 MPG の違いは?",
          a: "どちらもマイル毎ガロンですが、ガロンの定義が違います:米ガロンは 3.785 L、英ガロンは 4.546 L。同じ車でも米 MPG は 235.215 ÷ (L/100km)、英 MPG は 282.481 ÷ (L/100km) となり、実燃費が同じでも英の方が約 20% 大きく見えます。米国の広告は米 MPG、英国や英連邦の媒体は英 MPG が一般的です。",
        },
      ],
    },
    es: {
      name: "Conversor de consumo",
      tagline:
        "Convierte L/100km a MPG (EE. UU. y R. U.), km/L y viceversa — la relación inversa, bien resuelta.",
      intro: [
        "L/100km y MPG miden el consumo en direcciones opuestas: los litros por 100 km bajan cuando el coche es más eficiente, y las millas por galón suben. Ningún factor fijo los conecta: este conversor invierte correctamente.",
        "Introduce un valor en cualquier unidad — L/100km, km/L, MPG (EE. UU.) o MPG (R. U.) — y verá las cuatro a la vez. El galón estadounidense (3,785 L) y el imperial (4,546 L) nunca se mezclan.",
      ],
      faq: [
        {
          q: "¿Por qué no sirve un factor fijo para pasar de L/100km a MPG?",
          a: "Porque son recíprocos, no múltiplos. MPG (EE. UU.) = 100 × 3,785411784 ÷ (1,609344 × L/100km) ≈ 235,215 ÷ (L/100km). Así, 10 L/100km son 23,52 MPG (EE. UU.) y 5 L/100km son 47,04: si el consumo se reduce a la mitad, el MPG se duplica, algo que ningún factor fijo puede expresar.",
        },
        {
          q: "¿MPG de EE. UU. o del R. U.?",
          a: "Ambos son millas por galón, pero el galón cambia: el estadounidense es de 3,785 L y el imperial, de 4,546 L. El mismo coche marca 235,215 ÷ (L/100km) en mpg estadounidense y 282,481 ÷ (L/100km) en mpg británico: con el mismo consumo real, la cifra británica parece un 20 % mayor. La publicidad de EE. UU. usa mpg estadounidense; la británica y la del Commonwealth, mpg imperial.",
        },
      ],
    },
    pt: {
      name: "Conversor de consumo",
      tagline:
        "Converta L/100km para MPG (EUA e Reino Unido), km/L e vice-versa — a relação inversa, resolvida direito.",
      intro: [
        "L/100km e MPG medem o consumo em direções opostas: os litros por 100 km caem quando o carro é mais eficiente, e as milhas por galão sobem. Nenhum fator fixo conecta os dois — este conversor inverte corretamente.",
        "Digite um valor em qualquer unidade — L/100km, km/L, MPG (EUA) ou MPG (Reino Unido) — e veja as quatro de uma vez. O galão americano (3,785 L) e o imperial (4,546 L) nunca se confundem.",
      ],
      faq: [
        {
          q: "Por que não dá para converter L/100km em MPG com um fator fixo?",
          a: "Porque os dois são recíprocos, não múltiplos. MPG (EUA) = 100 × 3,785411784 ÷ (1,609344 × L/100km) ≈ 235,215 ÷ (L/100km). Assim, 10 L/100km são 23,52 MPG (EUA) e 5 L/100km são 47,04 — se o consumo cai pela metade, o MPG dobra, algo que nenhum fator fixo expressa.",
        },
        {
          q: "MPG dos EUA ou do Reino Unido?",
          a: "Os dois são milhas por galão, mas o galão muda: o americano tem 3,785 L e o imperial, 4,546 L. O mesmo carro marca 235,215 ÷ (L/100km) em mpg americano e 282,481 ÷ (L/100km) em mpg britânico — com o consumo real idêntico, o número britânico parece 20% maior. Anúncios nos EUA usam mpg americano; fontes britânicas e do Commonwealth usam o imperial.",
        },
      ],
    },
  },
});
