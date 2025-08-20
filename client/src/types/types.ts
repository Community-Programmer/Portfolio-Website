// types.ts or top of homeSlice.ts

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
