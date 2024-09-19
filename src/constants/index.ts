import {
  GameChanger,
  HowItWorksInThreeStepsTypes,
  LifeDNASteps,
  QNA,
  ReportCard,
  ReportCategory,
  Reports,
  RoadMap,
  SelectOptions,
  Slide,
  Testimonials,
} from "@/types";
import {
  Nutrition,
  Vitamins,
  Personality,
  Fitness,
  Basket,
  ParkOutline,
  Clock,
  Fork,
  BreadIcon,
} from "../../public/icons";

export const slides: Slide[] = [
  {
    icon: "/images/slider-icon-1.svg",
    title: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
  {
    icon: "/images/slider-icon-1.svg",
    title: "Vitamins",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
  {
    icon: "/images/slider-icon-1.svg",
    title: "Wellness",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
];

// Explore Your Personalized Roadmap to Better Wellness

export const RoadMapData: RoadMap[] = [
  {
    id: 1,
    title: "Nutrition Report",
    description:
      "Take your nutrition to the next level. Achieve sustainable weight loss without starving yourself, spending countless hours at the gym, or wasting time on fad diets.",
    items: [
      "Power vs Endurance",
      "Post Exercise Recovery Rate",
      "Injury Predisposition",
      "Blood Pressure and Exercise",
      "Weight Loss and Exercise",
    ],
    buttonText: "See all traits",
    icon: Nutrition,
    href: "/",
  },
  {
    id: 2,
    title: "Vitamins and Supplements Report",
    description:
      "Get a clear understanding of which vitamins, minerals, and nutrients you potentially need based on your DNA analysis. ",
    items: [
      "Cholesterol Levels",
      "Iron Levels",
      "Probiotic Need",
      "Calcium Levels",
      "Zinc Levels",
    ],
    buttonText: "See all traits",
    icon: Vitamins,
    href: "/",
  },
  {
    id: 3,
    title: "Fitness Report",
    description:
      "Supercharge Your Workout Routine – Level Up Your Exercise with Personalized Fitness Insights.",
    items: [
      "Power vs Endurance",
      "Post Exercise Recovery Rate",
      "Injury Predisposition",
      "Blood Pressure and Exercise",
      "Weight Loss and Exercise",
    ],
    buttonText: "See all traits",
    icon: Fitness,
    href: "/",
  },
  {
    id: 4,
    title: "Personality & Cognition",
    description: "Discover yourself, your intelligence, personality, and more.",
    items: [
      "Agreeableness",
      "Conscientiousness",
      "Openness",
      "Extraversion",
      "Neuroticism",
    ],
    buttonText: "See all traits",
    icon: Personality,
    href: "/",
  },
];

// reports data

export const ReportsData: Reports[] = [
  {
    id: 1,
    title: "Methylation Genes Report",
    kitIncluded: false,
    price: "$99",
    description:
      "Feeling drained and struggling with mood swings? Discover the genetic reasons behind these signs with personalized insights based on your MTHFR gene and other unique methylation gene mutations. No DNA Kit Included.",
    href: "/",
    buttonText: "Get My Report Now",
  },
  {
    id: 2,
    title: "Methylation Genes Report + Wellness Report Bundle",
    kitIncluded: false,
    price: "$199",
    description:
      "Everything in your Methylation Genes Report, and more! You’ll unlock more personalized insights beyond your methylation analysis to help you make informed decisions about your well-being.",
    href: "/",
    buttonText: "Get My Report Now",
  },
  {
    id: 3,
    title: "Methylation Genes Report + Wellness Test Bundle",
    kitIncluded: true,
    price: "$249",
    description:
      "Get everything in your Methylation Genes Report + Wellness Report Bundle, along with a DNA kit.",
    href: "/",
    buttonText: "Get My Report Now",
  },
];

// Get started with LifeDNA today in 3 easy steps

export const LifeDNAStepsData: LifeDNASteps[] = [
  {
    id: 1,
    step: 1,
    showIcon: true,
    title: "Purchase your LifeDNA Reports",
    _key: "have_dna_test",
  },
  {
    id: 2,
    step: 2,
    showIcon: true,
    title: "Upload your existing DNA Test",
    _key: "have_dna_test",
    description:
      "Follow the steps on how to upload your 23andme, Ancestry, MyHeritage, Living DNA, or Family Tree DNA data.",
  },
  {
    id: 3,
    step: 3,
    showIcon: false,
    title: "Discover personalized wellness insights from your DNA",
    _key: "have_dna_test",
    description: "Unlock 120+ traits reports in a few hours.",
  },
  {
    id: 4,
    step: 1,
    showIcon: true,
    title: "Order your LifeDNA Test Kit",
    _key: "no_dna_test",
  },
  {
    id: 5,
    step: 2,
    showIcon: true,
    title: "Collect Your DNA Sample",
    _key: "no_dna_test",
    description:
      "Take a DNA test by swabbing your cheeks and send your sample back to our lab for your DNA analysis.",
  },
  {
    id: 6,
    step: 3,
    showIcon: false,
    title: "Get access to your personalized wellness reports in 3 - 5 weeks!",
    _key: "no_dna_test",
    description:
      "Unlock 120+ traits reports tailored to you and your unique DNA.",
  },
];

// Here's what makes LifeDNA a game-changer

export const LifeDNAGameChangerData: GameChanger[] = [
  {
    id: 1,
    title:
      "120+ DNA-Tailored Reports Designed To Support Your Overall Well-being",
    list: [
      "Achieve sustainable weight loss without starving yourself, or wasting time on fad diets and ineffective workouts.",
      "Explore your sleep, skin, as well as your personality traits and stress triggers. ",
    ],
  },
  {
    id: 2,
    title: "Embark on a Journey of Self-Discovery and Optimization",
    list: [
      "Dive into undiscovered talents and passions.",
      "Discover potential genetic predispositions and unlock strategies to better for prepare for wellness challenges. ",
    ],
  },
  {
    id: 3,
    title: "Accelerate Your Path to Well-being",
    list: [
      "Say goodbye to guesswork with your DNA leading the way.",
      "Embrace personalized recommendations, leaving one-size-fits-all approaches behind. ",
    ],
  },
  {
    id: 4,
    title: "Unlock Your DNA Like Never Before",
    list: [
      "Discover insights that are not offered by other DNA wellness tools.",
      "Unlock genetic secrets that are typically missed by other DNA testing companies.",
    ],
  },
];

export const HowItWorksInThreeStepsData: HowItWorksInThreeStepsTypes[] = [
  {
    id: 1,
    step: 1,
    title: "Purchase",
    _key: "have_dna_test",
    description:
      "Get your DNA Test Bundle + Platinum Membership. Our DNA kit takes 3-7 days to get to you.",
    icon: Basket,
  },
  {
    id: 2,
    step: 2,
    title: "Swab",
    _key: "have_dna_test",
    description:
      "Follow the instructions in your kit on how to collect your DNA sample and send it back to our lab. It takes around 5 days to ship your saliva swab back to us.",
    icon: ParkOutline,
  },
  {
    id: 3,
    step: 3,
    title: "Explore",
    _key: "have_dna_test",
    description:
      "It takes 3-5 weeks for your DNA sample to be analyzed in our lab. As soon as your reports are generated, we will send you a notification via email. You will then be able to explore your personalized reports.",
    icon: Clock,
  },
  {
    id: 4,
    step: 1,
    title: "Purchase",
    _key: "no_dna_test",
    description:
      "Get your DNA Test Bundle + Platinum Membership. Our DNA kit takes 3-7 days to get to you.",
    icon: Basket,
  },
  {
    id: 5,
    step: 2,
    title: "Swab",
    _key: "no_dna_test",
    description:
      "Follow the instructions in your kit on how to collect your DNA sample and send it back to our lab. It takes around 5 days to ship your saliva swab back to us.",
    icon: ParkOutline,
  },
  {
    id: 6,
    step: 3,
    title: "Explore",
    _key: "no_dna_test",
    description:
      "It takes 3-5 weeks for your DNA sample to be analyzed in our lab. As soon as your reports are generated, we will send you a notification via email. You will then be able to explore your personalized reports.",
    icon: Clock,
  },
];

// testimonials

export const TestimonialsData: Testimonials[] = [
  {
    id: 1,
    name: "D. Ramos",
    message:
      "Awesome service that gives a deeper insight into how to better improve your overall well-being. Quick and easy product to use with an excellent customer service team. Thank you LifeDNA for helping me better understand myself!",
    rating: 5,
  },
  {
    id: 2,
    name: "D. Ramos",
    message:
      "Awesome service that gives a deeper insight into how to better improve your overall well-being.",
    rating: 4,
  },
];

// qna

export const QNAData: QNA[] = [
  {
    title:
      "I have already taken a DNA test before. Can I upload my existing raw data?",
    description:
      "Absolutely! Our system is comppatible with 23andme, Ancestry, My Heritage, Living DNA, and Family Tree DNA data. You simply need to upload your raw file from any at these companies, and your result will be generated in a few hours.",
  },
  {
    title:
      "Will this report dianose any diseases or conditions that I may have?",
    description:
      "No, our reports do not diagnose you with any diseases. The LifeDNA Reports primarily provide information on your nutrition, fitness, supplementation wellness, personality, cognition, and skin care, sleep, and methylation.",
  },
  {
    title:
      "Will you sell my data to third parties like insurance companies? how do you protect my data?",
    description:
      "No. When you upload your DNA to LifeDNA, you keep 100% ownership over your data. We will NEVER sell your data, and we will NEVER share it without your permission. Your data is encrypted, protected, and safe. You can have your DNA information deleted anytime. Just send us a message and we’ll do so right away.",
  },
];

export const reportOptions: SelectOptions[] = [
  { value: "nutrition", label: "Nutrition" },
  { value: "fitness", label: "Fitness" },
  { value: "wellness", label: "Wellness" },
];

export const reportData: ReportCategory[] = [
  {
    category: "nutrition",
    description: "Discover the best (and worst) foods for your DNA.",
    icon: Fork,
    items: [
      { name: "Carbohydrate Metabolism", icon: BreadIcon },
      { name: "Sodium Sensitivity", icon: BreadIcon },
      { name: "Saturated Fat Metabolism", icon: BreadIcon },
      { name: "Gluten Sensitivity", icon: BreadIcon },
      { name: "Lactose Tolerance", icon: BreadIcon },
      { name: "Caffeine Sensitivity", icon: BreadIcon },
      { name: "Weight Change", icon: BreadIcon },
      { name: "Protein Intake", icon: BreadIcon },
      { name: "Peach Allergy", icon: BreadIcon },
      { name: "Peanut Allergy", icon: BreadIcon },
      { name: "Shrimp Allergy", icon: BreadIcon },
      { name: "Sugar Preference", icon: BreadIcon },
      { name: "Satiety", icon: BreadIcon },
      { name: "Sensitivity To Bitter Foods", icon: BreadIcon },
      { name: "Snacking Behavior", icon: BreadIcon },
      { name: "Appetite", icon: BreadIcon },
      { name: "Preference To Fatty Foods", icon: BreadIcon },
      { name: "Antioxidant Status", icon: BreadIcon },
    ],
  },
  {
    category: "fitness",
    description: "Personalized workout recommendations based on your DNA.",
    icon: Fork,
    items: [
      { name: "Muscle Strength", icon: BreadIcon },
      { name: "Endurance", icon: BreadIcon },
      // Add more fitness items...
    ],
  },
  {
    category: "wellness",
    description:
      "Get insights into your overall well-being based on your genetics.",
    icon: Fork,
    items: [
      { name: "Sleep Quality", icon: BreadIcon },
      { name: "Stress Response", icon: BreadIcon },
      // Add more wellness items...
    ],
  },
];

export const reportCards: ReportCard[] = [
  {
    title: "Methylation Genes Report",
    kitIncluded: "*No DNA Kit Included",
    price: "$99",
    description:
      "Feeling drained and struggling with mood swings? Discover the genetic reasons behind these signs with personalized insights based on your MTHFR gene and other unique methylation gene mutations. No DNA Kit Included.",
    listItems: [
      "Methylation Genes Report",
      "MTHFR Gene",
      "COMT Gene",
      "VDR Gene",
      "CBS Gene",
      "MTR Gene",
      "BHMT Gene",
      "SHMT Gene",
      "AHCY Gene",
      "ACAT Gene",
      "MAO A Gene",
      "MTHFD1 Gene",
      "NOS3 Gene",
    ],
    href: "#",
  },
  {
    title: "Methylation Genes Report + Wellness Report Bundle",
    kitIncluded: "*No DNA Kit Included",
    price: "$199",
    description:
      "Everything in your Methylation Genes Report, and more! You’ll unlock more personalized insights beyond your methylation analysis to help you make informed decisions about your well-being.",
    listItems: [
      "Methylation Genes Report",
      "Nutrition Report",
      "Fitness Report",
      "Vitamins & Supplements Report",
      "Wellness Report",
      "Personality & Cognition Report",
      "Skincare Report",
      "New Traits Weekly",
      "Genomic Newsletters",
      "Wellness Goals",
      "25% Discount On All LifeDNA Reports And Products",
    ],
    href: "#",
  },
  {
    title: "Methylation Genes Report + Wellness Test Bundle",
    kitIncluded: "*DNA Kit Included",
    popular: true, // This one is marked as popular
    price: "$249",
    description:
      "Get everything in your Methylation Genes Report + Wellness Report Bundle, along with a DNA kit.",
    listItems: [
      "DNA Test Kit",
      "Methylation Genes Report",
      "Nutrition Report",
      "Fitness Report",
      "Vitamins & Supplements Report",
      "Wellness Report",
      "Personality & Cognition Report",
      "Skincare Report",
      "New Traits Weekly",
      "Genomic Newsletters",
      "Wellness Goals",
      "25% Discount On All LifeDNA Reports And Products",
    ],
    image: "/path-to-image.jpg", // Replace with your actual image path
    href: "#",
  },
];
