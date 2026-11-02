import { dict } from "@/lib/i18n";
import { isLocale, LOCALES, type Locale } from "@/lib/site";
import { ALL_TOOLS } from "@/tools/registry";
import { Container, Prose, SectionHead } from "@/components/ui";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

const CONTENT: Partial<Record<Locale, string[]>> = {
  en: [
    "SnapUnit is a collection of unit converters that run entirely in your browser. There is no backend: the numbers you type are converted by JavaScript on your own device, and nothing is ever transmitted.",
    "That design gives us three properties we care about. It is private by construction — there is nothing to upload, so nothing can leak. It is fast — there is no round trip to a server. And it is honest — every converter does exactly what the page says, no tricks.",
    "SnapUnit goes deeper than the usual converter: more units per category (fifteen lengths from millimeters to parsecs, five temperature scales), plus categories the big converter sites skip — fuel economy with its inverse L/100km ↔ MPG relationship, ISO 216 and US paper sizes, and six angle units. New converters are added regularly.",
  ],
  zh: [
    "SnapUnit 是一组完全在浏览器里运行的单位换算工具。没有后端:你输入的数字由你自己设备上的 JavaScript 换算,任何数据都不会被发送。",
    "这个设计带来三个我们看重的性质:隐私是构造出来的——没有上传,就谈不上泄露;速度快——没有服务器往返;诚实——每个换算器都做页面所说的事,不玩花样。",
    "SnapUnit 比一般换算站做得更深:每个分类单位更多(15 种长度,从毫米到秒差距;5 种温标),还有大站不做的分类——带倒数关系的油耗换算(L/100km ↔ MPG)、ISO 216 与美制纸张尺寸、六种角度单位。新换算器持续增加。",
  ],
  ja: [
    "SnapUnit は、完全にブラウザ内で動く単位換算ツールのコレクションです。バックエンドはありません。入力した数値は自分のデバイス上の JavaScript が換算し、データは一切送信されません。",
    "この設計には、私たちが大切にする 3 つの性質があります。プライバシーは構造的に保証される(アップロードがないので漏えいもない)、速い(サーバー往復がない)、そして誠実(各ツールはページに書かれた通りのことだけをする)。",
    "SnapUnit は普通の換算サイトより深く作っています:カテゴリーごとの単位が多い(ミリメートルからパーセクまで 15 種類、温標は 5 種類)うえ、大手が扱わないカテゴリーも — 逆数関係の燃費(L/100km ↔ MPG)、ISO 216 と米国の紙サイズ、6 種類の角度の単位。随時追加しています。",
  ],
  es: [
    "SnapUnit es una colección de conversores de unidades que funcionan por completo en tu navegador. No hay backend: los números que escribes los convierte el JavaScript de tu propio dispositivo, y no se transmite nada.",
    "Ese diseño nos da tres propiedades que nos importan. Privacidad por construcción: no hay subidas, así que no puede haber fugas. Velocidad: sin viajes de ida y vuelta al servidor. Honestidad: cada conversor hace exactamente lo que dice su página.",
    "SnapUnit va más allá del conversor típico: más unidades por categoría (quince longitudes, de milímetros a pársecs; cinco escalas de temperatura), más categorías que las grandes webs omiten: consumo de combustible con su relación inversa L/100km ↔ MPG, tamaños de papel ISO 216 y estadounidenses, y seis unidades de ángulo. Se añaden conversores con regularidad.",
  ],
  pt: [
    "SnapUnit é uma coleção de conversores de unidades que rodam inteiramente no seu navegador. Não há backend: os números que você digita são convertidos pelo JavaScript do seu próprio dispositivo, e nada é transmitido.",
    "Esse design nos dá três propriedades que valorizamos. Privacidade por construção: não há uploads, logo não há vazamentos. Velocidade: sem viagem ao servidor. Honestidade: cada conversor faz exatamente o que a página diz.",
    "O SnapUnit vai além do conversor comum: mais unidades por categoria (quinze comprimentos, de milímetros a parsecs; cinco escalas de temperatura), além de categorias que os grandes sites ignoram — consumo de combustível com sua relação inversa L/100km ↔ MPG, tamanhos de papel ISO 216 e americanos, e seis unidades de ângulo. Novos conversores são adicionados com regularidade.",
  ],
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = dict(lang as Locale);
  return (
    <Container className="max-w-3xl py-12">
      <SectionHead title={t.nav.about} />
      <Prose paragraphs={CONTENT[lang as Locale] ?? CONTENT.en!} />
      <p className="mt-6 text-[14px] text-[var(--color-sub)]">
        {ALL_TOOLS.length} tools · {LOCALES.length} languages
      </p>
    </Container>
  );
}
