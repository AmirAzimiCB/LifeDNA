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
