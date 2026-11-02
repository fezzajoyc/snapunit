// vi — từ điển tiếng Việt. Hình dạng khóa phải khớp en chính xác (tests/seo.test.ts).
// Giữ nguyên "SnapUnit", các placeholder {n}/{count}/{query}/{category} và token kỹ thuật.
const vi = {
  brand: "SnapUnit",
  tagline: "Mọi phép đổi đều chạy trong trình duyệt của bạn.",
  metaDesc:
    "6 công cụ đổi đơn vị chính xác: chiều dài (từ mm đến năm ánh sáng), khối lượng, nhiệt độ, mức tiêu hao nhiên liệu, khổ giấy và góc. Tất cả chạy trong trình duyệt — miễn phí, không cần đăng ký, không gửi dữ liệu.",

  nav: {
    tools: "Tất cả công cụ",
    categories: "Danh mục",
    about: "Giới thiệu",
    menu: "Menu",
    language: "Ngôn ngữ",
  },

  home: {
    heroTitle: "Mọi đơn vị, chuyển đổi tức thì — từ milimet đến năm ánh sáng",
    heroSub:
      "{n} công cụ đổi đơn vị đi sâu hơn thông thường: mười lăm đơn vị chiều dài từ milimet đến năm ánh sáng, năm thang nhiệt độ, mức tiêu hao với quan hệ nghịch đảo MPG, khổ giấy và góc. Tất cả chạy cục bộ trong trình duyệt — nhanh, miễn phí, không cần đăng ký.",
    browseAll: "Xem tất cả công cụ",
    categoriesTitle: "Danh mục",
    featuredTitle: "Công cụ phổ biến",
    trustLocal: "Số liệu ở lại trên thiết bị của bạn",
    trustFree: "Miễn phí, không cần tài khoản",
    trustFast: "Tức thì, dùng được cả khi offline",
    rotating: [
      "Từ 10 L/100km sang MPG — quan hệ nghịch đảo xử lý đúng, phân biệt galon Mỹ và Anh",
      "A4 cạnh Letter ngay một cái nhìn — 25 khổ giấy theo mm, cm và inch",
      "180 độ bằng π radian — góc hiển thị cùng lúc bằng sáu đơn vị",
      "Từ milimet đến năm ánh sáng: nhập một lần, mười lăm đơn vị chiều dài",
    ],
    statsLabels: { tools: "công cụ", languages: "ngôn ngữ", uploads: "lượt tải lên", accounts: "tài khoản" },
    eyebrow: "Miễn phí mãi mãi",
    heroCtaSecondary: "Cách hoạt động",
    statsTools: "{n} công cụ",
    statsLanguages: "{n} ngôn ngữ",
    statsUploads: "0 lượt tải lên",
    statsAccounts: "0 tài khoản",
    categoriesSub: "Mọi công cụ đổi đơn vị ở một nơi — mỗi cái tập trung vào một họ đơn vị và làm kỹ lưỡng.",
    popularSub: "Những công cụ được mở nhiều nhất.",
    privacyTitle: "Bất kỳ điều gì bạn nhập cũng không rời khỏi thiết bị của bạn.",
    privacySub:
      "Không có bước tải lên nào. Các bộ chuyển đổi là JavaScript chạy trong trình duyệt của bạn — đó không phải lời hứa chính sách, mà là cách chúng được xây dựng.",
    privacyPoint1T: "Xử lý cục bộ",
    privacyPoint1D:
      "Giá trị được đổi trong bộ nhớ, ngay trên thiết bị của bạn. Không gửi đi đâu cả.",
    privacyPoint2T: "Không cần tài khoản",
    privacyPoint2D: "Không đăng ký, không email, không lưu lịch sử. Mở công cụ lên và dùng ngay.",
    privacyPoint3T: "Trung thực từ thiết kế",
    privacyPoint3D:
      "Nếu có gì đó thực sự không thể làm trong trình duyệt, chúng tôi nói thẳng thay vì giả vờ được.",
    privacyLink: "Đọc ghi chú riêng tư đầy đủ",
    endTitle: "Chọn một công cụ. Nó chỉ đơn giản là hoạt động.",
    endSub: "Năm ngôn ngữ, không một lượt tải lên, không cần cài đặt gì.",
  },

  tools: {
    title: "Tất cả công cụ",
    subtitle: "Tìm kiếm trong {count} công cụ trình duyệt miễn phí. Không tải lên, không đăng ký.",
    filterPlaceholder: "Tìm công cụ…",
    count: "{count} công cụ",
    empty: "Không có công cụ nào khớp với “{query}”.",
  },

  categories: {
    pdf: { name: "PDF", desc: "Gộp, tách, chuyển đổi và chỉnh sửa file PDF mà không cần tải lên bất cứ đâu." },
    image: { name: "Ảnh", desc: "Nén, đổi kích thước, cắt và chuyển đổi ảnh ngay trong trình duyệt của bạn." },
    text: { name: "Văn bản", desc: "Đếm, làm sạch, sắp xếp và biến đổi văn bản tức thì khi bạn gõ." },
    developer: { name: "Lập trình viên", desc: "Trình định dạng, bộ mã hóa, bộ giải mã và trình tạo cho công việc dev hằng ngày." },
    seo: { name: "SEO", desc: "Thẻ meta, dữ liệu có cấu trúc, xem trước SERP và các trợ thủ SEO trên trang." },
    security: { name: "Bảo mật", desc: "Mật khẩu, hàm băm và tra cứu — tạo và kiểm tra ngay trên thiết bị của bạn." },
    utility: { name: "Tiện ích", desc: "Chiều dài, khối lượng, nhiệt độ, mức tiêu hao nhiên liệu, khổ giấy và góc — mọi phép đổi đều được tính trên thiết bị của bạn." },
  },

  tool: {
    howTo: "Cách sử dụng",
    faq: "Câu hỏi thường gặp",
    related: "Công cụ liên quan",
    privacyNote:
      "Công cụ này chạy hoàn toàn trong trình duyệt của bạn. Dữ liệu không bao giờ rời khỏi thiết bị — không được tải lên bất kỳ máy chủ nào.",
    inCategory: "Xem thêm trong {category}",
    backToCategory: "Tất cả công cụ {category}",
  },

  common: {
    copy: "Sao chép",
    copied: "Đã sao chép",
    download: "Tải xuống",
    reset: "Đặt lại",
    swap: "Đảo chiều",
    clear: "Xóa",
    error: "Đã xảy ra lỗi. Kiểm tra dữ liệu nhập và thử lại.",
    input: "Đầu vào",
    output: "Kết quả",
    settings: "Tùy chọn",
    dropFiles: "Kéo thả file vào đây hoặc bấm để chọn",
    dropFile: "Kéo thả file vào đây hoặc bấm để chọn",
    processing: "Đang xử lý…",
    fileSize: "Dung lượng",
    sample: "Dùng thử ví dụ",
    uppercase: "CHỮ IN HOA",
  },

  unit: {
    from: "Từ",
    to: "Sang",
    amount: "Số lượng",
    result: "Kết quả",
    common: "Chuyển đổi thường dùng",
    formula: "Công thức",
    allUnits: "Tất cả đơn vị",
    width: "Chiều rộng",
    height: "Chiều cao",
    area: "Diện tích",
  },

  text: {
    stats: {
      words: "Từ",
      characters: "Ký tự",
      charsNoSpaces: "Không khoảng trắng",
      sentences: "Câu",
      paragraphs: "Đoạn",
      lines: "Dòng",
      readingTime: "Thời gian đọc",
      readingMinutes: "{n} phút đọc",
    },
  },

  footer: {
    line: "Bộ đổi đơn vị chạy trong trình duyệt của bạn. Bất kỳ điều gì bạn nhập cũng không rời khỏi thiết bị.",
    privacy: "Quyền riêng tư",
    terms: "Điều khoản",
    about: "Giới thiệu",
    badges: "Huy hiệu",
    language: "Ngôn ngữ",
  },

  badge: {
    title: "Huy hiệu SnapUnit",
    desc: "Đặt huy hiệu SnapUnit lên trang web, README hoặc tài liệu của bạn. Nó liên kết về đây và cho biết các bộ chuyển đổi chạy hoàn toàn trong trình duyệt.",
    voluntary: "Việc nhúng hoàn toàn tự nguyện — chọn một huy hiệu nếu bạn thích dự án này. Không cần xin phép ai.",
    md: "Markdown (README)",
    html: "HTML (trang web)",
    thanks: "Cảm ơn bạn đã lan tỏa — mỗi lượt nhúng giúp nhiều người hơn khám phá những công cụ tôn trọng file của họ.",
  },

  embed: {
    title: "Nhúng công cụ này",
    desc: "Đưa công cụ này vào trang của bạn bằng một dòng — nó chạy trong trình duyệt của khách.",
  },

    mcp: {
    title: "Máy chủ MCP — công cụ cho AI gọi trực tiếp",
    desc1: "SnapUnit có kèm server MCP (Model Context Protocol): các trợ lý AI như Claude hay Cursor có thể chạy chính các bộ chuyển đổi trên trang này — cùng logic đã kiểm thử, không viết lại.",
    desc2: "Các công cụ chạy chính hàm thuần của trang: chiều dài (milimet đến năm ánh sáng), khối lượng, nhiệt độ, góc, mức tiêu hao với quan hệ nghịch đảo MPG và kích thước giấy chính xác. Việc thực thi diễn ra trên máy của AI client qua npx — không gửi gì đến máy chủ của chúng tôi.",
    toolsTitle: "Công cụ chạy được ({n})",
    requiresNode: "Cần Node.js 18+. Máy chủ chạy cục bộ qua stdio; chỉ các lệnh bạn gọi được tính trên máy của bạn.",
    privacy: "Cần Node.js 18+. Máy chủ chạy cục bộ qua stdio; chỉ các lệnh bạn gọi được tính trên máy của bạn.",
  },

    notFound: {
    title: "Không tìm thấy trang",
    body: "Công cụ bạn tìm không tồn tại. Hãy xem tất cả công cụ thay thế.",
    home: "Về trang chủ",
  },
};

export default vi;
