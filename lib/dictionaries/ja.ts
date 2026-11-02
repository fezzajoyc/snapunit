import type { Dictionary } from "../i18n";

const ja: Dictionary = {
  brand: "SnapUnit",
  tagline: "すべての換算はブラウザ内で実行されます。",
  metaDesc:
    "6 個の単位換算ツール:長さ(ミリメートルから光年まで)・重さ・温度・燃費・紙サイズ・角度。すべてブラウザ内で動作し、無料・登録不要・入力した数値は送信されません。",

  nav: {
    tools: "すべてのツール",
    categories: "カテゴリー",
    about: "このサイトについて",
    menu: "メニュー",
    language: "言語",
  },

  home: {
    heroTitle: "あらゆる単位を瞬時に換算 — ミリメートルから光年まで",
    heroSub:
      "普通の換算サイトより深い {n} 個のコンバーター:ミリメートルから光年まで 15 単位の長さ、5 温標、逆数関係の燃費、紙サイズ、角度。すべてブラウザ内で完結 — 高速・無料・登録不要。",
    browseAll: "すべてのツールを見る",
    categoriesTitle: "カテゴリー",
    featuredTitle: "人気のツール",
    trustLocal: "数値はデバイスから出ません",
    trustFree: "無料・アカウント不要",
    trustFast: "即時処理・オフライン対応",
    rotating: [
      "10 L/100km を MPG へ — 逆数処理を正しく、米ガロンと英ガロンを区別",
      "A4 とレターを一目で — 全 25 紙サイズを mm・cm・インチで",
      "180 度は π ラジアン — 角度を 6 単位で同時に表示",
      "ミリメートルから光年まで:1 回の入力で 15 単位の長さ",
    ],
    statsLabels: { tools: "ツール", languages: "言語", uploads: "アップロード", accounts: "アカウント" },
    eyebrow: "ずっと無料",
    heroCtaSecondary: "仕組みを見る",
    statsTools: "{n} 個のツール",
    statsLanguages: "{n} 言語",
    statsUploads: "アップロード 0 回",
    statsAccounts: "アカウント 0 個",
    categoriesSub: "コンバーターはここに全部 — それぞれ単位の一系統に絞り、深く作り込んでいます。",
    popularSub: "いちばん使われているツール。",
    privacyTitle: "入力したものは、何もデバイスの外に出ません。",
    privacySub:
      "アップロードという手順はありません。コンバーターはブラウザ内で動く JavaScript そのものです。ポリシーの約束ではなく、作りの話です。",
    privacyPoint1T: "ローカル処理",
    privacyPoint1D:
      "数値はデバイス上の JavaScript がメモリ内で換算します。外部への送信は一切ありません。",
    privacyPoint2T: "アカウント不要",
    privacyPoint2D: "登録もメールも履歴もありません。開いてすぐ使えます。",
    privacyPoint3T: "誠実な設計",
    privacyPoint3D: "ブラウザでできないことは、できないとはっきり書きます。",
    privacyLink: "プライバシーの詳細を読む",
    endTitle: "ツールを選んで、すぐ使える。",
    endSub: "5 言語、アップロード 0、インストール不要。",
  },

  tools: {
    title: "すべてのツール",
    subtitle: "{count} 個の無料ブラウザツールを検索。アップロード不要・登録不要。",
    filterPlaceholder: "ツールを検索…",
    count: "{count} 個のツール",
    empty: "「{query}」に一致するツールはありません。",
  },

  categories: {
    pdf: { name: "PDF", desc: "PDF の結合・分割・変換・編集をどこにもアップロードせずに行えます。" },
    image: { name: "画像", desc: "画像の圧縮・リサイズ・切り抜き・形式変換をブラウザ内で。" },
    text: { name: "テキスト", desc: "文字数・整形・並べ替え・変換を入力しながら即時に。" },
    developer: { name: "開発者", desc: "日々の開発に使うフォーマッタ・エンコーダ・ジェネレータ。" },
    seo: { name: "SEO", desc: "メタタグ・構造化データ・SERP プレビューなどの SEO ヘルパー。" },
    security: { name: "セキュリティ", desc: "パスワード・ハッシュ・各種ルックアップを端末内で生成・検証。" },
    utility: { name: "ユーティリティ", desc: "長さ・重さ・温度・燃費・紙サイズ・角度 — すべての換算はデバイス上で計算されます。" },
  },

  tool: {
    howTo: "使い方",
    faq: "よくある質問",
    related: "関連ツール",
    privacyNote:
      "このツールは完全にブラウザ内で動作します。データは端末から出ず、サーバーへアップロードされることはありません。",
    inCategory: "{category}のその他のツール",
    backToCategory: "{category}のすべてのツール",
  },

  common: {
    copy: "コピー",
    copied: "コピーしました",
    download: "ダウンロード",
    reset: "リセット",
    swap: "入れ替え",
    clear: "クリア",
    error: "エラーが発生しました。入力を確認して再試行してください。",
    input: "入力",
    output: "結果",
    settings: "オプション",
    dropFiles: "ここにファイルをドロップ、またはクリックして選択",
    dropFile: "ここにファイルをドロップ、またはクリックして選択",
    processing: "処理中…",
    fileSize: "サイズ",
    sample: "サンプルを試す",
    uppercase: "大文字",
  },

  unit: {
    from: "変換前",
    to: "変換後",
    amount: "数値",
    result: "結果",
    common: "よく使う変換",
    formula: "計算式",
    allUnits: "すべての単位",
    width: "幅",
    height: "高さ",
    area: "面積",
  },

  text: {
    stats: {
      words: "単語数",
      characters: "文字数",
      charsNoSpaces: "空白除く",
      sentences: "文の数",
      paragraphs: "段落",
      lines: "行数",
      readingTime: "読了時間",
      readingMinutes: "約 {n} 分",
    },
  },

  footer: {
    line: "ブラウザ内で動く単位換算ツール。入力したものは何もデバイスの外に出ません。",
    privacy: "プライバシー",
    terms: "利用規約",
    about: "このサイトについて",
    badges: "バッジ",
    language: "言語",
  },

  badge: {
    title: "SnapUnit バッジ",
    desc: "SnapUnit バッジをあなたのサイトや README、ドキュメントに。リンクは本サイトに戻り、背後の換算ツールが完全にブラウザ内で動くことを伝えます。",
    voluntary: "設置は完全に任意です。プロジェクトを気に入ったらお好きなバッジをどうぞ。許可は不要です。",
    md: "Markdown(README)",
    html: "HTML(ウェブサイト)",
    thanks: "広めていただきありがとうございます。すべての設置が、ファイルを尊重するツールの発見につながります。",
  },

    embed: {
    title: "ツールを埋め込む",
    desc: "1 行であなたのサイトにツールを。訪問者のブラウザ内で動きます。",
  },

    mcp: {
    title: "MCP サーバー——AI から呼び出せるツール",
    desc1: "SnapUnit は MCP(Model Context Protocol)サーバーを提供します。Claude や Cursor などの AI アシスタントが、本サイトと同じ換算ツールをそのまま実行できます — 同じテスト済みロジックで、再実装ではありません。",
    desc2: "これらのツールは本サイトの純粋関数を実行します:長さ(ミリメートルから光年まで)・重さ・温度・角度・逆数関係の燃費・正確な紙サイズ。npx 経由で AI クライアントのマシン上で実行され、当社サーバーには何も送信されません。",
    toolsTitle: "実行可能なツール({n} 個)",
    requiresNode: "Node.js 18+ が必要です。サーバーは stdio でローカル実行。呼び出したツール計算のみローカルで行われます。",
    privacy: "Node.js 18+ が必要です。サーバーは stdio でローカル実行。呼び出したツール計算のみローカルで行われます。",
  },

    notFound: {
    title: "ページが見つかりません",
    body: "お探しのツールは存在しません。すべてのツールからお探しください。",
    home: "ホームへ戻る",
  },
};

export default ja;
