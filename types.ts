export interface DesignSystem {
  id: string;
  name: string;
  description: string;
  colors: {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    text: string;
    textMuted: string;
    border: string;
  };
  fonts: {
    fontFamilyHeading: string;
    fontFamilyBody: string;
    headingWeight: string;
  };
  styles: {
    borderRadius: string;
    borderWidth: string;
    shadow: string;
    buttonClass: string;
    cardClass: string;
    containerClass: string;
  };
  layout: string;
  backgroundPattern: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface PortfolioContent {
  profile: {
    name: string;
    role: string;
    bio: string;
    socials: { name: string; url: string }[];
  };
  projects: Project[];
  experience: Experience[];
  skills: string[];
}
