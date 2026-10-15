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
  { id: "pharm-003", sectionId: "pharmacology", type: "mcq", question: "ما المقصود بنصف العمر (Half-life) للدواء؟", options: ["الوقت اللازم لانخفاض تركيز الدواء في البلازما إلى النصف", "الوقت اللازم لبدء التأثير", "مدة صلاحية الدواء", "الوقت اللازم لامتصاص الجرعة كاملة"], answer: "الوقت اللازم لانخفاض تركيز الدواء في البلازما إلى النصف", explanation: "يحدد نصف العمر الفاصل بين الجرعات وزمن الوصول للحالة المستقرة.", difficulty: "easy" },
  { id: "pharm-004", sectionId: "pharmacology", type: "mcq", question: "أين يحدث تأثير المرور الأول (First-pass effect) بشكل رئيسي؟", options: ["الكبد", "الكلى", "الرئتان", "الجلد"], answer: "الكبد", explanation: "تمر الأدوية الممتصة من الأمعاء بالكبد أولًا فيُستقلب جزء منها قبل وصولها للدورة الجهازية.", difficulty: "easy" },
  { id: "pharm-005", sectionId: "pharmacology", type: "truefalse", question: "الأدوية ذات تأثير المرور الأول الكبير قد يقل توافرها الحيوي عند تناولها فمويًا.", options: ["صح", "خطأ"], answer: true, explanation: "جزء كبير منها يُستقلب في الكبد قبل أن يصل إلى الدورة الدموية.", difficulty: "medium" },
  { id: "pharm-006", sectionId: "pharmacology", type: "mcq", question: "كم يبلغ التوافر الحيوي للدواء عند إعطائه وريديًا؟", options: ["100%", "50%", "25%", "10%"], answer: "100%", explanation: "الحقن الوريدي يضع الدواء مباشرة في الدورة الدموية دون امتصاص.", difficulty: "easy" },
  { id: "pharm-007", sectionId: "pharmacology", type: "mcq", question: "ماذا يصف حجم التوزع (Volume of distribution)؟", options: ["مدى انتشار الدواء في أنسجة الجسم مقارنة بتركيزه في البلازما", "سرعة إخراج الدواء", "كمية الدواء في العبوة", "قوة الارتباط بالمستقبل"], answer: "مدى انتشار الدواء في أنسجة الجسم مقارنة بتركيزه في البلازما", explanation: "حجم التوزع الكبير يعني انتشارًا واسعًا في الأنسجة.", difficulty: "medium" },
  { id: "pharm-008", sectionId: "pharmacology", type: "mcq", question: "ما المقصود بالتصفية (Clearance)؟", options: ["حجم البلازما الذي يُنقّى من الدواء في وحدة الزمن", "كمية الدواء الممتصة", "مدة بقاء الدواء في المعدة", "نسبة الدواء المرتبط بالبروتين"], answer: "حجم البلازما الذي يُنقّى من الدواء في وحدة الزمن", explanation: "تعبّر التصفية عن كفاءة الجسم في التخلص من الدواء.", difficulty: "medium" },
  { id: "pharm-009", sectionId: "pharmacology", type: "mcq", question: "بعد كم نصف عمر تقريبًا يصل الدواء إلى الحالة المستقرة عند الجرعات المتكررة؟", options: ["4 إلى 5 أنصاف عمر", "نصف عمر واحد", "10 إلى 12 نصف عمر", "بعد الجرعة الأولى مباشرة"], answer: "4 إلى 5 أنصاف عمر", explanation: "يصل التركيز إلى نحو 94–97% من الحالة المستقرة بعد 4–5 أنصاف عمر.", difficulty: "medium" },
  { id: "pharm-010", sectionId: "pharmacology", type: "truefalse", question: "الدواء ذو نصف العمر الطويل يحتاج وقتًا أطول للوصول إلى الحالة المستقرة.", options: ["صح", "خطأ"], answer: true, explanation: "زمن الوصول للحالة المستقرة مرتبط بنصف العمر.", difficulty: "easy" },
  { id: "pharm-011", sectionId: "pharmacology", type: "mcq", question: "ما أنواع تفاعلات الطور الأول (Phase I) في الاستقلاب؟", options: ["الأكسدة والاختزال والتحلل المائي", "الاقتران مع الغلوكورونيد", "الإفراز الكلوي", "الارتباط بالألبومين"], answer: "الأكسدة والاختزال والتحلل المائي", explanation: "تحدث غالبًا بواسطة إنزيمات السيتوكروم P450.", difficulty: "medium" },
  { id: "pharm-012", sectionId: "pharmacology", type: "mcq", question: "ما تفاعلات الطور الثاني (Phase II) في الاستقلاب؟", options: ["الاقتران مثل الاقتران بالغلوكورونيد", "الأكسدة فقط", "الامتصاص المعوي", "التوزع في الأنسجة"], answer: "الاقتران مثل الاقتران بالغلوكورونيد", explanation: "تجعل الناتج أكثر ذوبانًا في الماء فيسهل إخراجه.", difficulty: "medium" },
  { id: "pharm-013", sectionId: "pharmacology", type: "mcq", question: "أي دواء من المحفّزات القوية لإنزيمات الكبد CYP؟", options: ["Rifampicin", "Ketoconazole", "Omeprazole", "Paracetamol"], answer: "Rifampicin", explanation: "الريفامبيسين يزيد استقلاب أدوية كثيرة فتقل فعاليتها.", difficulty: "medium" },
  { id: "pharm-014", sectionId: "pharmacology", type: "mcq", question: "أي دواء من مثبطات إنزيمات الكبد CYP3A4؟", options: ["Ketoconazole", "Rifampicin", "Phenobarbital", "Carbamazepine"], answer: "Ketoconazole", explanation: "التثبيط يرفع تركيز الأدوية التي تُستقلب بهذا الإنزيم.", difficulty: "hard" },
  { id: "pharm-015", sectionId: "pharmacology", type: "truefalse", question: "تثبيط إنزيمات الاستقلاب قد يرفع تركيز الدواء الذي يُستقلب بها.", options: ["صح", "خطأ"], answer: true, explanation: "ينخفض استقلاب الدواء فيزداد تركيزه وقد تظهر سمية.", difficulty: "medium" },
  { id: "pharm-016", sectionId: "pharmacology", type: "mcq", question: "ماذا يعبّر المؤشر العلاجي (Therapeutic index)؟", options: ["العلاقة بين الجرعة السامة والجرعة العلاجية", "سعر الدواء", "سرعة الامتصاص", "عدد مرات الجرعة اليومية"], answer: "العلاقة بين الجرعة السامة والجرعة العلاجية", explanation: "كلما كان المؤشر أضيق كان هامش الأمان أصغر.", difficulty: "medium" },
  { id: "pharm-017", sectionId: "pharmacology", type: "mcq", question: "أي دواء مما يلي له مؤشر علاجي ضيق؟", options: ["Warfarin", "Paracetamol بالجرعات العادية", "Vitamin C", "Calcium carbonate"], answer: "Warfarin", explanation: "الوارفارين وDigoxin وLithium تحتاج مراقبة دقيقة للتركيز أو الاستجابة.", difficulty: "medium" },
  { id: "pharm-018", sectionId: "pharmacology", type: "mcq", question: "ما المقصود بقوة الدواء (Potency)؟", options: ["كمية الدواء اللازمة لإحداث تأثير معين", "أقصى تأثير يحدثه الدواء", "سرعة الامتصاص", "مدة التخزين"], answer: "كمية الدواء اللازمة لإحداث تأثير معين", explanation: "الدواء الأقوى يحتاج جرعة أقل لنفس التأثير.", difficulty: "medium" },
  { id: "pharm-019", sectionId: "pharmacology", type: "mcq", question: "ما المقصود بالفعالية القصوى (Efficacy)؟", options: ["أقصى تأثير يمكن للدواء إحداثه", "الجرعة اللازمة للتأثير", "نصف عمر الدواء", "نسبة الارتباط بالبروتين"], answer: "أقصى تأثير يمكن للدواء إحداثه", explanation: "تختلف عن القوة (Potency).", difficulty: "medium" },
  { id: "pharm-020", sectionId: "pharmacology", type: "truefalse", question: "الدواء الأكثر قوة (Potency) ليس بالضرورة الأعلى فعالية قصوى (Efficacy).", options: ["صح", "خطأ"], answer: true, explanation: "القوة تخص الجرعة اللازمة، والفعالية تخص أقصى استجابة ممكنة.", difficulty: "hard" },
  { id: "pharm-021", sectionId: "pharmacology", type: "mcq", question: "ماذا تعني ED50؟", options: ["الجرعة التي تحدث التأثير العلاجي عند 50% من الأفراد", "الجرعة المميتة لـ50%", "نصف الجرعة اليومية", "جرعة التحميل"], answer: "الجرعة التي تحدث التأثير العلاجي عند 50% من الأفراد", explanation: "تُستخدم في منحنيات الجرعة والاستجابة.", difficulty: "medium" },
  { id: "pharm-022", sectionId: "pharmacology", type: "mcq", question: "ماذا تعني LD50؟", options: ["الجرعة التي تسبب الوفاة عند 50% من الحيوانات التجريبية", "الجرعة العلاجية الدنيا", "جرعة الصيانة", "الجرعة المسموحة يوميًا"], answer: "الجرعة التي تسبب الوفاة عند 50% من الحيوانات التجريبية", explanation: "مقياس يُستخدم في دراسات السمية.", difficulty: "medium" },
  { id: "pharm-023", sectionId: "pharmacology", type: "mcq", question: "الأدوية الحمضية الضعيفة يكون امتصاصها أفضل في أي وسط؟", options: ["الوسط الحمضي كالمعدة", "الوسط القلوي دائمًا", "الدم فقط", "البول فقط"], answer: "الوسط الحمضي كالمعدة", explanation: "في الوسط الحمضي تبقى أكثر في الصورة غير المتأينة التي تعبر الأغشية بسهولة.", difficulty: "hard" },
  { id: "pharm-024", sectionId: "pharmacology", type: "truefalse", question: "الصورة غير المتأينة من الدواء تعبر الأغشية الخلوية بسهولة أكبر من الصورة المتأينة.", options: ["صح", "خطأ"], answer: true, explanation: "الجزيئات غير المشحونة أكثر ذوبانًا في الدهون.", difficulty: "medium" },
  { id: "pharm-025", sectionId: "pharmacology", type: "mcq", question: "ما العضو الرئيسي لإخراج أغلب الأدوية ونواتجها؟", options: ["الكلى", "الطحال", "البنكرياس", "الغدة الدرقية"], answer: "الكلى", explanation: "تُخرج الكلى الأدوية بالترشيح الكبيبي والإفراز الأنبوبي.", difficulty: "easy" },
  { id: "pharm-026", sectionId: "pharmacology", type: "mcq", question: "تقليل حموضة البول (جعله قلويًا) يزيد إخراج أي نوع من الأدوية؟", options: ["الأدوية الحمضية الضعيفة مثل الساليسيلات", "القواعد الضعيفة", "الأدوية غير المتأينة فقط", "جميع الأدوية بالتساوي"], answer: "الأدوية الحمضية الضعيفة مثل الساليسيلات", explanation: "تتأين في الوسط القلوي فيقل إعادة امتصاصها وتُطرد أكثر.", difficulty: "hard" },
  { id: "pharm-027", sectionId: "pharmacology", type: "mcq", question: "ما هدف جرعة التحميل (Loading dose)؟", options: ["الوصول السريع إلى التركيز العلاجي", "تقليل الأثر الجانبي دائمًا", "إطالة مدة التخزين", "تحفيز الإنزيمات"], answer: "الوصول السريع إلى التركيز العلاجي", explanation: "تُعطى جرعة أولى أكبر ثم تتبعها جرعات صيانة.", difficulty: "medium" },
  { id: "pharm-028", sectionId: "pharmacology", type: "mcq", question: "ما هدف جرعة الصيانة (Maintenance dose)؟", options: ["الحفاظ على التركيز العلاجي بعد الوصول إليه", "إعطاء تركيز سام", "إيقاف الدواء", "زيادة الامتصاص"], answer: "الحفاظ على التركيز العلاجي بعد الوصول إليه", explanation: "تعوّض ما يُفقد بالاستقلاب والإخراج.", difficulty: "easy" },
  { id: "pharm-029", sectionId: "pharmacology", type: "truefalse", question: "الجزء الحر (غير المرتبط ببروتينات البلازما) من الدواء هو الجزء النشط دوائيًا.", options: ["صح", "خطأ"], answer: true, explanation: "الجزء الحر فقط ينتشر للأنسجة ويرتبط بالمستقبلات ويُستقلب ويُخرج.", difficulty: "medium" },
  { id: "pharm-030", sectionId: "pharmacology", type: "mcq", question: "ما بروتين البلازما الرئيسي الذي ترتبط به الأدوية الحمضية؟", options: ["الألبومين", "الغلوبيولين المناعي", "الهيموغلوبين", "الفيبرينوجين"], answer: "الألبومين", explanation: "قد تتزاحم الأدوية على الارتباط به فترتفع نسبة الجزء الحر لأحدها.", difficulty: "medium" },
  { id: "pharm-031", sectionId: "pharmacology", type: "mcq", question: "أي طريق مما يلي يُعد طريقًا معويًا (Enteral)؟", options: ["الفموي", "الوريدي", "العضلي", "تحت الجلد"], answer: "الفموي", explanation: "الطرق المعوية تمر عبر الجهاز الهضمي، والوريدي والعضلي من الطرق الحقنية.", difficulty: "easy" },
  { id: "pharm-032", sectionId: "pharmacology", type: "mcq", question: "ما ميزة الإعطاء تحت اللسان؟", options: ["يتجنب تأثير المرور الأول الكبدي", "يبطئ الامتصاص دائمًا", "يناسب الأدوية كبيرة الجزيئات فقط", "يسبب تحطم الدواء في المعدة"], answer: "يتجنب تأثير المرور الأول الكبدي", explanation: "يمتص الدواء إلى الدورة الدموية مباشرة عبر أوعية الفم، مثل النيتروجليسرين.", difficulty: "medium" },
  { id: "pharm-033", sectionId: "pharmacology", type: "mcq", question: "أي طريق إعطاء يعطي أسرع تأثير في الغالب؟", options: ["الوريدي", "الفموي", "عبر الجلد", "الشرجي"], answer: "الوريدي", explanation: "لا توجد مرحلة امتصاص، فيصل الدواء للدورة الدموية فورًا.", difficulty: "easy" },
  { id: "pharm-034", sectionId: "pharmacology", type: "mcq", question: "ماذا يميّز حركية الدرجة الصفرية (Zero-order kinetics)؟", options: ["إزالة كمية ثابتة من الدواء لكل وحدة زمن", "إزالة نسبة ثابتة من التركيز", "عدم وجود إخراج", "امتصاص لا نهائي"], answer: "إزالة كمية ثابتة من الدواء لكل وحدة زمن", explanation: "تحدث عند تشبع الإنزيمات، كما في الكحول وPhenytoin بجرعات عالية.", difficulty: "hard" },
  { id: "pharm-035", sectionId: "pharmacology", type: "mcq", question: "ماذا يميّز حركية الدرجة الأولى (First-order kinetics)؟", options: ["إزالة نسبة ثابتة من تركيز الدواء لكل وحدة زمن", "إزالة كمية ثابتة دائمًا", "عدم تأثر الإخراج بالتركيز", "لا يوجد استقلاب"], answer: "إزالة نسبة ثابتة من تركيز الدواء لكل وحدة زمن", explanation: "كلما زاد التركيز زادت الكمية المزالة.", difficulty: "hard" },
  { id: "pharm-036", sectionId: "pharmacology", type: "truefalse", question: "معظم الأدوية بالجرعات العلاجية المعتادة تتبع حركية الدرجة الأولى.", options: ["صح", "خطأ"], answer: true, explanation: "لأن الإنزيمات لا تكون مشبعة في الجرعات المعتادة.", difficulty: "medium" },
  { id: "pharm-037", sectionId: "pharmacology", type: "mcq", question: "ماذا تعني التحمّل (Tolerance) الدوائي؟", options: ["انخفاض الاستجابة للدواء مع تكرار استخدامه", "زيادة الاستجابة مع كل جرعة", "حساسية فورية للدواء", "عدم امتصاص الدواء"], answer: "انخفاض الاستجابة للدواء مع تكرار استخدامه", explanation: "قد يحتاج المريض جرعة أكبر للحصول على التأثير نفسه.", difficulty: "easy" },
  { id: "pharm-038", sectionId: "pharmacology", type: "mcq", question: "ما التحمّل السريع الذي يظهر خلال دقائق أو ساعات (Tachyphylaxis)؟", options: ["انخفاض سريع في الاستجابة بعد جرعات متتابعة", "زيادة تدريجية في الاستجابة", "تأخر الامتصاص", "تراكم الدواء في الكبد"], answer: "انخفاض سريع في الاستجابة بعد جرعات متتابعة", explanation: "يختلف عن التحمل التدريجي الذي يتطور على مدى أطول.", difficulty: "hard" },
  { id: "pharm-039", sectionId: "pharmacology", type: "mcq", question: "ماذا يعني التآزر (Synergism) بين دواءين؟", options: ["التأثير المشترك أكبر من مجموع تأثيريهما منفردين", "مجموع التأثيرين فقط", "إلغاء أحدهما تأثير الآخر", "عدم وجود تأثير"], answer: "التأثير المشترك أكبر من مجموع تأثيريهما منفردين", explanation: "مثال تقريبي: التريميثوبريم مع السلفاميثوكسازول.", difficulty: "medium" },
  { id: "pharm-040", sectionId: "pharmacology", type: "mcq", question: "ما التفاعل الدوائي غير المعتاد (Idiosyncratic reaction)؟", options: ["استجابة غير متوقعة غالبًا لأسباب وراثية", "أثر جانبي متوقع من الجرعة", "تأثير علاجي طبيعي", "تحمّل دوائي"], answer: "استجابة غير متوقعة غالبًا لأسباب وراثية", explanation: "تظهر عند عدد قليل من الأفراد وقد لا ترتبط بالجرعة.", difficulty: "hard" },
  { id: "pharm-041", sectionId: "pharmacology", type: "mcq", question: "ما تأثير البلاسيبو (Placebo)؟", options: ["تحسن يعود إلى التوقع والعوامل النفسية لا إلى مادة فعالة", "تأثير دواء مضاد للألم قوي", "تأثير جانبي سام", "تحفيز إنزيمات الكبد"], answer: "تحسن يعود إلى التوقع والعوامل النفسية لا إلى مادة فعالة", explanation: "يُستخدم كمجموعة ضابطة في التجارب السريرية.", difficulty: "easy" },
  { id: "pharm-042", sectionId: "pharmacology", type: "mcq", question: "ما خصائص التفاعلات الضارة من النوع A؟", options: ["متوقعة ومرتبطة بالجرعة وشائعة", "غير متوقعة ونادرة ولا ترتبط بالجرعة", "تحدث دائمًا بعد سنوات", "مناعية فقط"], answer: "متوقعة ومرتبطة بالجرعة وشائعة", explanation: "تنتج غالبًا عن التأثير الدوائي المعروف وتقل بخفض الجرعة.", difficulty: "medium" },
  { id: "pharm-043", sectionId: "pharmacology", type: "truefalse", question: "التفاعلات الضارة من النوع B غير متوقعة غالبًا ولا ترتبط بالجرعة بالضرورة.", options: ["صح", "خطأ"], answer: true, explanation: "مثل بعض تفاعلات فرط الحساسية.", difficulty: "hard" },
  { id: "pharm-044", sectionId: "pharmacology", type: "mcq", question: "ما الدواء الأولي (Prodrug)؟", options: ["دواء يتحول في الجسم إلى صورته الفعالة", "دواء فعال دون أي استقلاب", "دواء سام دائمًا", "دواء يُعطى بالحقن فقط"], answer: "دواء يتحول في الجسم إلى صورته الفعالة", explanation: "مثل Enalapril الذي يتحول إلى Enalaprilat الفعال.", difficulty: "medium" },
  { id: "pharm-045", sectionId: "pharmacology", type: "mcq", question: "ما الدورة المعوية الكبدية (Enterohepatic circulation)؟", options: ["إفراز الدواء في الصفراء ثم إعادة امتصاصه من الأمعاء", "إخراج الدواء عبر الكلى فقط", "امتصاص الدواء من الجلد", "ارتباط الدواء بالألبومين"], answer: "إفراز الدواء في الصفراء ثم إعادة امتصاصه من الأمعاء", explanation: "قد تطيل هذه الدورة مدة بقاء الدواء في الجسم.", difficulty: "hard" },
  { id: "pharm-046", sectionId: "pharmacology", type: "mcq", question: "أي الأدوية يعبر الحاجز الدموي الدماغي بسهولة أكبر؟", options: ["الأدوية الذائبة في الدهون", "الأدوية شديدة الذوبان في الماء والمتأينة", "الجزيئات الكبيرة المرتبطة بالبروتين", "جميعها بالتساوي"], answer: "الأدوية الذائبة في الدهون", explanation: "الحاجز يسمح بمرور الجزيئات الصغيرة الدهنية بسهولة أكبر.", difficulty: "medium" },
  { id: "pharm-047", sectionId: "pharmacology", type: "truefalse", question: "الأدوية الذائبة في الدهون تعبر المشيمة بسهولة أكبر من الأدوية المتأينة شديدة القطبية.", options: ["صح", "خطأ"], answer: true, explanation: "لذلك يجب الحذر من كثير من الأدوية أثناء الحمل.", difficulty: "medium" },
  { id: "pharm-048", sectionId: "pharmacology", type: "mcq", question: "ماذا تدرس الديناميكا الدوائية (Pharmacodynamics)؟", options: ["ما يفعله الدواء بالجسم وآلية تأثيره", "ما يفعله الجسم بالدواء", "تصنيع الدواء", "تخزين الدواء"], answer: "ما يفعله الدواء بالجسم وآلية تأثيره", explanation: "تشمل المستقبلات والتأثيرات العلاجية والجانبية.", difficulty: "easy" },
  { id: "pharm-049", sectionId: "pharmacology", type: "mcq", question: "ماذا تدرس الحركية الدوائية (Pharmacokinetics)؟", options: ["ما يفعله الجسم بالدواء: الامتصاص والتوزع والاستقلاب والإخراج", "ما يفعله الدواء بالمستقبلات فقط", "تأثير الدواء على البكتيريا", "تسعير الدواء"], answer: "ما يفعله الجسم بالدواء: الامتصاص والتوزع والاستقلاب والإخراج", explanation: "يُختصر بـ ADME.", difficulty: "easy" },
  { id: "pharm-050", sectionId: "pharmacology", type: "truefalse", question: "الدواء الجنيس (Generic) يحتوي على المادة الفعالة نفسها للدواء الأصلي بالتركيز نفسه.", options: ["صح", "خطأ"], answer: true, explanation: "ويجب أن يثبت تكافؤه الحيوي مع الدواء الأصلي وفق الجهات التنظيمية.", difficulty: "easy" },
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
    { id: "receptors-003", sectionId: "receptors", type: "mcq", question: "ما العائلات الأربع الرئيسية للمستقبلات الدوائية؟", options: ["مقترنة ببروتين G، قنوات أيونية، مرتبطة بإنزيم، ونووية", "بروتينية، دهنية، سكرية، معدنية", "هضمية، تنفسية، قلبية، كلوية", "سريعة، بطيئة، متوسطة، ثابتة"], answer: "مقترنة ببروتين G، قنوات أيونية، مرتبطة بإنزيم، ونووية", explanation: "تختلف العائلات في سرعة الاستجابة وآلية نقل الإشارة.", difficulty: "medium" },
  { id: "receptors-004", sectionId: "receptors", type: "mcq", question: "أي نوع من المستقبلات يعطي أسرع استجابة (أجزاء من الثانية)؟", options: ["القنوات الأيونية", "المستقبلات النووية", "المستقبلات المرتبطة ببروتين G", "المستقبلات المرتبطة بالإنزيمات"], answer: "القنوات الأيونية", explanation: "فتح القناة يغيّر تدفق الأيونات مباشرة دون وسائط كثيرة.", difficulty: "medium" },
  { id: "receptors-005", sectionId: "receptors", type: "mcq", question: "ماذا يفعل بروتين Gs عند تنشيطه؟", options: ["ينشّط إنزيم أدينيلات سيكلاز فيزداد cAMP", "يثبط أدينيلات سيكلاز فينخفض cAMP", "ينشّط فوسفوليباز C", "يفتح قناة الكلوريد"], answer: "ينشّط إنزيم أدينيلات سيكلاز فيزداد cAMP", explanation: "مثال: مستقبلات بيتا-1 وبيتا-2.", difficulty: "medium" },
  { id: "receptors-006", sectionId: "receptors", type: "mcq", question: "ماذا يفعل بروتين Gi عند تنشيطه؟", options: ["يثبط أدينيلات سيكلاز فينخفض cAMP", "ينشّط أدينيلات سيكلاز", "يزيد IP3 مباشرة", "يفتح قناة الصوديوم"], answer: "يثبط أدينيلات سيكلاز فينخفض cAMP", explanation: "مثال: مستقبلات ألفا-2 وM2 والأفيونية.", difficulty: "medium" },
  { id: "receptors-007", sectionId: "receptors", type: "mcq", question: "ما المسار الذي ينشّطه بروتين Gq؟", options: ["فوسفوليباز C ثم IP3 وDAG", "أدينيلات سيكلاز ثم cAMP", "فتح قنوات الكلوريد", "تخليق البروتين النووي"], answer: "فوسفوليباز C ثم IP3 وDAG", explanation: "يرفع الكالسيوم داخل الخلية ويفعّل بروتين كيناز C. مثال: ألفا-1 وM1 وM3.", difficulty: "hard" },
  { id: "receptors-008", sectionId: "receptors", type: "truefalse", question: "مستقبل الإنسولين من المستقبلات المرتبطة بإنزيم التيروزين كيناز.", options: ["صح", "خطأ"], answer: true, explanation: "ارتباط الإنسولين ينشّط نشاط التيروزين كيناز داخل الخلية.", difficulty: "medium" },
  { id: "receptors-009", sectionId: "receptors", type: "truefalse", question: "مستقبلات هرمونات الستيرويد توجد داخل الخلية وتعمل على التعبير الجيني.", options: ["صح", "خطأ"], answer: true, explanation: "الستيرويدات تذوب في الدهون وتدخل الخلية، لذلك يبدأ تأثيرها ببطء (ساعات).", difficulty: "medium" },
  { id: "receptors-010", sectionId: "receptors", type: "mcq", question: "ما الناهض الجزئي (Partial agonist)؟", options: ["دواء يرتبط بالمستقبل ويعطي استجابة أقل من الناهض الكامل", "دواء يعطي استجابة قصوى دائمًا", "دواء يمنع الارتباط دون أي تأثير", "دواء يزيد عدد المستقبلات"], answer: "دواء يرتبط بالمستقبل ويعطي استجابة أقل من الناهض الكامل", explanation: "قد يعمل كمضاد عند وجود ناهض كامل بتركيز عالٍ.", difficulty: "medium" },
  { id: "receptors-011", sectionId: "receptors", type: "mcq", question: "أي دواء مما يلي ناهض جزئي لمستقبلات ميو الأفيونية؟", options: ["Buprenorphine", "Morphine", "Naloxone", "Fentanyl"], answer: "Buprenorphine", explanation: "له تأثير سقفي على تثبيط التنفس مقارنة بالناهضات الكاملة.", difficulty: "hard" },
  { id: "receptors-012", sectionId: "receptors", type: "mcq", question: "ما الناهض العكسي (Inverse agonist)؟", options: ["دواء يقلل النشاط القاعدي للمستقبل", "دواء ينشّط المستقبل بالكامل", "دواء يتنافس دون تأثير", "دواء يرتبط بالألبومين"], answer: "دواء يقلل النشاط القاعدي للمستقبل", explanation: "يختلف عن المضاد المحايد الذي يمنع الارتباط دون تغيير النشاط القاعدي.", difficulty: "hard" },
  { id: "receptors-013", sectionId: "receptors", type: "mcq", question: "كيف يؤثر المضاد التنافسي القابل للعكس على منحنى الجرعة-الاستجابة للناهض؟", options: ["يزيحه لليمين دون تغيير الاستجابة القصوى", "يخفض الاستجابة القصوى فقط", "يزيحه لليسار", "لا يؤثر عليه"], answer: "يزيحه لليمين دون تغيير الاستجابة القصوى", explanation: "يحتاج الناهض لتركيز أعلى للوصول إلى نفس التأثير.", difficulty: "hard" },
  { id: "receptors-014", sectionId: "receptors", type: "mcq", question: "ماذا يحدث عند استخدام مضاد غير تنافسي أو غير عكوس؟", options: ["تنخفض الاستجابة القصوى للناهض", "يزاح المنحنى لليمين فقط", "يزداد التأثير", "لا تتغير الاستجابة"], answer: "تنخفض الاستجابة القصوى للناهض", explanation: "زيادة تركيز الناهض لا تتغلب عليه بالكامل.", difficulty: "hard" },
  { id: "receptors-015", sectionId: "receptors", type: "truefalse", question: "يمكن التغلب على المضاد التنافسي القابل للعكس بزيادة تركيز الناهض.", options: ["صح", "خطأ"], answer: true, explanation: "لأنهما يتنافسان على الموضع نفسه من المستقبل.", difficulty: "medium" },
  { id: "receptors-016", sectionId: "receptors", type: "mcq", question: "ماذا تعني الألفة (Affinity)؟", options: ["قوة ارتباط الدواء بالمستقبل", "أقصى استجابة للدواء", "سرعة امتصاص الدواء", "مدة بقاء الدواء"], answer: "قوة ارتباط الدواء بالمستقبل", explanation: "تُعبّر عنها ثابتة التفكك Kd، وكلما قلّت زادت الألفة.", difficulty: "medium" },
  { id: "receptors-017", sectionId: "receptors", type: "mcq", question: "ماذا يمثل EC50؟", options: ["التركيز الذي يعطي 50% من الاستجابة القصوى", "الجرعة المميتة لـ50%", "نصف عمر الدواء", "الجرعة اليومية"], answer: "التركيز الذي يعطي 50% من الاستجابة القصوى", explanation: "يُستخدم للمقارنة بين قوة (Potency) الأدوية.", difficulty: "medium" },
  { id: "receptors-018", sectionId: "receptors", type: "mcq", question: "ما المقصود بالمستقبلات الاحتياطية (Spare receptors)؟", options: ["مستقبلات زائدة عن اللازم لإحداث الاستجابة القصوى", "مستقبلات تالفة", "مستقبلات خارج الخلية فقط", "مستقبلات لا ترتبط بأي دواء"], answer: "مستقبلات زائدة عن اللازم لإحداث الاستجابة القصوى", explanation: "يكفي تنشيط جزء منها للوصول للاستجابة القصوى.", difficulty: "hard" },
  { id: "receptors-019", sectionId: "receptors", type: "mcq", question: "ماذا يحدث غالبًا للمستقبلات عند التعرض المزمن لناهض بتركيز عالٍ؟", options: ["ينخفض عددها أو حساسيتها (Down-regulation)", "يزداد عددها دائمًا", "تختفي نهائيًا", "لا يحدث أي تغيير"], answer: "ينخفض عددها أو حساسيتها (Down-regulation)", explanation: "وهو أحد أسباب التحمّل الدوائي.", difficulty: "medium" },
  { id: "receptors-020", sectionId: "receptors", type: "truefalse", question: "التعرض المزمن لمضاد قد يزيد عدد المستقبلات أو حساسيتها (Up-regulation).", options: ["صح", "خطأ"], answer: true, explanation: "قد يسبب فرط حساسية عند إيقاف الدواء فجأة.", difficulty: "medium" },
  { id: "receptors-021", sectionId: "receptors", type: "mcq", question: "لماذا لا يُوقف Propranolol فجأة عند الاستخدام المزمن؟", options: ["قد يحدث ارتداد بتسارع القلب وارتفاع الضغط", "لأنه يسبب نقص السكر فورًا", "لأنه يزيد الامتصاص", "لأنه يتحول لسم"], answer: "قد يحدث ارتداد بتسارع القلب وارتفاع الضغط", explanation: "الاستخدام المزمن لحاصرات بيتا يزيد حساسية المستقبلات للكاتيكولامينات.", difficulty: "hard" },
  { id: "receptors-022", sectionId: "receptors", type: "mcq", question: "ما التأثير الرئيسي لتنبيه مستقبلات ألفا-1 في الأوعية الدموية؟", options: ["تضيّق الأوعية وارتفاع الضغط", "توسّع الأوعية", "بطء القلب", "توسع القصبات"], answer: "تضيّق الأوعية وارتفاع الضغط", explanation: "تعمل عبر بروتين Gq.", difficulty: "easy" },
  { id: "receptors-023", sectionId: "receptors", type: "mcq", question: "ما تأثير تنبيه مستقبلات بيتا-1 في القلب؟", options: ["زيادة معدل القلب وقوة الانقباض", "إبطاء القلب", "توسع القصبات فقط", "انخفاض إفراز الرنين"], answer: "زيادة معدل القلب وقوة الانقباض", explanation: "مستقبلات بيتا-1 رئيسية في القلب والكلى (إفراز الرنين).", difficulty: "easy" },
  { id: "receptors-024", sectionId: "receptors", type: "mcq", question: "ما تأثير تنبيه مستقبلات بيتا-2 في القصبات؟", options: ["توسّع القصبات", "انقباض القصبات", "زيادة الإفرازات فقط", "لا تأثير"], answer: "توسّع القصبات", explanation: "لذلك تُستخدم ناهضات بيتا-2 في الربو.", difficulty: "easy" },
  { id: "receptors-025", sectionId: "receptors", type: "mcq", question: "أي دواء مما يلي حاصر انتقائي لمستقبلات بيتا-1؟", options: ["Atenolol", "Propranolol", "Salbutamol", "Prazosin"], answer: "Atenolol", explanation: "الأتينولول وBisoprolol وMetoprolol حاصرات انتقائية لبيتا-1 (بجرعات معتادة).", difficulty: "medium" },
  { id: "receptors-026", sectionId: "receptors", type: "mcq", question: "Propranolol من حاصرات بيتا:", options: ["غير الانتقائية", "الانتقائية لبيتا-1 فقط", "الانتقائية لبيتا-2 فقط", "الناهضة"], answer: "غير الانتقائية", explanation: "يحجب بيتا-1 وبيتا-2.", difficulty: "easy" },
  { id: "receptors-027", sectionId: "receptors", type: "truefalse", question: "حاصرات بيتا غير الانتقائية قد تسبب تشنج القصبات لدى مرضى الربو.", options: ["صح", "خطأ"], answer: true, explanation: "حجب بيتا-2 في القصبات يقلل توسّعها.", difficulty: "medium" },
  { id: "receptors-028", sectionId: "receptors", type: "mcq", question: "ما فئة Prazosin؟", options: ["حاصر ألفا-1", "ناهض ألفا-2", "حاصر بيتا", "حاصر مستقبلات الهيستامين"], answer: "حاصر ألفا-1", explanation: "يوسّع الأوعية ويُستخدم في ارتفاع الضغط وتضخم البروستاتا الحميد.", difficulty: "easy" },
  { id: "receptors-029", sectionId: "receptors", type: "mcq", question: "أي مستقبلات يستهدف Tamsulosin بشكل أكبر؟", options: ["ألفا-1A", "بيتا-1", "M3", "H2"], answer: "ألفا-1A", explanation: "الانتقائية للمسالك البولية تقلل الأثر على ضغط الدم نسبيًا.", difficulty: "hard" },
  { id: "receptors-030", sectionId: "receptors", type: "mcq", question: "ما آلية عمل Clonidine؟", options: ["ناهض ألفا-2 يقلل التدفق الودي من الدماغ", "حاصر بيتا-1", "حاصر ألفا-1", "ناهض بيتا-2"], answer: "ناهض ألفا-2 يقلل التدفق الودي من الدماغ", explanation: "يُستخدم في ارتفاع الضغط وبعض حالات الأعراض الانسحابية.", difficulty: "medium" },
  { id: "receptors-031", sectionId: "receptors", type: "mcq", question: "Phenylephrine ناهض لأي مستقبلات بشكل رئيسي؟", options: ["ألفا-1", "بيتا-2", "M2", "D2"], answer: "ألفا-1", explanation: "يُستخدم كمزيل احتقان أنفي ورافع للضغط في بعض الحالات.", difficulty: "medium" },
  { id: "receptors-032", sectionId: "receptors", type: "mcq", question: "Isoprenaline (Isoproterenol) ناهض لأي مستقبلات؟", options: ["بيتا-1 وبيتا-2 غير الانتقائي", "ألفا-1 فقط", "M3 فقط", "H1 فقط"], answer: "بيتا-1 وبيتا-2 غير الانتقائي", explanation: "يسرّع القلب ويوسّع القصبات والأوعية.", difficulty: "hard" },
  { id: "receptors-033", sectionId: "receptors", type: "mcq", question: "ما تأثير تنبيه مستقبلات M3 المسكارينية؟", options: ["انقباض العضلات الملساء وزيادة الإفرازات", "توسع القصبات", "زيادة معدل القلب", "ارتخاء المثانة"], answer: "انقباض العضلات الملساء وزيادة الإفرازات", explanation: "تعمل عبر Gq وتظهر في القصبات والمعدة والمثانة والغدد.", difficulty: "medium" },
  { id: "receptors-034", sectionId: "receptors", type: "mcq", question: "ما فئة Atropine؟", options: ["مضاد للمستقبلات المسكارينية", "ناهض مسكاريني", "حاصر بيتا", "حاصر نيكوتيني"], answer: "مضاد للمستقبلات المسكارينية", explanation: "يعاكس تأثيرات الأستيل كولين على المستقبلات المسكارينية.", difficulty: "easy" },
  { id: "receptors-035", sectionId: "receptors", type: "truefalse", question: "من آثار Atropine جفاف الفم وتسارع القلب واتساع الحدقة.", options: ["صح", "خطأ"], answer: true, explanation: "نتيجة حجب التأثيرات نظيرة الودية.", difficulty: "easy" },
  { id: "receptors-036", sectionId: "receptors", type: "mcq", question: "المستقبلات النيكوتينية من أي نوع؟", options: ["قناة أيونية مفتوحة بالربيطة", "مرتبطة ببروتين G", "نووية", "مرتبطة بالتيروزين كيناز"], answer: "قناة أيونية مفتوحة بالربيطة", explanation: "تفتح بارتباط الأستيل كولين فتسمح بدخول Na+.", difficulty: "medium" },
  { id: "receptors-037", sectionId: "receptors", type: "mcq", question: "المستقبلات المسكارينية من أي نوع؟", options: ["مرتبطة ببروتين G", "قناة أيونية", "نووية", "مرتبطة بالإنزيم"], answer: "مرتبطة ببروتين G", explanation: "M1 وM3 وM5 عبر Gq، وM2 وM4 عبر Gi.", difficulty: "medium" },
  { id: "receptors-038", sectionId: "receptors", type: "mcq", question: "ما تأثير تنبيه M2 في القلب؟", options: ["إبطاء معدل القلب", "تسريع القلب", "زيادة قوة الانقباض فقط", "توسع القصبات"], answer: "إبطاء معدل القلب", explanation: "تنبيه العصب المبهم يعمل عبر M2 في العقدة الجيبية الأذينية.", difficulty: "medium" },
  { id: "receptors-039", sectionId: "receptors", type: "mcq", question: "أي مستقبلات تحجبها مضادات الذهان مثل Haloperidol أساسًا؟", options: ["دوبامين D2", "هيستامين H2", "بيتا-1", "M3"], answer: "دوبامين D2", explanation: "حجب D2 في المسار الحوفي يخفف الأعراض الذهانية الإيجابية، لكنه قد يسبب أعراضًا خارج هرمية.", difficulty: "medium" },
  { id: "receptors-040", sectionId: "receptors", type: "mcq", question: "ما فئة Diphenhydramine؟", options: ["مضاد هيستامين H1 من الجيل الأول", "مضاد H2", "حاصر بيتا", "ناهض مسكاريني"], answer: "مضاد هيستامين H1 من الجيل الأول", explanation: "يسبب نعاسًا لأنه يعبر الحاجز الدموي الدماغي، ويملك تأثيرًا مضادًا للمسكارين.", difficulty: "easy" },
  { id: "receptors-041", sectionId: "receptors", type: "mcq", question: "ما فئة Famotidine وكيف يعمل؟", options: ["مضاد H2 يقلل إفراز حمض المعدة", "مضاد H1 يعالج الحساسية فقط", "مثبط مضخة البروتون", "ناهض M3"], answer: "مضاد H2 يقلل إفراز حمض المعدة", explanation: "يحجب مستقبلات H2 في الخلايا الجدارية.", difficulty: "medium" },
  { id: "receptors-042", sectionId: "receptors", type: "mcq", question: "على أي مستقبلات يعمل Ondansetron لمنع القيء؟", options: ["5-HT3", "D2 فقط", "H2", "ألفا-1"], answer: "5-HT3", explanation: "مستقبل 5-HT3 قناة أيونية، وحجبه يقلل القيء الناتج عن العلاج الكيميائي والجراحة.", difficulty: "medium" },
  { id: "receptors-043", sectionId: "receptors", type: "mcq", question: "ما أبرز آثار تنبيه مستقبلات ميو الأفيونية؟", options: ["تسكين الألم وتثبيط التنفس والإمساك", "توسع القصبات وتسارع القلب", "ارتفاع الضغط والأرق", "إدرار البول فقط"], answer: "تسكين الألم وتثبيط التنفس والإمساك", explanation: "مثال: Morphine وFentanyl.", difficulty: "medium" },
  { id: "receptors-044", sectionId: "receptors", type: "mcq", question: "ما استخدام Naloxone؟", options: ["عكس تأثيرات الأفيونيات في حالات الجرعة الزائدة", "علاج الربو", "خفض الضغط", "علاج الحساسية"], answer: "عكس تأثيرات الأفيونيات في حالات الجرعة الزائدة", explanation: "مضاد تنافسي لمستقبلات الأفيونات، ومدة تأثيره قد تكون أقصر من بعض الأفيونيات فيحتاج متابعة.", difficulty: "medium" },
  { id: "receptors-045", sectionId: "receptors", type: "mcq", question: "ماذا يفعل ارتباط البنزوديازيبينات بمستقبل GABA-A؟", options: ["يزيد تكرار فتح قناة الكلوريد فيزداد التثبيط", "يغلق قناة الكلوريد", "يفتح قناة الكالسيوم", "ينشّط بروتين Gs"], answer: "يزيد تكرار فتح قناة الكلوريد فيزداد التثبيط", explanation: "هي معدِّلات ألوستيرية إيجابية ولا تفتح القناة وحدها بنفس طريقة GABA.", difficulty: "hard" },
  { id: "receptors-046", sectionId: "receptors", type: "mcq", question: "ما استخدام Flumazenil؟", options: ["مضاد للبنزوديازيبينات", "مضاد للأفيونيات", "مضاد للهيستامين", "ناهض بيتا"], answer: "مضاد للبنزوديازيبينات", explanation: "قد يحفّز نوبات تشنج لدى المعتمدين على البنزوديازيبينات، لذلك يُستخدم بحذر.", difficulty: "hard" },
  { id: "receptors-047", sectionId: "receptors", type: "mcq", question: "على أي مستقبلات يعمل Losartan؟", options: ["يحجب مستقبلات أنجيوتنسين AT1", "ينشّط بيتا-2", "يحجب H2", "ينشّط D2"], answer: "يحجب مستقبلات أنجيوتنسين AT1", explanation: "يخفض الضغط بتقليل تضيّق الأوعية وإفراز الألدوستيرون.", difficulty: "medium" },
  { id: "receptors-048", sectionId: "receptors", type: "truefalse", question: "Salbutamol ناهض انتقائي نسبيًا لمستقبلات بيتا-2.", options: ["صح", "خطأ"], answer: true, explanation: "يوسّع القصبات، وقد يسبب رعشة وخفقانًا بجرعات عالية بسبب فقدان جزء من الانتقائية.", difficulty: "easy" },
  { id: "receptors-049", sectionId: "receptors", type: "mcq", question: "ما فئة مستقبلات NMDA وأي دواء يحجبها؟", options: ["قناة أيونية للغلوتامات، ويحجبها Ketamine", "مرتبطة ببروتين G، ويحجبها Atropine", "نووية، ويحجبها Tamoxifen", "إنزيمية، ويحجبها Insulin"], answer: "قناة أيونية للغلوتامات، ويحجبها Ketamine", explanation: "الكيتامين مضاد غير تنافسي لمستقبل NMDA ويُستخدم في التخدير.", difficulty: "hard" },
  { id: "receptors-050", sectionId: "receptors", type: "truefalse", question: "المضاد له ألفة للمستقبل لكن ليس له فعالية ذاتية (Intrinsic activity).", options: ["صح", "خطأ"], answer: true, explanation: "الناهض له ألفة وفعالية ذاتية، أما المضاد فيرتبط ويمنع دون تنشيط.", difficulty: "medium" },
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
  { id: "neuro-002", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي الرئيسي في الجهاز العصبي نظير الودي عند الأعضاء المستهدفة؟", options: ["Acetylcholine", "Noradrenaline", "Dopamine", "Serotonin"], answer: "Acetylcholine", explanation: "يفرزه العصب نظير الودي قبل وبعد العقدة، ويعمل على المستقبلات المسكارينية في الأعضاء.", difficulty: "easy" },
  { id: "neuro-003", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي الرئيسي عند النهايات الودية بعد العقدة؟", options: ["Noradrenaline", "Acetylcholine", "GABA", "Glycine"], answer: "Noradrenaline", explanation: "استثناء: الغدد العرقية تُعصَّب بألياف ودية كولينية.", difficulty: "easy" },
  { id: "neuro-004", sectionId: "neurotransmitters", type: "truefalse", question: "الغدد العرقية تُعصَّب بألياف ودية تفرز الأستيل كولين.", options: ["صح", "خطأ"], answer: true, explanation: "وهو استثناء مشهور في الجهاز الودي.", difficulty: "medium" },
  { id: "neuro-005", sectionId: "neurotransmitters", type: "mcq", question: "ما الإنزيم الذي يحوّل التيروزين إلى L-DOPA وهو الخطوة المحددة للسرعة في تخليق الكاتيكولامينات؟", options: ["Tyrosine hydroxylase", "DOPA decarboxylase", "MAO", "COMT"], answer: "Tyrosine hydroxylase", explanation: "مسار التخليق: تيروزين ← DOPA ← دوبامين ← نورأدرينالين ← أدرينالين.", difficulty: "hard" },
  { id: "neuro-006", sectionId: "neurotransmitters", type: "mcq", question: "ما الإنزيمان الرئيسيان لتحطيم الكاتيكولامينات؟", options: ["MAO وCOMT", "ACE وRenin", "CYP3A4 وCYP2D6", "Lipase وAmylase"], answer: "MAO وCOMT", explanation: "MAO أحادي الأمين أوكسيداز، وCOMT كاتيكول-أو-ميثيل ترانسفيراز.", difficulty: "medium" },
  { id: "neuro-007", sectionId: "neurotransmitters", type: "mcq", question: "ما الإنزيم الذي يحلل الأستيل كولين في الشق المشبكي؟", options: ["Acetylcholinesterase", "MAO", "COMT", "Choline acetyltransferase"], answer: "Acetylcholinesterase", explanation: "يحوله إلى كولين وأسيتات، ويُستهدف بمثبطات مثل Neostigmine وDonepezil.", difficulty: "easy" },
  { id: "neuro-008", sectionId: "neurotransmitters", type: "mcq", question: "ما الإنزيم المسؤول عن تخليق الأستيل كولين؟", options: ["Choline acetyltransferase", "Acetylcholinesterase", "Tyrosine hydroxylase", "Glutamate decarboxylase"], answer: "Choline acetyltransferase", explanation: "يجمع الكولين مع Acetyl-CoA.", difficulty: "hard" },
  { id: "neuro-009", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي المثبط الرئيسي في الجهاز العصبي المركزي؟", options: ["GABA", "Glutamate", "Aspartate", "Acetylcholine"], answer: "GABA", explanation: "حمض غاما أمينوبيوتيريك، وتعمل البنزوديازيبينات والباربيتورات عبر مستقبله GABA-A.", difficulty: "easy" },
  { id: "neuro-010", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي المنبه الرئيسي في الجهاز العصبي المركزي؟", options: ["Glutamate", "GABA", "Glycine", "Melatonin"], answer: "Glutamate", explanation: "يعمل على مستقبلات NMDA وAMPA وKainate.", difficulty: "easy" },
  { id: "neuro-011", sectionId: "neurotransmitters", type: "mcq", question: "من أي مادة يُصنع GABA؟", options: ["Glutamate", "Tyrosine", "Tryptophan", "Choline"], answer: "Glutamate", explanation: "بواسطة إنزيم Glutamate decarboxylase ويحتاج فيتامين B6 كعامل مساعد.", difficulty: "hard" },
  { id: "neuro-012", sectionId: "neurotransmitters", type: "truefalse", question: "يحتاج إنزيم Glutamate decarboxylase إلى فيتامين B6 كعامل مساعد.", options: ["صح", "خطأ"], answer: true, explanation: "ونقص B6 قد يسبب نوبات تشنجية خاصة عند الرضع.", difficulty: "hard" },
  { id: "neuro-013", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي المثبط الرئيسي في النخاع الشوكي؟", options: ["Glycine", "Dopamine", "Histamine", "Substance P"], answer: "Glycine", explanation: "يعمل عبر قناة الكلوريد، ويحجبه سم الإستركنين.", difficulty: "medium" },
  { id: "neuro-014", sectionId: "neurotransmitters", type: "mcq", question: "من أي حمض أميني يُصنع السيروتونين؟", options: ["Tryptophan", "Tyrosine", "Glutamine", "Histidine"], answer: "Tryptophan", explanation: "ثم يتحول إلى 5-HTP ثم إلى السيروتونين.", difficulty: "medium" },
  { id: "neuro-015", sectionId: "neurotransmitters", type: "mcq", question: "ما الهرمون الذي يُصنع من السيروتونين في الغدة الصنوبرية؟", options: ["Melatonin", "Cortisol", "Insulin", "Adrenaline"], answer: "Melatonin", explanation: "ينظم دورة النوم والاستيقاظ.", difficulty: "easy" },
  { id: "neuro-016", sectionId: "neurotransmitters", type: "mcq", question: "ما آلية عمل مثبطات استرداد السيروتونين الانتقائية (SSRIs) مثل Fluoxetine؟", options: ["تمنع إعادة امتصاص السيروتونين في النهاية العصبية", "تنشّط MAO", "تحجب مستقبلات الدوبامين", "تزيد تحطيم السيروتونين"], answer: "تمنع إعادة امتصاص السيروتونين في النهاية العصبية", explanation: "فيزداد تركيزه في الشق المشبكي، ويظهر التأثير العلاجي غالبًا بعد أسابيع.", difficulty: "medium" },
  { id: "neuro-017", sectionId: "neurotransmitters", type: "mcq", question: "ما المتلازمة الخطيرة الناتجة عن فرط نشاط السيروتونين؟", options: ["متلازمة السيروتونين", "متلازمة الرجل الأحمر", "متلازمة كوشينغ", "متلازمة الطفل الرمادي"], answer: "متلازمة السيروتونين", explanation: "تشمل هياجًا وارتفاع حرارة ورعشة وتسارع قلب، وتحدث غالبًا بدمج أدوية سيروتونينية.", difficulty: "medium" },
  { id: "neuro-018", sectionId: "neurotransmitters", type: "truefalse", question: "يُمنع الجمع بين مثبطات MAO ومثبطات استرداد السيروتونين بسبب خطر متلازمة السيروتونين.", options: ["صح", "خطأ"], answer: true, explanation: "ويلزم فاصل زمني كافٍ بين إيقاف أحدهما وبدء الآخر وفق النشرة.", difficulty: "medium" },
  { id: "neuro-019", sectionId: "neurotransmitters", type: "mcq", question: "ما الأطعمة التي يُحذَّر منها مع مثبطات MAO غير الانتقائية بسبب خطر أزمة ارتفاع الضغط؟", options: ["الأطعمة الغنية بالتيرامين مثل الأجبان المعتقة", "الخبز", "الأرز", "التفاح"], answer: "الأطعمة الغنية بالتيرامين مثل الأجبان المعتقة", explanation: "التيرامين يحرر النورأدرينالين، ولا يُحطَّم بسبب تثبيط MAO في الأمعاء والكبد.", difficulty: "hard" },
  { id: "neuro-020", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي الذي ينقص في المسار الجسمي السوداوي (Nigrostriatal) في مرض باركنسون؟", options: ["Dopamine", "Serotonin", "GABA", "Acetylcholine"], answer: "Dopamine", explanation: "تنكس الخلايا في المادة السوداء يسبب رعشة وتيبسًا وبطء حركة.", difficulty: "easy" },
  { id: "neuro-021", sectionId: "neurotransmitters", type: "mcq", question: "لماذا يُعطى Levodopa مع Carbidopa؟", options: ["Carbidopa يمنع تحويل الليفودوبا إلى دوبامين خارج الدماغ", "Carbidopa يزيد الامتصاص المعوي", "Carbidopa يحفّز MAO", "Carbidopa يعالج الغثيان فقط"], answer: "Carbidopa يمنع تحويل الليفودوبا إلى دوبامين خارج الدماغ", explanation: "فيصل مزيد من الليفودوبا إلى الدماغ وتقل الآثار الطرفية، لأن الكاربيدوبا لا يعبر الحاجز الدموي الدماغي.", difficulty: "medium" },
  { id: "neuro-022", sectionId: "neurotransmitters", type: "mcq", question: "لماذا لا يُعطى الدوبامين نفسه لعلاج باركنسون؟", options: ["لا يعبر الحاجز الدموي الدماغي", "لأنه سام للكبد فقط", "لأنه لا يذوب في الماء", "لأنه يتحلل في الفم فقط"], answer: "لا يعبر الحاجز الدموي الدماغي", explanation: "لذلك يُستخدم Levodopa كدواء أولي يعبر الحاجز ثم يتحول داخل الدماغ.", difficulty: "medium" },
  { id: "neuro-023", sectionId: "neurotransmitters", type: "mcq", question: "ما فرط نشاط الدوبامين في المسار الحوفي المرتبط بأي حالة؟", options: ["الأعراض الذهانية الإيجابية في الفصام", "داء باركنسون", "الاكتئاب فقط", "الصرع الغائب"], answer: "الأعراض الذهانية الإيجابية في الفصام", explanation: "وهو أساس فرضية الدوبامين، وتحجب مضادات الذهان مستقبلات D2.", difficulty: "medium" },
  { id: "neuro-024", sectionId: "neurotransmitters", type: "mcq", question: "حجب الدوبامين في المسار الدرني القمعي (Tuberoinfundibular) يسبب ماذا؟", options: ["ارتفاع البرولاكتين", "انخفاض البرولاكتين", "ارتفاع الكورتيزول", "انخفاض الغلوكوز"], answer: "ارتفاع البرولاكتين", explanation: "الدوبامين يثبط إفراز البرولاكتين طبيعيًا، فقد يسبب حجبه إفراز حليب وانقطاع طمث.", difficulty: "hard" },
  { id: "neuro-025", sectionId: "neurotransmitters", type: "truefalse", question: "الدوبامين يثبط إفراز البرولاكتين من الغدة النخامية.", options: ["صح", "خطأ"], answer: true, explanation: "لذلك تُستخدم ناهضات الدوبامين مثل Cabergoline لخفض البرولاكتين.", difficulty: "medium" },
  { id: "neuro-026", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي المرتبط بالمنطقة المستحثة للقيء (CTZ) عبر مستقبلات D2؟", options: ["Dopamine", "GABA", "Melatonin", "Glycine"], answer: "Dopamine", explanation: "لذلك يعمل Metoclopramide كمضاد للقيء بحجب D2.", difficulty: "medium" },
  { id: "neuro-027", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي الذي يرتبط بنقله بالنقص في مرض الزهايمر؟", options: ["Acetylcholine", "Dopamine", "Histamine", "Melatonin"], answer: "Acetylcholine", explanation: "لذلك تُستخدم مثبطات الكولينستيراز مثل Donepezil لتخفيف الأعراض.", difficulty: "medium" },
  { id: "neuro-028", sectionId: "neurotransmitters", type: "mcq", question: "ما فئة Donepezil؟", options: ["مثبط أستيل كولين إستيراز", "ناهض دوبامين", "حاصر بيتا", "مثبط استرداد السيروتونين"], answer: "مثبط أستيل كولين إستيراز", explanation: "يزيد الأستيل كولين في المشبك ويُستخدم في الزهايمر الخفيف إلى المتوسط.", difficulty: "easy" },
  { id: "neuro-029", sectionId: "neurotransmitters", type: "mcq", question: "ما استخدام Neostigmine في الوهن العضلي الوبيل؟", options: ["يزيد الأستيل كولين عند الوصلة العصبية العضلية", "يحجب المستقبلات النيكوتينية", "يثبط MAO", "يزيد GABA"], answer: "يزيد الأستيل كولين عند الوصلة العصبية العضلية", explanation: "الوهن العضلي ينتج عن أجسام مضادة لمستقبلات الأستيل كولين.", difficulty: "medium" },
  { id: "neuro-030", sectionId: "neurotransmitters", type: "mcq", question: "ما سم Botulinum toxin؟", options: ["يمنع إطلاق الأستيل كولين من النهايات العصبية", "يحجب المستقبلات المسكارينية", "يثبط AChE", "ينشّط GABA"], answer: "يمنع إطلاق الأستيل كولين من النهايات العصبية", explanation: "يسبب شللًا رخوًا، ويُستخدم علاجيًا بجرعات صغيرة في التشنجات وبعض الحالات التجميلية.", difficulty: "medium" },
  { id: "neuro-031", sectionId: "neurotransmitters", type: "mcq", question: "ماذا يفعل Reserpine؟", options: ["يستنزف مخزون الكاتيكولامينات والسيروتونين في الحويصلات", "يزيد الإطلاق", "يثبط AChE", "ينشّط GABA"], answer: "يستنزف مخزون الكاتيكولامينات والسيروتونين في الحويصلات", explanation: "بحجبه ناقل VMAT، وقد يسبب اكتئابًا وانخفاضًا في الضغط.", difficulty: "hard" },
  { id: "neuro-032", sectionId: "neurotransmitters", type: "mcq", question: "ما آلية عمل Amphetamine؟", options: ["يزيد إطلاق الدوبامين والنورأدرينالين ويمنع استردادهما", "يحجب مستقبلات D2", "يثبط ChAT", "ينشّط GABA-A"], answer: "يزيد إطلاق الدوبامين والنورأدرينالين ويمنع استردادهما", explanation: "منبه للجهاز العصبي المركزي.", difficulty: "medium" },
  { id: "neuro-033", sectionId: "neurotransmitters", type: "mcq", question: "ما آلية عمل Cocaine؟", options: ["يمنع إعادة امتصاص الدوبامين والنورأدرينالين والسيروتونين", "يحجب المستقبلات الأفيونية", "ينشّط GABA", "يثبط MAO فقط"], answer: "يمنع إعادة امتصاص الدوبامين والنورأدرينالين والسيروتونين", explanation: "ويملك أيضًا تأثيرًا مخدرًا موضعيًا بحجب قنوات الصوديوم.", difficulty: "medium" },
  { id: "neuro-034", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي الذي تُعد الإندورفينات ببتيدات مرتبطة بمستقبلاته؟", options: ["المستقبلات الأفيونية (ميو، دلتا، كابا)", "المسكارينية", "النيكوتينية", "الهيستامينية"], answer: "المستقبلات الأفيونية (ميو، دلتا، كابا)", explanation: "الإندورفينات ناقلات ببتيدية داخلية تعمل على المستقبلات الأفيونية وتخفف الألم.", difficulty: "medium" },
  { id: "neuro-035", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي الببتيدي المرتبط بنقل إشارات الألم؟", options: ["Substance P", "GABA", "Glycine", "Melatonin"], answer: "Substance P", explanation: "يُفرز من الألياف الحسية الأولية، ويرتبط بمستقبلات NK1.", difficulty: "medium" },
  { id: "neuro-036", sectionId: "neurotransmitters", type: "mcq", question: "على أي مستقبلات يعمل Aprepitant؟", options: ["NK1", "D2", "5-HT3", "H1"], answer: "NK1", explanation: "يمنع تأثير Substance P ويُستخدم لمنع القيء المرتبط بالعلاج الكيميائي.", difficulty: "hard" },
  { id: "neuro-037", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي المسؤول عن اليقظة والاستيقاظ ويرتبط بمستقبلات H1 في الدماغ؟", options: ["Histamine", "Glycine", "GABA", "Melatonin"], answer: "Histamine", explanation: "لذلك تسبب مضادات H1 من الجيل الأول النعاس.", difficulty: "medium" },
  { id: "neuro-038", sectionId: "neurotransmitters", type: "truefalse", question: "مضادات الهيستامين من الجيل الأول تسبب النعاس لأنها تعبر الحاجز الدموي الدماغي.", options: ["صح", "خطأ"], answer: true, explanation: "الجيل الثاني مثل Loratadine أقل نفاذًا فيسبب نعاسًا أقل.", difficulty: "easy" },
  { id: "neuro-039", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل الذي ترتبط به الأدوية المضادة للصرع مثل Vigabatrin؟", options: ["GABA (يثبط تحطيمه بتثبيط GABA transaminase)", "Dopamine", "Serotonin", "Acetylcholine"], answer: "GABA (يثبط تحطيمه بتثبيط GABA transaminase)", explanation: "فيزداد GABA المثبط في الدماغ.", difficulty: "hard" },
  { id: "neuro-040", sectionId: "neurotransmitters", type: "mcq", question: "ما آلية عمل Tiagabine؟", options: ["يمنع إعادة امتصاص GABA", "يحجب مستقبل GABA", "ينشّط NMDA", "يثبط MAO"], answer: "يمنع إعادة امتصاص GABA", explanation: "يزيد تركيز GABA في الشق المشبكي.", difficulty: "hard" },
  { id: "neuro-041", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي المرتبط بالتعلم والذاكرة وتنشيط مستقبلات NMDA؟", options: ["Glutamate", "GABA", "Glycine فقط", "Dopamine فقط"], answer: "Glutamate", explanation: "ويرتبط فرط التنبيه الغلوتاماتي بالسمية العصبية (Excitotoxicity).", difficulty: "medium" },
  { id: "neuro-042", sectionId: "neurotransmitters", type: "mcq", question: "ما استخدام Memantine في الزهايمر؟", options: ["مضاد غير تنافسي لمستقبل NMDA", "مثبط AChE", "ناهض D2", "مثبط MAO-B"], answer: "مضاد غير تنافسي لمستقبل NMDA", explanation: "يقلل فرط التنبيه الغلوتاماتي ويُستخدم في الزهايمر المتوسط إلى الشديد.", difficulty: "hard" },
  { id: "neuro-043", sectionId: "neurotransmitters", type: "mcq", question: "ما نوع مثبط MAO المستخدم في داء باركنسون (مثل Selegiline)؟", options: ["مثبط MAO-B انتقائي", "مثبط MAO-A انتقائي", "مثبط COMT", "مثبط AChE"], answer: "مثبط MAO-B انتقائي", explanation: "يقلل تحطيم الدوبامين في الدماغ.", difficulty: "hard" },
  { id: "neuro-044", sectionId: "neurotransmitters", type: "mcq", question: "ما آلية عمل Entacapone؟", options: ["مثبط COMT يطيل تأثير الليفودوبا", "ناهض D2", "مثبط AChE", "مثبط DOPA decarboxylase"], answer: "مثبط COMT يطيل تأثير الليفودوبا", explanation: "يقلل تحطيم الليفودوبا محيطيًا.", difficulty: "hard" },
  { id: "neuro-045", sectionId: "neurotransmitters", type: "mcq", question: "ما فئة Ropinirole وPramipexole؟", options: ["ناهضات مستقبلات الدوبامين", "حاصرات الدوبامين", "مثبطات MAO-A", "مضادات الكولين"], answer: "ناهضات مستقبلات الدوبامين", explanation: "تُستخدم في باركنسون ومتلازمة تململ الساقين.", difficulty: "medium" },
  { id: "neuro-046", sectionId: "neurotransmitters", type: "truefalse", question: "مضادات الكولين المركزية مثل Benztropine تُستخدم لتخفيف الأعراض خارج الهرمية الناتجة عن مضادات الذهان.", options: ["صح", "خطأ"], answer: true, explanation: "لأنها تعيد التوازن بين الدوبامين والأستيل كولين في المخطط.", difficulty: "hard" },
  { id: "neuro-047", sectionId: "neurotransmitters", type: "mcq", question: "ما آلية عمل Venlafaxine؟", options: ["يمنع إعادة امتصاص السيروتونين والنورأدرينالين", "يحجب D2", "ينشّط GABA", "يثبط AChE"], answer: "يمنع إعادة امتصاص السيروتونين والنورأدرينالين", explanation: "من مثبطات استرداد السيروتونين والنورأدرينالين SNRIs.", difficulty: "medium" },
  { id: "neuro-048", sectionId: "neurotransmitters", type: "mcq", question: "ما الأثر الجانبي المرتبط بمضادات الاكتئاب ثلاثية الحلقات مثل Amitriptyline؟", options: ["آثار مضادة للكولين: جفاف فم وإمساك واحتباس بول", "نقص السكر الشديد", "تضخم الغدة الدرقية", "فرط إفراز الحليب فقط"], answer: "آثار مضادة للكولين: جفاف فم وإمساك واحتباس بول", explanation: "كما قد تسبب نعاسًا واضطراب نظم القلب في الجرعات الزائدة.", difficulty: "medium" },
  { id: "neuro-049", sectionId: "neurotransmitters", type: "mcq", question: "ما الناقل العصبي الذي يفرزه العصب الودي من لب الكظر (Adrenal medulla) بشكل رئيسي في الدم؟", options: ["Adrenaline", "Acetylcholine", "GABA", "Serotonin"], answer: "Adrenaline", explanation: "لب الكظر يعمل كعقدة ودية معدلة تفرز الأدرينالين في الدورة الدموية.", difficulty: "hard" },
  { id: "neuro-050", sectionId: "neurotransmitters", type: "truefalse", question: "النورأدرينالين يُطلق من النهايات العصبية الودية ويُزال جزء كبير منه بإعادة الامتصاص إلى النهاية العصبية.", options: ["صح", "خطأ"], answer: true, explanation: "إعادة الامتصاص هي الآلية الأهم لإنهاء تأثيره، وتستهدفها أدوية مثل Cocaine وبعض مضادات الاكتئاب.", difficulty: "hard" },
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
  { id: "antibiotics-003", sectionId: "antibiotics", type: "mcq",
    question: "ما آلية عمل البنسيلينات؟",
    options: ["تثبيط تخليق جدار الخلية البكتيرية", "تثبيط تخليق البروتين على الوحدة 30S", "تثبيط إنزيم DNA gyrase", "تثبيط تخليق حمض الفوليك"],
    answer: "تثبيط تخليق جدار الخلية البكتيرية",
    explanation: "البنسيلينات من مضادات بيتا-لاكتام وتمنع بناء جدار الخلية البكتيرية.", difficulty: "easy" },

  { id: "antibiotics-004", sectionId: "antibiotics", type: "mcq",
    question: "إلى أي فئة ينتمي Amoxicillin؟",
    options: ["البنسيلينات", "الماكروليدات", "الكينولونات", "التتراسيكلينات"],
    answer: "البنسيلينات",
    explanation: "الأموكسيسيلين من البنسيلينات واسعة الطيف.", difficulty: "easy" },

  { id: "antibiotics-005", sectionId: "antibiotics", type: "mcq",
    question: "ما دور حمض الكلافولانيك (Clavulanic acid) مع الأموكسيسيلين؟",
    options: ["يثبط إنزيم بيتا-لاكتاماز", "يخفض الحرارة", "يقلل الغثيان فقط", "يزيد إخراج الدواء من الكلى"],
    answer: "يثبط إنزيم بيتا-لاكتاماز",
    explanation: "يحمي الأموكسيسيلين من التحلل بإنزيمات بيتا-لاكتاماز التي تنتجها بعض البكتيريا.", difficulty: "medium" },

  { id: "antibiotics-006", sectionId: "antibiotics", type: "truefalse",
    question: "يجب تجنب البنسيلينات لدى المريض الذي لديه حساسية شديدة موثقة تجاهها.",
    options: ["صح", "خطأ"], answer: true,
    explanation: "الحساسية الشديدة قد تصل إلى صدمة تأقية، لذلك يُختار بديل مناسب.", difficulty: "easy" },

  { id: "antibiotics-007", sectionId: "antibiotics", type: "mcq",
    question: "إلى أي فئة ينتمي Azithromycin؟",
    options: ["الماكروليدات", "الأمينوغليكوزيدات", "السيفالوسبورينات", "السلفوناميدات"],
    answer: "الماكروليدات",
    explanation: "الأزيثروميسين من الماكروليدات.", difficulty: "easy" },

  { id: "antibiotics-008", sectionId: "antibiotics", type: "mcq",
    question: "على أي وحدة ريبوسومية ترتبط الماكروليدات؟",
    options: ["الوحدة 50S", "الوحدة 30S", "إنزيم DNA gyrase", "جدار الخلية"],
    answer: "الوحدة 50S",
    explanation: "ترتبط الماكروليدات بالوحدة 50S وتثبط تخليق البروتين.", difficulty: "medium" },

  { id: "antibiotics-009", sectionId: "antibiotics", type: "mcq",
    question: "إلى أي فئة ينتمي Ciprofloxacin؟",
    options: ["الفلوروكينولونات", "البنسيلينات", "الماكروليدات", "الجليكوببتيدات"],
    answer: "الفلوروكينولونات",
    explanation: "السيبروفلوكساسين من الفلوروكينولونات.", difficulty: "easy" },

  { id: "antibiotics-010", sectionId: "antibiotics", type: "mcq",
    question: "ما هدف عمل الفلوروكينولونات في البكتيريا؟",
    options: ["DNA gyrase وTopoisomerase IV", "جدار الخلية", "الوحدة 30S", "إنزيم الفوليك ريدكتاز"],
    answer: "DNA gyrase وTopoisomerase IV",
    explanation: "تمنع الفلوروكينولونات تضاعف الحمض النووي البكتيري.", difficulty: "medium" },

  { id: "antibiotics-011", sectionId: "antibiotics", type: "truefalse",
    question: "قد تسبب الفلوروكينولونات التهاب الأوتار وتمزقها.",
    options: ["صح", "خطأ"], answer: true,
    explanation: "هذا تأثير جانبي معروف، ويزيد الخطر عند كبار السن ومستخدمي الكورتيكوستيرويدات.", difficulty: "medium" },

  { id: "antibiotics-012", sectionId: "antibiotics", type: "mcq",
    question: "أي مما يلي يقلل امتصاص السيبروفلوكساسين إذا أُخذ معه في الوقت نفسه؟",
    options: ["مستحضرات الكالسيوم والحديد والمغنيسيوم", "الماء", "فيتامين C", "الباراسيتامول"],
    answer: "مستحضرات الكالسيوم والحديد والمغنيسيوم",
    explanation: "ترتبط المعادن بالدواء (Chelation) فتقل كمية الممتص، فيُفصل بينهما بوقت مناسب.", difficulty: "medium" },

  { id: "antibiotics-013", sectionId: "antibiotics", type: "mcq",
    question: "إلى أي فئة ينتمي Doxycycline؟",
    options: ["التتراسيكلينات", "الماكروليدات", "الكاربابينيمات", "الفلوروكينولونات"],
    answer: "التتراسيكلينات",
    explanation: "الدوكسيسيكلين من التتراسيكلينات.", difficulty: "easy" },

  { id: "antibiotics-014", sectionId: "antibiotics", type: "truefalse",
    question: "يُتجنب استخدام التتراسيكلينات عادةً أثناء الحمل وفي الأطفال دون 8 سنوات.",
    options: ["صح", "خطأ"], answer: true,
    explanation: "قد تسبب تلون الأسنان وتؤثر في نمو العظام.", difficulty: "medium" },

  { id: "antibiotics-015", sectionId: "antibiotics", type: "mcq",
    question: "إلى أي فئة ينتمي Gentamicin؟",
    options: ["الأمينوغليكوزيدات", "البنسيلينات", "الماكروليدات", "التتراسيكلينات"],
    answer: "الأمينوغليكوزيدات",
    explanation: "الجنتاميسين من الأمينوغليكوزيدات.", difficulty: "easy" },

  { id: "antibiotics-016", sectionId: "antibiotics", type: "mcq",
    question: "ما أبرز سمّية مرتبطة بالأمينوغليكوزيدات؟",
    options: ["سمية الكلى والسمع", "تلون الأسنان فقط", "تضخم اللثة", "انخفاض السكر فقط"],
    answer: "سمية الكلى والسمع",
    explanation: "لذلك تُراقب وظائف الكلى ومستويات الدواء في الدم عند الاستخدام.", difficulty: "medium" },

  { id: "antibiotics-017", sectionId: "antibiotics", type: "mcq",
    question: "على أي وحدة ريبوسومية ترتبط الأمينوغليكوزيدات؟",
    options: ["الوحدة 30S", "الوحدة 50S", "جدار الخلية", "DNA gyrase"],
    answer: "الوحدة 30S",
    explanation: "ترتبط بالوحدة 30S فتسبب أخطاء في تخليق البروتين.", difficulty: "medium" },

  { id: "antibiotics-018", sectionId: "antibiotics", type: "mcq",
    question: "ضد أي نوع من الميكروبات يُستخدم Metronidazole؟",
    options: ["البكتيريا اللاهوائية والطفيليات الأولية", "الفيروسات", "الفطريات", "البكتيريا الهوائية فقط"],
    answer: "البكتيريا اللاهوائية والطفيليات الأولية",
    explanation: "يُستخدم مثلًا في الجيارديا والأميبا وبعض العدوى اللاهوائية.", difficulty: "medium" },

  { id: "antibiotics-019", sectionId: "antibiotics", type: "truefalse",
    question: "يُنصح بتجنب الكحول أثناء استخدام Metronidazole.",
    options: ["صح", "خطأ"], answer: true,
    explanation: "قد يسبب تفاعلًا شبيهًا بالديسلفيرام: غثيان وقيء واحمرار وخفقان.", difficulty: "easy" },

  { id: "antibiotics-020", sectionId: "antibiotics", type: "mcq",
    question: "ضد أي بكتيريا يُستخدم Vancomycin بشكل أساسي؟",
    options: ["البكتيريا موجبة الجرام مثل MRSA", "البكتيريا سالبة الجرام فقط", "الفطريات", "الفيروسات"],
    answer: "البكتيريا موجبة الجرام مثل MRSA",
    explanation: "الفانكومايسين من الجليكوببتيدات ويستهدف الجراثيم موجبة الجرام.", difficulty: "medium" },

  { id: "antibiotics-021", sectionId: "antibiotics", type: "mcq",
    question: "ما المتلازمة المرتبطة بإعطاء الفانكومايسين بالتسريب الوريدي السريع؟",
    options: ["متلازمة الرجل الأحمر", "متلازمة الطفل الرمادي", "متلازمة السيروتونين", "متلازمة ستيفنز جونسون"],
    answer: "متلازمة الرجل الأحمر",
    explanation: "تظهر باحمرار وحكة وتُخفَّف بإبطاء سرعة التسريب.", difficulty: "medium" },

  { id: "antibiotics-022", sectionId: "antibiotics", type: "mcq",
    question: "أي مضاد حيوي يرتبط تاريخيًا بمتلازمة الطفل الرمادي عند حديثي الولادة؟",
    options: ["Chloramphenicol", "Amoxicillin", "Azithromycin", "Cephalexin"],
    answer: "Chloramphenicol",
    explanation: "عدم نضج الكبد عند حديثي الولادة يؤدي إلى تراكم الدواء.", difficulty: "medium" },

  { id: "antibiotics-023", sectionId: "antibiotics", type: "mcq",
    question: "أي جيل من السيفالوسبورينات ينتمي إليه Cephalexin؟",
    options: ["الجيل الأول", "الجيل الثالث", "الجيل الخامس", "لا ينتمي لأي جيل"],
    answer: "الجيل الأول",
    explanation: "السيفاليكسين من الجيل الأول وغالبًا فعاله ضد البكتيريا موجبة الجرام.", difficulty: "medium" },

  { id: "antibiotics-024", sectionId: "antibiotics", type: "mcq",
    question: "أي جيل من السيفالوسبورينات ينتمي إليه Ceftriaxone؟",
    options: ["الجيل الثالث", "الجيل الأول", "الجيل الثاني", "الجيل الخامس"],
    answer: "الجيل الثالث",
    explanation: "السيفترياكسون من الجيل الثالث ويُعطى عادةً بالحقن.", difficulty: "medium" },

  { id: "antibiotics-025", sectionId: "antibiotics", type: "truefalse",
    question: "قد توجد حساسية متصالبة محتملة بين البنسيلينات والسيفالوسبورينات.",
    options: ["صح", "خطأ"], answer: true,
    explanation: "لأن كليهما من مضادات بيتا-لاكتام، وإن كان الخطر منخفضًا نسبيًا ويحتاج لتقييم.", difficulty: "medium" },

  { id: "antibiotics-026", sectionId: "antibiotics", type: "mcq",
    question: "ما آلية عمل السلفوناميدات والتريميثوبريم؟",
    options: ["تثبيط تخليق حمض الفوليك", "تثبيط جدار الخلية", "تثبيط الوحدة 50S", "تثبيط DNA gyrase"],
    answer: "تثبيط تخليق حمض الفوليك",
    explanation: "يعملان على خطوتين متتاليتين في مسار تخليق الفوليك البكتيري.", difficulty: "medium" },

  { id: "antibiotics-027", sectionId: "antibiotics", type: "truefalse",
    question: "يُتجنب عادةً استخدام السلفوناميدات في الرضع دون عمر شهرين.",
    options: ["صح", "خطأ"], answer: true,
    explanation: "قد تزاحم البيليروبين على الارتباط بالألبومين وتزيد خطر اليرقان النووي.", difficulty: "hard" },

  { id: "antibiotics-028", sectionId: "antibiotics", type: "mcq",
    question: "لأي حالة يُستخدم Nitrofurantoin بشكل أساسي؟",
    options: ["عدوى المسالك البولية السفلية غير المعقدة", "الالتهاب الرئوي", "التهاب السحايا", "عدوى العظام"],
    answer: "عدوى المسالك البولية السفلية غير المعقدة",
    explanation: "يتركز في البول ولا يصل لتركيز كافٍ في الأنسجة.", difficulty: "medium" },

  { id: "antibiotics-029", sectionId: "antibiotics", type: "mcq",
    question: "ما اللون الذي قد يصبغ به Rifampicin البول والإفرازات؟",
    options: ["البرتقالي المحمر", "الأزرق", "الأخضر", "لا يغيّر اللون أبدًا"],
    answer: "البرتقالي المحمر",
    explanation: "تغيّر اللون غير ضار لكن يجب تنبيه المريض إليه.", difficulty: "easy" },

  { id: "antibiotics-030", sectionId: "antibiotics", type: "truefalse",
    question: "Rifampicin محفّز قوي للإنزيمات الكبدية وقد يقلل تأثير أدوية أخرى منها حبوب منع الحمل.",
    options: ["صح", "خطأ"], answer: true,
    explanation: "يزيد استقلاب أدوية كثيرة فتقل فعاليتها.", difficulty: "medium" },

  { id: "antibiotics-031", sectionId: "antibiotics", type: "mcq",
    question: "أي فيتامين يُعطى غالبًا مع Isoniazid للوقاية من الاعتلال العصبي؟",
    options: ["فيتامين B6", "فيتامين C", "فيتامين D", "فيتامين K"],
    answer: "فيتامين B6",
    explanation: "الأيزونيازيد يستنزف البيريدوكسين وقد يسبب التهاب الأعصاب الطرفية.", difficulty: "medium" },

  { id: "antibiotics-032", sectionId: "antibiotics", type: "mcq",
    question: "أي مضاد حيوي يرتبط بزيادة خطر التهاب القولون بـ C. difficile؟",
    options: ["Clindamycin", "Nitrofurantoin", "Doxycycline", "Fosfomycin"],
    answer: "Clindamycin",
    explanation: "الكليندامايسين من أكثر المضادات ارتباطًا بهذا الخطر، وكذلك السيفالوسبورينات والفلوروكينولونات.", difficulty: "hard" },

  { id: "antibiotics-033", sectionId: "antibiotics", type: "truefalse",
    question: "المضادات الحيوية فعّالة ضد فيروسات الإنفلونزا.",
    options: ["صح", "خطأ"], answer: false,
    explanation: "المضادات الحيوية تعمل على البكتيريا فقط ولا تؤثر في الفيروسات.", difficulty: "easy" },

  { id: "antibiotics-034", sectionId: "antibiotics", type: "mcq",
    question: "ما التصرف الصحيح عند استخدام مضاد حيوي موصوف؟",
    options: ["الالتزام بالجرعة والمدة الموصوفتين", "التوقف عند اختفاء الأعراض دائمًا", "مضاعفة الجرعة لتسريع الشفاء", "مشاركة المتبقي مع الآخرين"],
    answer: "الالتزام بالجرعة والمدة الموصوفتين",
    explanation: "التوقف المبكر أو العشوائي قد يؤدي لفشل العلاج وزيادة خطر المقاومة.", difficulty: "easy" },

  { id: "antibiotics-035", sectionId: "antibiotics", type: "mcq",
    question: "ماذا يعني الاختصار MRSA؟",
    options: ["المكورات العنقودية الذهبية المقاومة للميثيسيلين", "بكتيريا مقاومة لجميع المضادات الحيوية", "التهاب رئوي حاد", "فيروس معدٍ"],
    answer: "المكورات العنقودية الذهبية المقاومة للميثيسيلين",
    explanation: "Methicillin-resistant Staphylococcus aureus.", difficulty: "easy" },

  { id: "antibiotics-036", sectionId: "antibiotics", type: "mcq",
    question: "أي من الفئات التالية تُعد مبيدة للبكتيريا (Bactericidal) في الغالب؟",
    options: ["البنسيلينات", "التتراسيكلينات", "الماكروليدات", "الكلورامفينيكول"],
    answer: "البنسيلينات",
    explanation: "البنسيلينات مبيدة، بينما التتراسيكلينات والماكروليدات موقفة للنمو في الغالب.", difficulty: "medium" },

  { id: "antibiotics-037", sectionId: "antibiotics", type: "truefalse",
    question: "التتراسيكلينات تُعد غالبًا موقفة لنمو البكتيريا (Bacteriostatic).",
    options: ["صح", "خطأ"], answer: true,
    explanation: "توقف تكاثر البكتيريا ويُكمل الجهاز المناعي التخلص منها.", difficulty: "medium" },

  { id: "antibiotics-038", sectionId: "antibiotics", type: "mcq",
    question: "هل يتأثر امتصاص الأموكسيسيلين بالطعام بشكل ملحوظ؟",
    options: ["لا، يمكن تناوله مع الطعام أو بدونه", "نعم، لا يُؤخذ إلا على معدة فارغة", "نعم، لا يُؤخذ إلا بعد وجبة دسمة", "يُؤخذ مع الحليب فقط"],
    answer: "لا، يمكن تناوله مع الطعام أو بدونه",
    explanation: "يمكن تناوله مع الطعام لتقليل اضطراب المعدة.", difficulty: "medium" },

  { id: "antibiotics-039", sectionId: "antibiotics", type: "mcq",
    question: "ما التأثير القلبي المقلق المرتبط ببعض الماكروليدات والفلوروكينولونات؟",
    options: ["إطالة فترة QT", "تضخم القلب الدائم", "انسداد الشريان التاجي مباشرة", "ارتفاع نسبة الصفائح"],
    answer: "إطالة فترة QT",
    explanation: "قد تزيد خطر اضطراب النظم القلبي خاصة مع أدوية أخرى تطيل QT.", difficulty: "hard" },

  { id: "antibiotics-040", sectionId: "antibiotics", type: "mcq",
    question: "ما سبب كثرة التداخلات الدوائية مع Erythromycin وClarithromycin؟",
    options: ["تثبيطهما لإنزيم CYP3A4", "تحفيزهما للكلى", "ارتباطهما بالألبومين فقط", "تغييرهما لحموضة البول"],
    answer: "تثبيطهما لإنزيم CYP3A4",
    explanation: "فيرتفع تركيز أدوية كثيرة تُستقلب بهذا الإنزيم.", difficulty: "hard" },

  { id: "antibiotics-041", sectionId: "antibiotics", type: "mcq",
    question: "لأي عدوى يُستخدم Benzathine penicillin G بالحقن العضلي؟",
    options: ["الزهري (السفلس)", "الربو", "الصرع", "السكري"],
    answer: "الزهري (السفلس)",
    explanation: "هو من الخيارات الأساسية لعلاج الزهري، ويُستخدم أيضًا للوقاية من الحمى الروماتيزمية.", difficulty: "hard" },

  { id: "antibiotics-042", sectionId: "antibiotics", type: "truefalse",
    question: "الأمينوغليكوزيدات تُمتص جيدًا من الجهاز الهضمي عند تناولها فمويًا.",
    options: ["صح", "خطأ"], answer: false,
    explanation: "امتصاصها الفموي ضعيف جدًا، لذلك تُعطى عادةً بالحقن للعدوى الجهازية.", difficulty: "medium" },

  { id: "antibiotics-043", sectionId: "antibiotics", type: "mcq",
    question: "يُمنع إعطاء Ceftriaxone مع محاليل الكالسيوم الوريدية لأي فئة بشكل خاص؟",
    options: ["حديثو الولادة", "كبار السن", "الرياضيون", "النساء غير الحوامل"],
    answer: "حديثو الولادة",
    explanation: "قد يتكوّن راسب ملحي خطير يسبب أذى للرئتين والكلى.", difficulty: "hard" },

  { id: "antibiotics-044", sectionId: "antibiotics", type: "mcq",
    question: "أي مما يلي من الآثار الجانبية الشائعة للمضادات الحيوية الفموية؟",
    options: ["اضطرابات الجهاز الهضمي مثل الإسهال", "تساقط الأسنان", "فقدان البصر المفاجئ", "تضخم الغدة الدرقية"],
    answer: "اضطرابات الجهاز الهضمي مثل الإسهال",
    explanation: "تؤثر المضادات الحيوية في الفلورا الطبيعية للأمعاء وقد تسبب غثيانًا أو إسهالًا.", difficulty: "easy" },

  { id: "antibiotics-045", sectionId: "antibiotics", type: "mcq",
    question: "أي دواء مما يلي من الماكروليدات؟",
    options: ["Clarithromycin", "Gentamicin", "Doxycycline", "Cefixime"],
    answer: "Clarithromycin",
    explanation: "الكلاريثروميسين من الماكروليدات.", difficulty: "easy" },

  { id: "antibiotics-046", sectionId: "antibiotics", type: "mcq",
    question: "أي دواء مما يلي من الفلوروكينولونات؟",
    options: ["Levofloxacin", "Amoxicillin", "Azithromycin", "Metronidazole"],
    answer: "Levofloxacin",
    explanation: "اللفوفلوكساسين من الفلوروكينولونات.", difficulty: "easy" },

  { id: "antibiotics-047", sectionId: "antibiotics", type: "mcq",
    question: "بأي لون تظهر البكتيريا موجبة الجرام بعد صبغة جرام؟",
    options: ["بنفسجي", "وردي", "أخضر", "أصفر"],
    answer: "بنفسجي",
    explanation: "تحتفظ بصبغة الكريستال البنفسجي، أما سالبة الجرام فتظهر بلون وردي.", difficulty: "easy" },

  { id: "antibiotics-048", sectionId: "antibiotics", type: "truefalse",
    question: "المضادات واسعة الطيف أكثر ميلًا لاضطراب الفلورا الطبيعية من المضادات ضيقة الطيف.",
    options: ["صح", "خطأ"], answer: true,
    explanation: "لأنها تؤثر في أنواع أكثر من البكتيريا النافعة والضارة.", difficulty: "medium" },

  { id: "antibiotics-049", sectionId: "antibiotics", type: "mcq",
    question: "ما إحدى آليات مقاومة البكتيريا لمضادات بيتا-لاكتام؟",
    options: ["إنتاج إنزيمات بيتا-لاكتاماز", "زيادة امتصاص الدواء", "تعطيل الجهاز المناعي للمريض", "تقليل إنتاج الحمض النووي"],
    answer: "إنتاج إنزيمات بيتا-لاكتاماز",
    explanation: "تحلل هذه الإنزيمات حلقة بيتا-لاكتام فيفقد الدواء فعاليته.", difficulty: "medium" },

  { id: "antibiotics-050", sectionId: "antibiotics", type: "truefalse",
    question: "عند معرفة الميكروب المسبب وحساسيته، يُفضَّل غالبًا اختيار مضاد ضيق الطيف.",
    options: ["صح", "خطأ"], answer: true,
    explanation: "يقلل ذلك الضغط الانتقائي على المقاومة والتأثير في الفلورا الطبيعية.", difficulty: "medium" },
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
