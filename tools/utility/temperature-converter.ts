import { unitTool } from "../_lib/unit-tool";

export default unitTool({
  slug: "temperature-converter",
  icon: "thermo",
  cat: "temperature",
  featured: true,
  related: ["length-converter", "weight-converter", "fuel-economy-converter", "angle-converter"],
  copy: {
    en: {
      name: "Temperature Converter",
      tagline:
        "Convert Celsius, Fahrenheit, Kelvin, Rankine and Réaumur instantly — exact formulas, right in your browser.",
      intro: [
        "Temperature scales don't convert with a simple factor — they have different zero points, so each pair needs its own formula. This converter applies them all at once: type a value and see Celsius, Fahrenheit, Kelvin, Rankine and Réaumur together.",
        "Reference points for sanity checks: water freezes at 0 °C = 32 °F = 273.15 K and boils at 100 °C = 212 °F; −40 is the point where Celsius and Fahrenheit agree; absolute zero is 0 K = −273.15 °C = −459.67 °F.",
      ],
      faq: [
        {
          q: "What are Rankine and Réaumur?",
          a: "Rankine (°R) is the Fahrenheit-world's absolute scale: like Kelvin, 0 is absolute zero, but each degree Rankine is 9/5 of a kelvin, so 0 °C = 491.67 °R — still used in some US thermodynamic engineering. Réaumur (°Ré) is a historical scale where water freezes at 0 and boils at 80, so 1 °Ré = 1.25 °C.",
        },
        {
          q: "Why is −40 the same in Celsius and Fahrenheit?",
          a: "The two scales rise at different rates (9 °F per 5 °C) and cross exactly once. Solving F = 9/5·C + 32 with F = C gives C = −40, so −40 °C = −40 °F — a favorite sanity check for weather reports and thermostat settings.",
        },
      ],
    },
    zh: {
      name: "温度换算",
      tagline: "摄氏、华氏、开尔文、兰氏、列氏五种温标即时互转,公式精确,浏览器本地运行。",
      intro: [
        "温标之间不能用固定倍率换算——零点不同,每一对都要用各自的公式。这个换算器把公式一次算全:输入一个数值,摄氏、华氏、开尔文、兰氏、列氏同时显示。",
        "随手可查的参照点:水结冰是 0 °C = 32 °F = 273.15 K,沸腾是 100 °C = 212 °F;摄氏与华氏恰好在 −40 度相等;绝对零度是 0 K = −273.15 °C = −459.67 °F。",
      ],
      faq: [
        {
          q: "兰氏度和列氏度是什么?",
          a: "兰氏度(°R)是华氏世界的绝对温标:和开尔文一样 0 度是绝对零度,但 1 °R = 9/5 K,所以 0 °C = 491.67 °R,美国部分热力学工程还在用。列氏度(°Ré)是历史上的温标,水结冰为 0、沸腾为 80,因此 1 °Ré = 1.25 °C。",
        },
        {
          q: "为什么 −40 摄氏度和华氏度相等?",
          a: "两种温标增速不同(每 5 °C 对应 9 °F),只会相交一次。把 F = C 代入 F = 9/5·C + 32,解得 C = −40,所以 −40 °C = −40 °F——这是核对天气预报和空调温度的经典检验点。",
        },
      ],
    },
    ja: {
      name: "温度換算",
      tagline: "摂氏・華氏・ケルビン・ランキン・レオミュール 5 温標を正確な式で即時換算。",
      intro: [
        "温度の目盛りは固定の倍率では変換できません。ゼロ点が異なるため、組み合わせごとに式が変わります。このツールは式を一括適用:数値を入れると摂氏・華氏・ケルビン・ランキン・レオミュールが一度に表示されます。",
        "確認用の基準点:水の凝固点は 0 °C = 32 °F = 273.15 K、沸点は 100 °C = 212 °F。摂氏と華氏が一致するのは −40 度、絶対零度は 0 K = −273.15 °C = −459.67 °F です。",
      ],
      faq: [
        {
          q: "ランキン度とレオミュール度とは?",
          a: "ランキン度(°R)は華氏圏の絶対温標です。ケルビン同様に 0 が絶対零度ですが、1 °R = 9/5 K なので 0 °C = 491.67 °R。米国の熱力学分野で今も使われます。レオミュール度(°Ré)は歴史的な温標で、水の凝固点を 0、沸点を 80 とし、1 °Ré = 1.25 °C です。",
        },
        {
          q: "なぜ −40 は摂氏と華氏で同じ?",
          a: "2 つの温標は伸び率が違う(5 °C につき 9 °F)ため、交点は 1 つだけ。F = 9/5·C + 32 で F = C とすると C = −40 となり、−40 °C = −40 °F です。天気予報やエアコン設定の確認によく使われます。",
        },
      ],
    },
    es: {
      name: "Conversor de temperatura",
      tagline:
        "Convierte Celsius, Fahrenheit, Kelvin, Rankine y Réaumur al instante — fórmulas exactas, en tu navegador.",
      intro: [
        "Las escalas de temperatura no se convierten con un factor simple: tienen ceros distintos, y cada par necesita su fórmula. Este conversor las aplica todas a la vez: escribe un valor y verá Celsius, Fahrenheit, Kelvin, Rankine y Réaumur juntos.",
        "Puntos de referencia: el agua se congela a 0 °C = 32 °F = 273,15 K y hierve a 100 °C = 212 °F; −40 es donde Celsius y Fahrenheit coinciden; el cero absoluto es 0 K = −273,15 °C = −459,67 °F.",
      ],
      faq: [
        {
          q: "¿Qué son Rankine y Réaumur?",
          a: "Rankine (°R) es la escala absoluta del mundo Fahrenheit: como Kelvin, su 0 es el cero absoluto, pero cada grado Rankine son 9/5 de kelvin, así que 0 °C = 491,67 °R; todavía se usa en ingeniería termodinámica en EE. UU. Réaumur (°Ré) es una escala histórica donde el agua se congela a 0 y hierve a 80, de modo que 1 °Ré = 1,25 °C.",
        },
        {
          q: "¿Por qué −40 coincide en Celsius y Fahrenheit?",
          a: "Las dos escalas suben a ritmos distintos (9 °F por cada 5 °C) y se cruzan una sola vez. Resolviendo F = 9/5·C + 32 con F = C se obtiene C = −40, así que −40 °C = −40 °F: una comprobación clásica para el parte meteorológico y el termostato.",
        },
      ],
    },
    pt: {
      name: "Conversor de temperatura",
      tagline:
        "Converta Celsius, Fahrenheit, Kelvin, Rankine e Réaumur na hora — fórmulas exatas, no navegador.",
      intro: [
        "Escalas de temperatura não se convertem por um fator simples: os zeros são diferentes e cada par precisa da própria fórmula. Este conversor aplica todas de uma vez: digite um valor e veja Celsius, Fahrenheit, Kelvin, Rankine e Réaumur juntos.",
        "Pontos de referência: a água congela a 0 °C = 32 °F = 273,15 K e ferve a 100 °C = 212 °F; −40 é onde Celsius e Fahrenheit se encontram; o zero absoluto é 0 K = −273,15 °C = −459,67 °F.",
      ],
      faq: [
        {
          q: "O que são Rankine e Réaumur?",
          a: "Rankine (°R) é a escala absoluta do mundo Fahrenheit: como o Kelvin, o 0 é o zero absoluto, mas cada grau Rankine vale 9/5 de kelvin, então 0 °C = 491,67 °R — ainda usada em engenharia termodinâmica nos EUA. Réaumur (°Ré) é uma escala histórica em que a água congela a 0 e ferve a 80, logo 1 °Ré = 1,25 °C.",
        },
        {
          q: "Por que −40 é igual em Celsius e Fahrenheit?",
          a: "As duas escalas sobem em ritmos diferentes (9 °F por 5 °C) e se cruzam uma única vez. Resolvendo F = 9/5·C + 32 com F = C, obtém-se C = −40, então −40 °C = −40 °F — uma verificação clássica para previsões do tempo e termostatos.",
        },
      ],
    },
  },
});
