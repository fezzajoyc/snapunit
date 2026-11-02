import type { Dictionary } from "../i18n";

const pt: Dictionary = {
  brand: "SnapUnit",
  tagline: "Cada conversão roda no seu navegador.",
  metaDesc:
    "6 conversores de unidades precisos: comprimento (de mm a anos-luz), peso, temperatura, consumo, tamanhos de papel e ângulos. Tudo no seu navegador: grátis, sem cadastro e nada enviado.",

  nav: {
    tools: "Todas as ferramentas",
    categories: "Categorias",
    about: "Sobre",
    menu: "Menu",
    language: "Idioma",
  },

  home: {
    heroTitle: "Toda unidade, convertida na hora — de milímetros a anos-luz",
    heroSub:
      "{n} conversores que vão além do usual: quinze comprimentos de milímetros a anos-luz, cinco escalas de temperatura, o consumo com sua relação inversa de MPG, tamanhos de papel e ângulos. Tudo no seu navegador — rápido, grátis, sem cadastro.",
    browseAll: "Ver todas as ferramentas",
    categoriesTitle: "Categorias",
    featuredTitle: "Ferramentas populares",
    trustLocal: "Os números ficam no seu dispositivo",
    trustFree: "Grátis, sem conta",
    trustFast: "Instantâneo, funciona offline",
    rotating: [
      "De 10 L/100km para MPG — a inversa resolvida certa, com galão americano e imperial separados",
      "A4 e Carta de relance — os 25 tamanhos de papel em mm, cm e polegadas",
      "180 graus são π radianos — o ângulo em seis unidades ao mesmo tempo",
      "De milímetros a anos-luz: uma entrada, quinze comprimentos",
    ],
    statsLabels: { tools: "ferramentas", languages: "idiomas", uploads: "envios", accounts: "contas" },
    eyebrow: "Grátis sempre",
    heroCtaSecondary: "Como funciona",
    statsTools: "{n} ferramentas",
    statsLanguages: "{n} idiomas",
    statsUploads: "0 envios",
    statsAccounts: "0 contas",
    categoriesSub: "Todos os conversores em um lugar — cada um focado em uma família de unidades, feito a fundo.",
    popularSub: "As ferramentas mais usadas.",
    privacyTitle: "Nada do que você digita sai do seu dispositivo.",
    privacySub:
      "Não existe etapa de upload. Os conversores são JavaScript rodando no seu navegador — não é uma promessa de política, é como são construídos.",
    privacyPoint1T: "Processamento local",
    privacyPoint1D:
      "Os valores são convertidos na memória, no seu dispositivo. Nada é transmitido, para lugar algum.",
    privacyPoint2T: "Sem contas",
    privacyPoint2D: "Sem cadastro, sem e-mail, sem histórico. Abra e use.",
    privacyPoint3T: "Honestos por design",
    privacyPoint3D: "Se algo não dá para fazer no navegador, dizemos em vez de fingir.",
    privacyLink: "Ler a nota de privacidade",
    endTitle: "Escolha uma ferramenta. Ela funciona.",
    endSub: "5 idiomas, 0 envios, nada para instalar.",
  },

  tools: {
    title: "Todas as ferramentas",
    subtitle: "Pesquise entre {count} ferramentas gratuitas. Sem uploads, sem cadastro.",
    filterPlaceholder: "Pesquisar ferramentas…",
    count: "{count} ferramentas",
    empty: "Nenhuma ferramenta corresponde a “{query}”.",
  },

  categories: {
    pdf: { name: "PDF", desc: "Junte, divida, converta e edite PDFs sem enviar nada para servidores." },
    image: { name: "Imagem", desc: "Comprima, redimensione, recorte e converta imagens no navegador." },
    text: { name: "Texto", desc: "Conte, limpe, ordene e transforme texto na hora, enquanto digita." },
    developer: { name: "Desenvolvedor", desc: "Formatadores, codificadores, decodificadores e geradores para o dia a dia." },
    seo: { name: "SEO", desc: "Meta tags, dados estruturados, prévia de SERP e outros auxiliares de SEO." },
    security: { name: "Segurança", desc: "Senhas, hashes e consultas — gerados e verificados no seu dispositivo." },
    utility: { name: "Utilidades", desc: "Comprimento, peso, temperatura, consumo, tamanhos de papel e ângulos — cada conversão é calculada no seu dispositivo." },
  },

  tool: {
    howTo: "Como usar",
    faq: "Perguntas frequentes",
    related: "Ferramentas relacionadas",
    privacyNote:
      "Esta ferramenta roda inteiramente no seu navegador. Seus dados nunca saem do seu dispositivo e não são enviados a nenhum servidor.",
    inCategory: "Mais em {category}",
    backToCategory: "Todas as ferramentas de {category}",
  },

  common: {
    copy: "Copiar",
    copied: "Copiado",
    download: "Baixar",
    reset: "Redefinir",
    swap: "Inverter",
    clear: "Limpar",
    error: "Algo deu errado. Verifique os dados e tente novamente.",
    input: "Entrada",
    output: "Resultado",
    settings: "Opções",
    dropFiles: "Arraste arquivos aqui ou clique para escolher",
    dropFile: "Arraste um arquivo aqui ou clique para escolher",
    processing: "Processando…",
    fileSize: "Tamanho",
    sample: "Testar um exemplo",
    uppercase: "MAIÚSCULAS",
  },

  unit: {
    from: "De",
    to: "Para",
    amount: "Quantidade",
    result: "Resultado",
    common: "Conversões comuns",
    formula: "Fórmula",
    allUnits: "Todas as unidades",
    width: "Largura",
    height: "Altura",
    area: "Área",
  },

  text: {
    stats: {
      words: "Palavras",
      characters: "Caracteres",
      charsNoSpaces: "Sem espaços",
      sentences: "Frases",
      paragraphs: "Parágrafos",
      lines: "Linhas",
      readingTime: "Tempo de leitura",
      readingMinutes: "{n} min de leitura",
    },
  },

  footer: {
    line: "Conversores de unidades que rodam no seu navegador. Nada do que você digita sai do seu dispositivo.",
    privacy: "Privacidade",
    terms: "Termos",
    about: "Sobre",
    badges: "Selos",
    language: "Idioma",
  },

  badge: {
    title: "Selos do SnapUnit",
    desc: "Coloque um selo do SnapUnit no seu site, README ou documentação. Ele aponta para cá e avisa que os conversores por trás dele rodam inteiramente no navegador.",
    voluntary: "Incorporar é totalmente voluntário — escolha um selo se gostar do projeto. Não precisa de permissão.",
    md: "Markdown (README)",
    html: "HTML (site)",
    thanks: "Obrigado por divulgar — cada incorporação ajuda mais pessoas a descobrir ferramentas que respeitam seus arquivos.",
  },

    embed: {
    title: "Incorporar esta ferramenta",
    desc: "Coloque esta ferramenta no seu site com uma linha — ela roda no navegador do visitante.",
  },

    mcp: {
    title: "Servidor MCP — ferramentas acessíveis para IA",
    desc1: "O SnapUnit oferece um servidor MCP (Model Context Protocol): assistentes de IA como Claude ou Cursor podem executar os mesmos conversores que você vê no site — a mesma lógica testada, sem reimplementação.",
    desc2: "As ferramentas executam as funções puras do próprio site: comprimento (de milímetros a anos-luz), peso, temperatura, ângulos, o consumo com sua relação inversa de MPG e dimensões exatas de papel. A execução acontece na máquina do cliente de IA via npx — nada é enviado aos nossos servidores.",
    toolsTitle: "Ferramentas executáveis ({n})",
    requiresNode: "Requer Node.js 18+. O servidor roda localmente via stdio; apenas as chamadas que você fizer são calculadas na sua máquina.",
    privacy: "Requer Node.js 18+. O servidor roda localmente via stdio; apenas as chamadas que você fizer são calculadas na sua máquina.",
  },

    notFound: {
    title: "Página não encontrada",
    body: "A ferramenta que você procura não existe. Explore todas as ferramentas.",
    home: "Ir para a página inicial",
  },
};

export default pt;
