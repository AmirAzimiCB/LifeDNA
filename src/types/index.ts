import { StaticImageData } from "next/image";

export type Slide = {
  icon: string;
  title: string;
  description: string;
};

export type RoadMap = {
  id?: number;
  icon: string;
  title: string;
  description: string;
  items: string[];
  buttonText: string;
  href: string;
  className?: string;
  target?: "_self" | "_blank";
};

export type Reports = {
  id?: number;
  title: string;
  kitIncluded?: boolean;
  price: string;
  description: string;
  href: string;
  buttonText: string;
};

// get started with lifedna

export type LifeDNATabs = "have_dna_test" | "no_dna_test";

export type LifeDNASteps = {
  id?: number;
  step: number;
  title: string;
  description?: string;
  _key: LifeDNATabs;
  showIcon: boolean;
};

export type HowItWorksInThreeStepsTypes = {
  id?: number;
  step: number;
  title: string;
  description?: string;
  _key: LifeDNATabs;
  icon: StaticImageData | string;
};

// Here's what makes LifeDNA a game-changer

export type GameChanger = {
  id?: number;
  title: string;
  list: string[];
};

// testimonials

export type Testimonials = {
  id?: number;
  name: string;
  message: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

// Qna

export type QNA = {
  title: string;
  description: string;
};

// select
export type SelectOptions = {
  value: string;
  label: StaticImageData | string;
};

export type ReportItem = {
  icon: string;
  name: StaticImageData | string;
};

export type ReportCategory = {
  category: string;
  description: string;
  icon: StaticImageData | string;
  items: ReportItem[];
};

export type ReportData = ReportCategory[];

export type ReportCard = {
  title: string;
  kitIncluded: string;
  popular?: boolean;
  price: string;
  description: string;
  listItems: string[];
  image?: string;
  href: string;
};
