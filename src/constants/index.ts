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
  // nutrition
  Sodium,
  SaturatedFat,
  GlutenSensitivity,
  Lactose,
  Caffeine,
  Weight,
  Protein,
  Peach,
  Peanut,
  Sugar,
  Shrimp,
  Satiety,
  Sensitivity,
  Snacking,
  Appetite,
  Preference,
  Antioxidant,

  // Vitamins & Supplements
  VitaminsAndSupplements,
  VitaminC,
  VitaminE,
  Zinc,
  Iron,
  Cholesterol,
  Copper,
  DHA,
  Liver,
  VitaminB6,
  VitaminB12,
  VitaminB9,
  CoQ10,
  Probiotic,
  Magnesium,
  Thyroid,
  Melatonin,
  Calcium,
  VitaminD,
  Phosphorus,
  VitaminK,
  Biotin,
  VitaminB5,
  Glomerular,
  Proteinuria,
  VisualAcuity,
  VitaminA,

  // fitness
  Muscle,
  WeightLoss,
  Lactate,
  Power,
  Metabolic,
  Aerobic,
  BloodPressure,
  HDL,
  Insulin,
  Motivation,
  Exercise,
  Injury,
  HandGrip,
  BoneDensity,
  Testosterone,
  PostExercise,
  ExerciseInduced,
  Inflammation,
  Circadian,

  // Personality & Cognition
  PersonalityAndCognition,
  Agreeableness,
  Conscientiousness,
  Openness,
  Extraversion,
  Neuroticism,
  Loneliness,
  Resilience,
  InstantGratification,
  Fear,
  Impulsivity,
  Positive,
  Harm,
  Hearing,
  SensitivityToStimuli,
  Educational,
  Hypnotizability,
  Creativity,
  Optimism,
  Emotional,
  Depression,
  Maternal,
  Gambling,
  Mathematical,
  Intelligence,
  Musical,
  Aggressive,
  Risk,

  // Wellness
  Smoking,
  Alcohol,
  Insomnia,
  Appendicitis,
  Resting,
  AlcoholAddiction,
  Inguinal,
  Motion,
  Inflammatory,
  Potential,
  DNA,
  Menstrual,
  Excessive,
  Kidney,
  Male,
  Longevity,

  // Skincare
  ExcessiveSkin,
  Acne,
  Facial,
  SkinTanning,
  Rosacea,
  Stretch,
  FacialWrinkles,
  Freckles,
  Psoriasis,
  Eczema,
  Cellulite,
  Dandruff,
  SkinGlycation,
  Varicose,
  Contact,
} from "../../public/reports";

import {
  vitamins,
  fitness as FitnessHeroImage,
  mthfr,
  skincare as SkinCareHeroImage,
  sleep as SleepHeroImage,
  wellness as WellNessHeroImage,
  fitness,
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
    title: "Methylation Genes Report",
    description:
      "Get Personalized Insights Based On Your DNA’s Unique Methylation Gene Mutation.",
    items: ["MTHFR Gene", "COMT Gene", "VDR Gene", "CBS Gene", "MTR Gene"],
    buttonText: "See all traits",
    icon: Methylation,
    href: "/reports?id=1",
  },
  {
    id: 2,
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
    href: "/reports?id=2",
  },
  {
    id: 3,
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
    href: "/reports?id=3",
  },
  {
    id: 4,
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
    href: "/reports?id=4",
  },
  {
    id: 5,
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
    href: "/reports?id=5",
  },
  {
    id: 6,
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
    href: "/reports?id=6",
  },
  {
    id: 7,
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
    href: "/reports?id=7",
  },
  {
    id: 8,
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
    href: "/reports?id=8",
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
  { id: 2, value: "Nutrition", label: "Nutrition" },
  { id: 3, value: "Vitamins & Supplements", label: "Vitamins & Supplements" },
  { id: 4, value: "Fitness", label: "Fitness" },
  { id: 5, value: "Personality & Cognition", label: "Personality & Cognition" },
  { id: 6, value: "Wellness", label: "Wellness" },
  { id: 7, value: "Skincare", label: "Skincare" },
];

export const reportData: ReportCategory[] = [
  {
    id: 2,
    category: "Nutrition",
    description: "Discover the best (and worst) foods for your DNA.",
    icon: Fork,
    items: [
      { name: "Carbohydrate Metabolism", icon: BreadIcon },
      { name: "Sodium Sensitivity", icon: Sodium },
      { name: "Saturated Fat Metabolism", icon: SaturatedFat },
      { name: "Gluten Sensitivity", icon: GlutenSensitivity },
      { name: "Lactose Tolerance", icon: Lactose },
      { name: "Caffeine Sensitivity", icon: Caffeine },
      { name: "Weight Change", icon: Weight },
      { name: "Protein Intake", icon: Protein },
      { name: "Peach Allergy", icon: Peach },
      { name: "Peanut Allergy", icon: Peanut },
      { name: "Shrimp Allergy", icon: Shrimp },
      { name: "Sugar Preference", icon: Sugar },
      { name: "Satiety", icon: Satiety },
      { name: "Sensitivity To Bitter Foods", icon: Sensitivity },
      { name: "Snacking Behavior", icon: Snacking },
      { name: "Appetite", icon: Appetite },
      { name: "Preference To Fatty Foods", icon: Preference },
      { name: "Antioxidant Status", icon: Antioxidant },
    ],
  },

  {
    id: 3,
    category: "Vitamins & Supplements",
    description: "Learn which vitamins, nutrients, and supplements you need.",
    icon: VitaminsAndSupplements,
    items: [
      {
        name: "Vitamin C Levels",
        icon: VitaminC,
      },
      {
        name: "Vitamin B12 Levels",
        icon: VitaminB12,
      },
      {
        name: "Phosphorus Levels",
        icon: Phosphorus,
      },
      {
        name: "Vitamin E Levels",
        icon: VitaminE,
      },
      {
        name: "Vitamin B9 (Folate Levels)",
        icon: VitaminB9,
      },
      {
        name: "Vitamin K Levels",
        icon: VitaminK,
      },
      {
        name: "Zinc Levels",
        icon: Zinc,
      },
      {
        name: "CoQ10 Levels",
        icon: CoQ10,
      },
      {
        name: "Glomerular Filtration Rate",
        icon: Glomerular,
      },
      {
        name: "Iron Levels",
        icon: Iron,
      },
      {
        name: "Probiotic Need",
        icon: Probiotic,
      },
      {
        name: "Proteinuria",
        icon: Proteinuria,
      },
      {
        name: "Cholesterol Levels",
        icon: Cholesterol,
      },
      {
        name: "Magnesium Levels",
        icon: Magnesium,
      },
      {
        name: "Visual Acuity",
        icon: VisualAcuity,
      },
      {
        name: "Copper Levels",
        icon: Copper,
      },
      {
        name: "Thyroid Function",
        icon: Thyroid,
      },
      {
        name: "Vitamin A Levels",
        icon: VitaminA,
      },
      {
        name: "DHA Levels",
        icon: DHA,
      },
      {
        name: "Melatonin Levels",
        icon: Melatonin,
      },
      {
        name: "Biotin Levels",
        icon: Biotin,
      },
      {
        name: "Liver Enzyme Levels",
        icon: Liver,
      },
      {
        name: "Calcium Levels",
        icon: Calcium,
      },
      {
        name: "Vitamin B5 Levels",
        icon: VitaminB5,
      },
      {
        name: "Vitamin B6 Levels",
        icon: VitaminB6,
      },
      {
        name: "Vitamin D Levels",
        icon: VitaminD,
      },
      // Add more fitness items...
    ],
  },

  {
    id: 4,
    category: "Fitness",
    description: "Personalized workout recommendations based on your DNA.",
    icon: fitness,
    items: [
      {
        name: "Vitamin C Levels",
        icon: VitaminC,
      },
      {
        name: "Vitamin E Levels",
        icon: VitaminE,
      },
      {
        name: "Zinc Levels",
        icon: Zinc,
      },
      {
        name: "Iron Levels",
        icon: Iron,
      },
      {
        name: "Cholesterol Levels",
        icon: Cholesterol,
      },
      {
        name: "Muscle Strength",
        icon: Muscle,
      },
      {
        name: "Weight Loss & Exercise",
        icon: WeightLoss,
      },
      {
        name: "Copper Levels",
        icon: Copper,
      },
      {
        name: "Lactate Clearance",
        icon: Lactate,
      },
      {
        name: "Power Vs Endurance",
        icon: Power,
      },
      {
        name: "Metabolic Rate And Metabolic Syndrome",
        icon: Metabolic,
      },
      {
        name: "Aerobic Capacity",
        icon: Aerobic,
      },
      {
        name: "Blood Pressure & Exercise",
        icon: BloodPressure,
      },
      {
        name: "HDL Cholesterol & Exercise",
        icon: HDL,
      },
      {
        name: "Insulin Sensitivity & Exercise",
        icon: Insulin,
      },
      {
        name: "Motivation To Exercise",
        icon: Motivation,
      },
      {
        name: "Exercise Heart Rate Profile",
        icon: Exercise,
      },
      {
        name: "Injury Predisposition",
        icon: Injury,
      },
      {
        name: "Hand Grip Strength",
        icon: HandGrip,
      },
      {
        name: "Bone Density & Fracture Risk",
        icon: BoneDensity,
      },
      {
        name: "Testosterone",
        icon: Testosterone,
      },
      {
        name: "Bone Density & Fracture Risk",
        icon: BoneDensity,
      },
      {
        name: "Post-Exercise Recovery Rate",
        icon: PostExercise,
      },
      {
        name: "Exercise-Induced Ischemia",
        icon: ExerciseInduced,
      },
      {
        name: "Inflammation & Pain Tolerance",
        icon: Inflammation,
      },
      {
        name: "Circadian Rhythm",
        icon: Circadian,
      },
    ],
  },

  {
    id: 5,
    category: "Personality & Cognition",
    description: "Discover yourself, your intelligence, personality, and more.",
    icon: PersonalityAndCognition,
    items: [
      {
        name: "Agreeableness",
        icon: Agreeableness,
      },
      {
        name: "Conscientiousness",
        icon: Conscientiousness,
      },
      {
        name: "Openness",
        icon: Openness,
      },
      {
        name: "Extraversion",
        icon: Extraversion,
      },
      {
        name: "Neuroticism",
        icon: Neuroticism,
      },
      {
        name: "Loneliness",
        icon: Loneliness,
      },
      {
        name: "Resilience",
        icon: Resilience,
      },
      {
        name: "Instant Gratification",
        icon: InstantGratification,
      },
      {
        name: "Impulsivity",
        icon: Impulsivity,
      },
      {
        name: "Fear Of Pain",
        icon: Fear,
      },
      {
        name: "Positive Affectivity",
        icon: Positive,
      },
      {
        name: "Harm Avoidance",
        icon: Harm,
      },
      {
        name: "Hearing Function",
        icon: Hearing,
      },
      {
        name: "Sensitivity to Stimuli",
        icon: SensitivityToStimuli,
      },
      {
        name: "Educational Attainment",
        icon: Educational,
      },
      {
        name: "Hypnotizability",
        icon: Hypnotizability,
      },
      {
        name: "Creativity",
        icon: Creativity,
      },
      {
        name: "Optimism",
        icon: Optimism,
      },
      {
        name: "Emotional Support Seeking",
        icon: Emotional,
      },
      {
        name: "Depression",
        icon: Depression,
      },
      {
        name: "Maternal Sensitivity",
        icon: Maternal,
      },
      {
        name: "Gambling",
        icon: Gambling,
      },
      {
        name: "Mathematical Ability",
        icon: Mathematical,
      },
      {
        name: "Intelligence",
        icon: Intelligence,
      },
      {
        name: "Musical Ability",
        icon: Musical,
      },
      {
        name: "Aggressive Behavior",
        icon: Aggressive,
      },
      {
        name: "Risk-taking",
        icon: Risk,
      },
    ],
  },

  {
    id: 6,
    category: "Wellness",
    description:
      "Take care of your body the smart way: with genetic insights and powerful strategies.",
    icon: wellness,
    items: [
      {
        name: "Smoking Behavior & Nicotine Dependence",
        icon: Smoking,
      },
      {
        name: "Alcohol Consumption",
        icon: Alcohol,
      },
      {
        name: "Insomnia",
        icon: Insomnia,
      },
      {
        name: "Appendicitis",
        icon: Appendicitis,
      },
      {
        name: "Resting Heart Rate",
        icon: Resting,
      },
      {
        name: "Alcohol Addiction",
        icon: AlcoholAddiction,
      },
      {
        name: "Inguinal Hernia",
        icon: Inguinal,
      },
      {
        name: "Motion Sickness",
        icon: Motion,
      },
      {
        name: "Inflammatory Response",
        icon: Inflammatory,
      },
      {
        name: "Potential For Cannabis Dependence",
        icon: Potential,
      },
      {
        name: "DNA Damage & Detoxification Ability",
        icon: DNA,
      },
      {
        name: "Menstrual Cycle Length",
        icon: Menstrual,
      },
      {
        name: "Excessive Sweating",
        icon: Excessive,
      },
      {
        name: "Kidney Stone Predisposition",
        icon: Kidney,
      },
      {
        name: "Male Pattern Baldness",
        icon: Male,
      },
      {
        name: "Longevity",
        icon: Longevity,
      },
    ],
  },

  {
    id: 7,
    category: "Skincare",
    description:
      "Safely treat your skin and reveal the best complexion of your life.",
    icon: skincare,
    items: [
      {
        name: "Excessive Skin Dryness",
        icon: ExcessiveSkin,
      },
      {
        name: "Acne",
        icon: Acne,
      },
      {
        name: "Facial Pigmental Spots",
        icon: Facial,
      },
      {
        name: "Skin Tanning / Sun Burning",
        icon: SkinTanning,
      },
      {
        name: "Rosacea",
        icon: Rosacea,
      },
      {
        name: "Stretch Marks",
        icon: Stretch,
      },
      {
        name: "Facial Wrinkles",
        icon: FacialWrinkles,
      },
      {
        name: "Freckles",
        icon: Freckles,
      },
      {
        name: "Psoriasis",
        icon: Psoriasis,
      },
      {
        name: "Eczema",
        icon: Eczema,
      },

      {
        name: "Cellulite",
        icon: Cellulite,
      },
      {
        name: "Dandruff",
        icon: Dandruff,
      },
      {
        name: "Skin Glycation",
        icon: SkinGlycation,
      },
      {
        name: "Varicose Veins",
        icon: Varicose,
      },
      {
        name: "Contact Dermatitis",
        icon: Contact,
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
