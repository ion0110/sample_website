import { DesignSystem, PortfolioContent } from './types';

// Updated to "Zen Premium" aesthetics
export const ZEN_STANDARD_THEME: DesignSystem = {
  id: "zen-premium",
  name: "Zen Premium",
  description: "A high-end, brutalist interpretation of minimalism. Focus on typography, whitespace, and subtle interactions.",
  colors: {
    background: "bg-[#F9F9F9]",
    surface: "bg-white",
    primary: "text-[#111111]",
    secondary: "text-[#444444]",
    text: "text-[#111111]",
    textMuted: "text-[#666666]",
    border: "border-[#E5E5E5]"
  },
  fonts: {
    fontFamilyHeading: "font-display",
    fontFamilyBody: "font-sans",
    headingWeight: "font-bold tracking-tight"
  },
  styles: {
    borderRadius: "rounded-sm",
    borderWidth: "border",
    shadow: "shadow-sm",
    buttonClass: "group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium tracking-tighter text-white bg-black transition duration-300 ease-out hover:scale-[1.02]",
    cardClass: "bg-white group relative overflow-hidden",
    containerClass: "min-h-screen bg-[#F9F9F9]"
  },
  layout: "premium",
  backgroundPattern: ""
};

export const PORTFOLIO_DATA: PortfolioContent = {
  profile: {
    name: "mono",
    role: "Data Specialist & Developer",
    bio: "かつてフロントエンドエンジニアとして磨いたロジカルな思考を武器に、現在は学校事務というフィールドで校務DXを推進しています。Excel（VBA/PowerQuery）を駆使したデータ成形や情報のクレンジング、業務自動化に特化した「テクニカル事務」という独自の立ち位置を確立しています。",
    socials: [
      { name: "GitHub", url: "https://github.com/ion0110" },
      { name: "note", url: "https://note.com/_ion" }
    ]
  },
  experience: [
    {
      period: "Present",
      role: "Technical Administrator / DX Promoter",
      company: "School Administration",
      description: "フロントエンドエンジニアとしての経験を活かし、学校事務の現場でDXを推進。Excel/VBA/PowerQueryを用いた業務自動化や、データクレンジングによる業務効率化をリード。"
    },
    {
      period: "Past",
      role: "Frontend Engineer",
      company: "Web Development",
      description: "ロジカルな思考と実装力を磨き、モダンなWebアプリケーション開発に従事。"
    }
  ],
  projects: [
    {
      id: "1",
      title: "Quick Knowledge",
      description: "フロントエンドの知見と事務効率化のノウハウを統合したナレッジベース。サンプルFAQ。",
      tags: ["Knowledge Base", "FAQ"],
      link: "https://ion0110.github.io/quickknowledge/",
      image: "https://picsum.photos/seed/qk/1200/800"
    },
    {
      id: "2",
      title: "Receipt Capture",
      description: "OCRを活用した精算業務の効率化。領収書管理プロトタイプ（要ログイン）。",
      tags: ["OCR", "FinTech", "Prototype"],
      link: "https://ion0110.github.io/receipt_capture",
      image: "https://picsum.photos/seed/rc/1200/800"
    },
    {
      id: "3",
      title: "PDF Editor",
      description: "ブラウザ上で動作する直感的なPDF編集ツール。プライバシー保護のため、すべての処理はローカルで完結。ザ・シンプル。",
      tags: ["PDF", "Privacy First", "Tool"],
      link: "https://ion0110.github.io/pdf_editor/",
      image: "https://picsum.photos/seed/pdf/1200/800"
    },
    {
      id: "4",
      title: "Snap Entry",
      description: "セミナー受付などの管理ツール。レスポンシブ対応。CSVでの一括登録も可能。合言葉は\"tamamonomae\"",
      tags: ["Management", "CSV", "Responsive"],
      link: "https://ion0110.github.io/snap_entry/",
      image: "https://picsum.photos/seed/snap/1200/800"
    },
    {
      id: "5",
      title: "Report Flow",
      description: "美しいレイアウトでレポートを作成・出力できるツール。シンプルな操作で、見やすく洗練されたドキュメントを手軽に生成。",
      tags: ["Report", "Generator", "UI/UX"],
      link: "https://ion0110.github.io/report_flow/",
      image: "https://picsum.photos/seed/report/1200/800"
    }
  ],
  skills: [
    "Excel / VBA", "PowerQuery", "Data Cleansing", "AI", "HTML / CSS / JavaScript",
    "業務プロセス自動化", "データ分析・レポート", "DX推進"
  ]
};