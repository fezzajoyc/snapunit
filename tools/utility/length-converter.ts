import { unitTool } from "../_lib/unit-tool";

export default unitTool({
  slug: "length-converter",
  icon: "ruler",
  cat: "length",
  featured: true,
  related: ["weight-converter", "temperature-converter", "fuel-economy-converter", "paper-size-converter", "angle-converter"],
  copy: {
    en: {
      name: "Length Converter",
      tagline:
        "Convert length and distance instantly: meters, feet, inches, miles, light-years and more — right in your browser.",
      intro: [
        "Convert between metric and imperial length units without typing into a search box. Enter any amount and see meters, feet, inches, miles and every other unit at once — from millimeters all the way up to light-years.",
        "Useful for DIY projects, travel planning, engineering drawings and school homework — and for the fun questions too: the commute in furlongs, Proxima Centauri in AU, a 10K run in nautical miles.",
      ],
      faq: [
        {
          q: "How long is a light-year?",
          a: "One light-year is the distance light travels in one Julian year: exactly 9,460,730,472,580,800 meters (about 9.46 trillion km), because light moves at exactly 299,792,458 m/s. Enter 1 ly → m above to verify. For scale, Proxima Centauri is about 4.25 light-years away.",
        },
        {
          q: "How many cm in an inch?",
          a: "One inch is exactly 2.54 centimeters, by international agreement since 1959. Enter 1 in → cm above to verify.",
        },
      ],
    },
    zh: {
      name: "长度换算",
      tagline: "米、英尺、英寸、英里、光年等 15 种长度单位即时互转,浏览器本地运行,结果秒出。",
      intro: [
        "在公制与英制长度单位之间自由换算,不用再去搜索框里打字。输入任意数值,米、英尺、英寸、英里等所有单位一次性显示——从毫米一直到光年。",
        "适合装修量尺、旅行规划、工程图纸和作业验算,也能回答那些有趣的问题:通勤路有多少弗隆?比邻星有多少天文单位?10 公里跑步合多少海里?",
      ],
      faq: [
        {
          q: "一光年有多长?",
          a: "一光年是光在一个儒略年中走过的距离:精确值为 9,460,730,472,580,800 米(约 9.46 万亿公里),因为光速精确定义为 299,792,458 m/s。在上方输入 1 ly → m 即可验证。比邻星距我们约 4.25 光年。",
        },
        {
          q: "一英寸等于多少厘米?",
          a: "1 英寸 = 2.54 厘米,这是 1959 年国际协议确定的精确值。在上方输入 1 in → cm 即可验证。",
        },
      ],
    },
    ja: {
      name: "長さ換算",
      tagline: "メートル・フィート・インチ・マイル・光年など 15 単位の長さをブラウザ内で即時換算。",
      intro: [
        "メートル法とヤード・ポンド法を検索ボックスに入力せずに相互変換。数値を入れると、ミリメートルから光年まで、すべての単位が一度に表示されます。",
        "DIY、旅行の下調べ、図面の確認、宿題の検算に加えて、ちょっとした雑学にも:通勤距離は何ハロン?ケンタウリ座α星は何 AU?10 km は何海里?",
      ],
      faq: [
        {
          q: "1 光年は何メートル?",
          a: "1 光年は、光が 1 ユリウス年に進む距離で、正確に 9,460,730,472,580,800 メートル(約 9 兆 4600 億 km)です。光速が正確に 299,792,458 m/s と定義されているためです。上で 1 ly → m を入力して確認できます。最も近い恒星プロキシマ・ケンタウリは約 4.25 光年です。",
        },
        {
          q: "1 インチは何センチ?",
          a: "1 インチ = 2.54 センチです(1959 年に国際協定で確定)。上で 1 in → cm を入力して確認できます。",
        },
      ],
    },
    es: {
      name: "Conversor de longitud",
      tagline:
        "Convierte metros, pies, pulgadas, millas, años luz y más al instante, directamente en tu navegador.",
      intro: [
        "Convierte entre unidades métricas e imperiales sin escribir en un buscador. Introduce una cantidad y verá metros, pies, pulgadas, millas y todas las demás unidades a la vez: desde milímetros hasta años luz.",
        "Útil para bricolaje, viajes, planos técnicos y deberes, y también para las preguntas curiosas: tu trayecto diario en furlongs, Próxima Centauri en UA o una carrera de 10 km en millas náuticas.",
      ],
      faq: [
        {
          q: "¿Cuánto mide un año luz?",
          a: "Un año luz es la distancia que recorre la luz en un año juliano: exactamente 9.460.730.472.580.800 metros (unos 9,46 billones de km), porque la luz viaja a exactamente 299.792.458 m/s. Introduce 1 ly → m arriba para comprobarlo. Próxima Centauri está a unos 4,25 años luz.",
        },
        {
          q: "¿Cuántos cm tiene una pulgada?",
          a: "Una pulgada son exactamente 2,54 centímetros, según el acuerdo internacional de 1959. Introduce 1 in → cm arriba para comprobarlo.",
        },
      ],
    },
    pt: {
      name: "Conversor de comprimento",
      tagline:
        "Converta metros, pés, polegadas, milhas, anos-luz e mais na hora, direto no navegador.",
      intro: [
        "Converta entre unidades métricas e imperiais sem digitar num buscador. Digite um valor e veja metros, pés, polegadas, milhas e todas as outras unidades de uma vez — de milímetros até anos-luz.",
        "Útil para reformas, viagens, desenhos técnicos e dever de escola, e também para as perguntas curiosas: seu trajeto diário em furlongs, Proxima Centauri em UA ou uma corrida de 10 km em milhas náuticas.",
      ],
      faq: [
        {
          q: "Quanto mede um ano-luz?",
          a: "Um ano-luz é a distância que a luz percorre em um ano juliano: exatamente 9.460.730.472.580.800 metros (cerca de 9,46 trilhões de km), porque a luz viaja a exatamente 299.792.458 m/s. Digite 1 ly → m acima para conferir. Proxima Centauri fica a cerca de 4,25 anos-luz.",
        },
        {
          q: "Quantos cm tem uma polegada?",
          a: "Uma polegada tem exatamente 2,54 centímetros, pelo acordo internacional de 1959. Digite 1 in → cm acima para conferir.",
        },
      ],
    },
  },
});
