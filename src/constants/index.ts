import {
  GameChanger,
  HowItWorksInThreeStepsTypes,
  LifeDNASteps,
  Partners,
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
  DNAWellness,
  wellness,
  skincare,
  Methylation,
  Forbes,
  Entrepreneur,
  BusinessJournal,
  DailyMail,
  Cnn,
} from "../../public/icons";

import {
  vitamins,
  fitness as FitnessHeroImage,
  mthfr,
  skincare as SkinCareHeroImage,
  sleep as SleepHeroImage,
  wellness as WellNessHeroImage,
} from "../../public/svg";

export const slides: Slide[] = [
  {
    icon: "/images/slider-icon-1.svg",
    title: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
  {
    icon: vitamins,
    title: "Vitamins",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
  {
    icon: WellNessHeroImage,
    title: "Wellness",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
  {
    icon: mthfr,
    title: "MTHFR gene",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
  {
    icon: FitnessHeroImage,
    title: "Fitness",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
  {
    icon: SleepHeroImage,
    title: "sleep",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
  {
    icon: SkinCareHeroImage,
    title: "skincare",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
];

// partners

export const PartnersData: Partners[] = [
  {
    icon: Forbes,
    title: "Forbes",
  },
  {
    icon: Entrepreneur,
    title: "Entrepreneur",
  },
  {
    icon: BusinessJournal,
    title: "BusinessJournal",
  },
  {
    icon: DailyMail,
    title: "DailyMail",
  },
  {
    icon: Cnn,
    title: "Cnn",
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
  {
    id: 5,
    title: "Wellness Report",
    description:
      "Say goodbye to generic wellness approaches and welcome a new era of personalized DNA insights tailored to optimize your well-being, empowering you to thrive.",
    items: [
      "Longevity",
      "Kidney Stone Predisposition",
      "Alcohol Consumption",
      "Diet and DNA Damage",
      "Motion Sickness",
    ],
    buttonText: "See all traits",
    icon: wellness,
    href: "/",
  },
  {
    id: 6,
    title: "Skincare",
    description:
      "Safely treat your skin and reveal the best complexion of your life.",
    items: [
      "Excessive Skin Dryness",
      "Acne",
      "Facial Pigmental Spots",
      "Skin Tanning / Sun Burning",
      "Rosacea",
    ],
    buttonText: "See all traits",
    icon: skincare,
    href: "/",
  },
  {
    id: 7,
    title: "Methylation Genes Report",
    description:
      "Get Personalized Insights Based On Your DNA’s Unique Methylation Gene Mutation.",
    items: ["MTHFR Gene", "COMT Gene", "VDR Gene", "CBS Gene", "MTR Gene"],
    buttonText: "See all traits",
    icon: Methylation,
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
  { value: "Nutrition", label: "Nutrition" },
  { value: "Vitamins & Supplements", label: "Vitamins & Supplements" },
  { value: "Fitness", label: "Fitness" },
  { value: "Personality & Cognition", label: "Personality & Cognition" },
  { value: "Wellness", label: "Wellness" },
  { value: "Skincare", label: "Skincare" },
];

export const reportData: ReportCategory[] = [
  {
    category: "Nutrition",
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
    category: "Vitamins & Supplements",
    description: "Learn which vitamins, nutrients, and supplements you need.",
    icon: Fork,
    items: [
      {
        name: "Vitamin C Levels",
        icon: BreadIcon,
      },
      {
        name: "Vitamin B12 Levels",
        icon: BreadIcon,
      },
      {
        name: "Phosphorus Levels",
        icon: BreadIcon,
      },
      {
        name: "Vitamin E Levels",
        icon: BreadIcon,
      },
      {
        name: "Vitamin B9 (Folate Levels)",
        icon: BreadIcon,
      },
      {
        name: "Vitamin K Levels",
        icon: BreadIcon,
      },
      {
        name: "Zinc Levels",
        icon: BreadIcon,
      },
      {
        name: "CoQ10 Levels",
        icon: BreadIcon,
      },
      {
        name: "Glomerular Filtration Rate",
        icon: BreadIcon,
      },
      {
        name: "Iron Levels",
        icon: BreadIcon,
      },
      {
        name: "Probiotic Need",
        icon: BreadIcon,
      },
      {
        name: "Proteinuria",
        icon: BreadIcon,
      },
      {
        name: "Cholesterol Levels",
        icon: BreadIcon,
      },
      {
        name: "Magnesium Levels",
        icon: BreadIcon,
      },
      {
        name: "Visual Acuity",
        icon: BreadIcon,
      },
      {
        name: "Copper Levels",
        icon: BreadIcon,
      },
      {
        name: "Thyroid Function",
        icon: BreadIcon,
      },
      {
        name: "Vitamin A Levels",
        icon: BreadIcon,
      },
      {
        name: "DHA Levels",
        icon: BreadIcon,
      },
      {
        name: "Melatonin Levels",
        icon: BreadIcon,
      },
      {
        name: "Biotin Levels",
        icon: BreadIcon,
      },
      {
        name: "Liver Enzyme Levels",
        icon: BreadIcon,
      },
      {
        name: "Calcium Levels",
        icon: BreadIcon,
      },
      {
        name: "Vitamin B5 Levels",
        icon: BreadIcon,
      },
      {
        name: "Vitamin B6 Levels",
        icon: BreadIcon,
      },
      {
        name: "Vitamin D Levels",
        icon: BreadIcon,
      },
      // Add more fitness items...
    ],
  },
  {
    category: "Fitness",
    description: "Personalized workout recommendations based on your DNA.",
    icon: BreadIcon,
    items: [
      {
        name: "Lactate Clearance",
        icon: BreadIcon,
      },
      {
        name: "Power vs Endurance",
        icon: BreadIcon,
      },
      {
        name: "Metabolic Rate and Metabolic Syndrome",
        icon: BreadIcon,
      },
      {
        name: "Aerobic Capacity",
        icon: BreadIcon,
      },
      {
        name: "Muscle Strength",
        icon: BreadIcon,
      },
      {
        name: "Weight Loss & Exercise",
        icon: BreadIcon,
      },
      {
        name: "Blood Pressure & Exercise",
        icon: BreadIcon,
      },
      {
        name: "HDL Cholesterol & Exercise",
        icon: BreadIcon,
      },
      {
        name: "Testosterone",
        icon: BreadIcon,
      },
      {
        name: "Insulin Sensitivity & Exercise",
        icon: BreadIcon,
      },
      {
        name: "Post-Exercise Recovery Rate",
        icon: BreadIcon,
      },
      {
        name: "Motivation to Exercise",
        icon: BreadIcon,
      },
      {
        name: "Exercise-Induced Ischemia",
        icon: BreadIcon,
      },
      {
        name: "Inflammation & Pain Tolerance",
        icon: BreadIcon,
      },
      {
        name: "Circadian Rhythm",
        icon: BreadIcon,
      },
      {
        name: "Injury Predisposition",
        icon: BreadIcon,
      },
      {
        name: "Hand Grip Strength",
        icon: BreadIcon,
      },
      {
        name: "Bone Density & Fracture Risk",
        icon: BreadIcon,
      },
    ],
  },
  {
    category: "Personality & Cognition",
    description: "Discover yourself, your intelligence, personality, and more.",
    icon: Fork,
    items: [
      {
        name: "Agreeableness",
        icon: BreadIcon,
      },
      {
        name: "Fear of Pain",
        icon: BreadIcon,
      },
      {
        name: "Emotional Support Seeking",
        icon: BreadIcon,
      },
      {
        name: "Conscientiousness",
        icon: BreadIcon,
      },
      {
        name: "Positive Affectivity",
        icon: BreadIcon,
      },
      {
        name: "Depression",
        icon: BreadIcon,
      },
      {
        name: "Openness",
        icon: BreadIcon,
      },
      {
        name: "Harm Avoidance",
        icon: BreadIcon,
      },
      {
        name: "Maternal Sensitivity",
        icon: BreadIcon,
      },
      {
        name: "Extraversion",
        icon: BreadIcon,
      },
      {
        name: "Hearing Function",
        icon: BreadIcon,
      },
      {
        name: "Hearing Function",
        icon: BreadIcon,
      },
      {
        name: "Neuroticism",
        icon: BreadIcon,
      },
      {
        name: "Sensitivity to Stimuli",
        icon: BreadIcon,
      },
      {
        name: "Gambling",
        icon: BreadIcon,
      },
      {
        name: "Loneliness",
        icon: BreadIcon,
      },
      {
        name: "Educational Attainment",
        icon: BreadIcon,
      },
      {
        name: "Mathematical Ability",
        icon: BreadIcon,
      },
      {
        name: "Resilience",
        icon: BreadIcon,
      },
      {
        name: "Hypnotizability",
        icon: BreadIcon,
      },
      {
        name: "Intelligence",
        icon: BreadIcon,
      },
      {
        name: "Instant Gratification",
        icon: BreadIcon,
      },
      {
        name: "Creativity",
        icon: BreadIcon,
      },
      {
        name: "Musical Ability",
        icon: BreadIcon,
      },
      {
        name: "Risk-taking",
        icon: BreadIcon,
      },
      {
        name: "Optimism",
        icon: BreadIcon,
      },
      {
        name: "Impulsivity",
        icon: BreadIcon,
      },
      {
        name: "Aggressive Behavior",
        icon: BreadIcon,
      },
    ],
  },
  {
    category: "Wellness",
    description:
      "Take care of your body the smart way: with genetic insights and powerful strategies.",
    icon: wellness,
    items: [
      {
        name: "Smoking Behavior & Nicotine Dependence",
        icon: BreadIcon,
      },
      {
        name: "Inguinal Hernia",
        icon: BreadIcon,
      },
      {
        name: "Excessive Sweating",
        icon: BreadIcon,
      },
      {
        name: "Alcohol Consumption",
        icon: BreadIcon,
      },
      {
        name: "Motion Sickness",
        icon: BreadIcon,
      },
      {
        name: "Kidney Stone Predisposition",
        icon: BreadIcon,
      },
      {
        name: "Insomnia",
        icon: BreadIcon,
      },
      {
        name: "Inflammatory Response",
        icon: BreadIcon,
      },
      {
        name: "Male Pattern Baldness",
        icon: BreadIcon,
      },
      {
        name: "Appendicitis",
        icon: BreadIcon,
      },
      {
        name: "Potential for Cannabis Dependence",
        icon: BreadIcon,
      },
      {
        name: "Longevity",
        icon: BreadIcon,
      },
      {
        name: "Resting Heart Rate",
        icon: BreadIcon,
      },
      {
        name: "DNA Damage & Detoxification Ability",
        icon: BreadIcon,
      },
      {
        name: "Alcohol Addiction",
        icon: BreadIcon,
      },
      {
        name: "Menstrual Cycle Length",
        icon: BreadIcon,
      },
    ],
  },
  {
    category: "Skincare",
    description:
      "Safely treat your skin and reveal the best complexion of your life.",
    icon: Fork,
    items: [
      {
        name: "Excessive Skin Dryness",
        icon: BreadIcon,
      },
      {
        name: "Stretch Marks",
        icon: BreadIcon,
      },
      {
        name: "Cellulite",
        icon: BreadIcon,
      },
      {
        name: "Acne",
        icon: BreadIcon,
      },
      {
        name: "Facial Wrinkles",
        icon: BreadIcon,
      },
      {
        name: "Dandruff",
        icon: BreadIcon,
      },
      {
        name: "Facial Pigmental Spots",
        icon: BreadIcon,
      },
      {
        name: "Freckles",
        icon: BreadIcon,
      },
      {
        name: "Skin Glycation",
        icon: BreadIcon,
      },
      {
        name: "Skin Tanning/Sun Burning",
        icon: BreadIcon,
      },
      {
        name: "Psoriasis",
        icon: BreadIcon,
      },
      {
        name: "Varicose Veins",
        icon: BreadIcon,
      },
      {
        name: "Rosacea",
        icon: BreadIcon,
      },
      {
        name: "Eczema",
        icon: BreadIcon,
      },
      {
        name: "Contact Dermatitis",
        icon: BreadIcon,
      },
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
    image: DNAWellness,
    href: "#",
  },
];
