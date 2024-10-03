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
  PersonalityHome,
  SleepReport,
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
  Reportfitness,
  Conscientiousness,
} from "../../public/reports";

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
    icon: mthfr,
    title: "Methylation",
    description:
      "Get deep insights into your MTHFR, COMT, VDR, MOA-A, and up to 8 other important genes that can impact your wellness.",
  },
  {
    icon: "/images/slider-icon-1.svg",
    title: "Nutrition",
    description:
      "Find out how you process macronutrients based on DNA. See how your genes can influence factors like macronutrient metabolism, food intolerances, allergies, and more.",
  },
  {
    icon: vitamins,
    title: "Vitamins & Supplements",
    description:
      "Make educated choices about supplements that align with your genetic predispositions.",
  },
  {
    icon: FitnessHeroImage,
    title: "Fitness",
    description:
      "See how to optimize your fitness journey and maximize your progress, recovery, and minimize setbacks based on your DNA.",
  },
  {
    icon: WellNessHeroImage,
    title: "Wellness",
    description:
      "Take care of your body the smart way: with genetic insights and powerful strategies.",
  },

  {
    icon: SleepHeroImage,
    title: "sleep",
    description:
      "Better understand how to optimize your natural sleep patterns and habits based on DNA.",
  },
  {
    icon: SkinCareHeroImage,
    title: "skincare",
    description: "Understand and optimize your skin like never before. ",
  },
  {
    icon: PersonalityHome,
    title: "Personality & Cognition ",
    description:
      "Discover yourself, your genetic intelligence, personality predispositions, natural talents, and more.",
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
      "Identify potential genetic reasons behind fatigue, mood swings, and other wellness challenges to take control of your well-being.",
    items: [
      "MTHFR Gene",
      "COMT Gene",
      "CBS Gene",
      "MTR & MTRR Gene",
      "+ 8 Other Genes",
    ],
    buttonText: "See all traits",
    icon: Methylation,
    href: "/reports?id=1",
  },
  {
    id: 2,
    title: "Nutrition Report",
    description:
      "Take the guesswork out of your diet and support your weight loss journey using your DNA.",
    items: [
      "Carbohydrate Metabolism",
      "Saturated Fat Metabolism",
      "Weight Change",
      "Gluten Sensitivity",
      "Lactose Tolerance",
      "+ 13 Other Traits",
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
      "+ 20 Other Traits",
    ],
    buttonText: "See all traits",
    icon: Vitamins,
    href: "/reports?id=3",
  },
  {
    id: 4,
    title: "Fitness Report",
    description:
      "Optimize your workout routine: level up your exercise with personalized fitness insights.",
    items: [
      "Power vs Endurance",
      "Post Exercise Recovery Rate",
      "Injury Predisposition",
      "Blood Pressure and Exercise",
      "Weight Loss and Exercise",
      "+ 15 Other Traits",
    ],
    buttonText: "See all traits",
    icon: Fitness,
    href: "/reports?id=4",
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
      "+ 10 Other Traits",
    ],
    buttonText: "See all traits",
    icon: wellness,
    href: "/reports?id=6",
  },
  {
    id: 7,
    title: "Sleep Report",
    description:
      "Unlock Insights into your sleep patterns and tips for a better night's rest.",
    items: ["Chronotype", "Potential For Insomnia", "Melatonin Secretion"],
    buttonText: "See all traits",
    icon: SleepReport,
    href: "/reports?id=7",
  },
  {
    id: 8,
    title: "Skincare",
    description:
      "Optimize your skincare routine based on DNA-based ingredient suggestions and insights.",
    items: [
      "Acne",
      "Wrinkles",
      "Contact Dermatitis",
      "Excessive Skin Dryness",
      "Cellulite",
      "+ 10 Other Traits",
    ],
    buttonText: "See all traits",
    icon: skincare,
    href: "/reports?id=8",
  },
  {
    id: 5,
    title: "Personality & Cognition",
    description:
      "Better understand your stress triggers and coping mechanisms.",
    items: [
      "Creativity",
      "Depression",
      "Impulsivity",
      "Musical Ability",
      "Intelligence",
      "+ 20 Other Traits",
    ],
    buttonText: "See all traits",
    icon: Personality,
    href: "/reports?id=5",
  },
];

// reports data

export const ReportsData: Reports[] = [
  {
    id: 1,
    title: "12 Methylation Genes Report",
    kitIncluded: false,
    price: "$99",
    description:
      "Our 12 Methylation Genes Report provides personalized genetic insights into your MTHFR, COMT, and CBS genes, helping you uncover potential genetic reasons behind fatigue, mood swings, and more.",
    href: "https://my.lifedna.com/payments?line_items_added%5B%5D=LDMETHRV99&checkbox_items%5B%5D=LDNUTREPV37,LDVIREPV37,LDPGCV67&upsells%5B%5D=LDAIOPV97,LDAGREPV67,LDAIOPV57,LDPGCV67&channel=flow&funnel=LDMETH99NEWHOME&pt=cc",

    buttonText: "Get My Report Now",
  },
  {
    id: 2,
    title: "12 Methylation Genes Report + Wellness Report Bundle",
    kitIncluded: false,
    price: "$199",
    description:
      "Everything in your 12 Methylation Genes Report, and more! You’ll unlock over 115 additional personalized trait reports beyond your methylation analysis to help you make informed decisions about your well-being.",
    href: "https://my.lifedna.com/payments?line_items_added%5B%5D=LDPLATV99,LDMETHRV100&checkbox_items%5B%5D=LDAGREPV67,LDPGCV67&upsells%5B%5D=LDCUSTOMSUPPV397,LDCUSTOMEALV197,SUPSEEUPS,LDPGCV67&channel=flow&funnel=LDPLATMETH199HOME&pt=cc",

    buttonText: "Get My Report Now",
  },
  {
    id: 3,
    title: "12 Methylation Genes Report + Wellness Test Bundle",
    kitIncluded: true,
    price: "$249",
    description:
      "Get everything in your 12 Methylation Genes Report + Wellness Report Bundle, along with a DNA kit.",
    href: "https://my.lifedna.com/payments?line_items_added%5B%5D=LDPLATV99,LDMETHRV99,LDDTKV51&checkbox_items%5B%5D=LDAGREPV67,LDPGCV67&upsells%5B%5D=LDCUSTOMSUPPV397,LDCUSTOMEALV197,SUPSEEUPS,LDPGCV67&channel=flow&funnel=LDPLATMETHKIT249HOME&pt=cc",

    buttonText: "Get My Report Now",
  },
];

// Get started with LifeDNA today in 3 easy steps

export const LifeDNAStepsData: LifeDNASteps[] = [
  {
    id: 1,
    step: 1,
    showIcon: true,
    title:
      "Purchase your 12 Methylation Genes Report / 12 Methylation Genes Report + Wellness Report Bundle",
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
    title: "Discover personalized wellness insights from your DNA!",
    _key: "have_dna_test",
    description: "Unlock 130+ traits reports in a few hours.",
  },
  {
    id: 4,
    step: 1,
    showIcon: true,
    title: "Order your 12 Methylation Genes Report + Wellness Test Bundle",
    _key: "no_dna_test",
  },
  {
    id: 5,
    step: 2,
    showIcon: true,
    title: "Take A DNA Test",
    _key: "no_dna_test",
    description:
      "Follow the steps in the kit on how to get your DNA sample. Get your results in 3-5 weeks!",
  },
  {
    id: 6,
    step: 3,
    showIcon: false,
    title:
      "Discover personalized methylation and wellness insights from your DNA!",
    _key: "no_dna_test",
    description: "Unlock up to 130+ trait reports.",
  },
];

// Here's what makes LifeDNA a game-changer

export const LifeDNAGameChangerData: GameChanger[] = [
  {
    id: 1,
    title: "130+ DNA-Tailored Reports for Comprehensive Wellness",
    list: [
      "Our reports are designed to support multiple aspects of your well-being. Uncover valuable insights about your methylation, food and workout response, supplementation, sleep patterns, potential skincare needs, personality traits, and likely stress triggers.",
    ],
  },
  {
    id: 2,
    title: "A Journey of Self-Discovery and Optimization",
    list: [
      "Explore your hidden skills and passions through your unique genetic profile. Identify potential genetic predispositions and gain actionable strategies to overcome wellness challenges before they arise.",
    ],
  },
  {
    id: 3,
    title: "Achieve Your Goals Faster",
    list: [
      "Eliminate the guesswork – let your DNA guide you to optimal wellness. Enjoy personalized diet and fitness suggestions tailored specifically to you, moving beyond one-size-fits-all.",
    ],
  },
  {
    id: 4,
    title:
      "Cutting-Edge Insights That Go Beyond Traditional DNA Wellness Tools",
    list: [
      "Uncover genetic secrets and wellness strategies that other DNA testing companies can miss.",
    ],
  },
];

export const HowItWorksInThreeStepsData: HowItWorksInThreeStepsTypes[] = [
  {
    id: 1,
    step: 1,
    title: "Select Your Plan",
    _key: "have_dna_test",
    description:
      "Choose between our  12 Methylation Genes Report and our 12 Methylation Genes Report + Wellness Report Bundle. These plans provide access to your personalized insights within an hour.",
    icon: Basket,
  },
  {
    id: 2,
    step: 2,
    title: "Upload  Your Raw Data",
    _key: "have_dna_test",
    description:
      "Simply upload your raw data, and our system will promptly analyze it. You'll be notified via email as soon as your reports are ready to view!",
    icon: ParkOutline,
  },
  {
    id: 3,
    step: 3,
    title: "Start Optimizing Your Wellness!",
    _key: "have_dna_test",
    description:
      "Dive into your actionable DNA insights, kick starting your journey to optimal wellness!",
    icon: Clock,
  },
  {
    id: 4,
    step: 1,
    title: "Select Your Plan",
    _key: "no_dna_test",
    description:
      "Get our 12 Methylation Genes Report + Wellness Test Bundle which includes a LifeDNA kit to help you get started. It ships in 1 to 3 days.",
    icon: Basket,
  },
  {
    id: 5,
    step: 2,
    title: "Take A DNA Test",
    _key: "no_dna_test",
    description:
      "Simply follow the kit instructions for a simple cheek swab. Mail it back with your DNA sample and get your results in 2  weeks.",
    icon: ParkOutline,
  },
  {
    id: 6,
    step: 3,
    title: "Start Optimizing Your Wellness!",
    _key: "no_dna_test",
    description:
      "Empower your well-being with the guidance of your personalized DNA reports!",
    icon: Clock,
  },
];

// testimonials

export const TestimonialsData: Testimonials[] = [
  {
    id: 1,
    name: "Jeff Feller",
    message:
      "Very detailed DNA test results! I went to LifeDNA and got an insane amount of detail for less than half the price. I was very impressed with the findings, the details for each, and all the other little things I could dive into.",
    rating: 5,
  },
  {
    id: 2,
    name: "Hila",
    message:
      "Easy to order. Easy to use. Great support and well-designed reports. I highly recommend it.",
    rating: 5,
  },
  {
    id: 3,
    name: "Val",
    message:
      "Great opportunity to learn about your genes. I recommend learning more about your body with LifeDNA.",
    rating: 5,
  },
  {
    id: 4,
    name: "James Ryan",
    message:
      "A total view of you! 10/10. The results match up with what I’ve been told by doctors over the years and have also helped explain various family genetic problems.",
    rating: 5,
  },
  {
    id: 5,
    name: "Karen P.",
    message:
      "This was a very interesting and unique experience! I highly recommend it to everyone who has done the DNA testing. Everything that it discovered were things that I thought were so or maybe didn't even think about, but all of the results were spot on!",
    rating: 5,
  },
  {
    id: 5,
    name: "Lori C.",
    message:
      "Everything was great. The website is easy to navigate and has much useful information.",
    rating: 5,
  },
];

// qna

export const QNAData: QNA[] = [
  {
    title:
      "I have already taken a DNA test before. Can I upload my existing raw data?",
    description:
      "Absolutely! Our system is compatible with all DNA testing company, like 23andme, Ancestry, My Heritage, Living DNA, and Family Tree DNA. You simply need to upload your raw file from any of these companies, and your result will be generated in a few hours.",
  },
  {
    title: "I have never taken a DNA test before. Can I do a DNA test?",
    description:
      "LifeDNA offers a simple, easy-to-use DNA test to help you finally get started on your personalized wellness journey. Unlock your methylation results in just 3-5 weeks!",
  },
  {
    title:
      "Will this report diagnose any diseases or conditions that I may have?",
    description:
      "No, our reports do not diagnose you with any diseases. The LifeDNA Reports primarily provide information on your methylation, nutrition, fitness, supplementation wellness, personality, cognition, skincare, and sleep.",
  },
  {
    title:
      "Will you sell my data to third parties like insurance companies? how do you protect my data?",
    description:
      "No. When you upload your DNA to LifeDNA, you keep 100% ownership over your data. We will NEVER sell your data.",
  },
];

export const reportOptions: SelectOptions[] = [
  { id: 1, value: "Methylation ", label: "Methylation " },
  { id: 2, value: "Nutrition", label: "Nutrition" },
  { id: 3, value: "Vitamins & Supplements", label: "Vitamins & Supplements" },
  { id: 4, value: "Fitness", label: "Fitness" },
  { id: 6, value: "Wellness", label: "Wellness" },
  { id: 7, value: "Sleep", label: "Sleep" },
  { id: 8, value: "Skincare", label: "Skincare" },
  { id: 5, value: "Personality & Cognition", label: "Personality & Cognition" },
];

export const reportData: ReportCategory[] = [
  {
    id: 1,
    category: "Methylation ",
    description:
      "Learn how different genes can affect your methylation process, a vital chemical reaction that influences many aspects of your wellness, such as energy, mood, inflammation, and gene expression.  ",
    icon: Methylation,
    items: [
      { name: "COMT", icon: Methylation },
      { name: "MTHFR", icon: Methylation },
      { name: "VDR", icon: Methylation },
      { name: "MAO-A", icon: Methylation },
      { name: "ACAT", icon: Methylation },
      { name: "MTR & MTRR", icon: Methylation },
      { name: "BHMT", icon: Methylation },
      { name: "AHCY", icon: Methylation },
      { name: "CBS", icon: Methylation },
      { name: "SHMT1", icon: Methylation },
      { name: "NOS3", icon: Methylation },
      { name: "MTHFD1", icon: Methylation },
    ],
  },
  {
    id: 2,
    category: "Nutrition",
    description:
      "Discover how your DNA can affect your metabolism, food preferences, sensitivities, and dietary needs.  ",
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
    description:
      "Find out how your DNA can influence your predisposition toward deficiencies in different vitamins and minerals. Get tailored suggestions for the best supplements to help support your wellness.",
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
    description:
      "Discover how your DNA can affect your injury likelihood, muscle strength, endurance, and recovery. Get personalized suggestions on how to achieve your fitness goals.",
    icon: Reportfitness,
    items: [
      {
        name: "Muscle Strength ",
        icon: Muscle,
      },
      {
        name: "Weight Loss & Exercise",
        icon: WeightLoss,
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
        name: "Metabolic Syndrome",
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
        name: "Exercise Heart Rate Recovery",
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
        name: "Muscle Hypertrophy",
        icon: Reportfitness,
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
        name: "Inflammation and Exercise",
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
    description:
      "Explore how your DNA can shape your personality, intelligence, creativity, and mental abilities. Get insights into your potential genetic strengths and weaknesses.",
    icon: PersonalityAndCognition,
    items: [
      {
        name: "Agreeableness",
        icon: Agreeableness,
      },

      {
        name: "Openness",
        icon: Openness,
      },
      {
        name: "Extroversion vs Introversion",
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
      {
        name: "Cognitive Control",
        icon: Conscientiousness,
      },
      {
        name: "Morningness",
        icon: Circadian,
      },
    ],
  },

  {
    id: 6,
    category: "Wellness",
    description:
      "Understand how your DNA can impact your well-being, longevity, personal habits, and more. Get tips on how to improve your overall wellness and happiness.",
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
        name: "Cannabis Dependence and Mental Health",
        icon: Potential,
      },
      {
        name: "Diet and DNA Damage",
        icon: DNA,
      },
      {
        name: "Menstrual Cycle Length",
        icon: Menstrual,
      },
      {
        name: "Excessive Sweating (Hyperhidrosis)”",
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
    id: 8,
    category: "Skincare",
    description:
      "Learn how your DNA can influence your skin type, aging, sun sensitivity, likelihood of severe acne, and more. Get personalized suggestions for the best skincare ingredients and routines.",
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
        name: "Skin Tanning vs. Sunburning",
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
        name: "Dandruff (Seborrheic Dermatitis)",
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
  {
    id: 7,
    category: "Sleep",
    description:
      "Discover the profound impact your DNA can have on your sleep patterns, quality, and overall well-being. Receive personalized suggestions on optimal sleep hygiene practices based on your genetic profile. ",
    icon: SleepReport,
    items: [
      {
        name: "Chronotype",
        icon: SleepReport,
      },
      {
        name: "Melatonin Secretion",
        icon: SleepReport,
      },
      {
        name: "Potential for Insomnia",
        icon: SleepReport,
      },
    ],
  },
];

export const reportCards: ReportCard[] = [
  {
    title: "12 Methylation Genes Report",
    kitIncluded: "*No DNA Kit Included",
    price: "$99",
    description:
      "Our 12 Methylation Genes Report covers a wide range of genetic mutations and powerful insights—for less than half the price of other methylation test providers. No DNA Kit Included.",
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
    href: "https://my.lifedna.com/payments?line_items_added%5B%5D=LDMETHRV99&checkbox_items%5B%5D=LDNUTREPV37,LDVIREPV37,LDPGCV67&upsells%5B%5D=LDAIOPV97,LDAGREPV67,LDAIOPV57,LDPGCV67&channel=flow&funnel=LDMETH99NEWPLANS&pt=cc",
  },
  {
    title: "12 Methylation Genes Report + Wellness Report Bundle",
    kitIncluded: "*No DNA Kit Included",
    price: "$199",
    description:
      "Everything in your 12 Methylation Genes Report, and more! You’ll unlock over 115 additional personalized trait reports beyond your methylation analysis to help you make informed decisions about your well-being.",
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
    href: "https://my.lifedna.com/payments?line_items_added%5B%5D=LDPLATV99,LDMETHRV100&checkbox_items%5B%5D=LDAGREPV67,LDPGCV67&upsells%5B%5D=LDCUSTOMSUPPV397,LDCUSTOMEALV197,SUPSEEUPS,LDPGCV67&channel=flow&funnel=LDPLATMETH199PLANS&pt=cc",
  },
  {
    title: "12 Methylation Genes Report + Wellness Test Bundle",
    kitIncluded: "*DNA Kit Included",
    popular: true, // This one is marked as popular
    price: "$249",
    description:
      "Get everything in your 12 Methylation Genes Report + Wellness Report Bundle, along with a DNA kit.",
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
    href: "https://my.lifedna.com/payments?line_items_added%5B%5D=LDPLATV99,LDMETHRV99,LDDTKV51&checkbox_items%5B%5D=LDAGREPV67,LDPGCV67&upsells%5B%5D=LDCUSTOMSUPPV397,LDCUSTOMEALV197,SUPSEEUPS,LDPGCV67&channel=flow&funnel=LDPLATMETHKIT249PLANS&pt=cc",
  },
];
