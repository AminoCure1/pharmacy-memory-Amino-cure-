/* ==========================================
   PHARMACY MEMORY | AMINO CURE
   Database v1.0.0
========================================== */

"use strict";

/* ==========================================
   1. أقسام الصيدلة
========================================== */

const SECTIONS = [
  {
    id: "pharmacology",
    name: "علم الأدوية",
    icon: "💊",
    description: "مبادئ الأدوية وتأثيراتها"
  },
  {
    id: "receptors",
    name: "المستقبلات الدوائية",
    icon: "🎯",
    description: "المستقبلات وآليات عمل الأدوية"
  },
  {
    id: "neurotransmitters",
    name: "النواقل العصبية",
    icon: "🧠",
    description: "النواقل العصبية وتأثيراتها"
  },
  {
    id: "antibiotics",
    name: "المضادات الحيوية",
    icon: "🦠",
    description: "مبادئ المضادات الحيوية"
  },
  {
    id: "pediatrics",
    name: "صيدلة الأطفال",
    icon: "🧒",
    description: "مبادئ الاستخدام الدوائي للأطفال"
  },
  {
    id: "pregnancy",
    name: "الأدوية والحمل",
    icon: "🤰",
    description: "سلامة الأدوية أثناء الحمل"
  },
  {
    id: "dosages",
    name: "الجرعات والحسابات",
    icon: "🧮",
    description: "حساب الجرعات والتحويلات"
  },
  {
    id: "syrups",
    name: "الأشكال الصيدلانية",
    icon: "🧴",
    description: "المحاليل والمعلقات وغيرها"
  },
  {
    id: "cardiovascular",
    name: "أدوية القلب",
    icon: "❤️",
    description: "أدوية القلب والأوعية الدموية"
  },
  {
    id: "cns",
    name: "الجهاز العصبي",
    icon: "🧠",
    description: "الأدوية المؤثرة في الجهاز العصبي"
  },
  {
    id: "gastrointestinal",
    name: "الجهاز الهضمي",
    icon: "🍽️",
    description: "أدوية المعدة والأمعاء"
  },
  {
    id: "respiratory",
    name: "الجهاز التنفسي",
    icon: "🫁",
    description: "أدوية الربو والجهاز التنفسي"
  },
  {
    id: "endocrine",
    name: "الغدد الصماء",
    icon: "🧬",
    description: "الهرمونات وأدوية السكري"
  },
  {
    id: "dermatology",
    name: "الأدوية الجلدية",
    icon: "🧴",
    description: "المستحضرات والأدوية الجلدية"
  },
  {
    id: "analgesics",
    name: "المسكنات",
    icon: "🩹",
    description: "مسكنات الألم ومضادات الالتهاب"
  },
  {
    id: "pharmacy-basics",
    name: "أساسيات الصيدلة",
    icon: "📚",
    description: "المفاهيم والمصطلحات الصيدلانية"
  }
];


/* ==========================================
   2. قاعدة الأسئلة
   answer هو نص الإجابة الصحيحة في الاختيار
   من متعدد، أو قيمة منطقية في الصح والخطأ.
========================================== */

const STUDY_CARDS = [

  {
    id: "pharm-001",
    sectionId: "pharmacology",
    type: "mcq",
    question: "ماذا يُقصد بالتوافر الحيوي (Bioavailability)؟",
    options: [
      "نسبة الدواء التي تصل إلى الدورة الدموية دون تغيير",
      "سرعة إخراج الدواء من الجسم فقط",
      "مدة تخزين الدواء",
      "قوة ارتباط الدواء بالبروتين فقط"
    ],
    answer: "نسبة الدواء التي تصل إلى الدورة الدموية دون تغيير",
    explanation: "يعبّر التوافر الحيوي عن نسبة الجرعة التي تصل إلى الدورة الدموية الجهازية دون تغيير.",
    difficulty: "medium"
  },

  {
    id: "pharm-002",
    sectionId: "pharmacology",
    type: "truefalse",
    question: "قد يؤثر عمر المريض في استجابة الجسم للدواء.",
    options: ["صح", "خطأ"],
    answer: true,
    explanation: "قد تتغير الاستجابة الدوائية بسبب اختلاف وظائف الكبد والكلى وعوامل أخرى مرتبطة بالعمر.",
    difficulty: "easy"
  },

  {
    id: "receptors-001",
    sectionId: "receptors",
    type: "mcq",
    question: "ما وظيفة الناهض (Agonist) للمستقبل؟",
    options: [
      "يرتبط بالمستقبل وينشّطه",
      "يمنع جميع عمليات الامتصاص",
      "يُخرج الدواء من الكلى",
      "يمنع تكوين البروتينات دائمًا"
    ],
    answer: "يرتبط بالمستقبل وينشّطه",
    explanation: "الناهض يرتبط بالمستقبل ويؤدي إلى تنشيطه لإحداث استجابة.",
    difficulty: "easy"
  },

  {
    id: "receptors-002",
    sectionId: "receptors",
    type: "truefalse",
    question: "المضاد الدوائي (Antagonist) ينشّط المستقبل بالضرورة.",
    options: ["صح", "خطأ"],
    answer: false,
    explanation: "المضاد يرتبط بالمستقبل ويمنع أو يقلل تأثير الناهض، ولا ينشّط المستقبل بالضرورة.",
    difficulty: "easy"
  },

  {
    id: "neuro-001",
    sectionId: "neurotransmitters",
    type: "mcq",
    question: "أي ناقل عصبي يرتبط بعمل الوصلات العصبية العضلية؟",
    options: [
      "Acetylcholine",
      "Histamine",
      "Melatonin",
      "Renin"
    ],
    answer: "Acetylcholine",
    explanation: "يؤدي الأستيل كولين دورًا أساسيًا في نقل الإشارة عند الوصلة العصبية العضلية.",
    difficulty: "easy"
  },

  {
    id: "antibiotics-001",
    sectionId: "antibiotics",
    type: "mcq",
    question: "ما الاستخدام الصحيح للمضادات الحيوية؟",
    options: [
      "علاج العدوى البكتيرية عندما تكون هناك حاجة إليها",
      "علاج جميع أنواع العدوى الفيروسية",
      "استخدامها مع كل حالة زكام",
      "تناولها دون مراعاة التشخيص"
    ],
    answer: "علاج العدوى البكتيرية عندما تكون هناك حاجة إليها",
    explanation: "المضادات الحيوية تستهدف البكتيريا، ولا تعالج العدوى الفيروسية مثل معظم حالات الزكام.",
    difficulty: "easy"
  },

  {
    id: "antibiotics-002",
    sectionId: "antibiotics",
    type: "truefalse",
    question: "الاستخدام غير المناسب للمضادات الحيوية قد يساهم في مقاومة البكتيريا لها.",
    options: ["صح", "خطأ"],
    answer: true,
    explanation: "الاستخدام غير المناسب للمضادات الحيوية يزيد الضغط الانتقائي الذي يساعد على ظهور المقاومة وانتشارها.",
    difficulty: "easy"
  },

  {
    id: "pediatrics-001",
    sectionId: "pediatrics",
    type: "mcq",
    question: "ما العامل المهم عند حساب جرعات كثير من أدوية الأطفال؟",
    options: [
      "وزن الطفل عند الحاجة إلى الجرعات المعتمدة على الوزن",
      "لون عبوة الدواء",
      "وقت شراء الدواء",
      "طول اسم الدواء"
    ],
    answer: "وزن الطفل عند الحاجة إلى الجرعات المعتمدة على الوزن",
    explanation: "تُحسب جرعات كثير من أدوية الأطفال بناءً على الوزن، مع الالتزام بالجرعة القصوى والإرشادات الخاصة بالدواء.",
    difficulty: "easy"
  },

  {
    id: "pregnancy-001",
    sectionId: "pregnancy",
    type: "truefalse",
    question: "كل دواء يُصرف دون وصفة طبية يُعد آمنًا تلقائيًا أثناء الحمل.",
    options: ["صح", "خطأ"],
    answer: false,
    explanation: "يجب تقييم سلامة الدواء أثناء الحمل بحسب المادة الفعالة ومرحلة الحمل وحالة المريضة.",
    difficulty: "easy"
  },

  {
    id: "dosages-001",
    sectionId: "dosages",
    type: "mcq",
    question: "كم مليغرامًا يساوي 1 غرام؟",
    options: [
      "1000 mg",
      "100 mg",
      "10 mg",
      "10000 mg"
    ],
    answer: "1000 mg",
    explanation: "الغرام الواحد يساوي 1000 مليغرام.",
    difficulty: "easy"
  },

  {
    id: "dosages-002",
    sectionId: "dosages",
    type: "truefalse",
    question: "يجب الانتباه إلى الوحدات عند إجراء الحسابات الدوائية.",
    options: ["صح", "خطأ"],
    answer: true,
    explanation: "الخلط بين وحدات القياس قد يؤدي إلى أخطاء خطيرة في حساب الجرعات.",
    difficulty: "easy"
  },

  {
    id: "syrups-001",
    sectionId: "syrups",
    type: "mcq",
    question: "ما الفرق الأساسي بين المحلول والمعلق الدوائي؟",
    options: [
      "المادة في المحلول موزعة على المستوى الجزيئي أو الأيوني، بينما يحتوي المعلق على جسيمات غير ذائبة",
      "لا يحتوي المحلول على أي مادة فعالة",
      "المعلق لا يحتوي على سائل",
      "لا يوجد أي فرق بينهما"
    ],
    answer: "المادة في المحلول موزعة على المستوى الجزيئي أو الأيوني، بينما يحتوي المعلق على جسيمات غير ذائبة",
    explanation: "قد يحتاج المعلق إلى الرجّ قبل الاستخدام وفقًا لتعليمات المستحضر.",
    difficulty: "medium"
  },

  {
    id: "cardio-001",
    sectionId: "cardiovascular",
    type: "mcq",
    question: "إلى أي فئة ينتمي دواء Amlodipine؟",
    options: [
      "حاصرات قنوات الكالسيوم",
      "المضادات الحيوية",
      "مضادات الفطريات",
      "مضادات الهيستامين"
    ],
    answer: "حاصرات قنوات الكالسيوم",
    explanation: "أملوديبين من حاصرات قنوات الكالسيوم ويُستخدم لعلاج حالات مثل ارتفاع ضغط الدم والذبحة الصدرية.",
    difficulty: "easy"
  },

  {
    id: "cns-001",
    sectionId: "cns",
    type: "truefalse",
    question: "قد تسبب بعض الأدوية المؤثرة في الجهاز العصبي النعاس.",
    options: ["صح", "خطأ"],
    answer: true,
    explanation: "يختلف التأثير باختلاف الدواء والجرعة واستجابة المريض.",
    difficulty: "easy"
  },

  {
    id: "gi-001",
    sectionId: "gastrointestinal",
    type: "mcq",
    question: "إلى أي فئة ينتمي Omeprazole؟",
    options: [
      "مثبطات مضخة البروتون",
      "حاصرات بيتا",
      "المضادات الحيوية من الماكروليدات",
      "مضادات التخثر"
    ],
    answer: "مثبطات مضخة البروتون",
    explanation: "يقلل أوميبرازول إفراز حمض المعدة عن طريق تثبيط مضخة البروتون.",
    difficulty: "easy"
  },

  {
    id: "resp-001",
    sectionId: "respiratory",
    type: "mcq",
    question: "ما الفئة الدوائية التي ينتمي إليها Salbutamol؟",
    options: [
      "ناهضات مستقبلات بيتا-2",
      "حاصرات مستقبلات ألفا",
      "مثبطات مضخة البروتون",
      "مضادات الفطريات"
    ],
    answer: "ناهضات مستقبلات بيتا-2",
    explanation: "يساعد السالبوتامول على توسيع الشعب الهوائية من خلال تنشيط مستقبلات بيتا-2.",
    difficulty: "easy"
  },

  {
    id: "endo-001",
    sectionId: "endocrine",
    type: "truefalse",
    question: "الإنسولين هرمون يساعد على تنظيم مستوى الغلوكوز في الدم.",
    options: ["صح", "خطأ"],
    answer: true,
    explanation: "يساعد الإنسولين على تنظيم الغلوكوز في الدم، ويُستخدم علاجيًا في حالات محددة مثل داء السكري.",
    difficulty: "easy"
  },

  {
    id: "derm-001",
    sectionId: "dermatology",
    type: "mcq",
    question: "ما المقصود بالاستخدام الموضعي للدواء؟",
    options: [
      "تطبيق الدواء على موضع محدد مثل الجلد",
      "حقن الدواء في الوريد دائمًا",
      "تناول الدواء عن طريق الفم دائمًا",
      "استنشاق الدواء فقط"
    ],
    answer: "تطبيق الدواء على موضع محدد مثل الجلد",
    explanation: "تُستخدم المستحضرات الموضعية على الجلد أو مواضع أخرى بحسب نوع المستحضر وتعليماته.",
    difficulty: "easy"
  },

  {
    id: "analgesics-001",
    sectionId: "analgesics",
    type: "mcq",
    question: "ما المادة الفعالة في Panadol العادي في كثير من الأسواق؟",
    options: [
      "Paracetamol",
      "Amoxicillin",
      "Omeprazole",
      "Amlodipine"
    ],
    answer: "Paracetamol",
    explanation: "يحتوي بانادول العادي عادةً على الباراسيتامول، لكن يجب التحقق من عبوة المنتج لأن هناك تركيبات مختلفة.",
    difficulty: "easy"
  },

  {
    id: "analgesics-002",
    sectionId: "analgesics",
    type: "truefalse",
    question: "يمكن تناول أي مستحضرين يحتويان على الباراسيتامول معًا دون حساب الجرعة الإجمالية.",
    options: ["صح", "خطأ"],
    answer: false,
    explanation: "قد يؤدي تكرار المادة الفعالة إلى تجاوز الجرعة الآمنة والتسبب في أذى خطير للكبد.",
    difficulty: "easy"
  },

  {
    id: "basics-001",
    sectionId: "pharmacy-basics",
    type: "mcq",
    question: "ما المقصود بالاسم العلمي للدواء؟",
    options: [
      "الاسم الذي يحدد المادة الفعالة",
      "اسم الشركة المصنعة فقط",
      "اسم الصيدلية التي تبيعه",
      "اسم لون العبوة"
    ],
    answer: "الاسم الذي يحدد المادة الفعالة",
    explanation: "يشير الاسم العلمي إلى المادة الدوائية الفعالة، بينما يكون الاسم التجاري مرتبطًا بالمنتج الذي تسوقه الشركة.",
    difficulty: "easy"
  }

];


/* ==========================================
   3. أوضاع المذاكرة
========================================== */

const STUDY_MODES = [
  {
    id: "flashcards",
    name: "البطاقات التعليمية",
    description: "راجع السؤال ثم اكشف الإجابة",
    icon: "🗂️"
  },
  {
    id: "mcq",
    name: "اختيار من متعدد",
    description: "اختر الإجابة الصحيحة",
    icon: "📝"
  },
  {
    id: "truefalse",
    name: "صح أم خطأ",
    description: "اختبر معلوماتك بسرعة",
    icon: "⚖️"
  },
  {
    id: "matching",
    name: "المطابقة",
    description: "اربط المصطلح بمعناه",
    icon: "🔗"
  },
  {
    id: "fillblank",
    name: "أكمل الفراغ",
    description: "تدرب على تذكر المعلومات",
    icon: "✏️"
  },
  {
    id: "speed",
    name: "التحدي السريع",
    description: "أجب عن الأسئلة في وقت محدد",
    icon: "⚡"
  },
  {
    id: "whoami",
    name: "من أنا؟",
    description: "تعرف على الدواء من وصفه",
    icon: "🔎"
  },
  {
    id: "mixed",
    name: "اختبار متنوع",
    description: "أسئلة متنوعة من أكثر من نوع",
    icon: "🎯"
  }
];


/* ==========================================
   4. دوال الوصول إلى البيانات
========================================== */

function getSectionById(sectionId) {
  return SECTIONS.find(section => section.id === sectionId) || null;
}


function getCardsBySection(sectionId) {
  return STUDY_CARDS.filter(card => card.sectionId === sectionId);
}


function searchStudyCards(query) {
  const normalizedQuery = String(query || "")
    .trim()
    .toLowerCase();

  if (!normalizedQuery) {
    return [...STUDY_CARDS];
  }

  return STUDY_CARDS.filter(card => {
    const searchableText = [
      card.question,
      card.answer,
      card.explanation,
      ...(card.options || [])
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}


function getRandomCards(count = 10, sectionId = null) {
  let cards = sectionId
    ? getCardsBySection(sectionId)
    : [...STUDY_CARDS];

  cards = [...cards];

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards.slice(0, Math.max(0, count));
}


function getAvailableQuestionTypes(sectionId = null) {
  const cards = sectionId
    ? getCardsBySection(sectionId)
    : STUDY_CARDS;

  return [...new Set(cards.map(card => card.type))];
}


function getDatabaseStats() {
  return {
    totalSections: SECTIONS.length,
    totalCards: STUDY_CARDS.length,
    mcq: STUDY_CARDS.filter(card => card.type === "mcq").length,
    truefalse: STUDY_CARDS.filter(card => card.type === "truefalse").length,
    sections: SECTIONS.map(section => ({
      id: section.id,
      name: section.name,
      count: getCardsBySection(section.id).length
    }))
  };
}


function validateStudyDatabase() {
  const errors = [];
  const sectionIds = new Set(SECTIONS.map(section => section.id));
  const cardIds = new Set();

  STUDY_CARDS.forEach((card, index) => {
    if (!card.id) {
      errors.push(`السؤال رقم ${index + 1} بلا معرّف.`);
    } else if (cardIds.has(card.id)) {
      errors.push(`معرّف السؤال مكرر: ${card.id}`);
    } else {
      cardIds.add(card.id);
    }

    if (!sectionIds.has(card.sectionId)) {
      errors.push(`القسم غير موجود للسؤال: ${card.id}`);
    }

    if (!card.question || !card.type) {
      errors.push(`بيانات ناقصة في السؤال: ${card.id}`);
    }

    if (
      card.type === "mcq" &&
      (
        !Array.isArray(card.options) ||
        !card.options.includes(card.answer)
      )
    ) {
      errors.push(`خيارات أو إجابة غير صحيحة في السؤال: ${card.id}`);
    }

    if (
      card.type === "truefalse" &&
      typeof card.answer !== "boolean"
    ) {
      errors.push(`إجابة الصح والخطأ غير صحيحة في السؤال: ${card.id}`);
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
}


/* ==========================================
   5. معلومات قاعدة البيانات
========================================== */

const PHARMACY_MEMORY_DATABASE = {
  name: "Pharmacy Memory",
  brand: "Amino Cure",
  version: "1.0.0",
  language: "ar",
  sections: SECTIONS,
  cards: STUDY_CARDS,
  modes: STUDY_MODES,
  references: [
    {
      name: "World Health Organization",
      url: "https://www.who.int/"
    },
    {
      name: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/"
    },
    {
      name: "National Library of Medicine",
      url: "https://medlineplus.gov/"
    }
  ]
};


/* ==========================================
   6. إتاحة البيانات للتطبيق
========================================== */

window.SECTIONS = SECTIONS;
window.STUDY_CARDS = STUDY_CARDS;
window.STUDY_MODES = STUDY_MODES;

window.PHARMACY_MEMORY_DATABASE =
  PHARMACY_MEMORY_DATABASE;

window.getSectionById = getSectionById;
window.getCardsBySection = getCardsBySection;
window.searchStudyCards = searchStudyCards;
window.getRandomCards = getRandomCards;
window.getAvailableQuestionTypes = getAvailableQuestionTypes;
window.getDatabaseStats = getDatabaseStats;
window.validateStudyDatabase = validateStudyDatabase;
