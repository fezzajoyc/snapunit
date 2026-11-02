// en is the typing source of truth: every other dictionary must satisfy Dictionary.
// 刻意不加 as const:字符串需放宽为 string,翻译文件才可实现同一类型。
const en = {
  brand: "SnapUnit",
  tagline: "Every conversion runs in your browser.",
  metaDesc:
    "6 precise unit converters: length (millimeters to light-years), weight, temperature, fuel economy, paper sizes and angles. All run in your browser — free, no signup, nothing you type leaves your device.",

  nav: {
    tools: "All tools",
    categories: "Categories",
    about: "About",
    menu: "Menu",
    language: "Language",
  },

  home: {
    heroTitle: "Every unit, converted instantly — from millimeters to light-years",
    heroSub:
      "{n} converters that go deeper than the usual unit site: fifteen lengths from millimeters to light-years, five temperature scales, fuel economy with its inverse MPG relationship, paper sizes and angles. Everything runs locally in your browser — fast, free, no signup.",
    browseAll: "Browse all tools",
    categoriesTitle: "Categories",
    featuredTitle: "Popular tools",
    trustLocal: "Numbers stay on your device",
    trustFree: "Free, no account",
    trustFast: "Instant, works offline",
    rotating: [
      "10 L/100km to MPG — the inverse done right, US and UK gallons apart",
      "A4 to Letter at a glance — all 25 paper sizes in mm, cm and inches",
      "180 degrees is π radians — angles in six units at once",
      "From millimeters to light-years: one input, fifteen lengths",
    ],
    statsLabels: { tools: "tools", languages: "languages", uploads: "uploads", accounts: "accounts" },
    eyebrow: "Free forever",
    heroCtaSecondary: "How it works",
    statsTools: "{n} tools",
    statsLanguages: "{n} languages",
    statsUploads: "0 uploads",
    statsAccounts: "0 accounts",
    categoriesSub: "Every converter in one place — each built around one unit family, done properly.",
    popularSub: "The tools people open most.",
    privacyTitle: "Nothing you type ever leaves your device.",
    privacySub:
      "There is no upload step. The converters are JavaScript running in your browser — that is not a policy promise, it is how they are built.",
    privacyPoint1T: "Local processing",
    privacyPoint1D:
      "Values are converted by JavaScript in memory, on your device. Nothing is transmitted, anywhere.",
    privacyPoint2T: "No accounts",
    privacyPoint2D: "No sign-up, no email, no stored history. Open a tool and use it.",
    privacyPoint3T: "Honest by design",
    privacyPoint3D:
      "If something genuinely cannot be done in the browser, we say so instead of pretending.",
    privacyLink: "Read the full privacy note",
    endTitle: "Pick a tool. It just works.",
    endSub: "Five languages, zero uploads, nothing to install.",
  },

  tools: {
    title: "All tools",
    subtitle: "Search {count} free browser tools. No upload, no signup.",
    filterPlaceholder: "Search tools…",
    count: "{count} tools",
    empty: "No tools match “{query}”.",
  },

  categories: {
    pdf: { name: "PDF", desc: "Merge, split, convert and edit PDF files without uploading them anywhere." },
    image: { name: "Image", desc: "Compress, resize, crop and convert images right in your browser." },
    text: { name: "Text", desc: "Count, clean, sort and transform text instantly as you type." },
    developer: { name: "Developer", desc: "Formatters, encoders, decoders and generators for daily dev work." },
    seo: { name: "SEO", desc: "Meta tags, schema markup, SERP preview and other on-page SEO helpers." },
    security: { name: "Security", desc: "Passwords, hashes and lookups — generated and checked on your device." },
    utility: { name: "Utility", desc: "Length, weight, temperature, fuel economy, paper sizes and angles — every conversion computed on your device." },
  },

  tool: {
    howTo: "How to use",
    faq: "Frequently asked questions",
    related: "Related tools",
    privacyNote:
      "This tool runs entirely in your browser. Your data never leaves your device — it is not uploaded to any server.",
    inCategory: "More in {category}",
    backToCategory: "All {category} tools",
  },

  common: {
    copy: "Copy",
    copied: "Copied",
    download: "Download",
    reset: "Reset",
    swap: "Swap",
    clear: "Clear",
    error: "Something went wrong. Check your input and try again.",
    input: "Input",
    output: "Result",
    settings: "Options",
    dropFiles: "Drop files here or click to choose",
    dropFile: "Drop a file here or click to choose",
    processing: "Processing…",
    fileSize: "Size",
    sample: "Try an example",
    uppercase: "UPPERCASE",
  },

  unit: {
    from: "From",
    to: "To",
    amount: "Amount",
    result: "Result",
    common: "Common conversions",
    formula: "Formula",
    allUnits: "All units",
    width: "Width",
    height: "Height",
    area: "Area",
  },

  text: {
    stats: {
      words: "Words",
      characters: "Characters",
      charsNoSpaces: "No spaces",
      sentences: "Sentences",
      paragraphs: "Paragraphs",
      lines: "Lines",
      readingTime: "Reading time",
      readingMinutes: "{n} min read",
    },
  },

  footer: {
    line: "Unit converters that run in your browser. Nothing you type leaves your device.",
    privacy: "Privacy",
    terms: "Terms",
    about: "About",
    badges: "Badges",
    language: "Language",
  },

  badge: {
    title: "SnapUnit badges",
    desc: "Put a SnapUnit badge on your site, README or docs. It links back here and tells people the converters behind it run entirely in the browser.",
    voluntary: "Embedding is completely voluntary — pick a badge if you like the project. No permission needed.",
    md: "Markdown (README)",
    html: "HTML (website)",
    thanks: "Thanks for spreading the word — every embed helps more people discover tools that respect their files.",
  },

    embed: {
    title: "Embed this tool",
    desc: "Put this tool on your own site with one line — it runs entirely in the visitor's browser.",
  },

    mcp: {
    title: "MCP server — AI-accessible tools",
    desc1: "SnapUnit ships an MCP (Model Context Protocol) server: AI assistants like Claude or Cursor can execute the same converters you see on this site — same tested logic, no reimplementation.",
    desc2: "The tools run the site's own pure functions for unit conversion — length (millimeters to light-years), weight, temperature, angle, fuel economy with its inverse MPG relationship, and exact paper-size dimensions. Execution happens on the AI client's machine via npx — nothing is sent to our servers.",
    toolsTitle: "Executable tools ({n})",
    requiresNode: "Requires Node.js 18+. The server runs locally over stdio; only the tool calls you make are computed on your machine.",
    privacy: "Requires Node.js 18+. The server runs locally over stdio; only the tool calls you make are computed on your machine.",
  },

    notFound: {
    title: "Page not found",
    body: "The tool you are looking for does not exist. Browse all tools instead.",
    home: "Go to homepage",
  },
};

export default en;
