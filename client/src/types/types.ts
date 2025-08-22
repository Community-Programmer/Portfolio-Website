export interface Counter {
  label: string;
  value: string;
}

export interface CTA {
  text: string;
  link: string;
  icon?: string;
  iconPosition?: "left" | "right";
  variant?: "primary" | "outline";
}

export interface Hero {
  id: string;
  introText: string;
  name: string;
  description: string;
  tagline: string;
  profileImage: string;
  counters: Counter[];
  ctas: CTA[];
  createdAt: string;
  updatedAt: string;
}

export type Skill = {
  id: string; 
  title: string;
  description: string;
  svgData: string;     
  isVisible: boolean;
  createdAt: string;      
  updatedAt: string;      
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];       
  liveUrl: string;
  githubUrl: string;
};


export type TechStack = {
  id: string;
  name: string;
  category: string;      
  icon: string;         
  description: string;
  projects: string[];
  createdAt: string;
  updatedAt: string;
};

export type PortfolioStats = {
  id: string;            
  technologies: number;
  projectsBuilt: number;
  yearsExperience: number;
  passionDriven: number;    
  createdAt: string;       
  updatedAt: string;       
};

export type Timeline = {
  id: string;
  period: string;
  position: string;
  company: string;
  description: string;
  technologies: string[];
  status: string;
  statusColor: string;
  side: string;
};