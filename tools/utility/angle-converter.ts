import { unitTool } from "../_lib/unit-tool";

export default unitTool({
  slug: "angle-converter",
  icon: "angle",
  cat: "angle",
  related: ["length-converter", "temperature-converter", "fuel-economy-converter", "paper-size-converter"],
  copy: {
    en: {
      name: "Angle Converter",
      tagline:
        "Convert degrees, radians, gradians, turns, arcminutes and arcseconds — exact, trig-ready angles in your browser.",
      intro: [
        "Angles come in six common units and mixing them up is a classic bug: 180 degrees is π radians is 200 gradians is half a turn. Type any angle and see it in all six units at once.",
        "Built for math homework, CAD drawings, game development and astronomy — where arcminutes and arcseconds (1° = 60′ = 3600″) do the fine work.",
      ],
      faq: [
        {
          q: "How many radians is 180 degrees?",
          a: "Exactly π radians (≈ 3.14159). A full circle is 2π radians = 360 degrees = 400 gradians = 1 turn. The radian is the SI derived unit for angle because it is arc length divided by radius — dimensionless by construction, which is why calculus and trigonometry are written in radians.",
        },
        {
          q: "What are arcminutes and arcseconds?",
          a: "Subdivisions of a degree used in astronomy, surveying and GPS: one arcminute (′) is 1/60 of a degree and one arcsecond (″) is 1/3600. The full Moon spans about 31 arcminutes in the sky; consumer GPS accuracy is typically quoted in arcseconds of latitude.",
        },
      ],
    },
    zh: {
      name: "角度换算",
      tagline: "度、弧度、梯度(冈)、圈、角分、角秒六种角度单位即时互转,浏览器本地运行。",
      intro: [
        "角度有六种常用单位,弄混是经典 bug:180 度 = π 弧度 = 200 梯度 = 半圈。输入任意角度,六种单位同时显示。",
        "适合数学作业、CAD 制图、游戏开发和天文观测——角分和角秒(1° = 60′ = 3600″)在这些领域负责精细活。",
      ],
      faq: [
        {
          q: "180 度是多少弧度?",
          a: "精确等于 π 弧度(≈ 3.14159)。整圆是 2π 弧度 = 360 度 = 400 梯度 = 1 圈。弧度是 SI 导出单位,因为它是弧长除以半径——构造上无量纲,微积分和三角学因此都用弧度书写。",
        },
        {
          q: "角分和角秒是什么?",
          a: "度的细分单位,用于天文、测绘和 GPS:一角分(′)是 1/60 度,一角秒(″)是 1/3600 度。满月在天空中约跨 31 角分;消费级 GPS 的精度通常也用角秒来描述纬度误差。",
        },
      ],
    },
    ja: {
      name: "角度換算",
      tagline: "度・ラジアン・グラード・回転・角分・角秒の 6 単位をブラウザ内で即時換算。",
      intro: [
        "角度の単位はよく使われるだけで 6 種類あり、混同は定番のバグです:180 度 = π ラジアン = 200 グラード = 半回転。数値を入れると 6 単位が一度に表示されます。",
        "数学の宿題、CAD 図面、ゲーム開発、天文観測に。角分・角秒(1° = 60′ = 3600″)が細かい作業を担う分野でもそのまま使えます。",
      ],
      faq: [
        {
          q: "180 度は何ラジアン?",
          a: "正確に π ラジアン(≈ 3.14159)です。1 周は 2π ラジアン = 360 度 = 400 グラード = 1 回転。ラジアンは「弧の長さ ÷ 半径」という構造上、無次元量で、SI の角度の組立単位です。微積分や三角関数がラジアンで書かれるのはこのためです。",
        },
        {
          q: "角分・角秒とは?",
          a: "度の細分単位で、天文学・測量・GPS で使います:1 角分(′)= 1/60 度、1 角秒(″)= 1/3600 度。満月の見かけの直径は約 31 角分。家庭用 GPS の精度も緯度の誤差を角秒で表すのが一般的です。",
        },
      ],
    },
    es: {
      name: "Conversor de ángulos",
      tagline:
        "Convierte grados, radianes, grados centesimales, vueltas, minutos y segundos de arco — exactos, en tu navegador.",
      intro: [
        "Los ángulos vienen en seis unidades comunes y confundirlas es un bug clásico: 180 grados son π radianes son 200 grados centesimales son media vuelta. Escribe un ángulo y verá las seis unidades a la vez.",
        "Pensado para deberes de matemáticas, planos CAD, desarrollo de videojuegos y astronomía, donde los minutos y segundos de arco (1° = 60′ = 3600″) hacen el trabajo fino.",
      ],
      faq: [
        {
          q: "¿Cuántos radianes son 180 grados?",
          a: "Exactamente π radianes (≈ 3,14159). Un círculo completo son 2π radianes = 360 grados = 400 grados centesimales = 1 vuelta. El radián es la unidad derivada del SI para ángulos porque es longitud de arco dividida por radio — adimensional por construcción; por eso el cálculo y la trigonometría se escriben en radianes.",
        },
        {
          q: "¿Qué son los minutos y segundos de arco?",
          a: "Subdivisiones del grado usadas en astronomía, topografía y GPS: un minuto de arco (′) es 1/60 de grado y un segundo de arco (″) es 1/3600. La Luna llena ocupa unos 31 minutos de arco en el cielo; la precisión del GPS doméstico se suele dar en segundos de arco de latitud.",
        },
      ],
    },
    pt: {
      name: "Conversor de ângulos",
      tagline:
        "Converta graus, radianos, grados, voltas, minutos e segundos de arco — exatos, direto no navegador.",
      intro: [
        "Ângulos vêm em seis unidades comuns e confundi-los é um bug clássico: 180 graus são π radianos são 200 grados são meia volta. Digite um ângulo e veja as seis unidades de uma vez.",
        "Feito para dever de matemática, desenhos CAD, desenvolvimento de jogos e astronomia — onde minutos e segundos de arco (1° = 60′ = 3600″) fazem o trabalho fino.",
      ],
      faq: [
        {
          q: "Quantos radianos são 180 graus?",
          a: "Exatamente π radianos (≈ 3,14159). Um círculo completo é 2π radianos = 360 graus = 400 grados = 1 volta. O radiano é a unidade derivada do SI para ângulos porque é o comprimento do arco dividido pelo raio — adimensional por construção; por isso o cálculo e a trigonometria usam radianos.",
        },
        {
          q: "O que são minutos e segundos de arco?",
          a: "Subdivisões do grau usadas em astronomia, topografia e GPS: um minuto de arco (′) é 1/60 do grau e um segundo de arco (″) é 1/3600. A Lua cheia ocupa cerca de 31 minutos de arco no céu; a precisão do GPS doméstico costuma ser dada em segundos de arco de latitude.",
        },
      ],
    },
  },
});
