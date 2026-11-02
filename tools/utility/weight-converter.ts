import { unitTool } from "../_lib/unit-tool";

export default unitTool({
  slug: "weight-converter",
  icon: "weight",
  cat: "weight",
  featured: true,
  related: ["length-converter", "temperature-converter", "fuel-economy-converter", "paper-size-converter"],
  copy: {
    en: {
      name: "Weight Converter",
      tagline:
        "Convert weight and mass instantly: kilograms, pounds, ounces, stones, carats and troy ounces — right in your browser.",
      intro: [
        "Convert between metric and imperial mass units in one step. Enter a value and see kilograms, pounds, ounces, stone, carats and troy ounces at once.",
        "Handy for cooking, shipping, fitness tracking and school work — and for precious metals: the troy ounce that gold and silver are priced in sits right next to the everyday ounce, so the two never get mixed up.",
      ],
      faq: [
        {
          q: "What is a troy ounce?",
          a: "The troy ounce (oz t) is the unit precious metals are traded in: exactly 31.1034768 grams, about 10% heavier than a regular avoirdupois ounce (28.349523125 g). One kilogram is about 32.15 troy ounces, and gold prices quoted per ounce always mean troy ounces.",
        },
        {
          q: "How many pounds in a stone?",
          a: "One stone is exactly 14 pounds — 6.35029318 kilograms. The stone is still the everyday body-weight unit in the UK and Ireland; 70 kg is about 11 st, and the converter above shows both at once.",
        },
      ],
    },
    zh: {
      name: "重量换算",
      tagline: "千克、磅、盎司、英石、克拉、金衡盎司等重量单位即时互转,浏览器本地运行。",
      intro: [
        "公制与英制质量单位一步到位互转。输入任意数值,千克、磅、盎司、英石、克拉、金衡盎司同时显示。",
        "适合烹饪配料、快递称重、健身记录和作业验算,也适合贵金属:金银报价用的金衡盎司就排在日常盎司旁边,两者不会弄混。",
      ],
      faq: [
        {
          q: "金衡盎司是什么?",
          a: "金衡盎司(oz t)是贵金属交易专用单位:精确等于 31.1034768 克,比日常用的常衡盎司(28.349523125 克)重约 10%。1 千克约合 32.15 金衡盎司,行情里“每盎司金价”指的都是金衡盎司。",
        },
        {
          q: "一英石等于多少磅?",
          a: "1 英石(st)精确等于 14 磅,即 6.35029318 千克。英石至今仍是英国和爱尔兰日常量体重的单位:70 千克约合 11 英石,上方换算器同时显示两者。",
        },
      ],
    },
    ja: {
      name: "重さ換算",
      tagline: "キログラム・ポンド・オンス・ストーン・カラット・トロイオンスをブラウザ内で即時換算。",
      intro: [
        "メートル法とヤード・ポンド法の質量単位をワンステップで変換。数値を入れると、キログラム・ポンド・オンス・ストーン・カラット・トロイオンスが一度に表示されます。",
        "料理、配送、フィットネス記録、勉強に加えて、貴金属にも:金や銀の価格に使われるトロイオンスが普通のオンスのすぐ隣に並ぶので、取り違えません。",
      ],
      faq: [
        {
          q: "トロイオンスとは?",
          a: "トロイオンス(oz t)は貴金属の取引単位で、正確に 31.1034768 グラム。常用オンス(28.349523125 g)より約 10% 重い。1 kg は約 32.15 トロイオンスで、「金価格 1 オンス」は必ずトロイオンスを指します。",
        },
        {
          q: "1 ストーンは何ポンド?",
          a: "1 ストーン(st)= 正確に 14 ポンド = 6.35029318 kg。英国やアイルランドでは今も体重の日常単位で、70 kg は約 11 ストーンです。上の換算器で両方が同時に出ます。",
        },
      ],
    },
    es: {
      name: "Conversor de peso",
      tagline:
        "Convierte kilogramos, libras, onzas, stones, quilates y onzas troy al instante, en tu navegador.",
      intro: [
        "Convierte entre unidades de masa métricas e imperiales en un paso. Introduce un valor y verá kilogramos, libras, onzas, stones, quilates y onzas troy al mismo tiempo.",
        "Útil para cocinar, enviar paquetes, registrar el fitness y las tareas, y también para los metales preciosos: la onza troy con la que se cotizan el oro y la plata aparece junto a la onza común, para no confundirlas.",
      ],
      faq: [
        {
          q: "¿Qué es una onza troy?",
          a: "La onza troy (oz t) es la unidad con la que se negocian los metales preciosos: exactamente 31,1034768 gramos, un 10 % más pesada que la onza avoirdupois común (28,349523125 g). Un kilogramo son unas 32,15 onzas troy, y el precio del oro por oncia siempre se refiere a onzas troy.",
        },
        {
          q: "¿Cuántas libras tiene un stone?",
          a: "Un stone son exactamente 14 libras: 6,35029318 kilogramos. El stone sigue siendo la unidad cotidiana del peso corporal en Reino Unido e Irlanda; 70 kg son unos 11 st. El conversor muestra ambos a la vez.",
        },
      ],
    },
    pt: {
      name: "Conversor de peso",
      tagline:
        "Converta quilogramas, libras, onças, stones, quilates e onças-troy na hora, direto no navegador.",
      intro: [
        "Converta entre unidades de massa métricas e imperiais em um passo. Digite um valor e veja quilogramas, libras, onças, stones, quilates e onças-troy de uma vez.",
        "Útil para culinária, envios, registro de treinos e deveres, e também para metais preciosos: a onça-troy, usada na cotação de ouro e prata, aparece ao lado da onça comum para não haver confusão.",
      ],
      faq: [
        {
          q: "O que é uma onça-troy?",
          a: "A onça-troy (oz t) é a unidade de negociação dos metais preciosos: exatamente 31,1034768 gramas, cerca de 10% mais pesada que a onça avoirdupois comum (28,349523125 g). Um quilograma tem cerca de 32,15 onças-troy, e o preço do ouro por onça sempre se refere a onças-troy.",
        },
        {
          q: "Quantas libras tem um stone?",
          a: "Um stone tem exatamente 14 libras — 6,35029318 quilogramas. O stone ainda é a unidade do dia a dia para peso corporal no Reino Unido e na Irlanda; 70 kg são cerca de 11 st. O conversor mostra os dois ao mesmo tempo.",
        },
      ],
    },
  },
});
