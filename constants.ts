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
    name: "ION0110",
    role: "Frontend Engineer",
    bio: "I craft digital experiences with a focus on motion, interaction, and performance. Designing the unseen interface between human intent and machine execution.",
    socials: [
      { name: "GitHub", url: "https://github.com/ion0110" },
      { name: "Twitter", url: "#" },
      { name: "Qiita", url: "#" }
    ]
  },
  experience: [
    {
      period: "2022 — Present",
      role: "Frontend Engineer",
      company: "Tech Company Inc.",
      description: "Spearheaded the migration to a modern React architecture, improving load times by 40%. Developed a proprietary design system used across 5 distinct products."
    },
    {
      period: "2020 — 2022",
      role: "Web Developer",
      company: "Freelance",
      description: "Delivered bespoke web solutions for diverse clients, focusing on headless CMS integrations and e-commerce optimization using Shopify and Next.js."
    }
  ],
  projects: [
    {
      id: "1",
      title: "Portfolio System",
      description: "A highly customizable portfolio generation engine powered by React and JSON. Features dynamic theming and semantic markup.",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "https://ion0110.github.io/myportfolio/",
      image: "https://picsum.photos/seed/portfolio/1200/800"
    },
    {
      id: "2",
      title: "Task Management",
      description: "A Kanban-style task manager focusing on drag-and-drop fluidity and real-time synchronization.",
      tags: ["Vue.js", "Firebase", "DnD"],
      link: "#",
      image: "https://picsum.photos/seed/task/1200/800"
    },
    {
      id: "3",
      title: "Weather Dash",
      description: "Minimalist weather visualization using complex API data aggregation and Chart.js for trend analysis.",
      tags: ["Next.js", "API", "Chart.js"],
      link: "#",
      image: "https://picsum.photos/seed/weather/1200/800"
    }
  ],
  skills: [
    "TypeScript", "React", "Next.js", "Node.js", "WebGL", "TailwindCSS", "AWS", "Figma", "UI/UX Design"
  ]
};