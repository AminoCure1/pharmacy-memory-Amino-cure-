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
  { id: "pediatrics-002", sectionId: "pediatrics", type: "mcq", question: "ما المقصود بحديث الولادة (Neonate)؟", options: ["الطفل في أول 28 يومًا من العمر", "الطفل من سنة إلى 5 سنوات", "الطفل من شهر إلى سنة", "الطفل حتى عمر 12 سنة"], answer: "الطفل في أول 28 يومًا من العمر", explanation: "ويُسمى الرضيع من عمر شهر إلى سنة (Infant).", difficulty: "easy" },
  { id: "pediatrics-003", sectionId: "pediatrics", type: "truefalse", question: "الأطفال ليسوا مجرد بالغين بحجم أصغر عند التعامل مع الأدوية.", options: ["صح", "خطأ"], answer: true, explanation: "تختلف عندهم عمليات الامتصاص والتوزع والاستقلاب والإخراج، خاصة في حديثي الولادة والرضع.", difficulty: "easy" },
  { id: "pediatrics-004", sectionId: "pediatrics", type: "mcq", question: "كيف تكون حموضة المعدة (pH) عند حديثي الولادة مقارنة بالبالغين؟", options: ["أقل حموضة (pH أعلى)", "أكثر حموضة بكثير", "مطابقة تمامًا", "لا توجد حموضة نهائيًا"], answer: "أقل حموضة (pH أعلى)", explanation: "يؤثر ذلك في امتصاص بعض الأدوية الحمضية والأدوية التي تتحلل في الحمض.", difficulty: "medium" },
  { id: "pediatrics-005", sectionId: "pediatrics", type: "mcq", question: "ماذا يعني ارتفاع نسبة الماء في جسم حديثي الولادة بالنسبة لحجم التوزع؟", options: ["حجم توزع أكبر للأدوية الذائبة في الماء", "حجم توزع أصغر لها", "لا تأثير على التوزع", "عدم ارتباط الأدوية بالبروتين"], answer: "حجم توزع أكبر للأدوية الذائبة في الماء", explanation: "لذلك قد تختلف الجرعة لكل كيلوغرام عن البالغين لبعض الأدوية مثل الأمينوغليكوزيدات.", difficulty: "hard" },
  { id: "pediatrics-006", sectionId: "pediatrics", type: "truefalse", question: "إنزيمات الكبد غير ناضجة عند حديثي الولادة مما يقلل استقلاب بعض الأدوية.", options: ["صح", "خطأ"], answer: true, explanation: "ويزداد النضج تدريجيًا خلال الأشهر الأولى.", difficulty: "medium" },
  { id: "pediatrics-007", sectionId: "pediatrics", type: "mcq", question: "كيف يكون معدل الترشيح الكبيبي (GFR) عند حديثي الولادة؟", options: ["منخفض ويزداد تدريجيًا حتى نحو عمر سنة", "أعلى منه عند البالغين", "ثابت طوال الحياة", "غير موجود"], answer: "منخفض ويزداد تدريجيًا حتى نحو عمر سنة", explanation: "لذلك تتأخر تصفية الأدوية التي تُخرج عبر الكلى مثل الأمينوغليكوزيدات.", difficulty: "medium" },
  { id: "pediatrics-008", sectionId: "pediatrics", type: "mcq", question: "كيف يكون ارتباط الأدوية ببروتينات البلازما عند حديثي الولادة؟", options: ["أقل، فيزداد الجزء الحر من الدواء", "أعلى، فيقل الجزء الحر", "مماثل للبالغين دائمًا", "لا يحدث ارتباط"], answer: "أقل، فيزداد الجزء الحر من الدواء", explanation: "وقد يزيد ذلك خطر السمية لبعض الأدوية.", difficulty: "hard" },
  { id: "pediatrics-009", sectionId: "pediatrics", type: "mcq", question: "أي دواء يرتبط بمتلازمة الطفل الرمادي عند حديثي الولادة؟", options: ["Chloramphenicol", "Amoxicillin", "Paracetamol", "Cetirizine"], answer: "Chloramphenicol", explanation: "بسبب ضعف قدرة الكبد على استقلابه عند حديثي الولادة فيتراكم ويسبب سمية.", difficulty: "medium" },
  { id: "pediatrics-010", sectionId: "pediatrics", type: "mcq", question: "لماذا يُتجنب الأسبرين عادة عند الأطفال المصابين بعدوى فيروسية كالإنفلونزا أو الجدري المائي؟", options: ["خطر متلازمة راي (Reye)", "لأنه يسبب النعاس فقط", "لأنه لا يخفض الحرارة", "لأنه يزيد الشهية"], answer: "خطر متلازمة راي (Reye)", explanation: "وهي حالة نادرة لكنها خطيرة تصيب الدماغ والكبد.", difficulty: "easy" },
  { id: "pediatrics-011", sectionId: "pediatrics", type: "truefalse", question: "لا يُعطى الأسبرين عادة للأطفال لتخفيض الحرارة إلا بتوجيه من الطبيب.", options: ["صح", "خطأ"], answer: true, explanation: "الباراسيتامول من الخيارات الأولى المعتادة لخفض الحرارة وتسكين الألم عند الأطفال.", difficulty: "easy" },
  { id: "pediatrics-012", sectionId: "pediatrics", type: "mcq", question: "لماذا تُقيَّد أو تُمنع استخدامات الكوديين عند الأطفال؟", options: ["بعضهم يحوّله إلى مورفين بسرعة فيحدث تثبيط تنفسي", "لأنه لا يسكن الألم نهائيًا", "لأنه يسبب الجفاف فقط", "لأنه مضاد حيوي"], answer: "بعضهم يحوّله إلى مورفين بسرعة فيحدث تثبيط تنفسي", explanation: "يرتبط ذلك باختلافات وراثية في إنزيم CYP2D6.", difficulty: "hard" },
  { id: "pediatrics-013", sectionId: "pediatrics", type: "mcq", question: "لماذا تُتجنب التتراسيكلينات عادة قبل عمر 8 سنوات؟", options: ["تلوّن الأسنان وتأثيرها في العظام", "تسبب الصلع", "تسبب فقدان الشهية فقط", "تُبطل مفعول اللقاحات"], answer: "تلوّن الأسنان وتأثيرها في العظام", explanation: "تترسب في الأسنان والعظام النامية.", difficulty: "medium" },
  { id: "pediatrics-014", sectionId: "pediatrics", type: "truefalse", question: "تُستخدم الفلوروكينولونات عند الأطفال في حالات محددة فقط عندما تفوق الفائدة المخاطر.", options: ["صح", "خطأ"], answer: true, explanation: "بسبب المخاوف المرتبطة بالغضاريف والمفاصل.", difficulty: "medium" },
  { id: "pediatrics-015", sectionId: "pediatrics", type: "mcq", question: "ما الخطر المرتبط باستخدام السلفوناميدات عند حديثي الولادة؟", options: ["اليرقان النووي (Kernicterus)", "ارتفاع الضغط", "فقدان السمع فقط", "هشاشة العظام"], answer: "اليرقان النووي (Kernicterus)", explanation: "تزاحم البيليروبين على الارتباط بالألبومين فيرتفع البيليروبين الحر.", difficulty: "hard" },
  { id: "pediatrics-016", sectionId: "pediatrics", type: "mcq", question: "ما الحالة التي يُتجنب فيها Ceftriaxone عند حديثي الولادة؟", options: ["فرط البيليروبين أو مع محاليل الكالسيوم الوريدية", "الزكام الخفيف", "ارتفاع الحرارة فقط", "الجفاف الخفيف"], answer: "فرط البيليروبين أو مع محاليل الكالسيوم الوريدية", explanation: "قد يزاحم البيليروبين ويكوّن راسبًا مع الكالسيوم.", difficulty: "hard" },
  { id: "pediatrics-017", sectionId: "pediatrics", type: "mcq", question: "لماذا لا يُعطى العسل للرضع دون عمر سنة؟", options: ["خطر تسمم الوشيقية الرضيعي (Botulism)", "لأنه يرفع السكر فقط", "لأنه يسبب الحساسية دائمًا", "لأنه يمنع الامتصاص"], answer: "خطر تسمم الوشيقية الرضيعي (Botulism)", explanation: "قد يحتوي العسل على أبواغ Clostridium botulinum.", difficulty: "medium" },
  { id: "pediatrics-018", sectionId: "pediatrics", type: "truefalse", question: "أدوية السعال والزكام الصادرة دون وصفة لا يُنصح بها عادة للأطفال الصغار جدًا إلا بتوجيه الطبيب.", options: ["صح", "خطأ"], answer: true, explanation: "فائدتها محدودة وقد تسبب آثارًا جانبية خطيرة، وتختلف الحدود العمرية حسب الجهة التنظيمية.", difficulty: "medium" },
  { id: "pediatrics-019", sectionId: "pediatrics", type: "truefalse", question: "يُستخدم الإيبوبروفين عادة للرضع الصغار جدًا (دون 3 إلى 6 أشهر حسب المرجع) بتوجيه الطبيب فقط.", options: ["صح", "خطأ"], answer: true, explanation: "تختلف الحدود بين المراجع، لذلك يُرجع إلى النشرة أو الإرشاد المحلي.", difficulty: "medium" },
  { id: "pediatrics-020", sectionId: "pediatrics", type: "mcq", question: "ما أكثر طريقة شيوعًا لحساب جرعات الأطفال؟", options: ["الجرعة بالمليغرام لكل كيلوغرام من وزن الجسم", "حسب لون الدواء", "حسب طول الطفل فقط دائمًا", "جرعة البالغين مقسومة على 2 دائمًا"], answer: "الجرعة بالمليغرام لكل كيلوغرام من وزن الجسم", explanation: "مع الالتزام بالحد الأقصى وبمصدر الجرعة المعتمد.", difficulty: "easy" },
  { id: "pediatrics-021", sectionId: "pediatrics", type: "mcq", question: "في أي حالة تُستخدم مساحة سطح الجسم (BSA) لحساب الجرعات غالبًا؟", options: ["أدوية العلاج الكيميائي", "المسكنات البسيطة", "الفيتامينات", "قطرات الأنف"], answer: "أدوية العلاج الكيميائي", explanation: "لأنها أدوية ذات هامش أمان ضيق وتحتاج دقة أعلى.", difficulty: "medium" },
  { id: "pediatrics-022", sectionId: "pediatrics", type: "mcq", question: "ما صيغة قاعدة يونغ (Young's rule)؟", options: ["العمر ÷ (العمر + 12) × جرعة البالغ", "الوزن × 2", "العمر × 3", "العمر ÷ 100"], answer: "العمر ÷ (العمر + 12) × جرعة البالغ", explanation: "قاعدة تقديرية قديمة تعتمد على العمر، وتُفضَّل الجرعات المعتمدة على الوزن.", difficulty: "medium" },
  { id: "pediatrics-023", sectionId: "pediatrics", type: "mcq", question: "حسب قاعدة يونغ، كم تكون نسبة جرعة طفل عمره 6 سنوات من جرعة البالغ؟", options: ["ثلث الجرعة", "نصف الجرعة", "ربع الجرعة", "الجرعة كاملة"], answer: "ثلث الجرعة", explanation: "6 ÷ (6 + 12) = 6 ÷ 18 = 1/3.", difficulty: "medium" },
  { id: "pediatrics-024", sectionId: "pediatrics", type: "mcq", question: "حسب قاعدة كلارك (Clark's rule) بالكيلوغرام، كيف تُحسب الجرعة؟", options: ["الوزن بالكيلوغرام ÷ 70 × جرعة البالغ", "الوزن × العمر", "العمر ÷ 70", "الوزن ÷ 7"], answer: "الوزن بالكيلوغرام ÷ 70 × جرعة البالغ", explanation: "تُقدَّر على أساس أن وزن البالغ المرجعي 70 كغ.", difficulty: "medium" },
  { id: "pediatrics-025", sectionId: "pediatrics", type: "mcq", question: "دواء افتراضي جرعته 10 mg/kg/dose، طفل وزنه 10 kg. كم الجرعة؟", options: ["100 mg", "10 mg", "1000 mg", "20 mg"], answer: "100 mg", explanation: "10 × 10 = 100 mg.", difficulty: "easy" },
  { id: "pediatrics-026", sectionId: "pediatrics", type: "mcq", question: "دواء افتراضي جرعته 5 mg/kg/day مقسمة على جرعتين، طفل وزنه 20 kg. كم كل جرعة؟", options: ["50 mg", "100 mg", "25 mg", "10 mg"], answer: "50 mg", explanation: "5 × 20 = 100 mg يوميًا، وعلى جرعتين = 50 mg لكل جرعة.", difficulty: "medium" },
  { id: "pediatrics-027", sectionId: "pediatrics", type: "mcq", question: "الشراب تركيزه 125 mg/5 mL والجرعة المطلوبة 250 mg. كم mL؟", options: ["10 mL", "5 mL", "2.5 mL", "20 mL"], answer: "10 mL", explanation: "250 ÷ 125 = 2، و2 × 5 mL = 10 mL.", difficulty: "medium" },
  { id: "pediatrics-028", sectionId: "pediatrics", type: "mcq", question: "الشراب تركيزه 160 mg/5 mL والجرعة المطلوبة 80 mg. كم mL؟", options: ["2.5 mL", "5 mL", "1 mL", "10 mL"], answer: "2.5 mL", explanation: "80 ÷ 160 = 0.5، و0.5 × 5 = 2.5 mL.", difficulty: "medium" },
  { id: "pediatrics-029", sectionId: "pediatrics", type: "truefalse", question: "ملاعق المطبخ المنزلية غير دقيقة لقياس جرعات الأدوية السائلة.", options: ["صح", "خطأ"], answer: true, explanation: "يُستخدم الكوب أو الحقنة أو القطّارة المرفقة بالدواء.", difficulty: "easy" },
  { id: "pediatrics-030", sectionId: "pediatrics", type: "mcq", question: "ما أدق وسيلة لإعطاء الأدوية السائلة للرضع؟", options: ["الحقنة الفموية (Oral syringe)", "ملعقة الشاي", "كوب الماء", "تقدير الكمية بالعين"], answer: "الحقنة الفموية (Oral syringe)", explanation: "تسمح بقياس الحجم الصغير بدقة وإعطائه ببطء.", difficulty: "easy" },
  { id: "pediatrics-031", sectionId: "pediatrics", type: "truefalse", question: "يجب ألا تتجاوز الجرعة المحسوبة للطفل الجرعة القصوى للبالغ.", options: ["صح", "خطأ"], answer: true, explanation: "وتُراجع الجرعة القصوى اليومية للدواء أيضًا.", difficulty: "medium" },
  { id: "pediatrics-032", sectionId: "pediatrics", type: "mcq", question: "لماذا قد يتعرض الرضّع لسمية أكبر بعد استخدام مستحضرات موضعية؟", options: ["جلدهم أرق ونسبة سطح الجسم إلى الوزن أكبر فيزداد الامتصاص", "جلدهم لا يمتص نهائيًا", "لأن المستحضرات تتحلل بسرعة", "بسبب كثرة الشعر"], answer: "جلدهم أرق ونسبة سطح الجسم إلى الوزن أكبر فيزداد الامتصاص", explanation: "قد يحدث امتصاص جهازي مع الكورتيكوستيرويدات الموضعية وغيرها.", difficulty: "hard" },
  { id: "pediatrics-033", sectionId: "pediatrics", type: "truefalse", question: "استخدام الكورتيكوستيرويدات القوية في منطقة الحفاض يزيد الامتصاص الجهازي.", options: ["صح", "خطأ"], answer: true, explanation: "الحفاض يعمل كغطاء يزيد الامتصاص.", difficulty: "medium" },
  { id: "pediatrics-034", sectionId: "pediatrics", type: "mcq", question: "متى تفيد التحاميل الشرجية عند الأطفال؟", options: ["عند القيء أو عدم القدرة على البلع", "دائمًا كخيار أول بدلًا من الفم", "فقط للفيتامينات", "عند الحاجة لتأثير بطيء جدًا"], answer: "عند القيء أو عدم القدرة على البلع", explanation: "مثل بعض تحاميل خافضات الحرارة، لكن امتصاصها قد يكون أقل انتظامًا.", difficulty: "easy" },
  { id: "pediatrics-035", sectionId: "pediatrics", type: "mcq", question: "لماذا تُفضَّل الطرق الوريدية على العضلية عند حديثي الولادة المرضى بشدة؟", options: ["كتلتهم العضلية صغيرة والامتصاص غير منتظم", "الحقن العضلي أسرع دائمًا", "لأن الإبر العضلية غير متوفرة", "لأن الوريدي لا يسبب أي مخاطر"], answer: "كتلتهم العضلية صغيرة والامتصاص غير منتظم", explanation: "ويكون تروية العضلات غير ثابتة في هذه الفئة.", difficulty: "hard" },
  { id: "pediatrics-036", sectionId: "pediatrics", type: "mcq", question: "لماذا يُعطى فيتامين K لحديثي الولادة؟", options: ["للوقاية من النزف الناتج عن نقصه", "لتقوية العظام فقط", "لتحسين النظر", "لخفض السكر"], answer: "للوقاية من النزف الناتج عن نقصه", explanation: "حديثو الولادة لديهم مخزون منخفض من فيتامين K ومعقمة الأمعاء لديهم.", difficulty: "easy" },
  { id: "pediatrics-037", sectionId: "pediatrics", type: "mcq", question: "أي فيتامين يُوصى عادة بتكميله للرضع الذين يرضعون طبيعيًا؟", options: ["فيتامين D", "فيتامين C بجرعات عالية", "فيتامين E", "فيتامين A بجرعات عالية"], answer: "فيتامين D", explanation: "لأن حليب الأم يحتوي على كمية قليلة منه، لوقاية الكساح، وتتبع الجرعة إرشادات الطبيب.", difficulty: "easy" },
  { id: "pediatrics-038", sectionId: "pediatrics", type: "mcq", question: "ما المكمل الذي توصي به منظمة الصحة العالمية مع محلول الإماهة الفموية لدى الأطفال المصابين بالإسهال؟", options: ["الزنك", "الكالسيوم", "الحديد", "اليود"], answer: "الزنك", explanation: "يقلل مدة الإسهال وشدته ويقلل تكراره لاحقًا.", difficulty: "medium" },
  { id: "pediatrics-039", sectionId: "pediatrics", type: "truefalse", question: "معظم حالات الإسهال المائي الحاد عند الأطفال لا تحتاج إلى مضادات حيوية.", options: ["صح", "خطأ"], answer: true, explanation: "الأساس هو الإماهة الفموية، وغالبًا ما تكون الأسباب فيروسية.", difficulty: "easy" },
  { id: "pediatrics-040", sectionId: "pediatrics", type: "mcq", question: "ما الاحتياط المتعلق باستخدام Loperamide عند الأطفال الصغار؟", options: ["يُمنع عادة دون عمر سنتين لخطر الآثار الخطيرة", "يُعطى لكل رضيع مصاب بالإسهال", "يُعطى بدل محلول الإماهة", "لا يوجد أي احتياط"], answer: "يُمنع عادة دون عمر سنتين لخطر الآثار الخطيرة", explanation: "وتختلف الحدود بين المراجع، وليس علاجًا أساسيًا للإسهال الحاد عند الأطفال.", difficulty: "medium" },
  { id: "pediatrics-041", sectionId: "pediatrics", type: "mcq", question: "ما الخطر المرتبط باستخدام Promethazine عند الأطفال دون سنتين؟", options: ["تثبيط التنفس", "ارتفاع السكر", "تضخم الكبد", "فقدان الشعر"], answer: "تثبيط التنفس", explanation: "ولذلك يُمنع استخدامه في هذه الفئة العمرية.", difficulty: "hard" },
  { id: "pediatrics-042", sectionId: "pediatrics", type: "mcq", question: "ما الأثر الجانبي المقلق لـ Metoclopramide عند الأطفال؟", options: ["اضطرابات حركية (ديستونيا)", "ارتفاع الضغط", "نقص الصفائح", "ضعف السمع"], answer: "اضطرابات حركية (ديستونيا)", explanation: "الأطفال أكثر عرضة للأعراض خارج الهرمية.", difficulty: "hard" },
  { id: "pediatrics-043", sectionId: "pediatrics", type: "mcq", question: "ما فائدة حاجز الاستنشاق (Spacer) مع بخاخ الربو عند الأطفال؟", options: ["يحسّن وصول الدواء للرئتين ويقلل الترسب في الفم", "يغيّر طعم الدواء فقط", "يزيد سرعة البخاخ", "يستبدل الحاجة للدواء"], answer: "يحسّن وصول الدواء للرئتين ويقلل الترسب في الفم", explanation: "ويُستخدم مع قناع للوجه عند الأطفال الصغار.", difficulty: "medium" },
  { id: "pediatrics-044", sectionId: "pediatrics", type: "mcq", question: "ما أبرز خطر ينتج عن زيادة جرعة الفلورايد عند الأطفال؟", options: ["تبقع الأسنان (Dental fluorosis)", "تضخم الغدة الدرقية", "فقدان البصر", "تأخر المشي فقط"], answer: "تبقع الأسنان (Dental fluorosis)", explanation: "لذلك تُراقب كمية معجون الأسنان المحتوي على الفلورايد التي يبتلعها الطفل.", difficulty: "medium" },
  { id: "pediatrics-045", sectionId: "pediatrics", type: "mcq", question: "ما الخطر الشائع المرتبط بتناول الأطفال الصغار للأدوية بالخطأ؟", options: ["التسمم العرضي", "الحساسية الموسمية", "نقص الفيتامينات", "الصداع التوتري"], answer: "التسمم العرضي", explanation: "لذلك تُحفظ الأدوية بعيدًا عن متناول الأطفال، وتُستخدم عبوات مقاومة لفتح الطفل.", difficulty: "easy" },
  { id: "pediatrics-046", sectionId: "pediatrics", type: "truefalse", question: "تُعد مكملات الحديد من الأدوية الخطرة جدًا عند تناول الأطفال لها بجرعات زائدة.", options: ["صح", "خطأ"], answer: true, explanation: "من أسباب التسمم الدوائي الخطير عند الأطفال، ويجب مراجعة الطوارئ فورًا عند الشك.", difficulty: "medium" },
  { id: "pediatrics-047", sectionId: "pediatrics", type: "mcq", question: "ماذا يجب فعله بمعلق المضاد الحيوي بعد تحضيره؟", options: ["الالتزام بشروط التخزين ومدة الصلاحية المكتوبة في النشرة", "تخزينه سنة كاملة", "إضافة ماء إضافي عند نقص الكمية", "مشاركته مع الأشقاء"], answer: "الالتزام بشروط التخزين ومدة الصلاحية المكتوبة في النشرة", explanation: "غالبًا يُحفظ بعضها في الثلاجة ويُتخلص من المتبقي بعد المدة المحددة.", difficulty: "easy" },
  { id: "pediatrics-048", sectionId: "pediatrics", type: "mcq", question: "ما فائدة لقاح BCG عند الولادة؟", options: ["الوقاية من الأشكال الشديدة من السل عند الأطفال", "الوقاية من الإنفلونزا الموسمية", "علاج الحمى", "الوقاية من الإسهال"], answer: "الوقاية من الأشكال الشديدة من السل عند الأطفال", explanation: "مثل السل السحائي والمنتشر عند الصغار.", difficulty: "medium" },
  { id: "pediatrics-049", sectionId: "pediatrics", type: "mcq", question: "لماذا يجب مراجعة جرعة الدواء عند متابعة الطفل بعد فترة؟", options: ["لأن وزن الطفل يتغير بسرعة مع النمو", "لأن الدواء يتغير لونه", "لأن العبوة تتغير", "لا حاجة لمراجعتها أبدًا"], answer: "لأن وزن الطفل يتغير بسرعة مع النمو", explanation: "فقد تصبح الجرعة القديمة أقل من اللازم أو غير مناسبة.", difficulty: "easy" },
  { id: "pediatrics-050", sectionId: "pediatrics", type: "truefalse", question: "الجرعة الدوائية للأطفال يجب أن تُؤخذ من مصدر معتمد وتُراجع مع الصيدلي أو الطبيب عند الشك.", options: ["صح", "خطأ"], answer: true, explanation: "لأن هامش الخطأ أصغر عند الأطفال خاصة الرضع.", difficulty: "easy" },
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
  { id: "pregnancy-002", sectionId: "pregnancy", type: "mcq", question: "ما أكثر فترة حساسية لحدوث التشوهات الخلقية بسبب الأدوية؟", options: ["الثلث الأول (تكوّن الأعضاء)", "الثلث الثاني", "الثلث الثالث", "أثناء الولادة فقط"], answer: "الثلث الأول (تكوّن الأعضاء)", explanation: "تتكوّن الأعضاء الأساسية خاصة بين الأسبوعين 3 و8 تقريبًا بعد الحمل.", difficulty: "easy" },
  { id: "pregnancy-003", sectionId: "pregnancy", type: "truefalse", question: "معظم الأدوية تعبر المشيمة بدرجات متفاوتة.", options: ["صح", "خطأ"], answer: true, explanation: "المشيمة ليست حاجزًا كاملًا، خاصة للأدوية الصغيرة الذائبة في الدهون.", difficulty: "easy" },
  { id: "pregnancy-004", sectionId: "pregnancy", type: "mcq", question: "أي صفة تزيد عبور الدواء للمشيمة؟", options: ["ذائب في الدهون وصغير الحجم وغير متأين", "كبير الحجم ومتأين", "شديد الارتباط بالبروتين", "شديد القطبية"], answer: "ذائب في الدهون وصغير الحجم وغير متأين", explanation: "الجزيئات الصغيرة غير المشحونة تنتشر بسهولة أكبر.", difficulty: "medium" },
  { id: "pregnancy-005", sectionId: "pregnancy", type: "mcq", question: "ما اسم أحد أنظمة تصنيف سلامة الأدوية في الحمل القديمة التي استبدلتها FDA؟", options: ["الفئات A وB وC وD وX", "الفئات 1 إلى 10", "ألوان المرور", "النجوم الخمس"], answer: "الفئات A وB وC وD وX", explanation: "استُبدلت بنظام PLLR الذي يعرض ملخصًا سرديًا للمخاطر والبيانات بدل حرف واحد.", difficulty: "medium" },
  { id: "pregnancy-006", sectionId: "pregnancy", type: "mcq", question: "ماذا كانت تعني الفئة X في تصنيف FDA القديم؟", options: ["مضادة للاستطباب في الحمل لأن المخاطر تفوق الفائدة", "آمنة تمامًا", "تحتاج مراقبة فقط", "لا توجد بيانات"], answer: "مضادة للاستطباب في الحمل لأن المخاطر تفوق الفائدة", explanation: "مثل Isotretinoin وThalidomide.", difficulty: "medium" },
  { id: "pregnancy-007", sectionId: "pregnancy", type: "mcq", question: "أي دواء مرتبط بتشوهات خلقية شديدة وهو مضاد للحمل؟", options: ["Isotretinoin", "Paracetamol", "Folic acid", "Cetirizine"], answer: "Isotretinoin", explanation: "من مشتقات فيتامين A ويسبب تشوهات خطيرة، ويتطلب برنامج منع حمل صارمًا.", difficulty: "easy" },
  { id: "pregnancy-008", sectionId: "pregnancy", type: "mcq", question: "ما التشوه الشهير المرتبط بالثاليدوميد؟", options: ["قصر الأطراف (Phocomelia)", "ضعف السمع فقط", "تضخم القلب", "تلون الأسنان"], answer: "قصر الأطراف (Phocomelia)", explanation: "كارثة دوائية في الخمسينيات والستينيات غيّرت أنظمة اختبار سلامة الأدوية.", difficulty: "medium" },
  { id: "pregnancy-009", sectionId: "pregnancy", type: "mcq", question: "أي مجموعة دوائية يُتجنب استخدامها في الحمل بسبب خطر على الكلى الجنينية؟", options: ["مثبطات ACE وحاصرات مستقبلات الأنجيوتنسين", "الباراسيتامول", "الفيتامينات", "مضادات الحموضة البسيطة"], answer: "مثبطات ACE وحاصرات مستقبلات الأنجيوتنسين", explanation: "تسبب خاصة في الثلث الثاني والثالث نقص السائل الأمنيوسي وفشلًا كلويًا جنينيًا.", difficulty: "medium" },
  { id: "pregnancy-010", sectionId: "pregnancy", type: "truefalse", question: "يُتجنب Enalapril وLosartan أثناء الحمل.", options: ["صح", "خطأ"], answer: true, explanation: "يُستبدلان بدواء آمن مثل Methyldopa أو Labetalol أو Nifedipine حسب الحالة.", difficulty: "medium" },
  { id: "pregnancy-011", sectionId: "pregnancy", type: "mcq", question: "أي دواء من خيارات ارتفاع الضغط المفضلة في الحمل؟", options: ["Labetalol", "Enalapril", "Losartan", "Spironolactone"], answer: "Labetalol", explanation: "ومنها أيضًا Methyldopa وNifedipine.", difficulty: "medium" },
  { id: "pregnancy-012", sectionId: "pregnancy", type: "mcq", question: "ما مضاد التخثر المفضل بدل الوارفارين في الحمل غالبًا؟", options: ["الهيبارين منخفض الوزن الجزيئي", "Aspirin بجرعة عالية", "Rivaroxaban", "Clopidogrel"], answer: "الهيبارين منخفض الوزن الجزيئي", explanation: "لا يعبر المشيمة، بخلاف الوارفارين الذي قد يسبب تشوهات ونزفًا جنينيًا.", difficulty: "medium" },
  { id: "pregnancy-013", sectionId: "pregnancy", type: "truefalse", question: "الوارفارين يعبر المشيمة وقد يسبب متلازمة الوارفارين الجنينية.", options: ["صح", "خطأ"], answer: true, explanation: "تشمل تشوهات في العظام والغضاريف، ونزفًا.", difficulty: "medium" },
  { id: "pregnancy-014", sectionId: "pregnancy", type: "mcq", question: "ما فائدة حمض الفوليك قبل الحمل وفي بدايته؟", options: ["الوقاية من عيوب الأنبوب العصبي", "علاج الغثيان", "تقوية الأسنان", "خفض الضغط"], answer: "الوقاية من عيوب الأنبوب العصبي", explanation: "ويُبدأ عادةً قبل الحمل بمدة وفق الإرشادات.", difficulty: "easy" },
  { id: "pregnancy-015", sectionId: "pregnancy", type: "mcq", question: "أي عيب خلقي ترتبط الوقاية منه بحمض الفوليك؟", options: ["السنسنة المشقوقة (Spina bifida)", "الحنك المشقوق فقط", "الصمم", "الحول"], answer: "السنسنة المشقوقة (Spina bifida)", explanation: "وهي من عيوب الأنبوب العصبي.", difficulty: "easy" },
  { id: "pregnancy-016", sectionId: "pregnancy", type: "truefalse", question: "بعض مضادات الصرع (مثل Valproate) ترتبط بخطر أعلى لعيوب الأنبوب العصبي.", options: ["صح", "خطأ"], answer: true, explanation: "لذلك يحتاج المريضات في سن الإنجاب إلى تخطيط وتقييم خاص.", difficulty: "medium" },
  { id: "pregnancy-017", sectionId: "pregnancy", type: "mcq", question: "أي مضاد صرع يُتجنب بشدة في الحمل عندما تتوفر بدائل مناسبة؟", options: ["Valproate", "Lamotrigine", "Levetiracetam", "Paracetamol"], answer: "Valproate", explanation: "يرتبط بتشوهات وتأخر نمو عصبي، ويُتخذ القرار مع الطبيب المختص.", difficulty: "medium" },
  { id: "pregnancy-018", sectionId: "pregnancy", type: "mcq", question: "ما المسكن وخافض الحرارة المفضل عادةً في الحمل؟", options: ["Paracetamol بالجرعة الموصى بها", "Ibuprofen في الثلث الثالث", "Aspirin بجرعة مسكنة", "Codeine دائمًا"], answer: "Paracetamol بالجرعة الموصى بها", explanation: "مع الالتزام بالجرعة وأقل مدة ممكنة.", difficulty: "easy" },
  { id: "pregnancy-019", sectionId: "pregnancy", type: "mcq", question: "لماذا تُتجنب مضادات الالتهاب غير الستيرويدية (NSAIDs) في الثلث الثالث؟", options: ["خطر إغلاق القناة الشريانية مبكرًا وتأثيرات كلوية", "تسبب الغثيان فقط", "ترفع الوزن", "تغير لون الجنين"], answer: "خطر إغلاق القناة الشريانية مبكرًا وتأثيرات كلوية", explanation: "وقد تؤخر الولادة وتزيد النزف.", difficulty: "hard" },
  { id: "pregnancy-020", sectionId: "pregnancy", type: "truefalse", question: "يجب تجنب الإيبوبروفين في الثلث الثالث من الحمل ما لم يوجه الطبيب غير ذلك.", options: ["صح", "خطأ"], answer: true, explanation: "للمخاطر على القلب والكلى الجنينيين.", difficulty: "medium" },
  { id: "pregnancy-021", sectionId: "pregnancy", type: "mcq", question: "أي مضاد حيوي من البنسيلينات يُعد عمومًا آمنًا نسبيًا في الحمل؟", options: ["Amoxicillin", "Doxycycline", "Ciprofloxacin", "Tetracycline"], answer: "Amoxicillin", explanation: "البنسيلينات والسيفالوسبورينات من أكثر الخيارات استخدامًا.", difficulty: "easy" },
  { id: "pregnancy-022", sectionId: "pregnancy", type: "mcq", question: "لماذا تُتجنب التتراسيكلينات في الحمل؟", options: ["تلوّن أسنان الجنين وتؤثر في العظام", "تسبب الصلع", "تضعف السمع فقط", "ترفع السكر"], answer: "تلوّن أسنان الجنين وتؤثر في العظام", explanation: "وقد تسبب أيضًا سمية كبدية للأم في بعض الحالات.", difficulty: "medium" },
  { id: "pregnancy-023", sectionId: "pregnancy", type: "mcq", question: "ما التأثير الضار المحتمل للأمينوغليكوزيدات (مثل Streptomycin) على الجنين؟", options: ["سمية للعصب الثامن (الصمم)", "تضخم الكبد", "نقص السكر", "اضطراب الغدة الدرقية"], answer: "سمية للعصب الثامن (الصمم)", explanation: "تعبر المشيمة وتؤثر في السمع.", difficulty: "hard" },
  { id: "pregnancy-024", sectionId: "pregnancy", type: "mcq", question: "ما احتياط استخدام السلفوناميدات والتريميثوبريم في الحمل؟", options: ["تثبيط الفوليك في الثلث الأول وخطر اليرقان قرب الولادة", "تسبب النعاس فقط", "ترفع الضغط", "تسبب الإمساك"], answer: "تثبيط الفوليك في الثلث الأول وخطر اليرقان قرب الولادة", explanation: "فيحتاج الأمر إلى تقييم الفائدة والمخاطر وقد يُعطى الفوليك.", difficulty: "hard" },
  { id: "pregnancy-025", sectionId: "pregnancy", type: "truefalse", question: "الفلوروكينولونات تُتجنب عادة في الحمل إذا توفرت بدائل أكثر أمانًا.", options: ["صح", "خطأ"], answer: true, explanation: "بسبب المخاوف النظرية والحيوانية على الغضاريف.", difficulty: "medium" },
  { id: "pregnancy-026", sectionId: "pregnancy", type: "mcq", question: "أي دواء مضاد للفطريات الفموية يُتجنب بجرعات عالية في الحمل؟", options: ["Fluconazole", "Clotrimazole المهبلي", "Nystatin", "كلها بنفس الخطورة"], answer: "Fluconazole", explanation: "الجرعات العالية مرتبطة بتشوهات، وتفضَّل الأشكال الموضعية في الفطريات المهبلية.", difficulty: "hard" },
  { id: "pregnancy-027", sectionId: "pregnancy", type: "mcq", question: "ما مضاد الغثيان والقيء من الخط الأول في الحمل (مع فيتامين B6)؟", options: ["Doxylamine", "Thalidomide", "Misoprostol", "Warfarin"], answer: "Doxylamine", explanation: "ويُستخدم مع البيريدوكسين (B6)، وقد تتوفر أشكال مدمجة في بعض البلدان.", difficulty: "medium" },
  { id: "pregnancy-028", sectionId: "pregnancy", type: "mcq", question: "ما الدواء المستخدم تقليديًا لعلاج الحموضة والارتجاع في الحمل؟", options: ["مضادات الحموضة (مثل كربونات الكالسيوم)", "Misoprostol", "Warfarin", "Isotretinoin"], answer: "مضادات الحموضة (مثل كربونات الكالسيوم)", explanation: "ثم مضادات H2 ثم PPI عند الحاجة.", difficulty: "easy" },
  { id: "pregnancy-029", sectionId: "pregnancy", type: "mcq", question: "لماذا يُتجنب Misoprostol في الحمل؟", options: ["يسبب انقباضات رحمية وقد يؤدي للإجهاض", "يسبب النعاس فقط", "يرفع الضغط", "يسبب الإسهال فقط"], answer: "يسبب انقباضات رحمية وقد يؤدي للإجهاض", explanation: "ويُستخدم طبيًا ضمن بروتوكولات الإجهاض أو تحريض الولادة تحت إشراف.", difficulty: "medium" },
  { id: "pregnancy-030", sectionId: "pregnancy", type: "mcq", question: "ما الهرمون الذي يُتجنب استخدامه في الحمل لمنعه حمل الرحم؟", options: ["الأندروجينات والإستروجين بجرعات علاجية دون إشراف", "الإنسولين", "اليود بجرعات طبيعية", "الحديد"], answer: "الأندروجينات والإستروجين بجرعات علاجية دون إشراف", explanation: "الأندروجينات قد تسبب تذكير الجنين الأنثى، لذلك تُتجنب.", difficulty: "hard" },
  { id: "pregnancy-031", sectionId: "pregnancy", type: "mcq", question: "ما علاج السكري المفضل غالبًا أثناء الحمل؟", options: ["الإنسولين", "Metformin دائمًا بدل الإنسولين", "Glibenclamide دائمًا", "عدم العلاج"], answer: "الإنسولين", explanation: "لا يعبر المشيمة بكميات كبيرة، وقد يستخدم الميتفورمين في حالات محددة بقرار طبي.", difficulty: "medium" },
  { id: "pregnancy-032", sectionId: "pregnancy", type: "truefalse", question: "اضطراب الغدة الدرقية غير المعالج في الحمل قد يؤثر في نمو الجنين.", options: ["صح", "خطأ"], answer: true, explanation: "ويجب ضبط الجرعة بمتابعة دورية، خاصة Levothyroxine.", difficulty: "medium" },
  { id: "pregnancy-033", sectionId: "pregnancy", type: "mcq", question: "أي دواء لعلاج فرط الغدة الدرقية يُفضَّل في الثلث الأول؟", options: ["Propylthiouracil", "Methimazole دائمًا", "Radioactive iodine", "Levothyroxine"], answer: "Propylthiouracil", explanation: "لأن الميثيمازول مرتبط بتشوهات في الثلث الأول، ثم يُراجع الخيار لاحقًا بسبب سمية PTU الكبدية.", difficulty: "hard" },
  { id: "pregnancy-034", sectionId: "pregnancy", type: "mcq", question: "ما الدواء المضاد للاكتئاب الذي ارتبط تاريخيًا بمخاطر قلبية عند التعرض في الحمل المبكر؟", options: ["Paroxetine", "Sertraline", "Ibuprofen", "Paracetamol"], answer: "Paroxetine", explanation: "قد يُتجنب عند التخطيط للحمل إن أمكن، ويُقرَّر البديل مع الطبيب.", difficulty: "hard" },
  { id: "pregnancy-035", sectionId: "pregnancy", type: "mcq", question: "ما الخطر المرتبط بتعرض الجنين للـ SSRIs في أواخر الحمل؟", options: ["متلازمة التكيف الوليدي وأحيانًا ارتفاع الضغط الرئوي", "الصمم", "التقزم", "عمى الألوان"], answer: "متلازمة التكيف الوليدي وأحيانًا ارتفاع الضغط الرئوي", explanation: "ويجب عدم إيقاف العلاج فجأة دون استشارة، لأن الاكتئاب غير المعالج له مخاطره.", difficulty: "hard" },
  { id: "pregnancy-036", sectionId: "pregnancy", type: "mcq", question: "ما احتياط استخدام الليثيوم في الحمل؟", options: ["خطر تشوهات قلبية (مثل شذوذ إبشتاين) ويحتاج مراقبة", "لا يوجد أي خطر", "يسبب الصلع", "يخفض السكر"], answer: "خطر تشوهات قلبية (مثل شذوذ إبشتاين) ويحتاج مراقبة", explanation: "وتتغير مستوياته في الدم أثناء الحمل.", difficulty: "hard" },
  { id: "pregnancy-037", sectionId: "pregnancy", type: "mcq", question: "ما خطر استخدام البنزوديازيبينات في أواخر الحمل؟", options: ["ارتخاء الوليد وأعراض انسحاب", "ارتفاع الضغط", "النزف الرحمي", "ضعف النظر"], answer: "ارتخاء الوليد وأعراض انسحاب", explanation: "قد يظهر ضعف التنفس والرضاعة والرخاوة عند الولادة.", difficulty: "hard" },
  { id: "pregnancy-038", sectionId: "pregnancy", type: "mcq", question: "ما الحد الآمن النسبي للكافيين اليومي في الحمل في كثير من الإرشادات؟", options: ["أقل من نحو 200 mg يوميًا", "أكثر من 1000 mg", "لا حد", "صفر دائمًا"], answer: "أقل من نحو 200 mg يوميًا", explanation: "وهو نحو كوب إلى كوبين قهوة صغيرة حسب التركيز.", difficulty: "medium" },
  { id: "pregnancy-039", sectionId: "pregnancy", type: "truefalse", question: "الكحول أثناء الحمل قد يسبب متلازمة الكحول الجنينية.", options: ["صح", "خطأ"], answer: true, explanation: "لا يوجد مستوى مؤكد الأمان للكحول في الحمل.", difficulty: "easy" },
  { id: "pregnancy-040", sectionId: "pregnancy", type: "mcq", question: "ما تأثير التدخين على الحمل؟", options: ["زيادة خطر انخفاض الوزن عند الولادة والولادة المبكرة", "زيادة الوزن دائمًا", "حماية الجنين", "لا تأثير"], answer: "زيادة خطر انخفاض الوزن عند الولادة والولادة المبكرة", explanation: "ويرتبط أيضًا بمخاطر أخرى مثل الإجهاض.", difficulty: "easy" },
  { id: "pregnancy-041", sectionId: "pregnancy", type: "mcq", question: "ما فئة PLLR وماذا تعني؟", options: ["نظام يعرض ملخصًا للمخاطر في الحمل والرضاعة بدل الحروف", "تصنيف بالألوان", "رمز للجرعات", "قائمة للأسعار"], answer: "نظام يعرض ملخصًا للمخاطر في الحمل والرضاعة بدل الحروف", explanation: "Pregnancy and Lactation Labeling Rule وهي القاعدة المعتمدة لدى FDA.", difficulty: "hard" },
  { id: "pregnancy-042", sectionId: "pregnancy", type: "mcq", question: "ما التعبير عن مدى انتقال الدواء إلى حليب الأم؟", options: ["Milk:plasma ratio", "Half-life ratio", "Bioavailability only", "Therapeutic index"], answer: "Milk:plasma ratio", explanation: "ويتأثر الانتقال بالذوبان في الدهون والارتباط بالبروتين ووزن الجزيء.", difficulty: "hard" },
  { id: "pregnancy-043", sectionId: "pregnancy", type: "truefalse", question: "كثير من الأدوية تُعد متوافقة مع الرضاعة الطبيعية عند الاستخدام بجرعات معتادة.", options: ["صح", "خطأ"], answer: true, explanation: "ويُراجع المرجع المختص لكل دواء، مثل LactMed.", difficulty: "medium" },
  { id: "pregnancy-044", sectionId: "pregnancy", type: "mcq", question: "ما الدواء الذي يُتجنب أثناء الرضاعة بسبب سميته الشديدة للأطفال الرضع؟", options: ["أدوية العلاج الكيميائي السامة للخلايا", "Paracetamol", "Amoxicillin", "الفيتامينات"], answer: "أدوية العلاج الكيميائي السامة للخلايا", explanation: "وكذلك المواد المشعة وبعض الأدوية الأخرى حسب التقييم.", difficulty: "medium" },
  { id: "pregnancy-045", sectionId: "pregnancy", type: "mcq", question: "ما تأثير الإستروجين المركب (حبوب منع الحمل المركبة) على إدرار الحليب؟", options: ["قد يقلل كمية الحليب", "يزيدها دائمًا", "لا يؤثر", "يوقف الرضاعة تمامًا"], answer: "قد يقلل كمية الحليب", explanation: "لذلك تُفضَّل غالبًا الأقراص البروجستينية فقط في الرضاعة.", difficulty: "medium" },
  { id: "pregnancy-046", sectionId: "pregnancy", type: "mcq", question: "ما مضاد السعال/الزكام الذي يُفضَّل أن يُراجع الطبيب قبل استخدامه في الحمل؟", options: ["مزيلات الاحتقان الفموية مثل Pseudoephedrine", "الماء المالح للأنف", "شرب السوائل", "الراحة"], answer: "مزيلات الاحتقان الفموية مثل Pseudoephedrine", explanation: "قد تُتجنب في الثلث الأول، وتفضَّل الخيارات غير الدوائية وبخاخات الملح أولًا.", difficulty: "medium" },
  { id: "pregnancy-047", sectionId: "pregnancy", type: "mcq", question: "أي مضاد هيستامين يُستخدم غالبًا في الحمل لوجود بيانات سلامة جيدة؟", options: ["Loratadine وCetirizine", "Thalidomide", "Isotretinoin", "Warfarin"], answer: "Loratadine وCetirizine", explanation: "وتحتاج الحالة لتقييم، مع تجنب الجيل الأول بجرعات كبيرة قرب الولادة.", difficulty: "medium" },
  { id: "pregnancy-048", sectionId: "pregnancy", type: "truefalse", question: "المكملات العشبية ليست آمنة تلقائيًا أثناء الحمل.", options: ["صح", "خطأ"], answer: true, explanation: "لأن بيانات السلامة قليلة وقد تتفاعل أو تسبب انقباضات رحمية.", difficulty: "easy" },
  { id: "pregnancy-049", sectionId: "pregnancy", type: "mcq", question: "ما أفضل تصرف عند تناول دواء بالخطأ أثناء الحمل؟", options: ["استشارة الطبيب أو الصيدلي ومراجعة مرجع السلامة", "إيقاف كل الأدوية فورًا", "تجاهل الأمر", "مضاعفة الجرعة"], answer: "استشارة الطبيب أو الصيدلي ومراجعة مرجع السلامة", explanation: "فالتقييم يعتمد على الدواء والجرعة وعمر الحمل.", difficulty: "easy" },
  { id: "pregnancy-050", sectionId: "pregnancy", type: "truefalse", question: "يجب على الحامل مراجعة الطبيب أو الصيدلي قبل تناول أي دواء حتى لو كان بلا وصفة.", options: ["صح", "خطأ"], answer: true, explanation: "فسلامة الدواء تعتمد على المادة الفعالة وعمر الحمل وحالة الأم.", difficulty: "easy" },
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
  { id: "dosages-003", sectionId: "dosages", type: "mcq", question: "كم غرامًا يساوي 1 كيلوغرام؟", options: ["1000 g", "100 g", "10 g", "10000 g"], answer: "1000 g", explanation: "1 kg = 1000 g.", difficulty: "easy" },
  { id: "dosages-004", sectionId: "dosages", type: "mcq", question: "كم ميكروغرامًا (mcg) يساوي 1 مليغرام؟", options: ["1000 mcg", "100 mcg", "10 mcg", "1 mcg"], answer: "1000 mcg", explanation: "1 mg = 1000 mcg.", difficulty: "easy" },
  { id: "dosages-005", sectionId: "dosages", type: "mcq", question: "كم ملّيلترًا يساوي 1 لتر؟", options: ["1000 mL", "100 mL", "10 mL", "10000 mL"], answer: "1000 mL", explanation: "1 L = 1000 mL.", difficulty: "easy" },
  { id: "dosages-006", sectionId: "dosages", type: "mcq", question: "كم mL تساوي ملعقة الشاي الصغيرة (tsp) في الحسابات الدوائية؟", options: ["5 mL", "15 mL", "2.5 mL", "30 mL"], answer: "5 mL", explanation: "1 tsp ≈ 5 mL، لكن الأفضل استخدام أداة القياس المرفقة بالدواء.", difficulty: "easy" },
  { id: "dosages-007", sectionId: "dosages", type: "mcq", question: "كم mL تساوي ملعقة الطعام الكبيرة (tbsp) تقريبًا؟", options: ["15 mL", "5 mL", "10 mL", "30 mL"], answer: "15 mL", explanation: "1 tbsp ≈ 15 mL = 3 tsp.", difficulty: "easy" },
  { id: "dosages-008", sectionId: "dosages", type: "mcq", question: "كم مليغرامًا يساوي الجرين (Grain) الواحد تقريبًا؟", options: ["60–65 mg", "1 mg", "500 mg", "1000 mg"], answer: "60–65 mg", explanation: "1 grain ≈ 64.8 mg، وهي وحدة قديمة في النظام الصيدلاني.", difficulty: "medium" },
  { id: "dosages-009", sectionId: "dosages", type: "mcq", question: "طفل وزنه 22 رطلًا (lb). كم وزنه بالكيلوغرام؟ (1 kg = 2.2 lb)", options: ["10 kg", "48.4 kg", "20 kg", "5 kg"], answer: "10 kg", explanation: "22 ÷ 2.2 = 10 kg.", difficulty: "easy" },
  { id: "dosages-010", sectionId: "dosages", type: "mcq", question: "الجرعة 15 mg/kg والطفل وزنه 12 kg. كم الجرعة؟", options: ["180 mg", "27 mg", "150 mg", "1.25 mg"], answer: "180 mg", explanation: "15 × 12 = 180 mg.", difficulty: "easy" },
  { id: "dosages-011", sectionId: "dosages", type: "mcq", question: "كم mg يساوي 0.5 g؟", options: ["500 mg", "50 mg", "5 mg", "5000 mg"], answer: "500 mg", explanation: "0.5 × 1000 = 500 mg.", difficulty: "easy" },
  { id: "dosages-012", sectionId: "dosages", type: "mcq", question: "كم mg يساوي 250 mcg؟", options: ["0.25 mg", "2.5 mg", "25 mg", "0.025 mg"], answer: "0.25 mg", explanation: "250 ÷ 1000 = 0.25 mg.", difficulty: "easy" },
  { id: "dosages-013", sectionId: "dosages", type: "mcq", question: "كم mcg يساوي 2.5 mg؟", options: ["2500 mcg", "250 mcg", "25 mcg", "25000 mcg"], answer: "2500 mcg", explanation: "2.5 × 1000 = 2500 mcg.", difficulty: "easy" },
  { id: "dosages-014", sectionId: "dosages", type: "mcq", question: "كم mL يساوي 0.05 L؟", options: ["50 mL", "5 mL", "500 mL", "0.5 mL"], answer: "50 mL", explanation: "0.05 × 1000 = 50 mL.", difficulty: "easy" },
  { id: "dosages-015", sectionId: "dosages", type: "mcq", question: "ماذا يعني تركيز 1% w/v؟", options: ["1 g في كل 100 mL (أي 10 mg/mL)", "1 mg في كل 100 mL", "1 g في كل 1000 mL", "1 mL في كل 100 g"], answer: "1 g في كل 100 mL (أي 10 mg/mL)", explanation: "النسبة المئوية وزن/حجم تعني عدد الغرامات في 100 mL.", difficulty: "medium" },
  { id: "dosages-016", sectionId: "dosages", type: "mcq", question: "كم غرامًا من كلوريد الصوديوم في 500 mL من محلول 0.9% NaCl؟", options: ["4.5 g", "0.9 g", "9 g", "45 g"], answer: "4.5 g", explanation: "0.9 g لكل 100 mL، فـ 500 mL تحتوي 0.9 × 5 = 4.5 g.", difficulty: "medium" },
  { id: "dosages-017", sectionId: "dosages", type: "mcq", question: "كم غرامًا من الدكستروز في 500 mL من محلول 5% دكستروز؟", options: ["25 g", "5 g", "50 g", "2.5 g"], answer: "25 g", explanation: "5 g لكل 100 mL، فـ 500 mL تحتوي 5 × 5 = 25 g.", difficulty: "medium" },
  { id: "dosages-018", sectionId: "dosages", type: "mcq", question: "كم mg/mL في محلول ليدوكايين 2%؟", options: ["20 mg/mL", "2 mg/mL", "200 mg/mL", "0.2 mg/mL"], answer: "20 mg/mL", explanation: "2% = 2 g/100 mL = 2000 mg/100 mL = 20 mg/mL.", difficulty: "medium" },
  { id: "dosages-019", sectionId: "dosages", type: "mcq", question: "كم mg/mL في محلول بنسبة 1:1000 (وزن/حجم)؟", options: ["1 mg/mL", "0.1 mg/mL", "10 mg/mL", "100 mg/mL"], answer: "1 mg/mL", explanation: "1:1000 تعني 1 g في 1000 mL = 1 mg/mL (مثل الأدرينالين 1:1000).", difficulty: "medium" },
  { id: "dosages-020", sectionId: "dosages", type: "mcq", question: "كم mg/mL في محلول بنسبة 1:10000؟", options: ["0.1 mg/mL", "1 mg/mL", "0.01 mg/mL", "10 mg/mL"], answer: "0.1 mg/mL", explanation: "1 g في 10000 mL = 1000 mg ÷ 10000 mL = 0.1 mg/mL.", difficulty: "hard" },
  { id: "dosages-021", sectionId: "dosages", type: "mcq", question: "الجرعة المطلوبة 750 mg والقرص 250 mg. كم قرصًا؟", options: ["3 أقراص", "2 قرص", "4 أقراص", "1.5 قرص"], answer: "3 أقراص", explanation: "750 ÷ 250 = 3.", difficulty: "easy" },
  { id: "dosages-022", sectionId: "dosages", type: "mcq", question: "الجرعة 1 g ثلاث مرات يوميًا والقرص 500 mg. كم قرصًا في اليوم؟", options: ["6 أقراص", "3 أقراص", "2 قرص", "9 أقراص"], answer: "6 أقراص", explanation: "1 g = 2 قرص في الجرعة، و2 × 3 = 6 أقراص يوميًا.", difficulty: "medium" },
  { id: "dosages-023", sectionId: "dosages", type: "mcq", question: "الشراب تركيزه 250 mg/5 mL والجرعة 500 mg. كم mL؟", options: ["10 mL", "5 mL", "2.5 mL", "20 mL"], answer: "10 mL", explanation: "500 ÷ 250 = 2، و2 × 5 = 10 mL.", difficulty: "easy" },
  { id: "dosages-024", sectionId: "dosages", type: "mcq", question: "تركيز الدواء 100 mg/mL والجرعة 350 mg. كم mL؟", options: ["3.5 mL", "35 mL", "0.35 mL", "7 mL"], answer: "3.5 mL", explanation: "350 ÷ 100 = 3.5 mL.", difficulty: "easy" },
  { id: "dosages-025", sectionId: "dosages", type: "mcq", question: "كم mg/mL في كيس يحتوي 1 g من الدواء في 100 mL؟", options: ["10 mg/mL", "1 mg/mL", "100 mg/mL", "0.1 mg/mL"], answer: "10 mg/mL", explanation: "1000 mg ÷ 100 mL = 10 mg/mL.", difficulty: "medium" },
  { id: "dosages-026", sectionId: "dosages", type: "mcq", question: "محلول 1000 mL يُعطى خلال 8 ساعات. كم سرعة التسريب بـ mL/h؟", options: ["125 mL/h", "100 mL/h", "80 mL/h", "250 mL/h"], answer: "125 mL/h", explanation: "1000 ÷ 8 = 125 mL/h.", difficulty: "easy" },
  { id: "dosages-027", sectionId: "dosages", type: "mcq", question: "500 mL تُعطى خلال 4 ساعات وطقم التسريب 20 قطرة/mL. كم قطرة في الدقيقة تقريبًا؟", options: ["42 قطرة/دقيقة", "125 قطرة/دقيقة", "20 قطرة/دقيقة", "83 قطرة/دقيقة"], answer: "42 قطرة/دقيقة", explanation: "500 ÷ 4 = 125 mL/h، ثم (125 × 20) ÷ 60 ≈ 41.7 ≈ 42.", difficulty: "hard" },
  { id: "dosages-028", sectionId: "dosages", type: "mcq", question: "الجرعة 2 mg/kg والمريض وزنه 25 kg. كم الجرعة؟", options: ["50 mg", "12.5 mg", "27 mg", "5 mg"], answer: "50 mg", explanation: "2 × 25 = 50 mg.", difficulty: "easy" },
  { id: "dosages-029", sectionId: "dosages", type: "mcq", question: "الجرعة اليومية 30 mg/kg/day مقسمة كل 8 ساعات، والوزن 10 kg. كم كل جرعة؟", options: ["100 mg", "300 mg", "30 mg", "10 mg"], answer: "100 mg", explanation: "30 × 10 = 300 mg يوميًا، وكل 8 ساعات = 3 جرعات، فكل جرعة 100 mg.", difficulty: "medium" },
  { id: "dosages-030", sectionId: "dosages", type: "mcq", question: "كم mL من محلول مخزون 50% لتحضير 100 mL من محلول 10%؟", options: ["20 mL", "10 mL", "50 mL", "5 mL"], answer: "20 mL", explanation: "C1V1 = C2V2، فـ 50 × V1 = 10 × 100، إذن V1 = 20 mL، ثم يُكمَّل الحجم بالمذيب.", difficulty: "medium" },
  { id: "dosages-031", sectionId: "dosages", type: "mcq", question: "النسبة 1:1000 (وزن/حجم) تعادل أي نسبة مئوية؟", options: ["0.1%", "1%", "0.01%", "10%"], answer: "0.1%", explanation: "1 g في 1000 mL = 0.1 g في 100 mL = 0.1%.", difficulty: "medium" },
  { id: "dosages-032", sectionId: "dosages", type: "mcq", question: "كم mL من محلول 2% يحتوي 100 mg من المادة الفعالة؟", options: ["5 mL", "2 mL", "10 mL", "50 mL"], answer: "5 mL", explanation: "2% = 20 mg/mL، و100 ÷ 20 = 5 mL.", difficulty: "medium" },
  { id: "dosages-033", sectionId: "dosages", type: "mcq", question: "علبة فيها 30 قرصًا والجرعة قرص مرتين يوميًا. كم يومًا تكفي؟", options: ["15 يومًا", "30 يومًا", "10 أيام", "60 يومًا"], answer: "15 يومًا", explanation: "30 ÷ 2 = 15 يومًا.", difficulty: "easy" },
  { id: "dosages-034", sectionId: "dosages", type: "mcq", question: "زجاجة شراب 100 mL والجرعة 5 mL ثلاث مرات يوميًا. كم يومًا تكفي تقريبًا؟", options: ["نحو 6.7 يوم", "20 يومًا", "3 أيام", "10 أيام"], answer: "نحو 6.7 يوم", explanation: "الاستهلاك اليومي 15 mL، و100 ÷ 15 ≈ 6.7 يوم.", difficulty: "medium" },
  { id: "dosages-035", sectionId: "dosages", type: "mcq", question: "باستخدام معادلة موستيلر BSA = √(الطول cm × الوزن kg ÷ 3600)، كم مساحة سطح الجسم لطفل طوله 100 cm ووزنه 36 kg؟", options: ["1.0 m²", "2.0 m²", "0.5 m²", "3.6 m²"], answer: "1.0 m²", explanation: "100 × 36 = 3600، ثم 3600 ÷ 3600 = 1، والجذر التربيعي لـ 1 = 1.0 m².", difficulty: "hard" },
  { id: "dosages-036", sectionId: "dosages", type: "mcq", question: "الجرعة 50 mg/m² ومساحة سطح الجسم 1.5 m². كم الجرعة؟", options: ["75 mg", "33 mg", "51.5 mg", "7.5 mg"], answer: "75 mg", explanation: "50 × 1.5 = 75 mg.", difficulty: "medium" },
  { id: "dosages-037", sectionId: "dosages", type: "mcq", question: "رجل عمره 60 سنة ووزنه 80 kg وكرياتينين المصل 1.0 mg/dL. كم تصفية الكرياتينين بمعادلة كوكروفت-غولت؟", options: ["نحو 89 mL/min", "نحو 64 mL/min", "نحو 111 mL/min", "نحو 45 mL/min"], answer: "نحو 89 mL/min", explanation: "[(140 − 60) × 80] ÷ (72 × 1.0) = 6400 ÷ 72 ≈ 88.9 mL/min.", difficulty: "hard" },
  { id: "dosages-038", sectionId: "dosages", type: "truefalse", question: "في معادلة كوكروفت-غولت تُضرب النتيجة في 0.85 للنساء.", options: ["صح", "خطأ"], answer: true, explanation: "لأن كتلة العضلات عند النساء أقل في المتوسط.", difficulty: "medium" },
  { id: "dosages-039", sectionId: "dosages", type: "mcq", question: "بطريقة المزج (Alligation)، بأي نسبة نخلط محلولين 10% و50% للحصول على 30%؟", options: ["أجزاء متساوية 1:1", "1:2", "2:1", "1:3"], answer: "أجزاء متساوية 1:1", explanation: "الفرق: 50 − 30 = 20 و30 − 10 = 20، فالنسبة 20:20 = 1:1.", difficulty: "hard" },
  { id: "dosages-040", sectionId: "dosages", type: "mcq", question: "كم تساوي درجة غليان الماء 100°C بالفهرنهايت؟", options: ["212°F", "100°F", "180°F", "98.6°F"], answer: "212°F", explanation: "°F = (°C × 9/5) + 32 = 180 + 32 = 212.", difficulty: "easy" },
  { id: "dosages-041", sectionId: "dosages", type: "mcq", question: "حرارة طفل 39°C. كم تساوي بالفهرنهايت؟", options: ["102.2°F", "98.6°F", "104°F", "100.4°F"], answer: "102.2°F", explanation: "(39 × 9/5) + 32 = 70.2 + 32 = 102.2°F.", difficulty: "medium" },
  { id: "dosages-042", sectionId: "dosages", type: "mcq", question: "حسب قاعدة هوليداي-سيغار، كم سوائل الصيانة اليومية لطفل وزنه 10 kg؟", options: ["1000 mL/يوم", "500 mL/يوم", "1500 mL/يوم", "2000 mL/يوم"], answer: "1000 mL/يوم", explanation: "أول 10 kg: 100 mL/kg/day، فـ 10 × 100 = 1000 mL.", difficulty: "hard" },
  { id: "dosages-043", sectionId: "dosages", type: "mcq", question: "حسب قاعدة هوليداي-سيغار، كم سوائل الصيانة اليومية لطفل وزنه 20 kg؟", options: ["1500 mL/يوم", "2000 mL/يوم", "1000 mL/يوم", "1200 mL/يوم"], answer: "1500 mL/يوم", explanation: "أول 10 kg = 1000 mL، وكل kg بعدها 50 mL: 1000 + (10 × 50) = 1500 mL.", difficulty: "hard" },
  { id: "dosages-044", sectionId: "dosages", type: "mcq", question: "كم تبقى من تركيز الدواء بعد 3 أنصاف عمر؟", options: ["12.5%", "50%", "25%", "6.25%"], answer: "12.5%", explanation: "100% ← 50% ← 25% ← 12.5%.", difficulty: "medium" },
  { id: "dosages-045", sectionId: "dosages", type: "mcq", question: "حجم التوزع 50 L والتركيز المستهدف 2 mg/L. كم جرعة التحميل (بافتراض توافر حيوي 100%)؟", options: ["100 mg", "25 mg", "52 mg", "200 mg"], answer: "100 mg", explanation: "جرعة التحميل = Vd × التركيز المستهدف = 50 × 2 = 100 mg.", difficulty: "hard" },
  { id: "dosages-046", sectionId: "dosages", type: "mcq", question: "التصفية 5 L/h والتركيز المستقر المستهدف 10 mg/L. كم معدل جرعة الصيانة (بافتراض توافر حيوي 100%)؟", options: ["50 mg/h", "2 mg/h", "15 mg/h", "0.5 mg/h"], answer: "50 mg/h", explanation: "معدل الجرعة = التصفية × التركيز المستقر = 5 × 10 = 50 mg/h.", difficulty: "hard" },
  { id: "dosages-047", sectionId: "dosages", type: "mcq", question: "جرعة فموية 100 mg أعطت AUC = 40، وجرعة وريدية 100 mg أعطت AUC = 80. كم التوافر الحيوي؟", options: ["50%", "200%", "40%", "80%"], answer: "50%", explanation: "F = AUCفموي ÷ AUCوريدي = 40 ÷ 80 = 0.5 (للجرعتين المتساويتين).", difficulty: "hard" },
  { id: "dosages-048", sectionId: "dosages", type: "mcq", question: "كم mg/mL في شراب تركيزه 250 mg/5 mL؟", options: ["50 mg/mL", "5 mg/mL", "25 mg/mL", "500 mg/mL"], answer: "50 mg/mL", explanation: "250 ÷ 5 = 50 mg/mL.", difficulty: "easy" },
  { id: "dosages-049", sectionId: "dosages", type: "truefalse", question: "تجنب كتابة صفر بعد الفاصلة العشرية (مثل 5.0 mg) في الوصفات لأنه قد يُقرأ 50 mg.", options: ["صح", "خطأ"], answer: true, explanation: "من قواعد منع الأخطاء الدوائية: اكتب 5 mg وليس 5.0 mg.", difficulty: "medium" },
  { id: "dosages-050", sectionId: "dosages", type: "truefalse", question: "يجب كتابة صفر قبل الفاصلة العشرية للأعداد الأقل من 1 (مثل 0.5 mg وليس .5 mg).", options: ["صح", "خطأ"], answer: true, explanation: "حتى لا تُقرأ .5 على أنها 5 فتحدث زيادة بعشرة أضعاف.", difficulty: "medium" },
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
  { id: "syrups-002", sectionId: "syrups", type: "mcq", question: "ما الشراب (Syrup) دوائيًا؟", options: ["محلول مائي مركز يحتوي على السكر أو بديله وقد يحمل مادة فعالة", "مستحلب زيتي فقط", "مسحوق جاف للبلع", "مرهم للجلد"], answer: "محلول مائي مركز يحتوي على السكر أو بديله وقد يحمل مادة فعالة", explanation: "يُستخدم لتحسين الطعم خاصة عند الأطفال.", difficulty: "easy" },
  { id: "syrups-003", sectionId: "syrups", type: "mcq", question: "ما الإكسير (Elixir)؟", options: ["محلول مائي كحولي محلى للاستعمال الفموي", "معلق صلب", "مستحلب زيتي", "حبوب مغلفة"], answer: "محلول مائي كحولي محلى للاستعمال الفموي", explanation: "الكحول يساعد على إذابة المواد قليلة الذوبان في الماء.", difficulty: "medium" },
  { id: "syrups-004", sectionId: "syrups", type: "truefalse", question: "يجب رجّ المعلق الدوائي جيدًا قبل كل جرعة.", options: ["صح", "خطأ"], answer: true, explanation: "لأن الجسيمات تترسب ويضمن الرج توزيعها وبالتالي دقة الجرعة.", difficulty: "easy" },
  { id: "syrups-005", sectionId: "syrups", type: "mcq", question: "ما المستحلب (Emulsion)؟", options: ["نظام من سائلين غير ممتزجين أحدهما موزع في الآخر بمساعدة مادة مستحلبة", "محلول حقيقي صافٍ", "مسحوق ناعم", "جل شفاف"], answer: "نظام من سائلين غير ممتزجين أحدهما موزع في الآخر بمساعدة مادة مستحلبة", explanation: "مثل الزيت والماء مع مستحلب.", difficulty: "easy" },
  { id: "syrups-006", sectionId: "syrups", type: "mcq", question: "في مستحلب زيت في ماء (O/W) ما الطور الخارجي؟", options: ["الماء", "الزيت", "الهواء", "الكحول"], answer: "الماء", explanation: "الزيت هو الطور الداخلي المتشتت في الماء.", difficulty: "medium" },
  { id: "syrups-007", sectionId: "syrups", type: "mcq", question: "ما الفرق بين الكريم والمرهم (Ointment)؟", options: ["الكريم مستحلب أقل دهنية، والمرهم أكثر دهنية وانسدادًا", "الكريم أكثر دهنية دائمًا", "لا فرق", "المرهم يحتوي ماء فقط"], answer: "الكريم مستحلب أقل دهنية، والمرهم أكثر دهنية وانسدادًا", explanation: "المراهم أنسب للجلد الجاف أو المتقشر، والكريمات أنسب للجلد الرطب.", difficulty: "medium" },
  { id: "syrups-008", sectionId: "syrups", type: "mcq", question: "أي من الأشكال الموضعية الآتية الأكثر انسدادًا (Occlusive) ويحتفظ برطوبة الجلد؟", options: ["المرهم", "المحلول", "الغسول", "الجل المائي"], answer: "المرهم", explanation: "قاعدته الدهنية مثل الفازلين تشكل طبقة تمنع فقد الماء.", difficulty: "medium" },
  { id: "syrups-009", sectionId: "syrups", type: "mcq", question: "ما الجل (Gel)؟", options: ["شكل شبه صلب يتكوّن بمادة مكوّنة للهلام وغالبًا شفاف", "مسحوق جاف", "قرص مغلف", "تحميلة"], answer: "شكل شبه صلب يتكوّن بمادة مكوّنة للهلام وغالبًا شفاف", explanation: "يتميز بسهولة الدهن وعدم ترك أثر دهني غالبًا.", difficulty: "easy" },
  { id: "syrups-010", sectionId: "syrups", type: "mcq", question: "ما المعجون (Paste) الصيدلاني؟", options: ["شبه صلب يحتوي نسبة عالية من المساحيق ويكون أكثر سماكة من المرهم", "سائل رقيق", "محلول حقني", "مستحلب مائي"], answer: "شبه صلب يحتوي نسبة عالية من المساحيق ويكون أكثر سماكة من المرهم", explanation: "مثل معجون أكسيد الزنك الذي يحمي الجلد.", difficulty: "medium" },
  { id: "syrups-011", sectionId: "syrups", type: "mcq", question: "ما اللوشن (Lotion)؟", options: ["مستحضر سائل أو شبه سائل للاستعمال الخارجي", "قرص فموي", "تحميلة", "كبسولة لينة"], answer: "مستحضر سائل أو شبه سائل للاستعمال الخارجي", explanation: "يُدهن على الجلد ويكون أسهل انتشارًا من الكريم.", difficulty: "easy" },
  { id: "syrups-012", sectionId: "syrups", type: "mcq", question: "ما وظيفة المفتِّت (Disintegrant) في القرص؟", options: ["مساعدة القرص على التفتت في السوائل", "إعطاء اللون", "زيادة الطعم الحلو", "منع الامتصاص"], answer: "مساعدة القرص على التفتت في السوائل", explanation: "مثل النشا وcroscarmellose sodium.", difficulty: "medium" },
  { id: "syrups-013", sectionId: "syrups", type: "mcq", question: "ما وظيفة المادة الرابطة (Binder) في الأقراص؟", options: ["جمع حبيبات المسحوق وتماسك القرص", "تفتيت القرص", "تحسين الطعم فقط", "تلوين القرص"], answer: "جمع حبيبات المسحوق وتماسك القرص", explanation: "مثل PVP ومعجون النشا.", difficulty: "medium" },
  { id: "syrups-014", sectionId: "syrups", type: "mcq", question: "ما وظيفة المزلّق (Lubricant) مثل Magnesium stearate؟", options: ["تقليل الالتصاق بالقالب أثناء كبس الأقراص", "رفع الحموضة", "إضافة الحلاوة", "زيادة الامتصاص دائمًا"], answer: "تقليل الالتصاق بالقالب أثناء كبس الأقراص", explanation: "يسهل إخراج القرص من آلة الكبس.", difficulty: "medium" },
  { id: "syrups-015", sectionId: "syrups", type: "mcq", question: "ما وظيفة المادة المنسابة (Glidant) مثل Talc؟", options: ["تحسين انسياب المسحوق", "تفتيت القرص", "تحليته", "إكسابه لونًا"], answer: "تحسين انسياب المسحوق", explanation: "يضمن تعبئة منتظمة في قالب القرص.", difficulty: "hard" },
  { id: "syrups-016", sectionId: "syrups", type: "mcq", question: "ما هدف الطلاء المعوي (Enteric coating)؟", options: ["مقاومة حمض المعدة وتحرير الدواء في الأمعاء", "تسريع الذوبان في المعدة", "تحسين اللون فقط", "إطالة مدة التخزين فقط"], answer: "مقاومة حمض المعدة وتحرير الدواء في الأمعاء", explanation: "يحمي الدواء الحساس للحمض أو يحمي المعدة من تهيج الدواء.", difficulty: "medium" },
  { id: "syrups-017", sectionId: "syrups", type: "truefalse", question: "لا يجوز عادة سحق الأقراص ذات الطلاء المعوي.", options: ["صح", "خطأ"], answer: true, explanation: "السحق يُتلف الطلاء فيفقد الدواء حمايته.", difficulty: "easy" },
  { id: "syrups-018", sectionId: "syrups", type: "truefalse", question: "لا تُسحق عادة الأقراص ممتدة المفعول (SR/XR/ER) لأن ذلك قد يحرر الجرعة دفعة واحدة.", options: ["صح", "خطأ"], answer: true, explanation: "وقد يسبب جرعة زائدة خطيرة. تُراجع النشرة أو الصيدلي قبل أي تعديل.", difficulty: "medium" },
  { id: "syrups-019", sectionId: "syrups", type: "mcq", question: "ما ميزة القرص تحت اللسان؟", options: ["امتصاص سريع وتجنب المرور الأول في الكبد", "تأثير بطيء جدًا", "يُبلع كاملًا", "يتحلل في المعدة"], answer: "امتصاص سريع وتجنب المرور الأول في الكبد", explanation: "مثل Nitroglycerin تحت اللسان.", difficulty: "medium" },
  { id: "syrups-020", sectionId: "syrups", type: "mcq", question: "كيف تُستعمل الأقراص الفوارة (Effervescent)؟", options: ["تُذاب في الماء قبل الشرب", "تُبلع جافة", "تُمضغ فقط", "تُوضع تحت اللسان"], answer: "تُذاب في الماء قبل الشرب", explanation: "تحتوي حمضًا وكربونات يتفاعلان في الماء وينتج غاز CO2.", difficulty: "easy" },
  { id: "syrups-021", sectionId: "syrups", type: "mcq", question: "ما مادة قشرة الكبسولات الصلبة التقليدية؟", options: ["الجيلاتين", "السليلوز النقي فقط", "الفازلين", "الزجاج"], answer: "الجيلاتين", explanation: "وتوجد بدائل نباتية مثل HPMC.", difficulty: "easy" },
  { id: "syrups-022", sectionId: "syrups", type: "mcq", question: "ما المحتوى المعتاد للكبسولات الجيلاتينية اللينة؟", options: ["سوائل أو زيوت أو معلقات", "مساحيق جافة فقط", "حبيبات صلبة فقط", "هواء"], answer: "سوائل أو زيوت أو معلقات", explanation: "الكبسولات الصلبة تُملأ غالبًا بالمساحيق أو الحبيبات.", difficulty: "medium" },
  { id: "syrups-023", sectionId: "syrups", type: "mcq", question: "أي شكل صيدلاني يُذاب عند حرارة الجسم ويُستعمل شرجيًا أو مهبليًا؟", options: ["التحميلة (Suppository)", "القرص الفوار", "الشراب", "اللوشن"], answer: "التحميلة (Suppository)", explanation: "قاعدتها مثل زبدة الكاكاو تنصهر عند حرارة الجسم.", difficulty: "easy" },
  { id: "syrups-024", sectionId: "syrups", type: "mcq", question: "متى تفيد التحاميل الشرجية؟", options: ["عند القيء أو صعوبة البلع", "دائمًا بدل الأقراص", "فقط للفيتامينات", "عند الحاجة لتأثير متأخر جدًا"], answer: "عند القيء أو صعوبة البلع", explanation: "مثل بعض خافضات الحرارة والمسكنات، لكن الامتصاص قد يكون غير منتظم.", difficulty: "easy" },
  { id: "syrups-025", sectionId: "syrups", type: "mcq", question: "أين تُحفظ التحاميل عادة؟", options: ["في مكان بارد وفق النشرة", "في الشمس", "قرب مصدر حرارة", "في السيارة صيفًا"], answer: "في مكان بارد وفق النشرة", explanation: "الحرارة العالية تُذيب القاعدة.", difficulty: "easy" },
  { id: "syrups-026", sectionId: "syrups", type: "mcq", question: "ما اللصقة عبر الجلد (Transdermal patch)؟", options: ["شكل يوصل الدواء عبر الجلد بمعدل مضبوط إلى الدورة الدموية", "مرهم يُدهن مرة واحدة", "قطرة للعين", "قرص مضغ"], answer: "شكل يوصل الدواء عبر الجلد بمعدل مضبوط إلى الدورة الدموية", explanation: "مثل لصقات النيكوتين والفنتانيل.", difficulty: "easy" },
  { id: "syrups-027", sectionId: "syrups", type: "truefalse", question: "يُنصح بتبديل مكان اللصقة الجلدية في كل مرة وفق التعليمات.", options: ["صح", "خطأ"], answer: true, explanation: "لتقليل تهيج الجلد ولضمان امتصاص ثابت.", difficulty: "easy" },
  { id: "syrups-028", sectionId: "syrups", type: "mcq", question: "ما البخاخ المقنن (MDI)؟", options: ["عبوة مضغوطة تعطي جرعة مقاسة من الدواء للاستنشاق", "قرص ذائب", "محلول حقني", "مرهم للعين"], answer: "عبوة مضغوطة تعطي جرعة مقاسة من الدواء للاستنشاق", explanation: "ويُحسَّن استخدامه بحاجز الاستنشاق (Spacer).", difficulty: "medium" },
  { id: "syrups-029", sectionId: "syrups", type: "mcq", question: "ما وظيفة جهاز الرذاذ (Nebulizer)؟", options: ["تحويل الدواء السائل إلى رذاذ يُستنشق", "تسخين الدواء", "حقن الدواء", "تفتيت الأقراص"], answer: "تحويل الدواء السائل إلى رذاذ يُستنشق", explanation: "مفيد للأطفال والمرضى غير القادرين على استخدام البخاخ.", difficulty: "easy" },
  { id: "syrups-030", sectionId: "syrups", type: "mcq", question: "ما الشرط الأساسي في الأدوية الحقنية؟", options: ["أن تكون معقمة وخالية من المسببات الحموية", "أن تكون حلوة الطعم", "أن تكون ملونة", "أن تحتوي كحولًا دائمًا"], answer: "أن تكون معقمة وخالية من المسببات الحموية", explanation: "المسببات الحموية (Pyrogens) تسبب الحمى عند الحقن.", difficulty: "medium" },
  { id: "syrups-031", sectionId: "syrups", type: "mcq", question: "ما تركيز محلول كلوريد الصوديوم المتساوي التوتر (Isotonic)؟", options: ["0.9%", "9%", "0.09%", "5%"], answer: "0.9%", explanation: "يتساوى ضغطه الاسموزي تقريبًا مع الدم.", difficulty: "easy" },
  { id: "syrups-032", sectionId: "syrups", type: "mcq", question: "أي طريق إعطاء مما يلي طريق حقني؟", options: ["تحت الجلد", "الفموي", "تحت اللسان", "الشرجي"], answer: "تحت الجلد", explanation: "الحقن الوريدي والعضلي وتحت الجلد من الطرق الحقنية (Parenteral).", difficulty: "easy" },
  { id: "syrups-033", sectionId: "syrups", type: "mcq", question: "ما الشرط الأساسي للمستحضرات العينية؟", options: ["أن تكون معقمة", "أن تكون حارقة", "أن تحتوي سكرًا", "أن تُشرب"], answer: "أن تكون معقمة", explanation: "العين حساسة جدًا للعدوى.", difficulty: "easy" },
  { id: "syrups-034", sectionId: "syrups", type: "truefalse", question: "يُنصح عادة بالتخلص من قطرة العين متعددة الجرعات بعد نحو 28 يومًا من فتحها ما لم تذكر النشرة غير ذلك.", options: ["صح", "خطأ"], answer: true, explanation: "لأن المواد الحافظة قد لا تحمي من التلوث لأمد طويل.", difficulty: "medium" },
  { id: "syrups-035", sectionId: "syrups", type: "truefalse", question: "يجب عدم لمس رأس قطّارة قطرة العين بالعين أو الأصابع.", options: ["صح", "خطأ"], answer: true, explanation: "لتجنب تلوث العبوة بالجراثيم.", difficulty: "easy" },
  { id: "syrups-036", sectionId: "syrups", type: "mcq", question: "أي مادة حافظة شائعة في قطرات العين قد تمتصها العدسات اللاصقة اللينة؟", options: ["Benzalkonium chloride", "Sodium chloride", "Glucose", "Water"], answer: "Benzalkonium chloride", explanation: "لذلك تُنزع العدسات قبل الاستعمال وتُعاد بعد دقائق وفق النشرة.", difficulty: "hard" },
  { id: "syrups-037", sectionId: "syrups", type: "mcq", question: "ما فائدة المساحيق الجافة لتحضير معلق (Dry powder for suspension)؟", options: ["ثباتها أطول قبل التحضير، وتُضاف الماء عند الصرف", "تُعطى بالحقن", "لا تحتاج إلى ماء", "تُستخدم على الجلد"], answer: "ثباتها أطول قبل التحضير، وتُضاف الماء عند الصرف", explanation: "تنطبق على كثير من المضادات الحيوية الفموية التي لا تثبت طويلًا في الماء.", difficulty: "medium" },
  { id: "syrups-038", sectionId: "syrups", type: "truefalse", question: "بعد تحضير معلق مضاد حيوي تُراجع مدة الصلاحية وشروط التخزين المكتوبة بالنشرة.", options: ["صح", "خطأ"], answer: true, explanation: "فبعضها يُحفظ بالثلاجة ومدة صلاحيته أيام قليلة.", difficulty: "easy" },
  { id: "syrups-039", sectionId: "syrups", type: "mcq", question: "ما السواغ (Excipient)؟", options: ["مادة غير فعالة دوائيًا تدخل في تركيب المستحضر", "المادة الفعالة", "العبوة الخارجية", "اسم الشركة"], answer: "مادة غير فعالة دوائيًا تدخل في تركيب المستحضر", explanation: "مثل المواد الرابطة والمفتتة والمحلية والحافظة.", difficulty: "easy" },
  { id: "syrups-040", sectionId: "syrups", type: "mcq", question: "ما وظيفة المواد الحافظة في الأشربة والمعلقات؟", options: ["منع نمو الميكروبات", "تحسين اللون فقط", "تسريع الامتصاص", "إضافة الحلاوة"], answer: "منع نمو الميكروبات", explanation: "مثل Sodium benzoate وMethylparaben.", difficulty: "easy" },
  { id: "syrups-041", sectionId: "syrups", type: "mcq", question: "لماذا يكون الشراب البسيط شديد التركيز مقاومًا لنمو الميكروبات نسبيًا؟", options: ["ارتفاع تركيز السكر يقلل الماء المتاح للميكروبات", "لأنه يحتوي كحولًا دائمًا", "لأنه يحتوي مضادًا حيويًا", "لأنه مبرّد"], answer: "ارتفاع تركيز السكر يقلل الماء المتاح للميكروبات", explanation: "الشراب البسيط يحتوي نحو 85% وزن/حجم سكروز.", difficulty: "hard" },
  { id: "syrups-042", sectionId: "syrups", type: "mcq", question: "ماذا يُفضَّل لمريض السكري عند اختيار شراب دوائي؟", options: ["النوع الخالي من السكر إن توفر", "الأكثر حلاوة", "الأعلى سكرًا", "أي نوع دون مراجعة"], answer: "النوع الخالي من السكر إن توفر", explanation: "ويُراجع الصيدلي في المحتوى والبدائل.", difficulty: "easy" },
  { id: "syrups-043", sectionId: "syrups", type: "mcq", question: "ما وظيفة المذيب المساعد (Co-solvent) مثل Propylene glycol؟", options: ["زيادة ذوبان المواد قليلة الذوبان في الماء", "تلوين الدواء", "تفتيت الأقراص", "إخراج الغاز"], answer: "زيادة ذوبان المواد قليلة الذوبان في الماء", explanation: "وكذلك الجلسرين والكحول بنسب مضبوطة.", difficulty: "medium" },
  { id: "syrups-044", sectionId: "syrups", type: "mcq", question: "ما وظيفة العوامل المعلِّقة (Suspending agents) مثل Xanthan gum؟", options: ["زيادة اللزوجة وإبطاء ترسب الجسيمات", "تحويل المعلق إلى محلول", "تعقيم المستحضر", "تفتيت الجسيمات"], answer: "زيادة اللزوجة وإبطاء ترسب الجسيمات", explanation: "ومنها أيضًا Carboxymethylcellulose.", difficulty: "medium" },
  { id: "syrups-045", sectionId: "syrups", type: "mcq", question: "حسب قانون ستوكس، ما العامل الذي يقلل سرعة ترسب الجسيمات؟", options: ["زيادة لزوجة الوسط وتصغير حجم الجسيمات", "تكبير الجسيمات", "تقليل اللزوجة", "رفع الحرارة فقط"], answer: "زيادة لزوجة الوسط وتصغير حجم الجسيمات", explanation: "سرعة الترسب تتناسب مع مربع نصف قطر الجسيم وعكسيًا مع اللزوجة.", difficulty: "hard" },
  { id: "syrups-046", sectionId: "syrups", type: "mcq", question: "ما ميزة المعلق المتلبد (Flocculated suspension)؟", options: ["ترسبه يكون رخوًا ويسهل إعادة تشتيته بالرج", "يتكوّن راسب صلب لا يتشتت", "لا يترسب أبدًا", "لا يحتاج إلى رج"], answer: "ترسبه يكون رخوًا ويسهل إعادة تشتيته بالرج", explanation: "بخلاف التكتل الصلب (Caking) الذي يصعب تشتيته.", difficulty: "hard" },
  { id: "syrups-047", sectionId: "syrups", type: "mcq", question: "ما الفرق بين التقشّد (Creaming) والتكسّر (Cracking) في المستحلبات؟", options: ["التقشد عكوس بالرج، والتكسر انفصال دائم للطورين", "كلاهما غير عكوس", "التقشد دائم والتكسر عكوس", "لا فرق"], answer: "التقشد عكوس بالرج، والتكسر انفصال دائم للطورين", explanation: "التكسر يعني فشل المستحلب ولا يعود بالرج.", difficulty: "hard" },
  { id: "syrups-048", sectionId: "syrups", type: "mcq", question: "ماذا يعبّر رقم HLB للمواد المستحلبة؟", options: ["التوازن بين الصفة المحبة للماء والمحبة للدهون", "نقطة الانصهار", "مدة الصلاحية", "الحجم الجزيئي فقط"], answer: "التوازن بين الصفة المحبة للماء والمحبة للدهون", explanation: "قيم HLB العالية تناسب مستحلبات زيت في ماء، والمنخفضة تناسب ماء في زيت.", difficulty: "hard" },
  { id: "syrups-049", sectionId: "syrups", type: "truefalse", question: "ملاعق المطبخ المنزلية ليست وسيلة دقيقة لقياس جرعات الأدوية السائلة.", options: ["صح", "خطأ"], answer: true, explanation: "الأفضل استخدام الكوب المدرّج أو الحقنة أو القطّارة المرفقة.", difficulty: "easy" },
  { id: "syrups-050", sectionId: "syrups", type: "truefalse", question: "المحلول الدوائي الحقيقي يكون متجانسًا وصافيًا ولا يحتاج رجًّا لتوزيع المادة الفعالة.", options: ["صح", "خطأ"], answer: true, explanation: "المادة الفعالة تكون ذائبة جزيئيًا أو أيونيًا، بخلاف المعلق.", difficulty: "easy" },
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
  { id: "cardio-002", sectionId: "cardiovascular", type: "mcq", question: "ما آلية عمل مثبطات ACE مثل Enalapril؟", options: ["تمنع تحويل الأنجيوتنسين I إلى الأنجيوتنسين II", "تحجب مستقبلات بيتا-1", "تثبط مضخة Na/K في القلب", "تفتح قنوات البوتاسيوم"], answer: "تمنع تحويل الأنجيوتنسين I إلى الأنجيوتنسين II", explanation: "فيقل تضيّق الأوعية وإفراز الألدوستيرون.", difficulty: "easy" },
  { id: "cardio-003", sectionId: "cardiovascular", type: "mcq", question: "ما أشهر أثر جانبي لمثبطات ACE؟", options: ["السعال الجاف", "النعاس الشديد", "تضخم اللثة", "الإمساك"], answer: "السعال الجاف", explanation: "بسبب تراكم البراديكينين، ويُستبدل الدواء بحاصر مستقبلات الأنجيوتنسين عند عدم التحمل.", difficulty: "easy" },
  { id: "cardio-004", sectionId: "cardiovascular", type: "mcq", question: "ما الأثر الجانبي النادر الخطير لمثبطات ACE؟", options: ["الوذمة الوعائية", "التهاب الكبد", "فقر الدم المنجلي", "الصلع"], answer: "الوذمة الوعائية", explanation: "تورم الوجه واللسان والحلق وهو حالة طارئة.", difficulty: "medium" },
  { id: "cardio-005", sectionId: "cardiovascular", type: "mcq", question: "أي اضطراب في الأملاح قد تسببه مثبطات ACE وحاصرات AT1؟", options: ["ارتفاع البوتاسيوم", "انخفاض البوتاسيوم", "ارتفاع الكالسيوم", "انخفاض الصوديوم فقط"], answer: "ارتفاع البوتاسيوم", explanation: "لأنها تقلل الألدوستيرون، فتُراقب الكلى والبوتاسيوم.", difficulty: "medium" },
  { id: "cardio-006", sectionId: "cardiovascular", type: "mcq", question: "إلى أي فئة ينتمي Losartan؟", options: ["حاصرات مستقبلات الأنجيوتنسين (ARBs)", "مثبطات ACE", "حاصرات بيتا", "مدرات الثيازيد"], answer: "حاصرات مستقبلات الأنجيوتنسين (ARBs)", explanation: "لا تسبب السعال غالبًا لأنها لا تؤثر في البراديكينين.", difficulty: "easy" },
  { id: "cardio-007", sectionId: "cardiovascular", type: "mcq", question: "إلى أي فئة ينتمي Atenolol؟", options: ["حاصرات بيتا الانتقائية", "حاصرات الكالسيوم", "مدرات البول", "نترات"], answer: "حاصرات بيتا الانتقائية", explanation: "تحجب مستقبلات بيتا-1 في القلب.", difficulty: "easy" },
  { id: "cardio-008", sectionId: "cardiovascular", type: "mcq", question: "ما التأثيرات القلبية لحاصرات بيتا؟", options: ["إبطاء القلب وتقليل قوة الانقباض", "تسريع القلب", "زيادة الإدرار", "توسيع الشرايين مباشرة فقط"], answer: "إبطاء القلب وتقليل قوة الانقباض", explanation: "فتقلل حاجة القلب للأكسجين.", difficulty: "easy" },
  { id: "cardio-009", sectionId: "cardiovascular", type: "mcq", question: "أي حالة تستدعي الحذر الشديد عند استخدام حاصرات بيتا غير الانتقائية؟", options: ["الربو", "ارتفاع الكوليسترول", "فقر الدم", "الصداع"], answer: "الربو", explanation: "حجب بيتا-2 قد يسبب تشنج القصبات.", difficulty: "easy" },
  { id: "cardio-010", sectionId: "cardiovascular", type: "truefalse", question: "حاصرات بيتا قد تُخفي أعراض انخفاض السكر مثل خفقان القلب.", options: ["صح", "خطأ"], answer: true, explanation: "فيحتاج مرضى السكري المعالجون بالإنسولين لمتابعة أدق.", difficulty: "medium" },
  { id: "cardio-011", sectionId: "cardiovascular", type: "mcq", question: "أي حاصر بيتا يُستخدم في فشل القلب ويملك أيضًا تأثير حاصر ألفا؟", options: ["Carvedilol", "Atenolol", "Propranolol", "Sotalol"], answer: "Carvedilol", explanation: "ومن حاصرات بيتا المفيدة في فشل القلب أيضًا Bisoprolol وMetoprolol succinate.", difficulty: "hard" },
  { id: "cardio-012", sectionId: "cardiovascular", type: "mcq", question: "إلى أي فئة ينتمي Amlodipine؟", options: ["حاصرات قنوات الكالسيوم من نوع الديهيدروبيريدين", "حاصرات بيتا", "مدرات", "نترات"], answer: "حاصرات قنوات الكالسيوم من نوع الديهيدروبيريدين", explanation: "تؤثر غالبًا في الأوعية أكثر من القلب.", difficulty: "medium" },
  { id: "cardio-013", sectionId: "cardiovascular", type: "mcq", question: "ما الأثر الجانبي الشائع للأملوديبين؟", options: ["وذمة الكاحلين", "السعال", "ارتفاع البوتاسيوم", "تضخم الثدي"], answer: "وذمة الكاحلين", explanation: "نتيجة توسع الشرايين، وقد يسبب أيضًا احمرار الوجه والصداع.", difficulty: "easy" },
  { id: "cardio-014", sectionId: "cardiovascular", type: "mcq", question: "أي من حاصرات الكالسيوم يؤثر في القلب أكثر ويبطئ معدله؟", options: ["Verapamil", "Amlodipine", "Nifedipine", "Felodipine"], answer: "Verapamil", explanation: "وكذلك Diltiazem.", difficulty: "medium" },
  { id: "cardio-015", sectionId: "cardiovascular", type: "mcq", question: "ما الأثر الجانبي المميز لـ Verapamil؟", options: ["الإمساك", "الإسهال", "السعال", "تضخم الثدي"], answer: "الإمساك", explanation: "كما قد يبطئ القلب جدًا خاصة مع حاصرات بيتا.", difficulty: "medium" },
  { id: "cardio-016", sectionId: "cardiovascular", type: "truefalse", question: "يُحذَّر من الجمع بين Verapamil وحاصرات بيتا لخطر بطء القلب الشديد.", options: ["صح", "خطأ"], answer: true, explanation: "وقد يحدث انسداد في التوصيل القلبي.", difficulty: "hard" },
  { id: "cardio-017", sectionId: "cardiovascular", type: "mcq", question: "إلى أي فئة ينتمي Hydrochlorothiazide؟", options: ["مدرات الثيازيد", "مدرات العروة", "مدرات حافظة للبوتاسيوم", "حاصرات بيتا"], answer: "مدرات الثيازيد", explanation: "تعمل في الأنبوب الملتف القاصي.", difficulty: "easy" },
  { id: "cardio-018", sectionId: "cardiovascular", type: "mcq", question: "ما اضطرابات الأملاح الشائعة مع الثيازيدات؟", options: ["نقص البوتاسيوم ونقص الصوديوم", "ارتفاع البوتاسيوم", "نقص اليود", "ارتفاع الحديد"], answer: "نقص البوتاسيوم ونقص الصوديوم", explanation: "وقد ترفع الغلوكوز وحمض اليوريك والكالسيوم.", difficulty: "medium" },
  { id: "cardio-019", sectionId: "cardiovascular", type: "mcq", question: "إلى أي فئة ينتمي Furosemide؟", options: ["مدرات العروة", "الثيازيدات", "مدرات حافظة للبوتاسيوم", "مثبطات ACE"], answer: "مدرات العروة", explanation: "قوية الإدرار، وتعمل في عروة هنلي الصاعدة.", difficulty: "easy" },
  { id: "cardio-020", sectionId: "cardiovascular", type: "mcq", question: "ما الأثر الجانبي السمعي المرتبط بالجرعات العالية من مدرات العروة؟", options: ["السمية السمعية (طنين وصمم)", "تضخم اللثة", "الإمساك", "الأرق"], answer: "السمية السمعية (طنين وصمم)", explanation: "خاصة مع الحقن السريع أو مع أدوية سامة للأذن.", difficulty: "hard" },
  { id: "cardio-021", sectionId: "cardiovascular", type: "mcq", question: "إلى أي فئة ينتمي Spironolactone؟", options: ["مدر حافظ للبوتاسيوم (مضاد للألدوستيرون)", "ثيازيد", "مدر عروة", "حاصر بيتا"], answer: "مدر حافظ للبوتاسيوم (مضاد للألدوستيرون)", explanation: "يُستخدم في فشل القلب والاستسقاء.", difficulty: "easy" },
  { id: "cardio-022", sectionId: "cardiovascular", type: "mcq", question: "ما الأثر الجانبي الهرموني للسبيرونولاكتون؟", options: ["تضخم الثدي عند الرجال", "نمو الشعر عند النساء فقط", "ارتفاع السكر", "هشاشة الأسنان"], answer: "تضخم الثدي عند الرجال", explanation: "ويُستبدل بـ Eplerenone عند ظهوره لأنه أكثر انتقائية.", difficulty: "medium" },
  { id: "cardio-023", sectionId: "cardiovascular", type: "truefalse", question: "الجمع بين مثبط ACE ومدر حافظ للبوتاسيوم يزيد خطر ارتفاع البوتاسيوم.", options: ["صح", "خطأ"], answer: true, explanation: "ويحتاج مراقبة مخبرية.", difficulty: "medium" },
  { id: "cardio-024", sectionId: "cardiovascular", type: "mcq", question: "ما آلية عمل Digoxin؟", options: ["تثبيط مضخة Na+/K+ ATPase فيزداد الكالسيوم داخل الخلية", "حجب بيتا-1", "فتح قنوات البوتاسيوم", "تثبيط ACE"], answer: "تثبيط مضخة Na+/K+ ATPase فيزداد الكالسيوم داخل الخلية", explanation: "يزيد قوة الانقباض ويبطئ التوصيل في العقدة الأذينية البطينية.", difficulty: "hard" },
  { id: "cardio-025", sectionId: "cardiovascular", type: "mcq", question: "ما علامات سمية الديجوكسين؟", options: ["غثيان وقيء ورؤية صفراء/هالات واضطراب النظم", "سعال جاف", "إمساك فقط", "ارتفاع الضغط"], answer: "غثيان وقيء ورؤية صفراء/هالات واضطراب النظم", explanation: "وهو دواء ضيق المؤشر العلاجي.", difficulty: "hard" },
  { id: "cardio-026", sectionId: "cardiovascular", type: "mcq", question: "أي اضطراب في الأملاح يزيد خطر سمية الديجوكسين؟", options: ["نقص البوتاسيوم", "ارتفاع الصوديوم", "نقص الحديد", "ارتفاع الفوسفات فقط"], answer: "نقص البوتاسيوم", explanation: "لأن البوتاسيوم ينافس الديجوكسين على الارتباط بالمضخة.", difficulty: "hard" },
  { id: "cardio-027", sectionId: "cardiovascular", type: "mcq", question: "ما آلية عمل النترات مثل Nitroglycerin؟", options: ["تحرر أكسيد النيتريك فتوسع الأوردة والشرايين", "تحجب بيتا", "تثبط الصفائح", "تدر البول"], answer: "تحرر أكسيد النيتريك فتوسع الأوردة والشرايين", explanation: "فيقل الحمل على القلب خاصة بتوسيع الأوردة.", difficulty: "medium" },
  { id: "cardio-028", sectionId: "cardiovascular", type: "mcq", question: "ما الأثر الجانبي الشائع للنترات؟", options: ["الصداع وانخفاض الضغط", "السعال", "الإمساك", "فرط البوتاسيوم"], answer: "الصداع وانخفاض الضغط", explanation: "بسبب توسع أوعية الدماغ والأوعية الطرفية.", difficulty: "easy" },
  { id: "cardio-029", sectionId: "cardiovascular", type: "mcq", question: "أي دواء يُمنع استخدامه مع النترات لخطر هبوط الضغط الشديد؟", options: ["Sildenafil", "Paracetamol", "Atenolol", "Aspirin"], answer: "Sildenafil", explanation: "مثبطات PDE5 تعزز تأثير أكسيد النيتريك.", difficulty: "medium" },
  { id: "cardio-030", sectionId: "cardiovascular", type: "mcq", question: "ما التحمّل المرتبط بالنترات وكيف يُتجنب؟", options: ["يحدث التحمّل ويُتجنب بفترة خالية من النترات", "لا يحدث أبدًا", "يزيد التأثير مع الوقت", "يُتجنب بزيادة الجرعة دائمًا"], answer: "يحدث التحمّل ويُتجنب بفترة خالية من النترات", explanation: "خاصة مع اللصقات والأقراص طويلة المفعول.", difficulty: "hard" },
  { id: "cardio-031", sectionId: "cardiovascular", type: "mcq", question: "ما آلية عمل Aspirin بجرعة منخفضة في القلب؟", options: ["تثبيط إنزيم COX-1 في الصفائح بشكل لا رجعي", "حجب بيتا", "توسيع الشرايين", "خفض الكوليسترول"], answer: "تثبيط إنزيم COX-1 في الصفائح بشكل لا رجعي", explanation: "فيقل تكوّن ثرومبوكسان A2 وتجمع الصفائح.", difficulty: "medium" },
  { id: "cardio-032", sectionId: "cardiovascular", type: "mcq", question: "ما آلية عمل Clopidogrel؟", options: ["حجب مستقبل P2Y12 على الصفائح", "تثبيط COX-1", "تثبيط عوامل التخثر", "إذابة الجلطة"], answer: "حجب مستقبل P2Y12 على الصفائح", explanation: "دواء أولي يحتاج تنشيطًا كبديًا عبر CYP2C19.", difficulty: "hard" },
  { id: "cardio-033", sectionId: "cardiovascular", type: "mcq", question: "أي دواء قد يقلل فعالية Clopidogrel بتثبيط تنشيطه؟", options: ["Omeprazole", "Paracetamol", "Vitamin C", "Atenolol"], answer: "Omeprazole", explanation: "يثبط CYP2C19، ويُفضَّل Pantoprazole عند الحاجة.", difficulty: "hard" },
  { id: "cardio-034", sectionId: "cardiovascular", type: "mcq", question: "ما آلية عمل Warfarin؟", options: ["تثبيط إنتاج عوامل التخثر المعتمدة على فيتامين K", "تثبيط الثرومبين مباشرة", "تثبيط عامل Xa مباشرة", "إذابة الفيبرين"], answer: "تثبيط إنتاج عوامل التخثر المعتمدة على فيتامين K", explanation: "تشمل العوامل II وVII وIX وX.", difficulty: "medium" },
  { id: "cardio-035", sectionId: "cardiovascular", type: "mcq", question: "ما الفحص المستخدم لمراقبة الوارفارين؟", options: ["INR", "HbA1c", "TSH", "eGFR فقط"], answer: "INR", explanation: "ويُحدَّد المدى المستهدف حسب الحالة.", difficulty: "easy" },
  { id: "cardio-036", sectionId: "cardiovascular", type: "mcq", question: "ما ترياق الوارفارين في النزف أو ارتفاع INR الشديد؟", options: ["فيتامين K", "البروتامين", "Naloxone", "Flumazenil"], answer: "فيتامين K", explanation: "وقد يحتاج الأمر لبلازما أو مركبات عوامل التخثر في الحالات الشديدة.", difficulty: "medium" },
  { id: "cardio-037", sectionId: "cardiovascular", type: "mcq", question: "ما ترياق الهيبارين؟", options: ["البروتامين سلفات", "فيتامين K", "Naloxone", "Atropine"], answer: "البروتامين سلفات", explanation: "يرتبط بالهيبارين ويعطل تأثيره.", difficulty: "medium" },
  { id: "cardio-038", sectionId: "cardiovascular", type: "mcq", question: "ما فئة Rivaroxaban؟", options: ["مثبط مباشر لعامل Xa", "مثبط الثرومبين", "مضاد فيتامين K", "حاصر P2Y12"], answer: "مثبط مباشر لعامل Xa", explanation: "من مضادات التخثر الفموية المباشرة (DOACs) ولا يحتاج مراقبة INR الروتينية.", difficulty: "medium" },
  { id: "cardio-039", sectionId: "cardiovascular", type: "mcq", question: "ما فئة Atorvastatin وآلية عملها؟", options: ["ستاتين: يثبط HMG-CoA reductase", "فايبريت: ينشط PPAR-α", "مثبط امتصاص الكوليسترول", "راتنج مرتبط بالصفراء"], answer: "ستاتين: يثبط HMG-CoA reductase", explanation: "فيقل تصنيع الكوليسترول في الكبد وتزداد مستقبلات LDL.", difficulty: "medium" },
  { id: "cardio-040", sectionId: "cardiovascular", type: "mcq", question: "ما الأعراض التي يجب الإبلاغ عنها عند استخدام الستاتينات؟", options: ["ألم أو ضعف عضلي غير مبرر", "السعال الجاف", "الإمساك", "الصداع الخفيف فقط"], answer: "ألم أو ضعف عضلي غير مبرر", explanation: "قد يشير إلى اعتلال عضلي أو انحلال عضلات نادر وخطير.", difficulty: "medium" },
  { id: "cardio-041", sectionId: "cardiovascular", type: "mcq", question: "أي وقت تناول يُفضَّل تقليديًا لبعض الستاتينات قصيرة المفعول كالسيمفاستاتين؟", options: ["مساءً", "صباحًا فقط", "مع الإفطار فقط", "بعد الظهر فقط"], answer: "مساءً", explanation: "لأن تصنيع الكوليسترول يبلغ ذروته ليلًا، أما Atorvastatin فيمكن في أي وقت.", difficulty: "medium" },
  { id: "cardio-042", sectionId: "cardiovascular", type: "mcq", question: "أي ثمرة قد ترفع مستوى بعض الستاتينات بتثبيط CYP3A4؟", options: ["الجريب فروت", "التفاح", "الموز", "العنب الأحمر"], answer: "الجريب فروت", explanation: "وخاصة مع Simvastatin وAtorvastatin، فيزداد خطر السمية العضلية.", difficulty: "medium" },
  { id: "cardio-043", sectionId: "cardiovascular", type: "mcq", question: "ما آلية عمل Ezetimibe؟", options: ["تثبيط امتصاص الكوليسترول من الأمعاء", "تثبيط HMG-CoA reductase", "رفع HDL مباشرة", "تفتيت الدهون"], answer: "تثبيط امتصاص الكوليسترول من الأمعاء", explanation: "يُستخدم مع الستاتين لخفض إضافي في LDL.", difficulty: "hard" },
  { id: "cardio-044", sectionId: "cardiovascular", type: "mcq", question: "أي دواء من مضادات اضطراب النظم من الفئة III ويحتوي اليود وقد يؤثر في الغدة الدرقية والرئتين؟", options: ["Amiodarone", "Lidocaine", "Propranolol", "Verapamil"], answer: "Amiodarone", explanation: "يرتبط أيضًا بترسبات قرنية وتصبغ الجلد وسمية كبدية.", difficulty: "hard" },
  { id: "cardio-045", sectionId: "cardiovascular", type: "mcq", question: "أي دواء يُستخدم في الإيقاف الحاد لبعض اضطرابات النظم فوق البطينية السريعة عبر الوريد؟", options: ["Adenosine", "Warfarin", "Atorvastatin", "Spironolactone"], answer: "Adenosine", explanation: "نصف عمره قصير جدًا (ثوانٍ) وقد يسبب احمرارًا وضيق صدر عابرًا.", difficulty: "hard" },
  { id: "cardio-046", sectionId: "cardiovascular", type: "mcq", question: "ما الدواء المستخدم لحالات أزمة ارتفاع الضغط في الحمل (تسمم الحمل) ويُعد من الخيارات الشائعة؟", options: ["Labetalol", "Enalapril", "Losartan", "Spironolactone"], answer: "Labetalol", explanation: "ومنها أيضًا Hydralazine وNifedipine، بينما تُمنع ACEi/ARBs في الحمل.", difficulty: "medium" },
  { id: "cardio-047", sectionId: "cardiovascular", type: "mcq", question: "ما الأثر الجانبي المميز لـ Hydralazine المزمن بجرعات عالية؟", options: ["متلازمة شبيهة بالذئبة", "السعال", "تضخم اللثة", "الإمساك"], answer: "متلازمة شبيهة بالذئبة", explanation: "وكذلك Procainamide، وتتأثر بعوامل وراثية (Slow acetylators).", difficulty: "hard" },
  { id: "cardio-048", sectionId: "cardiovascular", type: "mcq", question: "ما الأثر الجانبي المرتبط بالمينوكسيديل؟", options: ["زيادة نمو الشعر واحتباس السوائل", "السعال", "تضخم الثدي", "نقص الصفائح"], answer: "زيادة نمو الشعر واحتباس السوائل", explanation: "ولذلك يُستخدم موضعيًا لعلاج تساقط الشعر.", difficulty: "hard" },
  { id: "cardio-049", sectionId: "cardiovascular", type: "truefalse", question: "ارتفاع ضغط الدم المزمن قد لا يسبب أعراضًا لفترة طويلة، لذلك يلزم قياسه بانتظام.", options: ["صح", "خطأ"], answer: true, explanation: "ويُسمى 'القاتل الصامت' لأن مضاعفاته قد تظهر متأخرة.", difficulty: "easy" },
  { id: "cardio-050", sectionId: "cardiovascular", type: "truefalse", question: "لا ينبغي إيقاف حاصرات بيتا فجأة عند الاستخدام المزمن دون إشراف طبي.", options: ["صح", "خطأ"], answer: true, explanation: "قد يحدث ارتداد بتسارع القلب وارتفاع الضغط أو ألم الصدر.", difficulty: "medium" },
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
  { id: "cns-002", sectionId: "cns", type: "mcq", question: "إلى أي فئة ينتمي Diazepam؟", options: ["البنزوديازيبينات", "الباربيتورات", "مضادات الاكتئاب ثلاثية الحلقات", "مضادات الذهان"], answer: "البنزوديازيبينات", explanation: "يعزز تأثير GABA عبر مستقبل GABA-A ويُستخدم للقلق والتشنجات وارتخاء العضلات.", difficulty: "easy" },
  { id: "cns-003", sectionId: "cns", type: "mcq", question: "ما أبرز مخاطر الاستخدام المزمن للبنزوديازيبينات؟", options: ["الاعتماد والتحمل وأعراض الانسحاب", "السعال الجاف", "تضخم اللثة", "ارتفاع البوتاسيوم"], answer: "الاعتماد والتحمل وأعراض الانسحاب", explanation: "لذلك تُستخدم لأقصر مدة ممكنة، ويُوقف الدواء تدريجيًا.", difficulty: "easy" },
  { id: "cns-004", sectionId: "cns", type: "truefalse", question: "الإيقاف المفاجئ للبنزوديازيبينات بعد استخدام طويل قد يسبب نوبات تشنجية.", options: ["صح", "خطأ"], answer: true, explanation: "ويجب خفض الجرعة تدريجيًا تحت إشراف طبي.", difficulty: "medium" },
  { id: "cns-005", sectionId: "cns", type: "mcq", question: "أي دواء من البنزوديازيبينات قصير المفعول ويُستخدم للأرق؟", options: ["Temazepam", "Diazepam", "Clonazepam", "Chlordiazepoxide"], answer: "Temazepam", explanation: "قصير إلى متوسط المفعول، بينما Diazepam طويل المفعول بسبب نواتج نشطة.", difficulty: "hard" },
  { id: "cns-006", sectionId: "cns", type: "mcq", question: "ما دواء الخط الأول لإيقاف نوبة الصرع الممتدة (Status epilepticus) غالبًا؟", options: ["بنزوديازيبين وريدي مثل Lorazepam", "Paracetamol", "Atenolol", "Amoxicillin"], answer: "بنزوديازيبين وريدي مثل Lorazepam", explanation: "ثم يُضاف مضاد صرع آخر حسب البروتوكول.", difficulty: "medium" },
  { id: "cns-007", sectionId: "cns", type: "mcq", question: "ما آلية عمل Phenytoin؟", options: ["حجب قنوات الصوديوم المعتمدة على الجهد", "تنشيط GABA مباشرة", "حجب NMDA", "تثبيط MAO"], answer: "حجب قنوات الصوديوم المعتمدة على الجهد", explanation: "وكذلك Carbamazepine وLamotrigine.", difficulty: "medium" },
  { id: "cns-008", sectionId: "cns", type: "mcq", question: "ما الأثر الجانبي المميز لـ Phenytoin على اللثة؟", options: ["تضخم اللثة", "جفاف الفم", "السعال", "الصلع"], answer: "تضخم اللثة", explanation: "كما قد يسبب شعرانية وترنحًا عند ارتفاع المستوى.", difficulty: "medium" },
  { id: "cns-009", sectionId: "cns", type: "truefalse", question: "Phenytoin يتبع حركية الدرجة الصفرية عند الجرعات العلاجية العالية، فيرتفع مستواه بشكل غير متناسب مع الجرعة.", options: ["صح", "خطأ"], answer: true, explanation: "بسبب تشبع الإنزيمات الكبدية، فتُراقب مستوياته في الدم.", difficulty: "hard" },
  { id: "cns-010", sectionId: "cns", type: "mcq", question: "ما الأثر الجانبي الجلدي الخطير المرتبط بـ Carbamazepine خاصة عند بعض الأصول الآسيوية؟", options: ["متلازمة ستيفنز-جونسون", "تضخم اللثة", "حب الشباب فقط", "الصلع فقط"], answer: "متلازمة ستيفنز-جونسون", explanation: "ويرتبط بالنمط الوراثي HLA-B*1502، ويُفحص قبل البدء في بعض الفئات.", difficulty: "hard" },
  { id: "cns-011", sectionId: "cns", type: "mcq", question: "لأي حالة ألم يُعد Carbamazepine خيارًا أول؟", options: ["ألم العصب مثلث التوائم", "الصداع التوتري", "ألم الأسنان البسيط", "ألم العضلات"], answer: "ألم العصب مثلث التوائم", explanation: "كما يُستخدم في الصرع واضطراب ثنائي القطب.", difficulty: "medium" },
  { id: "cns-012", sectionId: "cns", type: "mcq", question: "ما الدواء المحفز للإنزيمات الكبدية من مضادات الصرع؟", options: ["Carbamazepine", "Levetiracetam", "Gabapentin", "Lamotrigine"], answer: "Carbamazepine", explanation: "وكذلك Phenytoin وPhenobarbital، فتقل فعالية أدوية أخرى كحبوب منع الحمل.", difficulty: "medium" },
  { id: "cns-013", sectionId: "cns", type: "mcq", question: "ما الأثر الجانبي الخطير لـ Valproate على الجنين؟", options: ["عيوب الأنبوب العصبي وتأخر النمو العصبي", "الصمم", "تلوّن الأسنان", "نقص السكر"], answer: "عيوب الأنبوب العصبي وتأخر النمو العصبي", explanation: "لذلك يُتجنب لدى النساء في سن الإنجاب ما لم يكن ضروريًا.", difficulty: "medium" },
  { id: "cns-014", sectionId: "cns", type: "mcq", question: "ما الأثر الكبدي والبنكرياسي المرتبط بـ Valproate؟", options: ["سمية كبدية والتهاب البنكرياس", "فشل رئوي", "تضخم اللثة", "السعال"], answer: "سمية كبدية والتهاب البنكرياس", explanation: "وقد يسبب أيضًا زيادة الوزن ورعشة.", difficulty: "hard" },
  { id: "cns-015", sectionId: "cns", type: "mcq", question: "أي دواء من مضادات الصرع يُستخدم لنوبات الغياب (Absence)؟", options: ["Ethosuximide", "Phenytoin", "Carbamazepine", "Gabapentin"], answer: "Ethosuximide", explanation: "ويُستخدم Valproate أيضًا.", difficulty: "hard" },
  { id: "cns-016", sectionId: "cns", type: "mcq", question: "ما الأثر الجلدي المقلق المرتبط بـ Lamotrigine؟", options: ["طفح جلدي خطير خاصة مع التدرج السريع للجرعة", "تضخم اللثة", "السعال", "تساقط الأسنان"], answer: "طفح جلدي خطير خاصة مع التدرج السريع للجرعة", explanation: "ويزيد الخطر مع Valproate، لذلك تُرفع الجرعة ببطء.", difficulty: "hard" },
  { id: "cns-017", sectionId: "cns", type: "mcq", question: "ما الأثر الجانبي النفسي الملحوظ لـ Levetiracetam؟", options: ["التهيج والتغيرات المزاجية", "السعال", "تضخم اللثة", "الإمساك"], answer: "التهيج والتغيرات المزاجية", explanation: "ويمكن أن يسبب نعاسًا ودوارًا.", difficulty: "medium" },
  { id: "cns-018", sectionId: "cns", type: "mcq", question: "ما استخدامات Gabapentin؟", options: ["الألم العصبي والصرع الجزئي", "الربو", "ارتفاع الضغط", "الالتهابات البكتيرية"], answer: "الألم العصبي والصرع الجزئي", explanation: "يرتبط بوحدة α2δ لقنوات الكالسيوم، ويحتاج تعديل الجرعة في القصور الكلوي.", difficulty: "medium" },
  { id: "cns-019", sectionId: "cns", type: "mcq", question: "أي دواء أول لعلاج داء باركنسون؟", options: ["Levodopa مع Carbidopa", "Haloperidol", "Diazepam", "Fluoxetine"], answer: "Levodopa مع Carbidopa", explanation: "يعوض نقص الدوبامين في الجسم المخطط.", difficulty: "easy" },
  { id: "cns-020", sectionId: "cns", type: "mcq", question: "ما مشكلة الاستخدام الطويل لليفودوبا؟", options: ["تذبذب الاستجابة (On-off) وحركات لا إرادية", "السعال", "تضخم اللثة", "نقص الصفائح"], answer: "تذبذب الاستجابة (On-off) وحركات لا إرادية", explanation: "تظهر الديسكينيزيا بعد سنوات من العلاج.", difficulty: "hard" },
  { id: "cns-021", sectionId: "cns", type: "truefalse", question: "البروتين الغذائي العالي قد يقلل امتصاص Levodopa وتأثيره.", options: ["صح", "خطأ"], answer: true, explanation: "فهو ينافس على النقل عبر الأمعاء والحاجز الدموي الدماغي.", difficulty: "hard" },
  { id: "cns-022", sectionId: "cns", type: "mcq", question: "إلى أي فئة ينتمي Haloperidol؟", options: ["مضاد ذهان تقليدي (من الجيل الأول)", "مضاد ذهان غير نمطي", "مضاد اكتئاب", "مثبط MAO"], answer: "مضاد ذهان تقليدي (من الجيل الأول)", explanation: "يحجب مستقبلات D2 بقوة، فيرتبط بآثار خارج هرمية.", difficulty: "easy" },
  { id: "cns-023", sectionId: "cns", type: "mcq", question: "ما الآثار خارج الهرمية (EPS) لمضادات الذهان؟", options: ["رعشة وتيبس وتململ وحركات لا إرادية", "السعال", "ارتفاع البوتاسيوم", "تضخم اللثة"], answer: "رعشة وتيبس وتململ وحركات لا إرادية", explanation: "تشمل التوتر العضلي الحاد والأكاثيزيا والباركنسونية والحركات المتأخرة.", difficulty: "medium" },
  { id: "cns-024", sectionId: "cns", type: "mcq", question: "ما اسم الحركات اللاإرادية المتأخرة الناتجة عن الاستخدام المزمن لمضادات الذهان؟", options: ["خلل الحركة المتأخر (Tardive dyskinesia)", "الربو", "الاستسقاء", "الوهن العضلي"], answer: "خلل الحركة المتأخر (Tardive dyskinesia)", explanation: "قد يكون دائمًا في بعض الحالات.", difficulty: "hard" },
  { id: "cns-025", sectionId: "cns", type: "mcq", question: "ما المتلازمة الخطيرة المرتبطة بمضادات الذهان وتشمل حرارة مرتفعة وتيبسًا؟", options: ["المتلازمة الخبيثة للذهان (NMS)", "متلازمة الرجل الأحمر", "متلازمة كوشينغ", "متلازمة رايي"], answer: "المتلازمة الخبيثة للذهان (NMS)", explanation: "حالة طارئة وتتطلب إيقاف الدواء وعناية فورية.", difficulty: "hard" },
  { id: "cns-026", sectionId: "cns", type: "mcq", question: "أي مضاد ذهان غير نمطي يحتاج مراقبة تعداد الدم الأبيض بسبب خطر نقص المحببات؟", options: ["Clozapine", "Risperidone", "Olanzapine", "Quetiapine"], answer: "Clozapine", explanation: "ويُستخدم في الفصام المقاوم للعلاج.", difficulty: "hard" },
  { id: "cns-027", sectionId: "cns", type: "mcq", question: "ما الأثر الأيضي الشائع لمضادات الذهان غير النمطية مثل Olanzapine؟", options: ["زيادة الوزن وارتفاع السكر والدهون", "السعال", "نقص الوزن الشديد", "الصلع"], answer: "زيادة الوزن وارتفاع السكر والدهون", explanation: "فتُراقب الأيضيات دوريًا.", difficulty: "medium" },
  { id: "cns-028", sectionId: "cns", type: "mcq", question: "ما أثر مضادات الذهان المرتبط بارتفاع البرولاكتين؟", options: ["إفراز حليب وانقطاع الطمث", "سعال", "إمساك", "نقص السكر"], answer: "إفراز حليب وانقطاع الطمث", explanation: "بسبب حجب D2 في المسار الدرني القمعي، خاصة مع Risperidone.", difficulty: "hard" },
  { id: "cns-029", sectionId: "cns", type: "mcq", question: "إلى أي فئة ينتمي Fluoxetine؟", options: ["مثبطات استرداد السيروتونين الانتقائية (SSRIs)", "ثلاثية الحلقات", "مثبطات MAO", "مضادات ذهان"], answer: "مثبطات استرداد السيروتونين الانتقائية (SSRIs)", explanation: "الخط الأول في الاكتئاب والقلق غالبًا.", difficulty: "easy" },
  { id: "cns-030", sectionId: "cns", type: "mcq", question: "متى يظهر التأثير العلاجي لمضادات الاكتئاب عادةً؟", options: ["بعد 2 إلى 4 أسابيع أو أكثر", "خلال ساعة", "فورًا", "بعد سنة"], answer: "بعد 2 إلى 4 أسابيع أو أكثر", explanation: "بينما تظهر الآثار الجانبية الأولية مبكرًا، ويجب الاستمرار وعدم الإيقاف المفاجئ.", difficulty: "easy" },
  { id: "cns-031", sectionId: "cns", type: "mcq", question: "ما أعراض الانسحاب المحتملة بعد إيقاف SSRIs فجأة؟", options: ["دوخة وأعراض شبيهة بالإنفلونزا وتهيج", "ارتفاع الضغط فقط", "تضخم اللثة", "السعال"], answer: "دوخة وأعراض شبيهة بالإنفلونزا وتهيج", explanation: "يُنصح بالخفض التدريجي، وتكون أشد مع Paroxetine.", difficulty: "medium" },
  { id: "cns-032", sectionId: "cns", type: "mcq", question: "ما الاستخدام الإضافي لـ Amitriptyline غير الاكتئاب؟", options: ["الألم العصبي والوقاية من الصداع النصفي", "الربو", "السكري", "ارتفاع الدهون"], answer: "الألم العصبي والوقاية من الصداع النصفي", explanation: "من مضادات الاكتئاب ثلاثية الحلقات بجرعات أقل من جرعات الاكتئاب.", difficulty: "medium" },
  { id: "cns-033", sectionId: "cns", type: "mcq", question: "ما خطورة الجرعة الزائدة من مضادات الاكتئاب ثلاثية الحلقات؟", options: ["اضطراب نظم القلب وتشنجات", "نقص السكر فقط", "الصلع", "السعال"], answer: "اضطراب نظم القلب وتشنجات", explanation: "ولذلك يُحذر من وصفها بكميات كبيرة للمعرضين لخطر إيذاء النفس.", difficulty: "hard" },
  { id: "cns-034", sectionId: "cns", type: "mcq", question: "ما علاج الخط الأول لاضطراب ثنائي القطب (مثبت المزاج الكلاسيكي)؟", options: ["الليثيوم", "Paracetamol", "Amoxicillin", "Atenolol"], answer: "الليثيوم", explanation: "ضيق المؤشر العلاجي ويتطلب مراقبة المستوى في الدم.", difficulty: "medium" },
  { id: "cns-035", sectionId: "cns", type: "mcq", question: "ما علامات سمية الليثيوم؟", options: ["رعشة خشنة وقيء وإسهال وارتباك", "السعال", "ارتفاع الضغط فقط", "تضخم اللثة"], answer: "رعشة خشنة وقيء وإسهال وارتباك", explanation: "ويزداد الخطر مع الجفاف ونقص الصوديوم ومع الثيازيدات ومثبطات ACE وNSAIDs.", difficulty: "hard" },
  { id: "cns-036", sectionId: "cns", type: "mcq", question: "أي عضو يتأثر بالاستخدام المزمن لليثيوم؟", options: ["الغدة الدرقية والكلى", "الجلد فقط", "الشعر فقط", "العظام فقط"], answer: "الغدة الدرقية والكلى", explanation: "قد يسبب قصور الدرق وبوالة كاذبة سكرية، فتُراقب الوظائف دوريًا.", difficulty: "hard" },
  { id: "cns-037", sectionId: "cns", type: "mcq", question: "ما آلية عمل Morphine؟", options: ["ناهض لمستقبلات ميو الأفيونية", "حاصر لمستقبلات ميو", "مثبط COX", "حاصر لقنوات الصوديوم"], answer: "ناهض لمستقبلات ميو الأفيونية", explanation: "يعطي تسكينًا قويًا مع خطر تثبيط التنفس والإدمان.", difficulty: "easy" },
  { id: "cns-038", sectionId: "cns", type: "mcq", question: "ما الأثر الجانبي الذي لا يحدث فيه تحمّل عادةً مع الأفيونيات؟", options: ["الإمساك وتضيق الحدقة", "النعاس", "التسكين", "الغثيان"], answer: "الإمساك وتضيق الحدقة", explanation: "فيحتاج المريض عادة إلى ملينات وقائية مع الاستخدام المزمن.", difficulty: "hard" },
  { id: "cns-039", sectionId: "cns", type: "mcq", question: "ما علامات الجرعة الزائدة من الأفيونيات؟", options: ["تثبيط التنفس وتضيق الحدقة وفقدان الوعي", "اتساع الحدقة وهياج", "ارتفاع الضغط", "تسارع القلب فقط"], answer: "تثبيط التنفس وتضيق الحدقة وفقدان الوعي", explanation: "ويُعالج بـ Naloxone مع دعم التنفس والإسعاف.", difficulty: "medium" },
  { id: "cns-040", sectionId: "cns", type: "mcq", question: "ما فائدة Tramadol وما تحذيره الأبرز؟", options: ["مسكن أفيوني ضعيف وقد يسبب تشنجات ومتلازمة السيروتونين", "مضاد حيوي", "خافض ضغط", "مضاد ذهان"], answer: "مسكن أفيوني ضعيف وقد يسبب تشنجات ومتلازمة السيروتونين", explanation: "خاصة مع SSRIs، ويحتاج تعديلًا في القصور الكلوي.", difficulty: "hard" },
  { id: "cns-041", sectionId: "cns", type: "mcq", question: "ما آلية عمل Sumatriptan؟", options: ["ناهض لمستقبلات 5-HT1B/1D", "حاصر بيتا", "ناهض ألفا-2", "حاصر دوبامين"], answer: "ناهض لمستقبلات 5-HT1B/1D", explanation: "يقبض الأوعية الدماغية ويُستخدم في النوبة الحادة للصداع النصفي، ويُتجنب في أمراض الشرايين التاجية.", difficulty: "hard" },
  { id: "cns-042", sectionId: "cns", type: "mcq", question: "أي دواء يُستخدم للوقاية من الصداع النصفي؟", options: ["Propranolol", "Sumatriptan", "Paracetamol وحده دائمًا", "Naloxone"], answer: "Propranolol", explanation: "ويُستخدم أيضًا Topiramate وAmitriptyline.", difficulty: "medium" },
  { id: "cns-043", sectionId: "cns", type: "mcq", question: "ما الأثر الجانبي الشائع لـ Zolpidem؟", options: ["النعاس والسلوكيات المرتبطة بالنوم (كالمشي أثناء النوم)", "السعال", "تضخم اللثة", "ارتفاع الضغط"], answer: "النعاس والسلوكيات المرتبطة بالنوم (كالمشي أثناء النوم)", explanation: "ويعمل على وحدة α1 في مستقبل GABA-A، ويُستخدم لأقصر مدة.", difficulty: "hard" },
  { id: "cns-044", sectionId: "cns", type: "mcq", question: "أي دواء من مثبطات الكولينستيراز يُستخدم في الزهايمر؟", options: ["Donepezil", "Haloperidol", "Atropine", "Diazepam"], answer: "Donepezil", explanation: "ومنها أيضًا Rivastigmine وGalantamine، وقد تسبب بطء القلب والغثيان.", difficulty: "easy" },
  { id: "cns-045", sectionId: "cns", type: "mcq", question: "ما استخدام Methylphenidate؟", options: ["اضطراب فرط الحركة وتشتت الانتباه (ADHD)", "الصرع", "الاكتئاب فقط", "الألم"], answer: "اضطراب فرط الحركة وتشتت الانتباه (ADHD)", explanation: "منبه يزيد الدوبامين والنورأدرينالين، وقد يسبب فقدان الشهية والأرق وارتفاع الضغط.", difficulty: "medium" },
  { id: "cns-046", sectionId: "cns", type: "mcq", question: "ما فئة Baclofen وآلية عمله؟", options: ["مرخٍ عضلي: ناهض لمستقبلات GABA-B", "مسكن أفيوني", "مضاد اكتئاب", "مضاد صرع فقط"], answer: "مرخٍ عضلي: ناهض لمستقبلات GABA-B", explanation: "يُستخدم في التشنج العضلي، ولا يُوقف فجأة بعد استخدام طويل.", difficulty: "hard" },
  { id: "cns-047", sectionId: "cns", type: "mcq", question: "ما استخدام Ketamine في التخدير؟", options: ["مخدر تفارقي يحجب مستقبلات NMDA", "مخدر موضعي", "مضاد حيوي", "مرخٍ عضلي"], answer: "مخدر تفارقي يحجب مستقبلات NMDA", explanation: "قد يسبب هلاوس عند الإفاقة ويحافظ نسبيًا على التنفس وضغط الدم.", difficulty: "hard" },
  { id: "cns-048", sectionId: "cns", type: "mcq", question: "ما آلية عمل المخدرات الموضعية مثل Lidocaine؟", options: ["حجب قنوات الصوديوم في الأعصاب", "تنشيط GABA", "حجب NMDA", "تثبيط COX"], answer: "حجب قنوات الصوديوم في الأعصاب", explanation: "فيمنع انتقال الإشارة العصبية، ويُضاف الأدرينالين أحيانًا لإطالة التأثير.", difficulty: "medium" },
  { id: "cns-049", sectionId: "cns", type: "truefalse", question: "الجمع بين الكحول ومثبطات الجهاز العصبي المركزي (كالبنزوديازيبينات والأفيونيات) خطر.", options: ["صح", "خطأ"], answer: true, explanation: "قد يسبب تثبيطًا شديدًا للتنفس وفقدان الوعي.", difficulty: "easy" },
  { id: "cns-050", sectionId: "cns", type: "truefalse", question: "لا يجوز إيقاف مضادات الصرع فجأة دون إشراف طبي.", options: ["صح", "خطأ"], answer: true, explanation: "قد تحدث نوبات ارتدادية، ويكون الإيقاف تدريجيًا.", difficulty: "easy" },
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
  { id: "gi-002", sectionId: "gastrointestinal", type: "mcq", question: "ما آلية عمل مثبطات مضخة البروتون (PPIs)؟", options: ["تثبيط إنزيم H+/K+ ATPase في الخلايا الجدارية بشكل لا رجعي", "حجب مستقبلات H2", "تعادل حمض المعدة كيميائيًا", "تحفيز إفراز المخاط فقط"], answer: "تثبيط إنزيم H+/K+ ATPase في الخلايا الجدارية بشكل لا رجعي", explanation: "فتقل حموضة المعدة بشكل قوي ولفترة طويلة.", difficulty: "medium" },
  { id: "gi-003", sectionId: "gastrointestinal", type: "mcq", question: "متى يُفضَّل تناول Omeprazole؟", options: ["قبل الإفطار بـ 30 إلى 60 دقيقة", "بعد العشاء مباشرة", "مع الشاي فقط", "في أي وقت دون فرق"], answer: "قبل الإفطار بـ 30 إلى 60 دقيقة", explanation: "لأن المضخات تكون نشطة بعد الصيام، فيكون التأثير أفضل.", difficulty: "medium" },
  { id: "gi-004", sectionId: "gastrointestinal", type: "mcq", question: "ما المخاطر المرتبطة بالاستخدام الطويل لمثبطات مضخة البروتون؟", options: ["نقص المغنيسيوم وفيتامين B12 وزيادة خطر الكسور", "ارتفاع الضغط", "السعال", "تضخم اللثة"], answer: "نقص المغنيسيوم وفيتامين B12 وزيادة خطر الكسور", explanation: "وكذلك زيادة خطر عدوى C. difficile، لذلك تُستخدم بأقل جرعة ومدة ملائمة.", difficulty: "hard" },
  { id: "gi-005", sectionId: "gastrointestinal", type: "mcq", question: "ما آلية عمل Famotidine؟", options: ["حجب مستقبلات H2 في الخلايا الجدارية", "تثبيط مضخة البروتون", "تعادل الحمض", "حجب M3"], answer: "حجب مستقبلات H2 في الخلايا الجدارية", explanation: "يقلل إفراز الحمض خاصة الليلي.", difficulty: "easy" },
  { id: "gi-006", sectionId: "gastrointestinal", type: "mcq", question: "أي مضاد H2 يثبط إنزيمات الكبد CYP ويسبب تداخلات كثيرة؟", options: ["Cimetidine", "Famotidine", "Ranitidine", "Nizatidine"], answer: "Cimetidine", explanation: "وقد يسبب تضخم الثدي عند الرجال أيضًا.", difficulty: "hard" },
  { id: "gi-007", sectionId: "gastrointestinal", type: "mcq", question: "ما آلية عمل مضادات الحموضة (Antacids)؟", options: ["تعادل حمض المعدة كيميائيًا", "تثبيط مضخة البروتون", "حجب H2", "تحفيز الإفراز"], answer: "تعادل حمض المعدة كيميائيًا", explanation: "مثل هيدروكسيد الألمنيوم والمغنيسيوم وكربونات الكالسيوم، وتأثيرها سريع وقصير.", difficulty: "easy" },
  { id: "gi-008", sectionId: "gastrointestinal", type: "mcq", question: "ما الأثر الجانبي المميز لمضادات الحموضة المحتوية على الألمنيوم؟", options: ["الإمساك", "الإسهال", "السعال", "تضخم اللثة"], answer: "الإمساك", explanation: "بينما المغنيسيوم يسبب الإسهال، ولذلك يُجمع بينهما في بعض المستحضرات.", difficulty: "medium" },
  { id: "gi-009", sectionId: "gastrointestinal", type: "mcq", question: "ما الأثر الجانبي المميز لمضادات الحموضة المحتوية على المغنيسيوم؟", options: ["الإسهال", "الإمساك", "السعال", "ارتفاع الضغط"], answer: "الإسهال", explanation: "ويُحذَّر منها في القصور الكلوي لخطر تراكم المغنيسيوم.", difficulty: "medium" },
  { id: "gi-010", sectionId: "gastrointestinal", type: "truefalse", question: "مضادات الحموضة قد تقلل امتصاص أدوية أخرى، لذلك يُفصل بينها بوقت مناسب.", options: ["صح", "خطأ"], answer: true, explanation: "مثل الكينولونات والتتراسيكلينات والحديد والليفوثيروكسين.", difficulty: "medium" },
  { id: "gi-011", sectionId: "gastrointestinal", type: "mcq", question: "ما آلية عمل Sucralfate؟", options: ["يشكل طبقة واقية فوق القرحة في الوسط الحمضي", "يثبط مضخة البروتون", "يحجب H2", "يحفز الحركة المعوية"], answer: "يشكل طبقة واقية فوق القرحة في الوسط الحمضي", explanation: "يحتاج حموضة المعدة لتنشيطه، فلا يُجمع مع مضادات الحموضة بنفس الوقت.", difficulty: "hard" },
  { id: "gi-012", sectionId: "gastrointestinal", type: "mcq", question: "ما استخدام Misoprostol في الجهاز الهضمي؟", options: ["الوقاية من قرحة المعدة الناتجة عن NSAIDs", "علاج الإسهال", "علاج الإمساك", "علاج الغثيان"], answer: "الوقاية من قرحة المعدة الناتجة عن NSAIDs", explanation: "وهو نظير للبروستاغلاندين E1، ويُمنع في الحمل.", difficulty: "hard" },
  { id: "gi-013", sectionId: "gastrointestinal", type: "mcq", question: "ما الجرثومة المرتبطة بقرحة المعدة وتحتاج إلى علاج بالمضادات الحيوية؟", options: ["Helicobacter pylori", "E. coli", "Salmonella فقط", "Candida"], answer: "Helicobacter pylori", explanation: "يُعالج غالبًا بمثبط مضخة البروتون مع مضادين حيويين أو أكثر.", difficulty: "easy" },
  { id: "gi-014", sectionId: "gastrointestinal", type: "mcq", question: "ما المكونات الشائعة للعلاج الثلاثي لـ H. pylori؟", options: ["PPI مع Clarithromycin وAmoxicillin (أو Metronidazole)", "Paracetamol مع Ibuprofen", "Atenolol مع Amlodipine", "Insulin مع Metformin"], answer: "PPI مع Clarithromycin وAmoxicillin (أو Metronidazole)", explanation: "وتختلف البروتوكولات حسب المقاومة المحلية، وقد يُستخدم علاج رباعي.", difficulty: "hard" },
  { id: "gi-015", sectionId: "gastrointestinal", type: "mcq", question: "ما آلية عمل Metoclopramide؟", options: ["حجب D2 وتنشيط 5-HT4 فيزيد حركة المعدة", "حجب H1", "حجب 5-HT3 فقط", "تثبيط COX"], answer: "حجب D2 وتنشيط 5-HT4 فيزيد حركة المعدة", explanation: "يُستخدم للغثيان وبطء تفريغ المعدة.", difficulty: "medium" },
  { id: "gi-016", sectionId: "gastrointestinal", type: "mcq", question: "ما أبرز تحذير لاستخدام Metoclopramide؟", options: ["اضطرابات حركية مثل خلل الحركة المتأخر، ويُحدد زمن الاستخدام", "السعال", "تضخم اللثة", "ارتفاع البوتاسيوم"], answer: "اضطرابات حركية مثل خلل الحركة المتأخر، ويُحدد زمن الاستخدام", explanation: "ويُتجنب في الانسداد المعوي.", difficulty: "hard" },
  { id: "gi-017", sectionId: "gastrointestinal", type: "mcq", question: "ما آلية عمل Domperidone؟", options: ["حجب مستقبلات D2 محيطيًا دون عبور كبير للدماغ", "حجب H2", "تعادل الحمض", "تنشيط M3"], answer: "حجب مستقبلات D2 محيطيًا دون عبور كبير للدماغ", explanation: "وله تحذير من إطالة QT واضطرابات النظم، فيُستخدم بأقل جرعة ومدة.", difficulty: "hard" },
  { id: "gi-018", sectionId: "gastrointestinal", type: "mcq", question: "ما آلية عمل Ondansetron؟", options: ["حجب مستقبلات 5-HT3", "حجب D2 فقط", "حجب H2", "تنشيط M3"], answer: "حجب مستقبلات 5-HT3", explanation: "فعال في قيء العلاج الكيميائي وما بعد الجراحة، وقد يسبب إمساكًا وإطالة QT.", difficulty: "medium" },
  { id: "gi-019", sectionId: "gastrointestinal", type: "mcq", question: "ما آلية عمل Loperamide؟", options: ["ناهض أفيوني محيطي يبطئ حركة الأمعاء", "مضاد حيوي", "مليّن", "حاصر H2"], answer: "ناهض أفيوني محيطي يبطئ حركة الأمعاء", explanation: "لا يعبر الحاجز الدموي الدماغي بجرعات عادية، ويُتجنب في الإسهال الدموي أو مع الحمى.", difficulty: "medium" },
  { id: "gi-020", sectionId: "gastrointestinal", type: "mcq", question: "ما أساس علاج الإسهال الحاد المائي؟", options: ["محلول الإماهة الفموية وتعويض السوائل", "مضاد حيوي دائمًا", "مضاد للحركة دائمًا", "الصيام التام"], answer: "محلول الإماهة الفموية وتعويض السوائل", explanation: "فالخطر الرئيسي هو الجفاف.", difficulty: "easy" },
  { id: "gi-021", sectionId: "gastrointestinal", type: "mcq", question: "ما عناصر محلول الإماهة الفموية (ORS)؟", options: ["صوديوم وغلوكوز وبوتاسيوم وسترات/بيكربونات في ماء", "سكر فقط", "ماء مالح فقط", "عصير فواكه"], answer: "صوديوم وغلوكوز وبوتاسيوم وسترات/بيكربونات في ماء", explanation: "الغلوكوز يعزز امتصاص الصوديوم والماء عبر ناقل SGLT1.", difficulty: "medium" },
  { id: "gi-022", sectionId: "gastrointestinal", type: "mcq", question: "ما فئات الملينات؟", options: ["محفزة وحجمية وأسموزية وملينة للبراز", "حيوية ومناعية", "قلبية وكلوية", "موضعية فقط"], answer: "محفزة وحجمية وأسموزية وملينة للبراز", explanation: "ويُختار النوع حسب الحالة والمدة.", difficulty: "easy" },
  { id: "gi-023", sectionId: "gastrointestinal", type: "mcq", question: "ما مثال الملين المحفز؟", options: ["Bisacodyl وSenna", "Lactulose", "Psyllium", "Docusate"], answer: "Bisacodyl وSenna", explanation: "تحفز حركة الأمعاء، وقد تسبب مغصًا، ولا تُستخدم طويلًا دون استشارة.", difficulty: "medium" },
  { id: "gi-024", sectionId: "gastrointestinal", type: "mcq", question: "ما مثال الملين الأسموزي؟", options: ["Lactulose وPolyethylene glycol", "Bisacodyl", "Senna", "Loperamide"], answer: "Lactulose وPolyethylene glycol", explanation: "تسحب الماء إلى الأمعاء فتليّن البراز.", difficulty: "medium" },
  { id: "gi-025", sectionId: "gastrointestinal", type: "mcq", question: "ما شرط استخدام الملينات الحجمية مثل Psyllium؟", options: ["تناولها مع كمية كافية من الماء", "تناولها دون ماء", "تناولها بعد الصيام فقط", "تناولها مع مضادات الإسهال"], answer: "تناولها مع كمية كافية من الماء", explanation: "وإلا قد تسبب انسدادًا أو انتفاخًا.", difficulty: "medium" },
  { id: "gi-026", sectionId: "gastrointestinal", type: "mcq", question: "ما الاستخدام الإضافي لـ Lactulose في أمراض الكبد؟", options: ["الوقاية من اعتلال الدماغ الكبدي وعلاجه", "علاج الصفراء الانسدادية", "علاج الحموضة", "علاج الغثيان"], answer: "الوقاية من اعتلال الدماغ الكبدي وعلاجه", explanation: "يقلل امتصاص الأمونيا بتحويلها إلى أمونيوم في القولون.", difficulty: "hard" },
  { id: "gi-027", sectionId: "gastrointestinal", type: "mcq", question: "ما دواء مرض كرون والتهاب القولون التقرحي من مشتقات الساليسيلات؟", options: ["Mesalazine", "Omeprazole", "Loperamide", "Ondansetron"], answer: "Mesalazine", explanation: "مضاد التهاب موضعي في الأمعاء، ويُراقب وظائف الكلى.", difficulty: "hard" },
  { id: "gi-028", sectionId: "gastrointestinal", type: "mcq", question: "ما فئة Infliximab المستخدم في أمراض الأمعاء الالتهابية؟", options: ["جسم مضاد أحادي النسيلة ضد TNF-α", "مثبط مضخة البروتون", "مضاد حيوي", "ملين"], answer: "جسم مضاد أحادي النسيلة ضد TNF-α", explanation: "يزيد خطر العدوى، ويُفحص السل قبل البدء.", difficulty: "hard" },
  { id: "gi-029", sectionId: "gastrointestinal", type: "mcq", question: "ما مضاد التشنج المعوي المستخدم في القولون العصبي؟", options: ["Hyoscine butylbromide", "Omeprazole", "Ondansetron", "Lactulose"], answer: "Hyoscine butylbromide", explanation: "مضاد مسكاريني يخفف التقلصات، ومن آثاره جفاف الفم وتسارع القلب.", difficulty: "medium" },
  { id: "gi-030", sectionId: "gastrointestinal", type: "mcq", question: "ما آلية عمل الأنزيمات البنكرياسية البديلة (Pancrelipase)؟", options: ["تعويض الليباز والأميلاز والبروتياز لهضم الطعام", "تثبيط الحمض", "تحفيز الحركة", "قتل الجراثيم"], answer: "تعويض الليباز والأميلاز والبروتياز لهضم الطعام", explanation: "تُؤخذ مع الوجبات في قصور البنكرياس والتليف الكيسي.", difficulty: "hard" },
  { id: "gi-031", sectionId: "gastrointestinal", type: "mcq", question: "ما استخدام Ursodeoxycholic acid؟", options: ["إذابة بعض حصوات المرارة وعلاج التهاب الأقنية الصفراوية الأولي", "علاج الحموضة", "علاج الإسهال", "علاج الإمساك"], answer: "إذابة بعض حصوات المرارة وعلاج التهاب الأقنية الصفراوية الأولي", explanation: "يقلل تشبع الصفراء بالكوليسترول.", difficulty: "hard" },
  { id: "gi-032", sectionId: "gastrointestinal", type: "mcq", question: "ما فيروس التهاب الكبد الذي يُنقل غالبًا بالطريق البرازي الفموي؟", options: ["A وE", "B وC", "D فقط", "B فقط"], answer: "A وE", explanation: "بينما B وC وD تنتقل بالدم وسوائل الجسم.", difficulty: "medium" },
  { id: "gi-033", sectionId: "gastrointestinal", type: "truefalse", question: "يوجد لقاح فعال للوقاية من التهاب الكبد B.", options: ["صح", "خطأ"], answer: true, explanation: "ويُعطى ضمن جداول التطعيم الروتينية للرضع والفئات المعرضة.", difficulty: "easy" },
  { id: "gi-034", sectionId: "gastrointestinal", type: "mcq", question: "ما الحد الأقصى اليومي الآمن عمومًا من الباراسيتامول للبالغين الأصحاء عند أغلب المراجع؟", options: ["4 غرامات", "10 غرامات", "1 غرام", "20 غرامًا"], answer: "4 غرامات", explanation: "ويُخفَّض في أمراض الكبد وسوء التغذية والإفراط في الكحول.", difficulty: "medium" },
  { id: "gi-035", sectionId: "gastrointestinal", type: "mcq", question: "ما ترياق التسمم بالباراسيتامول؟", options: ["N-acetylcysteine", "Naloxone", "Atropine", "Vitamin K"], answer: "N-acetylcysteine", explanation: "يعوض الغلوتاثيون ويقلل سمية المستقلب NAPQI، وتزداد فعاليته مع البدء المبكر.", difficulty: "medium" },
  { id: "gi-036", sectionId: "gastrointestinal", type: "mcq", question: "ما آلية عمل Simethicone؟", options: ["يقلل الشد السطحي للفقاعات الغازية", "يثبط الحمض", "يحفز الحركة", "يعادل الحمض"], answer: "يقلل الشد السطحي للفقاعات الغازية", explanation: "يخفف الانتفاخ والغازات ولا يُمتص.", difficulty: "medium" },
  { id: "gi-037", sectionId: "gastrointestinal", type: "mcq", question: "ما الفحص المستخدم عادة لتأكيد التهاب المعدة بـ H. pylori دون تنظير؟", options: ["اختبار التنفس باليوريا أو مستضد البراز", "تحليل البول", "تخطيط القلب", "قياس الضغط"], answer: "اختبار التنفس باليوريا أو مستضد البراز", explanation: "ويُوقف PPI قبله بأسبوعين غالبًا لتجنب نتائج سلبية كاذبة.", difficulty: "hard" },
  { id: "gi-038", sectionId: "gastrointestinal", type: "truefalse", question: "الأدوية المضادة للالتهاب غير الستيرويدية (NSAIDs) قد تسبب قرحة المعدة ونزفًا هضميًا.", options: ["صح", "خطأ"], answer: true, explanation: "بسبب تثبيط البروستاغلاندين الواقي للمعدة.", difficulty: "easy" },
  { id: "gi-039", sectionId: "gastrointestinal", type: "mcq", question: "ما علامات النزف الهضمي العلوي؟", options: ["قيء دموي أو براز أسود قطراني", "سعال جاف", "طفح جلدي", "صداع"], answer: "قيء دموي أو براز أسود قطراني", explanation: "حالة طارئة تتطلب تقييمًا فوريًا.", difficulty: "medium" },
  { id: "gi-040", sectionId: "gastrointestinal", type: "mcq", question: "ما الاستخدام المعتاد لـ Hyoscine (Scopolamine) في الجهاز الهضمي والدوار؟", options: ["الغثيان الناتج عن دوار الحركة وتقلصات الأمعاء", "الحموضة", "الإسهال", "الإمساك"], answer: "الغثيان الناتج عن دوار الحركة وتقلصات الأمعاء", explanation: "يعمل كمضاد مسكاريني.", difficulty: "medium" },
  { id: "gi-041", sectionId: "gastrointestinal", type: "mcq", question: "ما ميزة الملين Docusate؟", options: ["مليّن للبراز يزيد دخول الماء فيه", "ملين محفز قوي", "مضاد إسهال", "مضاد حموضة"], answer: "مليّن للبراز يزيد دخول الماء فيه", explanation: "تأثيره خفيف، ويُستخدم أحيانًا لتجنب الإجهاد عند التبرز.", difficulty: "hard" },
  { id: "gi-042", sectionId: "gastrointestinal", type: "mcq", question: "أي دواء قد يسبب الإمساك كأثر جانبي من الأدوية المستخدمة للقلب؟", options: ["Verapamil", "Furosemide", "Hydralazine", "Atenolol"], answer: "Verapamil", explanation: "وكذلك الأفيونيات والحديد ومضادات الكولين.", difficulty: "medium" },
  { id: "gi-043", sectionId: "gastrointestinal", type: "truefalse", question: "مكملات الحديد قد تسبب الإمساك وتلوّن البراز بالأسود.", options: ["صح", "خطأ"], answer: true, explanation: "وهو تلوّن غير ضار ويختلف عن البراز الأسود القطراني الناتج عن النزف.", difficulty: "medium" },
  { id: "gi-044", sectionId: "gastrointestinal", type: "mcq", question: "ما حالة ارتجاع المريء (GERD) وما التوجيه غير الدوائي المفيد؟", options: ["رفع رأس السرير وتجنب الوجبات المتأخرة والمهيجات", "الاستلقاء بعد الأكل مباشرة", "زيادة الوجبات الدسمة", "التدخين"], answer: "رفع رأس السرير وتجنب الوجبات المتأخرة والمهيجات", explanation: "مع إنقاص الوزن عند وجود سمنة.", difficulty: "easy" },
  { id: "gi-045", sectionId: "gastrointestinal", type: "mcq", question: "ما علامات الإنذار التي تستدعي مراجعة الطبيب عند عسر الهضم؟", options: ["صعوبة البلع وفقدان وزن غير مبرر ونزف", "انتفاخ خفيف بعد وجبة", "حرقة عابرة", "مغص بسيط"], answer: "صعوبة البلع وفقدان وزن غير مبرر ونزف", explanation: "فقد تدل على حالات خطيرة تحتاج فحصًا.", difficulty: "medium" },
  { id: "gi-046", sectionId: "gastrointestinal", type: "mcq", question: "ما فئة Rifaximin المستخدم في اعتلال الدماغ الكبدي والإسهال؟", options: ["مضاد حيوي قليل الامتصاص يعمل داخل الأمعاء", "مضاد حموضة", "ملين", "مضاد قيء"], answer: "مضاد حيوي قليل الامتصاص يعمل داخل الأمعاء", explanation: "يقلل البكتيريا المنتجة للأمونيا.", difficulty: "hard" },
  { id: "gi-047", sectionId: "gastrointestinal", type: "mcq", question: "ما استخدام البروبيوتيك (Probiotics) المدروس؟", options: ["قد يخفف مدة الإسهال المرتبط بالمضادات الحيوية", "يعالج القرحة", "يخفض الضغط", "يعالج الحصوات"], answer: "قد يخفف مدة الإسهال المرتبط بالمضادات الحيوية", explanation: "الأدلة تختلف حسب السلالة، ويُحذَّر منها لدى ضعيفي المناعة.", difficulty: "medium" },
  { id: "gi-048", sectionId: "gastrointestinal", type: "mcq", question: "ما علاج الخط الأول للإسهال المرتبط بـ C. difficile حسب كثير من الإرشادات؟", options: ["Vancomycin فموي أو Fidaxomicin", "Loperamide", "Omeprazole", "Ciprofloxacin"], answer: "Vancomycin فموي أو Fidaxomicin", explanation: "ويُوقف المضاد الحيوي المسبب إن أمكن، ويُتجنب Loperamide.", difficulty: "hard" },
  { id: "gi-049", sectionId: "gastrointestinal", type: "truefalse", question: "لا يجوز استخدام مضادات الإسهال في الإسهال الدموي المصحوب بحمى دون تقييم طبي.", options: ["صح", "خطأ"], answer: true, explanation: "فقد تزيد خطر المضاعفات في العدوى المعوية الغازية.", difficulty: "medium" },
  { id: "gi-050", sectionId: "gastrointestinal", type: "truefalse", question: "يجب شرب كمية كافية من السوائل عند استخدام الملينات الحجمية.", options: ["صح", "خطأ"], answer: true, explanation: "لضمان فعاليتها وتجنب الانسداد.", difficulty: "easy" },
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
  { id: "resp-002", sectionId: "respiratory", type: "mcq", question: "ما آلية عمل Salbutamol؟", options: ["تنبيه مستقبلات بيتا-2 فيتوسع القصبات", "حجب مستقبلات M3", "تثبيط الليوكوترينات", "تثبيط الهيستامين"], answer: "تنبيه مستقبلات بيتا-2 فيتوسع القصبات", explanation: "يُستخدم كمسكن سريع لنوبة الربو.", difficulty: "easy" },
  { id: "resp-003", sectionId: "respiratory", type: "mcq", question: "ما الأثر الجانبي الشائع لناهضات بيتا-2؟", options: ["رعشة وخفقان", "الإمساك", "السعال الجاف", "تضخم اللثة"], answer: "رعشة وخفقان", explanation: "وقد تسبب نقص البوتاسيوم بالجرعات العالية.", difficulty: "easy" },
  { id: "resp-004", sectionId: "respiratory", type: "mcq", question: "أي دواء من ناهضات بيتا-2 طويلة المفعول (LABA)؟", options: ["Salmeterol", "Salbutamol", "Terbutaline", "Ipratropium"], answer: "Salmeterol", explanation: "وكذلك Formoterol، ولا تُستخدم وحدها في الربو بل مع كورتيكوستيرويد استنشاقي.", difficulty: "medium" },
  { id: "resp-005", sectionId: "respiratory", type: "truefalse", question: "لا يُنصح باستخدام LABA وحده دون كورتيكوستيرويد استنشاقي في علاج الربو.", options: ["صح", "خطأ"], answer: true, explanation: "لزيادة خطر المضاعفات الشديدة عند استخدامه منفردًا.", difficulty: "hard" },
  { id: "resp-006", sectionId: "respiratory", type: "mcq", question: "ما علاج الصيانة الأساسي للربو المستمر؟", options: ["كورتيكوستيرويد استنشاقي", "ناهض بيتا-2 قصير المفعول فقط", "مضاد حيوي", "مضاد هيستامين"], answer: "كورتيكوستيرويد استنشاقي", explanation: "يقلل الالتهاب في القصبات ويمنع النوبات.", difficulty: "easy" },
  { id: "resp-007", sectionId: "respiratory", type: "mcq", question: "ما الأثر الجانبي الموضعي للكورتيكوستيرويد الاستنشاقي؟", options: ["فطار الفم (Candidiasis) وبحة الصوت", "الإمساك", "السعال الجاف", "تضخم اللثة"], answer: "فطار الفم (Candidiasis) وبحة الصوت", explanation: "يُقلل بالمضمضة بعد الاستعمال واستخدام حاجز الاستنشاق.", difficulty: "medium" },
  { id: "resp-008", sectionId: "respiratory", type: "truefalse", question: "يُنصح بالمضمضة بالماء بعد استخدام بخاخ الكورتيكوستيرويد.", options: ["صح", "خطأ"], answer: true, explanation: "لتقليل ترسب الدواء في الفم والفطار.", difficulty: "easy" },
  { id: "resp-009", sectionId: "respiratory", type: "mcq", question: "أي دواء من الكورتيكوستيرويدات الاستنشاقية؟", options: ["Budesonide", "Salbutamol", "Montelukast", "Theophylline"], answer: "Budesonide", explanation: "وكذلك Beclometasone وFluticasone.", difficulty: "easy" },
  { id: "resp-010", sectionId: "respiratory", type: "mcq", question: "ما آلية عمل Montelukast؟", options: ["حجب مستقبلات الليوكوترين CysLT1", "ناهض بيتا-2", "مضاد مسكاريني", "مثبط الفوسفوديستيراز"], answer: "حجب مستقبلات الليوكوترين CysLT1", explanation: "يُستخدم للوقاية في الربو والتهاب الأنف التحسسي.", difficulty: "medium" },
  { id: "resp-011", sectionId: "respiratory", type: "mcq", question: "ما تحذير Montelukast المهم؟", options: ["تغيرات نفسية وسلوكية وأحلام مزعجة", "السعال", "تضخم اللثة", "ارتفاع البوتاسيوم"], answer: "تغيرات نفسية وسلوكية وأحلام مزعجة", explanation: "يجب مراقبة المزاج خاصة عند الأطفال.", difficulty: "hard" },
  { id: "resp-012", sectionId: "respiratory", type: "mcq", question: "ما آلية عمل Ipratropium؟", options: ["مضاد مسكاريني يوسّع القصبات", "ناهض بيتا-2", "كورتيكوستيرويد", "مضاد ليوكوترين"], answer: "مضاد مسكاريني يوسّع القصبات", explanation: "مفيد خاصة في مرض الانسداد الرئوي المزمن.", difficulty: "medium" },
  { id: "resp-013", sectionId: "respiratory", type: "mcq", question: "ما الأثر الجانبي لمضادات المسكارين الاستنشاقية؟", options: ["جفاف الفم", "تضخم اللثة", "السعال الجاف", "الإسهال"], answer: "جفاف الفم", explanation: "وقد تسبب احتباس البول عند بعض المرضى.", difficulty: "easy" },
  { id: "resp-014", sectionId: "respiratory", type: "mcq", question: "أي دواء مضاد مسكاريني طويل المفعول للانسداد الرئوي المزمن؟", options: ["Tiotropium", "Salbutamol", "Budesonide", "Montelukast"], answer: "Tiotropium", explanation: "يُستخدم مرة يوميًا.", difficulty: "medium" },
  { id: "resp-015", sectionId: "respiratory", type: "mcq", question: "ما آلية عمل Theophylline؟", options: ["مثبط الفوسفوديستيراز ومضاد للأدينوزين", "ناهض بيتا-2", "مضاد مسكاريني", "كورتيكوستيرويد"], answer: "مثبط الفوسفوديستيراز ومضاد للأدينوزين", explanation: "يوسع القصبات، لكنه ضيق المؤشر العلاجي.", difficulty: "hard" },
  { id: "resp-016", sectionId: "respiratory", type: "mcq", question: "ما علامات سمية Theophylline؟", options: ["غثيان وخفقان وارتعاش وتشنجات", "سعال جاف", "إمساك", "تضخم اللثة"], answer: "غثيان وخفقان وارتعاش وتشنجات", explanation: "ويُراقب مستواه في الدم.", difficulty: "hard" },
  { id: "resp-017", sectionId: "respiratory", type: "mcq", question: "أي دواء يرفع مستوى Theophylline بتثبيط استقلابه؟", options: ["Ciprofloxacin", "Rifampicin", "Phenytoin", "Carbamazepine"], answer: "Ciprofloxacin", explanation: "بينما المحفزات كالريفامبيسين تخفض مستواه.", difficulty: "hard" },
  { id: "resp-018", sectionId: "respiratory", type: "truefalse", question: "التدخين يقلل مستوى Theophylline بتحفيز إنزيمات الكبد.", options: ["صح", "خطأ"], answer: true, explanation: "فقد تلزم جرعات أعلى للمدخنين، وتُخفض عند التوقف عن التدخين.", difficulty: "hard" },
  { id: "resp-019", sectionId: "respiratory", type: "mcq", question: "ما حاجز الاستنشاق (Spacer) وفائدته؟", options: ["غرفة تحسن وصول الدواء للرئتين وتقلل الترسب في الفم", "جهاز تسخين", "قناع تخدير", "علبة تخزين"], answer: "غرفة تحسن وصول الدواء للرئتين وتقلل الترسب في الفم", explanation: "مفيد خاصة للأطفال وكبار السن.", difficulty: "easy" },
  { id: "resp-020", sectionId: "respiratory", type: "mcq", question: "ما ترتيب الاستعمال عند استخدام بخاخين (موسع قصبات وكورتيكوستيرويد)؟", options: ["الموسع أولًا ثم الكورتيكوستيرويد", "الكورتيكوستيرويد أولًا دائمًا", "معًا في الوقت نفسه", "لا يهم إطلاقًا"], answer: "الموسع أولًا ثم الكورتيكوستيرويد", explanation: "ليتوسع القصبات ويصل الدواء الثاني بشكل أفضل.", difficulty: "medium" },
  { id: "resp-021", sectionId: "respiratory", type: "mcq", question: "ما أداة قياس شدة انسداد الشعب الهوائية المنزلية؟", options: ["مقياس ذروة الجريان (Peak flow meter)", "مقياس الحرارة", "مقياس الضغط", "مقياس السكر"], answer: "مقياس ذروة الجريان (Peak flow meter)", explanation: "يساعد في مراقبة الربو وكشف التدهور مبكرًا.", difficulty: "medium" },
  { id: "resp-022", sectionId: "respiratory", type: "mcq", question: "ما آلية عمل Omalizumab؟", options: ["جسم مضاد ضد IgE", "ناهض بيتا-2", "مضاد مسكاريني", "كورتيكوستيرويد"], answer: "جسم مضاد ضد IgE", explanation: "يُستخدم في الربو التحسسي الشديد.", difficulty: "hard" },
  { id: "resp-023", sectionId: "respiratory", type: "mcq", question: "ما المسكن الذي قد يثير الربو عند بعض المرضى؟", options: ["الأسبرين ومضادات الالتهاب غير الستيرويدية", "الباراسيتامول بجرعات عادية", "الفيتامينات", "الماء"], answer: "الأسبرين ومضادات الالتهاب غير الستيرويدية", explanation: "يسمى الربو الحساس للأسبرين.", difficulty: "medium" },
  { id: "resp-024", sectionId: "respiratory", type: "mcq", question: "أي دواء من حاصرات بيتا قد يفاقم الربو؟", options: ["Propranolol", "Salbutamol", "Budesonide", "Montelukast"], answer: "Propranolol", explanation: "لأنه يحجب مستقبلات بيتا-2 في القصبات.", difficulty: "medium" },
  { id: "resp-025", sectionId: "respiratory", type: "mcq", question: "ما آلية عمل Guaifenesin؟", options: ["مقشّع يزيد سيولة البلغم", "مثبط للسعال في الدماغ", "موسع قصبات", "مضاد حيوي"], answer: "مقشّع يزيد سيولة البلغم", explanation: "يسهل خروج البلغم، ودليل فعاليته محدود.", difficulty: "medium" },
  { id: "resp-026", sectionId: "respiratory", type: "mcq", question: "ما آلية عمل Dextromethorphan؟", options: ["مثبط للسعال يعمل مركزيًا", "مقشع", "موسع قصبات", "مزيل احتقان"], answer: "مثبط للسعال يعمل مركزيًا", explanation: "يُتجنب مع مثبطات MAO والـ SSRIs لخطر متلازمة السيروتونين.", difficulty: "medium" },
  { id: "resp-027", sectionId: "respiratory", type: "mcq", question: "ما آلية عمل Acetylcysteine كمذيب للبلغم؟", options: ["يكسر الروابط الكبريتية في المخاط فيقلل لزوجته", "يوسع القصبات", "يثبط السعال", "يقتل الجراثيم"], answer: "يكسر الروابط الكبريتية في المخاط فيقلل لزوجته", explanation: "ويُستخدم أيضًا كترياق لتسمم الباراسيتامول.", difficulty: "hard" },
  { id: "resp-028", sectionId: "respiratory", type: "mcq", question: "ما مزيل الاحتقان الأنفي الفموي الشائع؟", options: ["Pseudoephedrine", "Loratadine", "Guaifenesin", "Montelukast"], answer: "Pseudoephedrine", explanation: "قد يرفع الضغط ويسبب الأرق والخفقان.", difficulty: "medium" },
  { id: "resp-029", sectionId: "respiratory", type: "truefalse", question: "يُحذَّر من مزيلات الاحتقان الفموية عند مرضى ارتفاع الضغط غير المنضبط.", options: ["صح", "خطأ"], answer: true, explanation: "لأنها ناهضة ألفا تُضيّق الأوعية.", difficulty: "medium" },
  { id: "resp-030", sectionId: "respiratory", type: "mcq", question: "ما ظاهرة احتقان الارتداد المرتبطة بمزيلات الاحتقان الأنفية الموضعية (Oxymetazoline)؟", options: ["تفاقم الاحتقان عند الاستخدام لأكثر من 3 إلى 5 أيام", "جفاف الفم", "السعال", "ارتفاع السكر"], answer: "تفاقم الاحتقان عند الاستخدام لأكثر من 3 إلى 5 أيام", explanation: "تُعرف بالتهاب الأنف الدوائي.", difficulty: "medium" },
  { id: "resp-031", sectionId: "respiratory", type: "mcq", question: "ما علاج الخط الأول للتهاب الأنف التحسسي المستمر؟", options: ["بخاخ كورتيكوستيرويد أنفي", "مضاد حيوي", "مزيل احتقان فموي دائمًا", "أفيونيات"], answer: "بخاخ كورتيكوستيرويد أنفي", explanation: "مثل Fluticasone وMometasone.", difficulty: "medium" },
  { id: "resp-032", sectionId: "respiratory", type: "mcq", question: "أي مضاد هيستامين أقل تسببًا بالنعاس؟", options: ["Loratadine", "Diphenhydramine", "Chlorpheniramine", "Promethazine"], answer: "Loratadine", explanation: "من الجيل الثاني، ومنه أيضًا Cetirizine وFexofenadine.", difficulty: "easy" },
  { id: "resp-033", sectionId: "respiratory", type: "mcq", question: "ما علاج الاستجابة التأقية (Anaphylaxis) الأول؟", options: ["الأدرينالين عضليًا", "مضاد هيستامين فقط", "كورتيكوستيرويد فقط", "الراحة"], answer: "الأدرينالين عضليًا", explanation: "ثم الدعم والمراقبة، وتأتي الأدوية الأخرى مساندة.", difficulty: "medium" },
  { id: "resp-034", sectionId: "respiratory", type: "mcq", question: "ما موضع حقن الأدرينالين الذاتي (EpiPen) المفضل؟", options: ["الجانب الأمامي الجانبي للفخذ", "الذراع العلوية فقط", "الألية", "البطن"], answer: "الجانب الأمامي الجانبي للفخذ", explanation: "يمكن الحقن عبر الملابس عند الطوارئ.", difficulty: "medium" },
  { id: "resp-035", sectionId: "respiratory", type: "mcq", question: "ما فئة Fluticasone/Salmeterol؟", options: ["مزيج كورتيكوستيرويد استنشاقي مع LABA", "مزيج مضاد حيوي", "مزيج مسكن", "مزيج مضاد هيستامين"], answer: "مزيج كورتيكوستيرويد استنشاقي مع LABA", explanation: "يُستخدم كعلاج صيانة للربو والانسداد الرئوي المزمن.", difficulty: "medium" },
  { id: "resp-036", sectionId: "respiratory", type: "mcq", question: "ما مرض الانسداد الرئوي المزمن (COPD) وأهم عوامل خطره؟", options: ["مرض مزمن يسد الشعب، وعامله الرئيسي التدخين", "عدوى حادة فقط", "مرض وراثي فقط", "التهاب فيروسي"], answer: "مرض مزمن يسد الشعب، وعامله الرئيسي التدخين", explanation: "وأهم تدخل يبطئ تدهوره هو الإقلاع عن التدخين.", difficulty: "easy" },
  { id: "resp-037", sectionId: "respiratory", type: "mcq", question: "ما علاج COPD المستمر الأول عادة؟", options: ["موسع قصبات طويل المفعول (LAMA أو LABA)", "مضاد حيوي دائم", "مسكن أفيوني", "مضاد سعال"], answer: "موسع قصبات طويل المفعول (LAMA أو LABA)", explanation: "ويُضاف كورتيكوستيرويد استنشاقي لبعض المرضى المعرضين للتفاقمات.", difficulty: "hard" },
  { id: "resp-038", sectionId: "respiratory", type: "mcq", question: "ما الأكسجين في COPD الشديد؟", options: ["يُعطى بحذر وبجرعة مضبوطة", "يُعطى بتركيز عالٍ دائمًا", "يُمنع كليًا", "لا فائدة منه"], answer: "يُعطى بحذر وبجرعة مضبوطة", explanation: "لأن بعض المرضى يعتمدون على انخفاض الأكسجين كمحفز للتنفس.", difficulty: "hard" },
  { id: "resp-039", sectionId: "respiratory", type: "mcq", question: "أي دواء يُستخدم في التليف الرئوي مجهول السبب؟", options: ["Pirfenidone", "Salbutamol", "Montelukast", "Guaifenesin"], answer: "Pirfenidone", explanation: "وكذلك Nintedanib، ويُبطئان تقدم المرض.", difficulty: "hard" },
  { id: "resp-040", sectionId: "respiratory", type: "mcq", question: "ما الدواء الذي قد يسبب التليف الرئوي كأثر جانبي مزمن؟", options: ["Amiodarone", "Paracetamol", "Salbutamol", "Cetirizine"], answer: "Amiodarone", explanation: "وكذلك Methotrexate وNitrofurantoin المزمن.", difficulty: "hard" },
  { id: "resp-041", sectionId: "respiratory", type: "mcq", question: "ما علاج السل الرئوي الأساسي؟", options: ["أدوية متعددة: Isoniazid وRifampicin وPyrazinamide وEthambutol", "مضاد حيوي واحد", "كورتيكوستيرويد فقط", "فيتامينات فقط"], answer: "أدوية متعددة: Isoniazid وRifampicin وPyrazinamide وEthambutol", explanation: "العلاج المتعدد يقلل المقاومة، وتستمر المدة أشهرًا.", difficulty: "medium" },
  { id: "resp-042", sectionId: "respiratory", type: "mcq", question: "ما الأثر الجانبي العيني لـ Ethambutol؟", options: ["التهاب العصب البصري وتغير رؤية الألوان", "جفاف العين فقط", "الزرق", "إعتام العدسة"], answer: "التهاب العصب البصري وتغير رؤية الألوان", explanation: "ويحتاج فحص النظر الدوري.", difficulty: "hard" },
  { id: "resp-043", sectionId: "respiratory", type: "mcq", question: "ما الأثر الجانبي الكبدي المشترك لأدوية السل؟", options: ["التهاب الكبد الدوائي", "السعال", "تضخم اللثة", "الصلع"], answer: "التهاب الكبد الدوائي", explanation: "خاصة Isoniazid وRifampicin وPyrazinamide، فتُراقب وظائف الكبد.", difficulty: "medium" },
  { id: "resp-044", sectionId: "respiratory", type: "mcq", question: "ما علاج الالتهاب الرئوي المكتسب من المجتمع الخفيف عند البالغين غالبًا؟", options: ["Amoxicillin أو ماكروليد/دوكسيسيكلين حسب الإرشاد المحلي", "Paracetamol فقط", "Antihistamine", "Montelukast"], answer: "Amoxicillin أو ماكروليد/دوكسيسيكلين حسب الإرشاد المحلي", explanation: "ويُحدد الاختيار حسب الشدة ومقاومة المنطقة.", difficulty: "hard" },
  { id: "resp-045", sectionId: "respiratory", type: "mcq", question: "ما لقاح الوقاية من الالتهاب الرئوي المكورات الرئوية؟", options: ["لقاح المكورات الرئوية (Pneumococcal)", "لقاح الحصبة", "لقاح الكزاز", "لقاح الإنفلونزا فقط"], answer: "لقاح المكورات الرئوية (Pneumococcal)", explanation: "يُوصى به للأطفال وكبار السن وأصحاب الأمراض المزمنة.", difficulty: "medium" },
  { id: "resp-046", sectionId: "respiratory", type: "mcq", question: "ما علاج الإنفلونزا المضاد للفيروسات المبكر؟", options: ["Oseltamivir", "Amoxicillin", "Salbutamol", "Montelukast"], answer: "Oseltamivir", explanation: "يعمل بتثبيط النيورامينيداز، وتزداد فائدته إذا بدأ خلال 48 ساعة.", difficulty: "medium" },
  { id: "resp-047", sectionId: "respiratory", type: "truefalse", question: "المضادات الحيوية لا تفيد في نزلات البرد الفيروسية الشائعة.", options: ["صح", "خطأ"], answer: true, explanation: "وإساءة استخدامها تزيد المقاومة.", difficulty: "easy" },
  { id: "resp-048", sectionId: "respiratory", type: "mcq", question: "ما أهم نصيحة للمدخن الذي يريد الإقلاع؟", options: ["الجمع بين الدعم السلوكي والعلاج البديل للنيكوتين أو الأدوية الموصوفة", "التوقف دون خطة دائمًا", "تدخين أقل فقط", "الاعتماد على المكملات"], answer: "الجمع بين الدعم السلوكي والعلاج البديل للنيكوتين أو الأدوية الموصوفة", explanation: "ويزيد ذلك احتمال النجاح مقارنة بالإرادة وحدها.", difficulty: "medium" },
  { id: "resp-049", sectionId: "respiratory", type: "mcq", question: "ما دواء الإقلاع عن التدخين الذي يعمل كناهض جزئي لمستقبلات النيكوتين؟", options: ["Varenicline", "Bupropion", "Salbutamol", "Naloxone"], answer: "Varenicline", explanation: "يقلل الرغبة وأعراض الانسحاب.", difficulty: "hard" },
  { id: "resp-050", sectionId: "respiratory", type: "truefalse", question: "يجب تعليم المريض الطريقة الصحيحة لاستخدام البخاخ لأن الاستعمال الخاطئ شائع.", options: ["صح", "خطأ"], answer: true, explanation: "فسوء التقنية يقلل وصول الدواء للرئتين ويضعف السيطرة على المرض.", difficulty: "easy" },
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
  { id: "endo-002", sectionId: "endocrine", type: "mcq", question: "ما آلية عمل Metformin؟", options: ["يقلل إنتاج الغلوكوز في الكبد ويزيد حساسية الأنسجة للإنسولين", "يحفز إفراز الإنسولين من البنكرياس", "يمنع امتصاص الكربوهيدرات", "يزيد إخراج الغلوكوز في البول"], answer: "يقلل إنتاج الغلوكوز في الكبد ويزيد حساسية الأنسجة للإنسولين", explanation: "وهو الخط الأول في السكري من النوع الثاني، ولا يسبب نقص السكر عادةً عند استخدامه منفردًا.", difficulty: "easy" },
  { id: "endo-003", sectionId: "endocrine", type: "mcq", question: "ما الأثر الجانبي الأكثر شيوعًا للميتفورمين؟", options: ["اضطرابات هضمية مثل الغثيان والإسهال", "السعال", "تضخم اللثة", "ارتفاع الضغط"], answer: "اضطرابات هضمية مثل الغثيان والإسهال", explanation: "وتقل بتناوله مع الطعام والبدء بجرعة منخفضة.", difficulty: "easy" },
  { id: "endo-004", sectionId: "endocrine", type: "mcq", question: "ما الأثر الجانبي النادر الخطير للميتفورمين؟", options: ["الحماض اللبني", "نقص الصفائح", "تضخم الثدي", "الوذمة الوعائية"], answer: "الحماض اللبني", explanation: "يزداد الخطر في القصور الكلوي الشديد، لذلك تُراقب وظائف الكلى.", difficulty: "medium" },
  { id: "endo-005", sectionId: "endocrine", type: "mcq", question: "أي نقص فيتاميني قد يرتبط بالاستخدام الطويل للميتفورمين؟", options: ["فيتامين B12", "فيتامين C", "فيتامين A", "فيتامين K"], answer: "فيتامين B12", explanation: "ويُفحص مستواه دوريًا عند الاستخدام الطويل.", difficulty: "medium" },
  { id: "endo-006", sectionId: "endocrine", type: "mcq", question: "ما آلية عمل السلفونيل يوريا مثل Glibenclamide؟", options: ["تحفيز إفراز الإنسولين بإغلاق قنوات K-ATP في خلايا بيتا", "زيادة حساسية الإنسولين", "منع امتصاص الغلوكوز", "تثبيط SGLT2"], answer: "تحفيز إفراز الإنسولين بإغلاق قنوات K-ATP في خلايا بيتا", explanation: "وتحتاج وجود خلايا بيتا عاملة.", difficulty: "medium" },
  { id: "endo-007", sectionId: "endocrine", type: "mcq", question: "ما أبرز أثر جانبي للسلفونيل يوريا؟", options: ["نقص سكر الدم وزيادة الوزن", "السعال", "تضخم اللثة", "الإسهال المائي"], answer: "نقص سكر الدم وزيادة الوزن", explanation: "ويزداد خطر نقص السكر عند كبار السن وفي القصور الكلوي.", difficulty: "easy" },
  { id: "endo-008", sectionId: "endocrine", type: "mcq", question: "ما آلية عمل Pioglitazone؟", options: ["ينشط PPAR-γ فيزيد حساسية الأنسجة للإنسولين", "يحفز إفراز الإنسولين", "يثبط DPP-4", "يثبط SGLT2"], answer: "ينشط PPAR-γ فيزيد حساسية الأنسجة للإنسولين", explanation: "من مجموعة الثيازوليدينديون.", difficulty: "hard" },
  { id: "endo-009", sectionId: "endocrine", type: "mcq", question: "ما تحذيرات Pioglitazone؟", options: ["احتباس السوائل وفشل القلب وزيادة الوزن", "نقص الصفائح", "السعال", "الإمساك"], answer: "احتباس السوائل وفشل القلب وزيادة الوزن", explanation: "ويُتجنب في فشل القلب.", difficulty: "hard" },
  { id: "endo-010", sectionId: "endocrine", type: "mcq", question: "ما آلية عمل Sitagliptin؟", options: ["تثبيط إنزيم DPP-4 فيزداد GLP-1", "تنبيه PPAR-γ", "إغلاق قنوات K-ATP", "تثبيط SGLT2"], answer: "تثبيط إنزيم DPP-4 فيزداد GLP-1", explanation: "فيزيد إفراز الإنسولين المعتمد على الغلوكوز.", difficulty: "hard" },
  { id: "endo-011", sectionId: "endocrine", type: "mcq", question: "ما آلية عمل Empagliflozin؟", options: ["تثبيط SGLT2 في الكلى فيزداد إخراج الغلوكوز في البول", "تحفيز الإنسولين", "تثبيط DPP-4", "تنبيه GLP-1"], answer: "تثبيط SGLT2 في الكلى فيزداد إخراج الغلوكوز في البول", explanation: "ولها فائدة قلبية وكلوية مثبتة.", difficulty: "hard" },
  { id: "endo-012", sectionId: "endocrine", type: "mcq", question: "ما أثر جانبي شائع لمثبطات SGLT2؟", options: ["التهابات تناسلية فطرية وبولية", "السعال", "تضخم اللثة", "الإمساك"], answer: "التهابات تناسلية فطرية وبولية", explanation: "لزيادة الغلوكوز في البول، وقد تسبب أيضًا جفافًا وحماضًا كيتونيًا نادرًا.", difficulty: "medium" },
  { id: "endo-013", sectionId: "endocrine", type: "mcq", question: "ما فئة Liraglutide وSemaglutide؟", options: ["ناهضات مستقبل GLP-1", "سلفونيل يوريا", "ثيازوليدينديون", "مثبطات DPP-4"], answer: "ناهضات مستقبل GLP-1", explanation: "تعطى حقنًا (وبعضها فمويًا)، وتخفض الوزن والسكر.", difficulty: "medium" },
  { id: "endo-014", sectionId: "endocrine", type: "mcq", question: "ما الأثر الجانبي الشائع لناهضات GLP-1؟", options: ["الغثيان والقيء", "السعال", "تضخم اللثة", "ارتفاع الضغط"], answer: "الغثيان والقيء", explanation: "وتُحذَّر من التهاب البنكرياس وتاريخ سرطان الغدة الدرقية النخاعي لبعضها.", difficulty: "medium" },
  { id: "endo-015", sectionId: "endocrine", type: "mcq", question: "ما آلية عمل Acarbose؟", options: ["تثبيط ألفا-غلوكوزيداز المعوي فيبطأ امتصاص الكربوهيدرات", "تحفيز الإنسولين", "زيادة الحساسية", "تثبيط SGLT2"], answer: "تثبيط ألفا-غلوكوزيداز المعوي فيبطأ امتصاص الكربوهيدرات", explanation: "يسبب انتفاخًا وغازات، ويُؤخذ مع بداية الوجبة.", difficulty: "hard" },
  { id: "endo-016", sectionId: "endocrine", type: "mcq", question: "ما الإجراء عند نقص سكر الدم لمريض واعٍ يستطيع البلع؟", options: ["إعطاء كربوهيدرات سريعة الامتصاص كعصير أو سكر", "إعطاء الإنسولين", "الانتظار", "إعطاء ماء فقط"], answer: "إعطاء كربوهيدرات سريعة الامتصاص كعصير أو سكر", explanation: "ثم إعادة قياس السكر ووجبة تالية.", difficulty: "easy" },
  { id: "endo-017", sectionId: "endocrine", type: "mcq", question: "ما علاج نقص السكر الشديد لمريض فاقد الوعي خارج المستشفى؟", options: ["الغلوكاغون حقنًا", "الإنسولين", "عصير بالفم", "الكورتيزون فقط"], answer: "الغلوكاغون حقنًا", explanation: "ويُستعان بالإسعاف، وفي المستشفى يُعطى الدكستروز وريديًا.", difficulty: "medium" },
  { id: "endo-018", sectionId: "endocrine", type: "mcq", question: "ما أعراض نقص سكر الدم؟", options: ["رعشة وتعرق وخفقان وجوع وارتباك", "سعال جاف", "إمساك", "تضخم اللثة"], answer: "رعشة وتعرق وخفقان وجوع وارتباك", explanation: "وحاصرات بيتا قد تخفي بعض الأعراض.", difficulty: "easy" },
  { id: "endo-019", sectionId: "endocrine", type: "mcq", question: "ما الإنسولين سريع المفعول؟", options: ["Insulin lispro وaspart", "NPH", "Glargine", "Detemir"], answer: "Insulin lispro وaspart", explanation: "يبدأ تأثيره خلال 10 إلى 20 دقيقة تقريبًا ويُعطى مع الوجبات.", difficulty: "medium" },
  { id: "endo-020", sectionId: "endocrine", type: "mcq", question: "ما الإنسولين طويل المفعول الذي يعطي مستوى قاعديًا ثابتًا تقريبًا؟", options: ["Insulin glargine", "Regular", "Lispro", "Aspart"], answer: "Insulin glargine", explanation: "وكذلك Degludec وDetemir.", difficulty: "medium" },
  { id: "endo-021", sectionId: "endocrine", type: "mcq", question: "ما شكل الإنسولين العكر الذي يجب رجّه برفق قبل الاستخدام؟", options: ["NPH", "Glargine", "Lispro", "Aspart"], answer: "NPH", explanation: "لأنه معلق، بينما الأنواع الأخرى رائقة.", difficulty: "medium" },
  { id: "endo-022", sectionId: "endocrine", type: "mcq", question: "أين يُحفظ الإنسولين غير المفتوح؟", options: ["في الثلاجة (2 إلى 8 درجات مئوية)", "في المجمد", "في الشمس", "في السيارة"], answer: "في الثلاجة (2 إلى 8 درجات مئوية)", explanation: "والعبوة المستعملة تُحفظ بدرجة حرارة الغرفة لمدة محددة في النشرة.", difficulty: "easy" },
  { id: "endo-023", sectionId: "endocrine", type: "truefalse", question: "يجب تبديل مواضع حقن الإنسولين لتجنب ضمور أو تضخم النسيج الدهني.", options: ["صح", "خطأ"], answer: true, explanation: "فالحقن في الموضع نفسه يغير امتصاص الدواء.", difficulty: "easy" },
  { id: "endo-024", sectionId: "endocrine", type: "mcq", question: "ما الاختبار الذي يعكس متوسط سكر الدم خلال نحو 3 أشهر؟", options: ["HbA1c", "سكر صائم فقط", "تحليل البول", "تخطيط القلب"], answer: "HbA1c", explanation: "وهو مؤشر رئيسي لمتابعة السيطرة على السكري.", difficulty: "easy" },
  { id: "endo-025", sectionId: "endocrine", type: "mcq", question: "ما علاج قصور الغدة الدرقية؟", options: ["Levothyroxine", "Methimazole", "Propranolol", "Prednisolone"], answer: "Levothyroxine", explanation: "هرمون T4 الاصطناعي.", difficulty: "easy" },
  { id: "endo-026", sectionId: "endocrine", type: "mcq", question: "متى يُؤخذ Levothyroxine؟", options: ["صباحًا على معدة فارغة قبل الإفطار بنحو 30 إلى 60 دقيقة", "بعد العشاء مع الحليب", "مع الحديد والكالسيوم", "مع القهوة مباشرة"], answer: "صباحًا على معدة فارغة قبل الإفطار بنحو 30 إلى 60 دقيقة", explanation: "ويُفصل بينه وبين الحديد والكالسيوم بنحو 4 ساعات.", difficulty: "medium" },
  { id: "endo-027", sectionId: "endocrine", type: "mcq", question: "ما الفحص الأساسي لمتابعة جرعة Levothyroxine؟", options: ["TSH", "HbA1c", "INR", "الكرياتينين فقط"], answer: "TSH", explanation: "ويُعاد بعد 6 إلى 8 أسابيع من تغيير الجرعة.", difficulty: "medium" },
  { id: "endo-028", sectionId: "endocrine", type: "mcq", question: "ما آلية عمل Methimazole؟", options: ["تثبيط إنزيم البيروكسيديز الدرقي فيقل تخليق الهرمونات", "حجب بيتا", "تدمير الغدة بالإشعاع", "تعويض الهرمون"], answer: "تثبيط إنزيم البيروكسيديز الدرقي فيقل تخليق الهرمونات", explanation: "وكذلك Propylthiouracil الذي يثبط تحول T4 إلى T3 أيضًا.", difficulty: "hard" },
  { id: "endo-029", sectionId: "endocrine", type: "mcq", question: "ما الأثر الجانبي الخطير النادر لأدوية فرط الدرق (Thionamides)؟", options: ["نقص المحببات (Agranulocytosis)", "السعال", "تضخم اللثة", "الإمساك"], answer: "نقص المحببات (Agranulocytosis)", explanation: "فيجب مراجعة الطبيب فورًا عند الحمى أو التهاب الحلق.", difficulty: "hard" },
  { id: "endo-030", sectionId: "endocrine", type: "mcq", question: "ما فائدة Propranolol في فرط الدرق؟", options: ["تخفيف الأعراض مثل الخفقان والرعشة", "تثبيط تخليق الهرمون", "علاج دائم", "رفع TSH"], answer: "تخفيف الأعراض مثل الخفقان والرعشة", explanation: "ويحجب أيضًا تحول T4 إلى T3 جزئيًا.", difficulty: "medium" },
  { id: "endo-031", sectionId: "endocrine", type: "mcq", question: "ما الغدة التي تفرز الكورتيزول؟", options: ["قشرة الغدة الكظرية", "النخامية الخلفية", "الدرقية", "البنكرياس"], answer: "قشرة الغدة الكظرية", explanation: "ويتحكم فيه هرمون ACTH من النخامية.", difficulty: "easy" },
  { id: "endo-032", sectionId: "endocrine", type: "mcq", question: "ما آثار الاستخدام المزمن للكورتيكوستيرويدات؟", options: ["هشاشة العظام وارتفاع السكر وزيادة الوزن وضعف المناعة", "نقص الوزن الشديد", "ارتفاع المناعة", "قوة العظام"], answer: "هشاشة العظام وارتفاع السكر وزيادة الوزن وضعف المناعة", explanation: "وكذلك قرحة المعدة وتبقع الجلد والساد (Cataract).", difficulty: "medium" },
  { id: "endo-033", sectionId: "endocrine", type: "mcq", question: "لماذا لا يُوقف الكورتيكوستيرويد الفموي فجأة بعد استخدام طويل؟", options: ["لتجنب قصور الغدة الكظرية الحاد", "لأنه يتحول لسم", "لأن الجرعة تتضاعف", "لا يوجد سبب"], answer: "لتجنب قصور الغدة الكظرية الحاد", explanation: "الاستخدام الطويل يثبط المحور الكظري فيلزم خفض تدريجي.", difficulty: "medium" },
  { id: "endo-034", sectionId: "endocrine", type: "mcq", question: "ما الوقت المفضل لتناول Prednisolone اليومي؟", options: ["صباحًا مع الطعام", "قبل النوم", "على معدة فارغة ليلًا", "أي وقت دون فرق"], answer: "صباحًا مع الطعام", explanation: "ليحاكي الإيقاع الطبيعي للكورتيزول ويقلل الأرق وتهيج المعدة.", difficulty: "medium" },
  { id: "endo-035", sectionId: "endocrine", type: "mcq", question: "أي كورتيكوستيرويد ذو تأثير معدني (ملحي) أعلى؟", options: ["Fludrocortisone", "Dexamethasone", "Prednisolone", "Hydrocortisone"], answer: "Fludrocortisone", explanation: "يُستخدم في قصور الكظر مع الكورتيزول.", difficulty: "hard" },
  { id: "endo-036", sectionId: "endocrine", type: "mcq", question: "أي كورتيكوستيرويد الأقوى مضادًا للالتهاب والأطول مفعولًا تقريبًا؟", options: ["Dexamethasone", "Hydrocortisone", "Prednisolone", "Cortisone"], answer: "Dexamethasone", explanation: "وله تأثير معدني ضعيف جدًا.", difficulty: "hard" },
  { id: "endo-037", sectionId: "endocrine", type: "mcq", question: "ما هرمون النمو (GH) وما عيب نقصه عند الأطفال؟", options: ["هرمون نخامي، ونقصه يسبب قصر القامة", "هرمون كظري", "هرمون درقي", "هرمون بنكرياسي"], answer: "هرمون نخامي، ونقصه يسبب قصر القامة", explanation: "ويُعالج بهرمون النمو المؤتلف.", difficulty: "medium" },
  { id: "endo-038", sectionId: "endocrine", type: "mcq", question: "ما علاج السكري الأول للأطفال المصابين بالنوع الأول؟", options: ["الإنسولين", "Metformin وحده", "Glibenclamide", "Acarbose"], answer: "الإنسولين", explanation: "لأن البنكرياس لا ينتج إنسولين كافيًا.", difficulty: "easy" },
  { id: "endo-039", sectionId: "endocrine", type: "mcq", question: "ما الحماض الكيتوني السكري (DKA)؟", options: ["حالة طارئة بنقص الإنسولين وارتفاع الكيتونات والحموضة", "نقص سكر خفيف", "عدوى بولية", "فقر دم"], answer: "حالة طارئة بنقص الإنسولين وارتفاع الكيتونات والحموضة", explanation: "أعراضها عطش وقيء وتنفس عميق ورائحة الأسيتون، وتحتاج مستشفى.", difficulty: "medium" },
  { id: "endo-040", sectionId: "endocrine", type: "mcq", question: "ما هرمون الستيرويد الذي يعالج سن اليأس (بجرعات مدروسة)؟", options: ["الإستروجين", "الإنسولين", "TSH", "الأدرينالين"], answer: "الإستروجين", explanation: "ويُوازن الخطر والفائدة، ويلزم البروجستين مع الإستروجين عند وجود الرحم.", difficulty: "medium" },
  { id: "endo-041", sectionId: "endocrine", type: "mcq", question: "ما مخاطر العلاج بالإستروجين؟", options: ["الجلطات الوريدية وبعض أنواع السرطان", "نقص السكر", "السعال", "الإسهال المائي"], answer: "الجلطات الوريدية وبعض أنواع السرطان", explanation: "وتقل بعض المخاطر مع الجرعات الأقل والتطبيق عبر الجلد.", difficulty: "hard" },
  { id: "endo-042", sectionId: "endocrine", type: "mcq", question: "ما آلية عمل حبوب منع الحمل المركبة؟", options: ["تثبيط الإباضة وزيادة لزوجة مخاط عنق الرحم", "قتل الحيوانات المنوية مباشرة", "تدمير المبيض", "حجب المستقبلات المسكارينية"], answer: "تثبيط الإباضة وزيادة لزوجة مخاط عنق الرحم", explanation: "يحتوي على إستروجين وبروجستين.", difficulty: "medium" },
  { id: "endo-043", sectionId: "endocrine", type: "mcq", question: "أي حالة تمنع غالبًا استخدام حبوب منع الحمل المركبة؟", options: ["التدخين فوق سن 35 وتاريخ الجلطات والصداع النصفي مع هالة", "الزكام", "الحساسية الموسمية", "الصداع التوتري"], answer: "التدخين فوق سن 35 وتاريخ الجلطات والصداع النصفي مع هالة", explanation: "لأن الإستروجين يزيد خطر الجلطات.", difficulty: "hard" },
  { id: "endo-044", sectionId: "endocrine", type: "mcq", question: "أي دواء يقلل فعالية حبوب منع الحمل بتحفيز الإنزيمات الكبدية؟", options: ["Rifampicin", "Paracetamol", "Metformin", "Omeprazole"], answer: "Rifampicin", explanation: "وكذلك Carbamazepine وPhenytoin والعشبة St John's wort.", difficulty: "hard" },
  { id: "endo-045", sectionId: "endocrine", type: "mcq", question: "ما آلية عمل Alendronate؟", options: ["تثبيط امتصاص العظم بواسطة ناقضات العظم", "بناء العظم مباشرة", "زيادة الكالسيوم الغذائي", "تثبيط الغدة الدرقية"], answer: "تثبيط امتصاص العظم بواسطة ناقضات العظم", explanation: "من البيسفوسفونات لعلاج هشاشة العظام.", difficulty: "medium" },
  { id: "endo-046", sectionId: "endocrine", type: "mcq", question: "كيف يُؤخذ Alendronate؟", options: ["صباحًا بكوب ماء كامل مع البقاء منتصبًا نحو 30 دقيقة", "بعد العشاء مع الحليب", "مستلقيًا", "مع القهوة"], answer: "صباحًا بكوب ماء كامل مع البقاء منتصبًا نحو 30 دقيقة", explanation: "لتجنب تهيج أو التهاب المريء.", difficulty: "medium" },
  { id: "endo-047", sectionId: "endocrine", type: "mcq", question: "ما فيتامين D وفائدته للعظام؟", options: ["يعزز امتصاص الكالسيوم من الأمعاء", "يزيد إخراج الكالسيوم", "يثبط الباراثورمون دائمًا", "يقلل امتصاص الفوسفات"], answer: "يعزز امتصاص الكالسيوم من الأمعاء", explanation: "ونقصه يسبب الكساح عند الأطفال وتلين العظام عند البالغين.", difficulty: "easy" },
  { id: "endo-048", sectionId: "endocrine", type: "mcq", question: "ما علاج مرض إدمان البرولاكتينوما (ورم يفرز البرولاكتين) الأول؟", options: ["Cabergoline (ناهض دوبامين)", "Haloperidol", "Metoclopramide", "Prednisolone"], answer: "Cabergoline (ناهض دوبامين)", explanation: "لأن الدوبامين يثبط إفراز البرولاكتين.", difficulty: "hard" },
  { id: "endo-049", sectionId: "endocrine", type: "truefalse", question: "مرضى السكري يحتاجون إلى فحص القدمين والعينين والكلى دوريًا.", options: ["صح", "خطأ"], answer: true, explanation: "للكشف المبكر عن المضاعفات الدقيقة والوعائية.", difficulty: "easy" },
  { id: "endo-050", sectionId: "endocrine", type: "truefalse", question: "يجب ألا يُوقف مريض السكري أدويته بنفسه بسبب تحسن القراءات دون استشارة.", options: ["صح", "خطأ"], answer: true, explanation: "فالتحسن غالبًا بسبب الدواء، وإيقافه قد يرجع السكر للارتفاع.", difficulty: "easy" },
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
  { id: "derm-002", sectionId: "dermatology", type: "mcq", question: "ما ترتيب قوة الكورتيكوستيرويدات الموضعية من الأضعف إلى الأقوى؟", options: ["Hydrocortisone ثم Betamethasone valerate ثم Clobetasol", "Clobetasol ثم Hydrocortisone", "Betamethasone ثم Hydrocortisone ثم Clobetasol", "كلها بنفس القوة"], answer: "Hydrocortisone ثم Betamethasone valerate ثم Clobetasol", explanation: "الهيدروكورتيزون ضعيف، والبيتاميثازون متوسط إلى قوي، والكلوبيتازول شديد القوة.", difficulty: "medium" },
  { id: "derm-003", sectionId: "dermatology", sectionId: "dermatology", type: "mcq", question: "أي مناطق الجسم يكون فيها امتصاص الكورتيكوستيرويد الموضعي أعلى؟", options: ["الوجه والجفون والمناطق الثنيّة", "راحة اليد", "باطن القدم", "الأظافر"], answer: "الوجه والجفون والمناطق الثنيّة", explanation: "الجلد هناك أرق، لذلك تُستخدم فيها كورتيكوستيرويدات خفيفة ولمدة قصيرة.", difficulty: "medium" },
  { id: "derm-004", sectionId: "dermatology", type: "mcq", question: "ما الآثار الموضعية للاستخدام الطويل للكورتيكوستيرويدات القوية؟", options: ["ترقق الجلد وظهور علامات تمدد وتوسع الشعيرات", "زيادة سماكة الجلد", "نمو الأظافر", "زيادة الشعر فقط"], answer: "ترقق الجلد وظهور علامات تمدد وتوسع الشعيرات", explanation: "وقد يحدث أيضًا امتصاص جهازي وحب شباب وردي.", difficulty: "medium" },
  { id: "derm-005", sectionId: "dermatology", type: "truefalse", question: "لا يُنصح بوضع كورتيكوستيرويد قوي على الوجه دون إشراف طبي.", options: ["صح", "خطأ"], answer: true, explanation: "لأنه قد يسبب ترققًا وحب شباب وتوسع أوعية.", difficulty: "easy" },
  { id: "derm-006", sectionId: "dermatology", type: "mcq", question: "ما وحدة الإصبع (Fingertip unit)؟", options: ["كمية الكريم من طرف الإصبع حتى أول مفصل، وتغطي مساحة كف اليدين تقريبًا", "قطرة واحدة", "ملعقة صغيرة", "غرام واحد دائمًا"], answer: "كمية الكريم من طرف الإصبع حتى أول مفصل، وتغطي مساحة كف اليدين تقريبًا", explanation: "تساعد على تقدير الكمية الصحيحة للمستحضر الموضعي.", difficulty: "hard" },
  { id: "derm-007", sectionId: "dermatology", type: "mcq", question: "ما علاج الخط الأول للأكزيما (التهاب الجلد التأتبي) الأساسي بجانب المرطبات؟", options: ["كورتيكوستيرويد موضعي في أوقات التفاقم", "مضاد حيوي فموي دائمًا", "مضاد فطري", "مضاد فيروسي"], answer: "كورتيكوستيرويد موضعي في أوقات التفاقم", explanation: "والمرطبات (Emollients) هي الأساس اليومي.", difficulty: "easy" },
  { id: "derm-008", sectionId: "dermatology", type: "mcq", question: "ما فائدة المرطبات (Emollients) في الأكزيما؟", options: ["ترطيب الجلد وتقوية حاجزه وتقليل الجفاف", "قتل الجراثيم", "تقشير الجلد", "تفتيح اللون"], answer: "ترطيب الجلد وتقوية حاجزه وتقليل الجفاف", explanation: "وتُوضع بكثرة وبانتظام، ويُفضل الاستحمام بمياه فاترة.", difficulty: "easy" },
  { id: "derm-009", sectionId: "dermatology", type: "mcq", question: "ما آلية عمل Tacrolimus الموضعي؟", options: ["تثبيط الكالسينيورين وتقليل التهاب الجلد", "قتل الفطريات", "تقشير الجلد", "تضييق الأوعية"], answer: "تثبيط الكالسينيورين وتقليل التهاب الجلد", explanation: "بديل للكورتيكوستيرويد في الوجه والمناطق الحساسة، ويسبب حرقانًا مؤقتًا.", difficulty: "hard" },
  { id: "derm-010", sectionId: "dermatology", type: "mcq", question: "ما علاج حب الشباب الخفيف الأول المستخدم موضعيًا؟", options: ["Benzoyl peroxide أو Retinoid موضعي", "Isotretinoin فموي", "Prednisolone", "Metformin"], answer: "Benzoyl peroxide أو Retinoid موضعي", explanation: "ويمكن الجمع بينهما حسب شدة الحالة.", difficulty: "medium" },
  { id: "derm-011", sectionId: "dermatology", type: "mcq", question: "ما آلية عمل Benzoyl peroxide؟", options: ["مؤكسد يقتل بكتيريا C. acnes ويقشر الجلد", "هرمون", "كورتيكوستيرويد", "مضاد فطري"], answer: "مؤكسد يقتل بكتيريا C. acnes ويقشر الجلد", explanation: "لا تنشأ مقاومة بكتيرية له، لكنه قد يبيض الأقمشة ويجفف الجلد.", difficulty: "medium" },
  { id: "derm-012", sectionId: "dermatology", type: "mcq", question: "ما الأثر الجانبي المتوقع للرتينويدات الموضعية مثل Tretinoin؟", options: ["جفاف وتقشر وحساسية للشمس", "ترقق العظام", "السعال", "ارتفاع الضغط"], answer: "جفاف وتقشر وحساسية للشمس", explanation: "تُوضع مساءً مع واقي شمس نهارًا، وتُتجنب في الحمل.", difficulty: "medium" },
  { id: "derm-013", sectionId: "dermatology", type: "truefalse", question: "الرتينويدات الموضعية تُتجنب في الحمل.", options: ["صح", "خطأ"], answer: true, explanation: "احتياطًا من خطر التشوهات المرتبطة بمشتقات فيتامين A.", difficulty: "medium" },
  { id: "derm-014", sectionId: "dermatology", type: "mcq", question: "ما المضاد الحيوي الفموي الشائع لحب الشباب المتوسط؟", options: ["Doxycycline", "Amoxicillin", "Gentamicin", "Metronidazole"], answer: "Doxycycline", explanation: "وتُتجنب التتراسيكلينات في الحمل والأطفال دون 8 سنوات.", difficulty: "medium" },
  { id: "derm-015", sectionId: "dermatology", type: "mcq", question: "ما قاعدة استخدام المضادات الحيوية الموضعية لحب الشباب مثل Clindamycin؟", options: ["تُستخدم مع Benzoyl peroxide لتقليل المقاومة", "تُستخدم وحدها لأشهر طويلة", "تُستخدم بجرعات مضاعفة", "لا تُستخدم أبدًا"], answer: "تُستخدم مع Benzoyl peroxide لتقليل المقاومة", explanation: "التعرض المنفرد الطويل يزيد مقاومة البكتيريا.", difficulty: "hard" },
  { id: "derm-016", sectionId: "dermatology", type: "mcq", question: "ما أخطر تأثير جانبي لـ Isotretinoin على الجنين؟", options: ["تشوهات خلقية شديدة", "السعال", "نقص السكر", "الإسهال"], answer: "تشوهات خلقية شديدة", explanation: "ويتطلب برنامج منع حمل صارمًا قبل العلاج وأثناءه وبعده.", difficulty: "easy" },
  { id: "derm-017", sectionId: "dermatology", type: "mcq", question: "ما الأثر الجانبي الشائع لـ Isotretinoin؟", options: ["جفاف الجلد والشفاه والعينين", "ارتفاع الضغط", "السعال", "تضخم اللثة"], answer: "جفاف الجلد والشفاه والعينين", explanation: "ويحتاج مراقبة الدهون ووظائف الكبد، ويُراقب المزاج.", difficulty: "medium" },
  { id: "derm-018", sectionId: "dermatology", type: "mcq", question: "ما علاج الفطريات الجلدية السطحية (قوباء الجسم) الأول؟", options: ["مضاد فطري موضعي مثل Clotrimazole أو Terbinafine", "كورتيكوستيرويد قوي", "مضاد حيوي", "مضاد فيروسي"], answer: "مضاد فطري موضعي مثل Clotrimazole أو Terbinafine", explanation: "ويجب تجنب الكورتيكوستيرويد وحده لأنه قد يخفي العدوى ويزيدها.", difficulty: "medium" },
  { id: "derm-019", sectionId: "dermatology", type: "mcq", question: "ما آلية عمل مضادات الفطريات الأزولية مثل Clotrimazole؟", options: ["تثبيط تخليق الإرغوستيرول في غشاء الفطر", "تثبيط تخليق جدار الخلية", "تثبيط الحمض النووي", "إذابة الكيراتين"], answer: "تثبيط تخليق الإرغوستيرول في غشاء الفطر", explanation: "فيتأثر غشاء الخلية الفطرية.", difficulty: "hard" },
  { id: "derm-020", sectionId: "dermatology", type: "mcq", question: "ما علاج فطريات الأظافر الأكثر فعالية فمويًا؟", options: ["Terbinafine", "Nystatin", "Amoxicillin", "Hydrocortisone"], answer: "Terbinafine", explanation: "ويستغرق العلاج أسابيع إلى أشهر، ويحتاج متابعة الكبد.", difficulty: "hard" },
  { id: "derm-021", sectionId: "dermatology", type: "mcq", question: "ما دواء الخميرة (Candida) الجلدية والفموية الموضعي؟", options: ["Nystatin", "Terbinafine", "Griseofulvin", "Hydrocortisone"], answer: "Nystatin", explanation: "لا يُمتص من الأمعاء ويُستخدم موضعيًا أو كمعلق فموي.", difficulty: "medium" },
  { id: "derm-022", sectionId: "dermatology", type: "mcq", question: "ما علاج القمل الشائع؟", options: ["Permethrin موضعي", "Isotretinoin", "Terbinafine", "Hydrocortisone"], answer: "Permethrin موضعي", explanation: "ويُعاد غالبًا بعد 7 إلى 10 أيام، مع تمشيط الشعر.", difficulty: "medium" },
  { id: "derm-023", sectionId: "dermatology", type: "mcq", question: "ما علاج الجرب (Scabies) الأول موضعيًا؟", options: ["Permethrin 5%", "Hydrocortisone", "Terbinafine", "Clindamycin"], answer: "Permethrin 5%", explanation: "يُوضع على الجسم كله من الرقبة للأسفل، ويُعالج المخالطون في الوقت نفسه.", difficulty: "medium" },
  { id: "derm-024", sectionId: "dermatology", type: "mcq", question: "ما الدواء الفموي البديل للجرب الشديد؟", options: ["Ivermectin", "Terbinafine", "Doxycycline", "Metformin"], answer: "Ivermectin", explanation: "ويُستخدم بتوجيه طبي.", difficulty: "hard" },
  { id: "derm-025", sectionId: "dermatology", type: "truefalse", question: "الحكة بعد علاج الجرب قد تستمر أسابيع رغم القضاء على العث.", options: ["صح", "خطأ"], answer: true, explanation: "بسبب تفاعل تحسسي، ولا تعني دائمًا فشل العلاج.", difficulty: "medium" },
  { id: "derm-026", sectionId: "dermatology", type: "mcq", question: "ما علاج الهربس الشفوي (Herpes labialis) الموضعي أو الفموي؟", options: ["Acyclovir", "Terbinafine", "Permethrin", "Clindamycin"], answer: "Acyclovir", explanation: "يعمل ضد فيروس الهربس، وتزداد فعاليته مع البدء المبكر.", difficulty: "medium" },
  { id: "derm-027", sectionId: "dermatology", type: "mcq", question: "ما علاج التقيح السطحي (Impetigo) الموضعي؟", options: ["Mupirocin أو Fusidic acid", "Hydrocortisone", "Terbinafine", "Permethrin"], answer: "Mupirocin أو Fusidic acid", explanation: "ويُحدد الاختيار حسب المقاومة المحلية.", difficulty: "hard" },
  { id: "derm-028", sectionId: "dermatology", type: "mcq", question: "ما الصدفية (Psoriasis)؟", options: ["مرض جلدي مناعي مزمن يسبب لويحات متقشرة حمراء", "عدوى فطرية", "عدوى بكتيرية", "حساسية موسمية"], answer: "مرض جلدي مناعي مزمن يسبب لويحات متقشرة حمراء", explanation: "ليست معدية، وتتفاقم بالتوتر والعدوى وبعض الأدوية.", difficulty: "medium" },
  { id: "derm-029", sectionId: "dermatology", type: "mcq", question: "ما علاج الصدفية الموضعي المعتمد على فيتامين D؟", options: ["Calcipotriol", "Hydrocortisone", "Terbinafine", "Permethrin"], answer: "Calcipotriol", explanation: "يُبطئ تكاثر خلايا الجلد، ويُحدد الحد الأقصى الأسبوعي لتجنب ارتفاع الكالسيوم.", difficulty: "hard" },
  { id: "derm-030", sectionId: "dermatology", type: "mcq", question: "ما فائدة حمض الساليسيليك الموضعي؟", options: ["مقشّر للجلد (Keratolytic)", "مضاد حيوي", "مضاد فيروسي", "كورتيكوستيرويد"], answer: "مقشّر للجلد (Keratolytic)", explanation: "يُستخدم في الثآليل والصدفية وحب الشباب، ويُحذَّر من امتصاصه على مساحات واسعة خاصة عند الأطفال.", difficulty: "medium" },
  { id: "derm-031", sectionId: "dermatology", type: "mcq", question: "ما دواء الصدفية الفموي المثبط للمناعة المستخدم أسبوعيًا ويحتاج حمض الفوليك؟", options: ["Methotrexate", "Terbinafine", "Doxycycline", "Hydroxyzine"], answer: "Methotrexate", explanation: "وهو يُؤخذ مرة أسبوعيًا فقط، والخطأ بالأخذ اليومي قد يكون مميتًا.", difficulty: "hard" },
  { id: "derm-032", sectionId: "dermatology", type: "truefalse", question: "Methotrexate يُؤخذ مرة واحدة أسبوعيًا في الصدفية والتهاب المفاصل، وليس يوميًا.", options: ["صح", "خطأ"], answer: true, explanation: "الخلط بين الجرعة الأسبوعية واليومية من أخطر الأخطاء الدوائية.", difficulty: "medium" },
  { id: "derm-033", sectionId: "dermatology", type: "mcq", question: "ما الأثر الجانبي الشهير لمضادات التخثر الموضعية؟", options: ["لا يوجد استخدام موضعي شائع لها", "ترقق الجلد", "حب الشباب", "جفاف الجلد"], answer: "لا يوجد استخدام موضعي شائع لها", explanation: "السؤال لاختبار الانتباه: الأدوية الجلدية الشائعة تختلف عن مضادات التخثر.", difficulty: "easy" },
  { id: "derm-034", sectionId: "dermatology", type: "mcq", question: "ما الواقي الشمسي المناسب عادةً؟", options: ["واسع الطيف بعامل SPF لا يقل عن 30", "SPF أقل من 10", "بدون حماية من UVA", "زيت فقط"], answer: "واسع الطيف بعامل SPF لا يقل عن 30", explanation: "ويُعاد وضعه كل ساعتين تقريبًا أو بعد السباحة والتعرق.", difficulty: "easy" },
  { id: "derm-035", sectionId: "dermatology", type: "mcq", question: "ما الذي يقيسه عامل SPF؟", options: ["الحماية من الأشعة فوق البنفسجية UVB المسببة للحروق", "الحماية من UVA فقط", "مقاومة الماء", "مدة الصلاحية"], answer: "الحماية من الأشعة فوق البنفسجية UVB المسببة للحروق", explanation: "والحماية من UVA تُشار إليها بعبارة 'واسع الطيف' أو PA.", difficulty: "medium" },
  { id: "derm-036", sectionId: "dermatology", type: "mcq", question: "ما مكونات الواقي الشمسي المعدنية (الفيزيائية)؟", options: ["أكسيد الزنك وثاني أكسيد التيتانيوم", "Avobenzone", "Oxybenzone", "Octinoxate"], answer: "أكسيد الزنك وثاني أكسيد التيتانيوم", explanation: "تعكس الأشعة وتُفضل للجلد الحساس والأطفال.", difficulty: "medium" },
  { id: "derm-037", sectionId: "dermatology", type: "mcq", question: "ما الأدوية التي تزيد حساسية الجلد للشمس (Photosensitivity)؟", options: ["Doxycycline وAmiodarone وبعض الثيازيدات", "Paracetamol", "Omeprazole", "Metformin"], answer: "Doxycycline وAmiodarone وبعض الثيازيدات", explanation: "وكذلك الكينولونات والرتينويدات، فيُنصح باستخدام واقي شمس.", difficulty: "medium" },
  { id: "derm-038", sectionId: "dermatology", type: "mcq", question: "ما علاج الثآليل الشائعة المتاح دون وصفة؟", options: ["حمض الساليسيليك", "Isotretinoin", "Terbinafine", "Hydrocortisone"], answer: "حمض الساليسيليك", explanation: "يُستخدم يوميًا لأسابيع، ويُتجنب على الوجه والجلد المتأثر بعدوى.", difficulty: "medium" },
  { id: "derm-039", sectionId: "dermatology", type: "mcq", question: "ما فائدة Minoxidil الموضعي؟", options: ["تحفيز نمو الشعر في الصلع الوراثي", "علاج الفطريات", "علاج حب الشباب", "تفتيح الجلد"], answer: "تحفيز نمو الشعر في الصلع الوراثي", explanation: "يحتاج أشهرًا ويستمر استخدامه للحفاظ على النتيجة.", difficulty: "medium" },
  { id: "derm-040", sectionId: "dermatology", type: "mcq", question: "ما آلية عمل Finasteride في الصلع الوراثي عند الرجال؟", options: ["تثبيط إنزيم 5-ألفا ريدكتاز", "ناهض بيتا", "حجب H2", "مضاد فطري"], answer: "تثبيط إنزيم 5-ألفا ريدكتاز", explanation: "فيقل تحول التستوستيرون إلى DHT، وتُحذَّر النساء الحوامل من لمس الأقراص المسحوقة.", difficulty: "hard" },
  { id: "derm-041", sectionId: "dermatology", type: "mcq", question: "ما علاج الوردية (Rosacea) الموضعي الشائع؟", options: ["Metronidazole موضعي", "Hydrocortisone القوي", "Isotretinoin", "Terbinafine"], answer: "Metronidazole موضعي", explanation: "وتُتجنب الكورتيكوستيرويدات لأنها تفاقم الحالة.", difficulty: "hard" },
  { id: "derm-042", sectionId: "dermatology", type: "mcq", question: "ما النصيحة العامة لحماية الجلد الجاف؟", options: ["الاستحمام بماء فاتر واستخدام مرطب بعده مباشرة", "ماء ساخن جدًا", "صابون قوي متكرر", "تجنب الترطيب"], answer: "الاستحمام بماء فاتر واستخدام مرطب بعده مباشرة", explanation: "لأن الماء الساخن والصابون القوي يجففان الجلد.", difficulty: "easy" },
  { id: "derm-043", sectionId: "dermatology", type: "mcq", question: "ما علاج الحروق الشمسية الخفيفة؟", options: ["كمادات باردة ومرطب وتجنب الشمس وشرب السوائل", "تقشير الجلد", "وضع الزبدة", "التعرض لمزيد من الشمس"], answer: "كمادات باردة ومرطب وتجنب الشمس وشرب السوائل", explanation: "ويمكن استخدام مسكن مثل الباراسيتامول عند الحاجة.", difficulty: "easy" },
  { id: "derm-044", sectionId: "dermatology", type: "mcq", question: "ما علامات التهاب الجلد التماسي التحسسي؟", options: ["احمرار وحكة وفقاعات في موضع التلامس", "حمى عامة فقط", "فقدان الشعر", "تغيّر ظفر فقط"], answer: "احمرار وحكة وفقاعات في موضع التلامس", explanation: "ويكون العلاج بتجنب المادة المسببة واستخدام كورتيكوستيرويد موضعي.", difficulty: "medium" },
  { id: "derm-045", sectionId: "dermatology", type: "mcq", question: "ما مضاد الهيستامين الفموي المستخدم لتخفيف حكة الشرى؟", options: ["Cetirizine", "Hydrocortisone", "Terbinafine", "Isotretinoin"], answer: "Cetirizine", explanation: "ومضادات الجيل الثاني أقل تسببًا بالنعاس.", difficulty: "easy" },
  { id: "derm-046", sectionId: "dermatology", type: "mcq", question: "ما علامات تدل على ضرورة مراجعة الطبيب لطفح جلدي؟", options: ["حمى وانتشار سريع وتورم الوجه أو اللسان وصعوبة التنفس", "حكة خفيفة", "جفاف بسيط", "احمرار عابر"], answer: "حمى وانتشار سريع وتورم الوجه أو اللسان وصعوبة التنفس", explanation: "فقد تدل على تحسس شديد أو متلازمة ستيفنز-جونسون.", difficulty: "medium" },
  { id: "derm-047", sectionId: "dermatology", type: "mcq", question: "ما اسم المتلازمة الجلدية الدوائية الخطيرة التي تسبب تقشر الجلد والأغشية المخاطية؟", options: ["متلازمة ستيفنز-جونسون", "متلازمة كوشينغ", "متلازمة الرجل الأحمر", "متلازمة راي"], answer: "متلازمة ستيفنز-جونسون", explanation: "ترتبط بأدوية مثل Allopurinol وCarbamazepine والسلفوناميدات، وتحتاج مستشفى.", difficulty: "hard" },
  { id: "derm-048", sectionId: "dermatology", type: "truefalse", question: "تُغطى المستحضرات الموضعية بضمادة محكمة فقط بتوجيه طبي لأن ذلك يزيد الامتصاص.", options: ["صح", "خطأ"], answer: true, explanation: "الضمادات المانعة تزيد نفاذ الدواء خاصة الكورتيكوستيرويدات.", difficulty: "medium" },
  { id: "derm-049", sectionId: "dermatology", type: "truefalse", question: "يجب غسل اليدين بعد وضع الكريمات الدوائية إلا إذا كانت اليد هي المنطقة المعالجة.", options: ["صح", "خطأ"], answer: true, explanation: "لتجنب نقل الدواء إلى العينين أو الفم أو الآخرين.", difficulty: "easy" },
  { id: "derm-050", sectionId: "dermatology", type: "truefalse", question: "يُنصح بعدم استخدام بقايا كريم موصوف لحالة سابقة على طفح جديد دون استشارة.", options: ["صح", "خطأ"], answer: true, explanation: "فقد يكون التشخيص مختلفًا، وقد يزيد الكورتيكوستيرويد من الفطريات أو العدوى.", difficulty: "easy" },
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
  { id: "analgesics-003", sectionId: "analgesics", type: "mcq", question: "ما آلية عمل مضادات الالتهاب غير الستيرويدية (NSAIDs)؟", options: ["تثبيط إنزيمات COX فيقل تصنيع البروستاغلاندين", "حجب مستقبلات الأفيون", "حجب قنوات الصوديوم", "تنشيط GABA"], answer: "تثبيط إنزيمات COX فيقل تصنيع البروستاغلاندين", explanation: "فتخفض الألم والالتهاب والحرارة.", difficulty: "easy" },
  { id: "analgesics-004", sectionId: "analgesics", type: "mcq", question: "ما الفرق بين COX-1 وCOX-2؟", options: ["COX-1 وقائي للمعدة والصفائح، وCOX-2 يرتبط بالالتهاب", "COX-2 وقائي للمعدة", "لا فرق بينهما", "COX-1 موجود في البكتيريا فقط"], answer: "COX-1 وقائي للمعدة والصفائح، وCOX-2 يرتبط بالالتهاب", explanation: "لذلك تثبيط COX-1 يفسر قرحة المعدة والنزف.", difficulty: "medium" },
  { id: "analgesics-005", sectionId: "analgesics", type: "mcq", question: "ما الأثر الجانبي الأشهر لمضادات الالتهاب غير الستيرويدية؟", options: ["تهيج المعدة وقرحة ونزف هضمي", "السعال الجاف", "تضخم اللثة", "الإمساك الشديد"], answer: "تهيج المعدة وقرحة ونزف هضمي", explanation: "وتُؤخذ مع الطعام وبأقل جرعة ومدة ممكنة.", difficulty: "easy" },
  { id: "analgesics-006", sectionId: "analgesics", type: "mcq", question: "ما تأثير NSAIDs على الكلى؟", options: ["قد تقلل تدفق الدم الكلوي وتسبب أذى كلويًا", "تحمي الكلى", "لا تأثير", "تزيد الإدرار دائمًا"], answer: "قد تقلل تدفق الدم الكلوي وتسبب أذى كلويًا", explanation: "ويزداد الخطر مع الجفاف والمدرات ومثبطات ACE (ما يسمى الثلاثية الخطرة).", difficulty: "medium" },
  { id: "analgesics-007", sectionId: "analgesics", type: "truefalse", question: "قد تقلل NSAIDs من فعالية أدوية خفض الضغط.", options: ["صح", "خطأ"], answer: true, explanation: "بسبب احتباس الصوديوم والماء وتقليل البروستاغلاندين الموسع للأوعية.", difficulty: "medium" },
  { id: "analgesics-008", sectionId: "analgesics", type: "mcq", question: "أي دواء من مثبطات COX-2 الانتقائية؟", options: ["Celecoxib", "Ibuprofen", "Naproxen", "Aspirin"], answer: "Celecoxib", explanation: "أقل ضررًا على المعدة لكنه قد يزيد مخاطر القلب والأوعية.", difficulty: "medium" },
  { id: "analgesics-009", sectionId: "analgesics", type: "mcq", question: "ما الاحتياط عند المرضى المصابين بأمراض القلب مع NSAIDs؟", options: ["قد تزيد خطر النوبات والجلطات، فتُستخدم بحذر", "آمنة تمامًا", "تحمي القلب", "لا علاقة لها"], answer: "قد تزيد خطر النوبات والجلطات، فتُستخدم بحذر", explanation: "ويُراجع الطبيب قبل الاستخدام المطول.", difficulty: "medium" },
  { id: "analgesics-010", sectionId: "analgesics", type: "mcq", question: "ما آلية عمل الباراسيتامول؟", options: ["تثبيط COX مركزيًا بضعف تأثير مضاد للالتهاب", "مضاد التهاب قوي محيطي", "ناهض أفيوني", "حاجب قنوات الصوديوم"], answer: "تثبيط COX مركزيًا بضعف تأثير مضاد للالتهاب", explanation: "فهو خافض حرارة ومسكن ولا يعالج الالتهاب فعليًا.", difficulty: "medium" },
  { id: "analgesics-011", sectionId: "analgesics", type: "mcq", question: "ما العضو المتضرر في الجرعة الزائدة من الباراسيتامول؟", options: ["الكبد", "الرئة", "الجلد", "العين"], answer: "الكبد", explanation: "بسبب المستقلب السام NAPQI عند استنفاد الغلوتاثيون.", difficulty: "easy" },
  { id: "analgesics-012", sectionId: "analgesics", type: "mcq", question: "ما ترياق تسمم الباراسيتامول؟", options: ["N-acetylcysteine", "Naloxone", "Flumazenil", "Vitamin K"], answer: "N-acetylcysteine", explanation: "ويكون أفضل عند البدء مبكرًا خلال ساعات.", difficulty: "medium" },
  { id: "analgesics-013", sectionId: "analgesics", type: "mcq", question: "ما الحد الأقصى اليومي للباراسيتامول للبالغين الأصحاء في أغلب المراجع؟", options: ["4 غرامات", "10 غرامات", "1 غرام", "8 غرامات"], answer: "4 غرامات", explanation: "ويُخفض عند أمراض الكبد وسوء التغذية وشرب الكحول بكثرة، ويراجع الصيدلي حسب الحالة.", difficulty: "medium" },
  { id: "analgesics-014", sectionId: "analgesics", type: "truefalse", question: "كثير من أدوية البرد والإنفلونزا المركبة تحتوي على الباراسيتامول.", options: ["صح", "خطأ"], answer: true, explanation: "لذلك يجب قراءة المكونات لتجنب تكرار الجرعة.", difficulty: "easy" },
  { id: "analgesics-015", sectionId: "analgesics", type: "mcq", question: "ما خافض الحرارة والمسكن المفضل للحامل غالبًا؟", options: ["Paracetamol", "Ibuprofen في الثلث الثالث", "Aspirin بجرعة مسكنة", "Naproxen"], answer: "Paracetamol", explanation: "بالجرعة الموصى بها ولأقصر مدة.", difficulty: "easy" },
  { id: "analgesics-016", sectionId: "analgesics", type: "mcq", question: "ما آلية عمل الأسبرين؟", options: ["تثبيط COX لا رجعي", "تثبيط COX رجعي", "حجب الأفيون", "حجب الكالسيوم"], answer: "تثبيط COX لا رجعي", explanation: "لذلك يستمر تأثيره على الصفائح طوال عمرها (7 إلى 10 أيام).", difficulty: "medium" },
  { id: "analgesics-017", sectionId: "analgesics", type: "mcq", question: "ما الجرعة المنخفضة من الأسبرين المستخدمة للوقاية القلبية؟", options: ["نحو 75 إلى 100 mg يوميًا", "نحو 4 غرامات", "نحو 1 غرام", "نحو 10 غرامات"], answer: "نحو 75 إلى 100 mg يوميًا", explanation: "وتختلف التوصيات حسب الحالة والإرشادات المحلية.", difficulty: "medium" },
  { id: "analgesics-018", sectionId: "analgesics", type: "mcq", question: "ما علامات التسمم بالساليسيلات؟", options: ["طنين الأذن وتنفس سريع وقيء وحمى", "نعاس شديد فقط", "سعال", "إمساك"], answer: "طنين الأذن وتنفس سريع وقيء وحمى", explanation: "وتؤدي لاضطراب حمضي قاعدي مختلط، وتتطلب طوارئ.", difficulty: "hard" },
  { id: "analgesics-019", sectionId: "analgesics", type: "mcq", question: "ما فائدة قلونة البول في التسمم بالساليسيلات؟", options: ["زيادة إخراج الساليسيلات", "تقليل الإخراج", "تسريع الامتصاص", "لا فائدة"], answer: "زيادة إخراج الساليسيلات", explanation: "الساليسيلات حمض ضعيف فيتأين في البول القلوي ويقل امتصاصه الراجع.", difficulty: "hard" },
  { id: "analgesics-020", sectionId: "analgesics", type: "mcq", question: "ما الاستخدام المعتاد لـ Ibuprofen؟", options: ["تسكين الألم الخفيف إلى المتوسط وخفض الحرارة ومضاد الالتهاب", "علاج العدوى", "خفض الضغط", "خفض السكر"], answer: "تسكين الألم الخفيف إلى المتوسط وخفض الحرارة ومضاد الالتهاب", explanation: "ويُؤخذ مع الطعام.", difficulty: "easy" },
  { id: "analgesics-021", sectionId: "analgesics", type: "mcq", question: "أي دواء من NSAIDs ذو نصف عمر طويل ويؤخذ مرة أو مرتين يوميًا؟", options: ["Naproxen", "Ibuprofen", "Ketorolac", "Aspirin"], answer: "Naproxen", explanation: "بينما الإيبوبروفين نصف عمره قصير فيُكرر عدة مرات.", difficulty: "hard" },
  { id: "analgesics-022", sectionId: "analgesics", type: "mcq", question: "ما تحذير Ketorolac؟", options: ["قوي المسكن ويُستخدم لفترة قصيرة جدًا لخطر النزف والكلى", "آمن للاستخدام الطويل", "لا آثار جانبية", "مضاد حيوي"], answer: "قوي المسكن ويُستخدم لفترة قصيرة جدًا لخطر النزف والكلى", explanation: "غالبًا لا يتجاوز 5 أيام.", difficulty: "hard" },
  { id: "analgesics-023", sectionId: "analgesics", type: "mcq", question: "ما الأثر الجانبي المميز لـ Indomethacin؟", options: ["الصداع والدوخة واضطراب المعدة", "السعال", "تضخم اللثة", "الإمساك فقط"], answer: "الصداع والدوخة واضطراب المعدة", explanation: "يُستخدم في النقرس الحاد وبعض الحالات الخاصة.", difficulty: "hard" },
  { id: "analgesics-024", sectionId: "analgesics", type: "mcq", question: "ما علاج الهجمة الحادة للنقرس؟", options: ["NSAIDs أو Colchicine أو كورتيكوستيرويد", "Allopurinol فورًا", "الباراسيتامول فقط", "المضاد الحيوي"], answer: "NSAIDs أو Colchicine أو كورتيكوستيرويد", explanation: "ولا يبدأ Allopurinol أثناء الهجمة الحادة عادةً.", difficulty: "hard" },
  { id: "analgesics-025", sectionId: "analgesics", type: "mcq", question: "ما آلية عمل Allopurinol؟", options: ["تثبيط إنزيم زانثين أوكسيداز فيقل حمض اليوريك", "زيادة إخراج اليورات", "تثبيط COX", "حجب الأفيون"], answer: "تثبيط إنزيم زانثين أوكسيداز فيقل حمض اليوريك", explanation: "وقد يسبب طفحًا جلديًا خطيرًا لدى بعض الأشخاص.", difficulty: "hard" },
  { id: "analgesics-026", sectionId: "analgesics", type: "mcq", question: "ما الأثر الجانبي الأشهر لـ Colchicine؟", options: ["الإسهال والغثيان والقيء", "السعال", "تضخم اللثة", "الإمساك"], answer: "الإسهال والغثيان والقيء", explanation: "وهو ضيق الهامش، فيُتجنب تجاوز الجرعة.", difficulty: "hard" },
  { id: "analgesics-027", sectionId: "analgesics", type: "mcq", question: "ما آلية عمل المسكنات الأفيونية مثل Morphine؟", options: ["تنبيه مستقبلات ميو الأفيونية", "حجب مستقبلات ميو", "تثبيط COX", "حجب قنوات الصوديوم"], answer: "تنبيه مستقبلات ميو الأفيونية", explanation: "فتقلل نقل إشارة الألم وتغير إدراكه.", difficulty: "medium" },
  { id: "analgesics-028", sectionId: "analgesics", type: "mcq", question: "ما الآثار الجانبية الشائعة للأفيونيات؟", options: ["الإمساك والغثيان والنعاس وتضيق الحدقة", "اتساع الحدقة", "الإسهال المائي", "نشاط زائد"], answer: "الإمساك والغثيان والنعاس وتضيق الحدقة", explanation: "ولا يحدث تحمل كامل للإمساك، فتُعطى ملينات وقائية.", difficulty: "medium" },
  { id: "analgesics-029", sectionId: "analgesics", type: "mcq", question: "ما أخطر أثر جانبي للأفيونيات؟", options: ["تثبيط التنفس", "السعال", "الصداع", "الإسهال"], answer: "تثبيط التنفس", explanation: "ويُعالج بـ Naloxone مع دعم التنفس.", difficulty: "easy" },
  { id: "analgesics-030", sectionId: "analgesics", type: "mcq", question: "ما أعراض الانسحاب الأفيوني؟", options: ["قلق وآلام عضلية وإسهال ودماع وتثاؤب", "نعاس شديد", "إمساك", "تضيق الحدقة"], answer: "قلق وآلام عضلية وإسهال ودماع وتثاؤب", explanation: "مزعجة غالبًا لكنها نادرًا ما تهدد الحياة، ويُنصح بالإيقاف التدريجي.", difficulty: "hard" },
  { id: "analgesics-031", sectionId: "analgesics", type: "mcq", question: "ما فئة Codeine وكيف يعمل؟", options: ["أفيوني ضعيف يتحول جزئيًا إلى مورفين", "NSAID", "مضاد حيوي", "مضاد اكتئاب"], answer: "أفيوني ضعيف يتحول جزئيًا إلى مورفين", explanation: "ويُقيَّد عند الأطفال وبعض الأمهات المرضعات بسبب اختلافات CYP2D6.", difficulty: "hard" },
  { id: "analgesics-032", sectionId: "analgesics", type: "mcq", question: "ما تحذير Tramadol؟", options: ["قد يسبب تشنجات ومتلازمة السيروتونين خاصة مع SSRIs", "لا أثر جانبي", "يرفع المناعة", "يسبب الصلع"], answer: "قد يسبب تشنجات ومتلازمة السيروتونين خاصة مع SSRIs", explanation: "ويحتاج تعديل الجرعة في القصور الكلوي والكبدي.", difficulty: "hard" },
  { id: "analgesics-033", sectionId: "analgesics", type: "mcq", question: "ما الفنتانيل ومدى قوته؟", options: ["أفيوني قوي جدًا أقوى من المورفين بعشرات المرات", "أضعف من الكوديين", "مضاد حيوي", "NSAID"], answer: "أفيوني قوي جدًا أقوى من المورفين بعشرات المرات", explanation: "ويُستخدم للألم الشديد باللصقات والحقن تحت إشراف دقيق.", difficulty: "hard" },
  { id: "analgesics-034", sectionId: "analgesics", type: "mcq", question: "ما استخدام اللصقة الجلدية للفنتانيل؟", options: ["الألم المزمن الشديد لمن اعتادوا على الأفيونيات", "الصداع الخفيف", "الألم الحاد البسيط", "الأطفال دون إشراف"], answer: "الألم المزمن الشديد لمن اعتادوا على الأفيونيات", explanation: "ولا تُعرَّض للحرارة لأنها تزيد الامتصاص بشكل خطير.", difficulty: "hard" },
  { id: "analgesics-035", sectionId: "analgesics", type: "truefalse", question: "التعرض للحرارة (كالوسادة الكهربائية) فوق لصقة الفنتانيل قد يزيد الامتصاص بشكل خطير.", options: ["صح", "خطأ"], answer: true, explanation: "وقد يسبب جرعة زائدة.", difficulty: "hard" },
  { id: "analgesics-036", sectionId: "analgesics", type: "mcq", question: "ما سلم منظمة الصحة العالمية لألم السرطان (WHO ladder) في الدرجة الأولى؟", options: ["مسكنات غير أفيونية مثل الباراسيتامول وNSAIDs", "مورفين مباشرة", "فنتانيل", "كوديين فقط"], answer: "مسكنات غير أفيونية مثل الباراسيتامول وNSAIDs", explanation: "ثم أفيونيات ضعيفة ثم قوية مع مساعدات عند الحاجة.", difficulty: "medium" },
  { id: "analgesics-037", sectionId: "analgesics", type: "mcq", question: "ما فئة Amitriptyline وLa gabapentin في الألم العصبي؟", options: ["مسكنات مساعدة للألم العصبي", "مضادات حيوية", "NSAIDs", "مرخيات عضلية فقط"], answer: "مسكنات مساعدة للألم العصبي", explanation: "تُستخدم لأنها تعمل على مسارات عصبية، بينما المسكنات العادية أقل فائدة فيه.", difficulty: "medium" },
  { id: "analgesics-038", sectionId: "analgesics", type: "mcq", question: "ما علاج ألم العصب مثلث التوائم الأول؟", options: ["Carbamazepine", "Paracetamol", "Morphine", "Ibuprofen"], answer: "Carbamazepine", explanation: "مضاد صرع يحجب قنوات الصوديوم.", difficulty: "hard" },
  { id: "analgesics-039", sectionId: "analgesics", type: "mcq", question: "ما علاج نوبة الصداع النصفي الحادة الخفيفة إلى المتوسطة؟", options: ["NSAIDs أو الباراسيتامول", "الأفيونيات دائمًا", "المضادات الحيوية", "الكورتيزون دائمًا"], answer: "NSAIDs أو الباراسيتامول", explanation: "وتُضاف التريبتانات للنوبات المتوسطة إلى الشديدة.", difficulty: "medium" },
  { id: "analgesics-040", sectionId: "analgesics", type: "mcq", question: "ما مشكلة الإفراط في استخدام المسكنات للصداع؟", options: ["صداع الارتداد (Medication overuse headache)", "تحسن دائم", "الشفاء التام", "لا مشكلة"], answer: "صداع الارتداد (Medication overuse headache)", explanation: "يحدث عند الاستخدام المتكرر أكثر من 10 إلى 15 يومًا شهريًا تقريبًا.", difficulty: "hard" },
  { id: "analgesics-041", sectionId: "analgesics", type: "mcq", question: "ما مضاد الألم الموضعي المستخدم للألم العضلي؟", options: ["Diclofenac جل أو Methyl salicylate", "Morphine", "Codeine", "Tramadol"], answer: "Diclofenac جل أو Methyl salicylate", explanation: "امتصاصه الجهازي أقل من الأقراص ولذلك مخاطره أقل.", difficulty: "medium" },
  { id: "analgesics-042", sectionId: "analgesics", type: "mcq", question: "ما مخدر موضعي شائع الاستخدام؟", options: ["Lidocaine", "Morphine", "Ibuprofen", "Diazepam"], answer: "Lidocaine", explanation: "يحجب قنوات الصوديوم ويمنع انتقال إشارة الألم.", difficulty: "easy" },
  { id: "analgesics-043", sectionId: "analgesics", type: "mcq", question: "لماذا يُضاف الأدرينالين إلى بعض المخدرات الموضعية؟", options: ["يضيّق الأوعية فيطيل التأثير ويقلل النزف والامتصاص", "يزيد الألم", "يعالج العدوى", "يخفض الضغط"], answer: "يضيّق الأوعية فيطيل التأثير ويقلل النزف والامتصاص", explanation: "ولا يُستخدم في الأصابع والأنف والأذن لخطر نقص التروية.", difficulty: "hard" },
  { id: "analgesics-044", sectionId: "analgesics", type: "mcq", question: "ما علامات سمية المخدر الموضعي الجهازية؟", options: ["وخز حول الفم وطنين وتشنجات واضطراب نظم القلب", "ارتفاع الحرارة فقط", "السعال", "الصلع"], answer: "وخز حول الفم وطنين وتشنجات واضطراب نظم القلب", explanation: "ويُعالج بالدعم ومستحلبات الدهون في الحالات الشديدة.", difficulty: "hard" },
  { id: "analgesics-045", sectionId: "analgesics", type: "truefalse", question: "يجب عدم الجمع بين مسكنين من فئة NSAIDs معًا دون استشارة.", options: ["صح", "خطأ"], answer: true, explanation: "لأن ذلك يزيد خطر النزف والكلى دون فائدة إضافية واضحة.", difficulty: "easy" },
  { id: "analgesics-046", sectionId: "analgesics", type: "mcq", question: "ما احتياط استخدام NSAIDs مع الوارفارين؟", options: ["زيادة خطر النزف", "تقليل النزف", "لا تداخل", "تحسين الفعالية"], answer: "زيادة خطر النزف", explanation: "بتأثير على الصفائح والمعدة وربما مستوى الدواء.", difficulty: "medium" },
  { id: "analgesics-047", sectionId: "analgesics", type: "mcq", question: "ما فئة الأدوية الأكثر أمانًا للمسنين مع الألم الخفيف عمومًا؟", options: ["الباراسيتامول", "NSAIDs بجرعات عالية", "الأفيونيات القوية", "البنزوديازيبينات"], answer: "الباراسيتامول", explanation: "وتُتجنب NSAIDs إن أمكن لخطر المعدة والكلى والقلب.", difficulty: "medium" },
  { id: "analgesics-048", sectionId: "analgesics", type: "mcq", question: "ما احتياط استخدام الأسبرين في الأطفال؟", options: ["خطر متلازمة راي عند العدوى الفيروسية", "لا خطر", "آمن دائمًا", "يزيد الطول"], answer: "خطر متلازمة راي عند العدوى الفيروسية", explanation: "ويُفضَّل الباراسيتامول كمسكن وخافض حرارة.", difficulty: "easy" },
  { id: "analgesics-049", sectionId: "analgesics", type: "truefalse", question: "تُؤخذ الأقراص ممتدة المفعول من الأفيونيات بدون سحق أو مضغ.", options: ["صح", "خطأ"], answer: true, explanation: "فالسحق يطلق الجرعة كلها دفعة واحدة وقد يسبب جرعة زائدة قاتلة.", difficulty: "medium" },
  { id: "analgesics-050", sectionId: "analgesics", type: "truefalse", question: "يجب مراجعة الطبيب عند استمرار الألم لأكثر من أيام قليلة رغم المسكنات.", options: ["صح", "خطأ"], answer: true, explanation: "فقد يدل على سبب يحتاج تشخيصًا وعلاجًا.", difficulty: "easy" },
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
    difficulty: "easy",
  },
  { id: "basics-002", sectionId: "pharmacy-basics", type: "mcq", question: "ما الفرق بين الدواء الأصلي (Brand) والجنيس (Generic)؟", options: ["الجنيس يحتوي المادة الفعالة نفسها بعد إثبات التكافؤ الحيوي، وغالبًا أرخص", "الجنيس لا يحتوي مادة فعالة", "الأصلي دائمًا أضعف", "لا يمكن استبدال أحدهما بالآخر نهائيًا"], answer: "الجنيس يحتوي المادة الفعالة نفسها بعد إثبات التكافؤ الحيوي، وغالبًا أرخص", explanation: "قد تختلف السواغات والشكل والسعر.", difficulty: "easy" },
  { id: "basics-003", sectionId: "pharmacy-basics", type: "mcq", question: "ماذا يعني الاختصار OTC؟", options: ["أدوية تُصرف دون وصفة طبية", "أدوية بوصفة فقط", "أدوية حقنية", "أدوية للأطفال فقط"], answer: "أدوية تُصرف دون وصفة طبية", explanation: "Over The Counter، ويظل لها احتياطات واستطبابات.", difficulty: "easy" },
  { id: "basics-004", sectionId: "pharmacy-basics", type: "mcq", question: "ماذا يعني الاختصار Rx؟", options: ["وصفة طبية (من الكلمة اللاتينية Recipe)", "دواء مجاني", "دواء للأطفال", "رمز التخزين البارد"], answer: "وصفة طبية (من الكلمة اللاتينية Recipe)", explanation: "يُكتب في رأس الوصفة.", difficulty: "easy" },
  { id: "basics-005", sectionId: "pharmacy-basics", type: "mcq", question: "ماذا يعني الاختصار bid في الوصفة؟", options: ["مرتين يوميًا", "ثلاث مرات يوميًا", "مرة واحدة يوميًا", "كل ساعة"], answer: "مرتين يوميًا", explanation: "bis in die.", difficulty: "easy" },
  { id: "basics-006", sectionId: "pharmacy-basics", type: "mcq", question: "ماذا يعني الاختصار tid؟", options: ["ثلاث مرات يوميًا", "مرتين يوميًا", "أربع مرات يوميًا", "عند اللزوم"], answer: "ثلاث مرات يوميًا", explanation: "ter in die.", difficulty: "easy" },
  { id: "basics-007", sectionId: "pharmacy-basics", type: "mcq", question: "ماذا يعني الاختصار qid؟", options: ["أربع مرات يوميًا", "كل 4 ساعات", "ثلاث مرات يوميًا", "مرة يوميًا"], answer: "أربع مرات يوميًا", explanation: "quater in die.", difficulty: "easy" },
  { id: "basics-008", sectionId: "pharmacy-basics", type: "mcq", question: "ماذا يعني الاختصار prn؟", options: ["عند الحاجة", "قبل الأكل", "بعد الأكل", "كل ليلة"], answer: "عند الحاجة", explanation: "pro re nata.", difficulty: "easy" },
  { id: "basics-009", sectionId: "pharmacy-basics", type: "mcq", question: "ماذا يعني الاختصار ac؟", options: ["قبل الطعام", "بعد الطعام", "مع الطعام", "عند النوم"], answer: "قبل الطعام", explanation: "ante cibum، وبعد الطعام pc.", difficulty: "medium" },
  { id: "basics-010", sectionId: "pharmacy-basics", type: "mcq", question: "ماذا يعني الاختصار po؟", options: ["عن طريق الفم", "عن طريق الوريد", "تحت الجلد", "شرجيًا"], answer: "عن طريق الفم", explanation: "per os.", difficulty: "easy" },
  { id: "basics-011", sectionId: "pharmacy-basics", type: "mcq", question: "ماذا يعني الاختصار IV؟", options: ["وريديًا", "عضليًا", "تحت الجلد", "فمويًا"], answer: "وريديًا", explanation: "Intravenous، وIM عضلي وSC تحت الجلد.", difficulty: "easy" },
  { id: "basics-012", sectionId: "pharmacy-basics", type: "truefalse", question: "كتابة الوصفة بخط واضح ومعلومات كاملة تقلل الأخطاء الدوائية.", options: ["صح", "خطأ"], answer: true, explanation: "فالأخطاء الشائعة تنتج عن الغموض في الاسم أو الجرعة أو الوحدات.", difficulty: "easy" },
  { id: "basics-013", sectionId: "pharmacy-basics", type: "mcq", question: "ما عناصر الوصفة الطبية الأساسية؟", options: ["بيانات المريض والطبيب والدواء والجرعة والتعليمات والتوقيع والتاريخ", "اسم الصيدلية فقط", "السعر فقط", "اسم الشركة فقط"], answer: "بيانات المريض والطبيب والدواء والجرعة والتعليمات والتوقيع والتاريخ", explanation: "ويختلف الشكل القانوني من بلد لآخر.", difficulty: "medium" },
  { id: "basics-014", sectionId: "pharmacy-basics", type: "mcq", question: "ما واجب الصيدلي عند صرف الوصفة؟", options: ["التحقق من الدواء والجرعة والتداخلات والحساسية وإرشاد المريض", "الصرف فورًا دون مراجعة", "تغيير الدواء دون إخبار الطبيب", "إخفاء الآثار الجانبية"], answer: "التحقق من الدواء والجرعة والتداخلات والحساسية وإرشاد المريض", explanation: "وهو جزء من الرعاية الصيدلانية.", difficulty: "medium" },
  { id: "basics-015", sectionId: "pharmacy-basics", type: "mcq", question: "ما معنى التداخل الدوائي (Drug interaction)؟", options: ["تغير تأثير دواء بوجود دواء أو غذاء أو مادة أخرى", "اختلاف شكل الدواء", "نفاد الدواء", "تغير سعره"], answer: "تغير تأثير دواء بوجود دواء أو غذاء أو مادة أخرى", explanation: "قد يزيد التأثير أو يقل أو يسبب سمية.", difficulty: "easy" },
  { id: "basics-016", sectionId: "pharmacy-basics", type: "mcq", question: "ما معنى مضاد الاستطباب (Contraindication)؟", options: ["حالة يُمنع فيها استخدام الدواء", "حالة يُنصح بالدواء فيها", "دواء بديل", "جرعة قصوى"], answer: "حالة يُمنع فيها استخدام الدواء", explanation: "وقد يكون مطلقًا أو نسبيًا.", difficulty: "easy" },
  { id: "basics-017", sectionId: "pharmacy-basics", type: "mcq", question: "ما معنى الاستطباب (Indication)؟", options: ["الحالة التي يُستخدم الدواء لعلاجها", "الأثر الجانبي", "طريقة التخزين", "سعر الدواء"], answer: "الحالة التي يُستخدم الدواء لعلاجها", explanation: "مثل ارتفاع الضغط لـ Amlodipine.", difficulty: "easy" },
  { id: "basics-018", sectionId: "pharmacy-basics", type: "mcq", question: "ما الأثر الجانبي (Side effect)؟", options: ["تأثير غير مقصود للدواء بجرعاته المعتادة", "التأثير العلاجي المطلوب", "خطأ في الصرف", "تلف العبوة"], answer: "تأثير غير مقصود للدواء بجرعاته المعتادة", explanation: "قد يكون خفيفًا أو خطيرًا.", difficulty: "easy" },
  { id: "basics-019", sectionId: "pharmacy-basics", type: "mcq", question: "ما الفرق بين الأثر الجانبي والتأثير الضار الدوائي (ADR)؟", options: ["ADR تأثير ضار ومؤذٍ بالجرعات العلاجية، والجانبي قد يكون غير ضار", "لا فرق إطلاقًا", "ADR مقصود", "الجانبي دائمًا خطير"], answer: "ADR تأثير ضار ومؤذٍ بالجرعات العلاجية، والجانبي قد يكون غير ضار", explanation: "ويُبلَّغ عن ADR لنظام اليقظة الدوائية.", difficulty: "hard" },
  { id: "basics-020", sectionId: "pharmacy-basics", type: "mcq", question: "ما اليقظة الدوائية (Pharmacovigilance)؟", options: ["رصد الآثار الضارة للأدوية وتقييمها والوقاية منها", "تسعير الأدوية", "تصنيع الأدوية", "تخزين الأدوية"], answer: "رصد الآثار الضارة للأدوية وتقييمها والوقاية منها", explanation: "وللصيدلي دور في الإبلاغ عن الآثار الضارة.", difficulty: "medium" },
  { id: "basics-021", sectionId: "pharmacy-basics", type: "mcq", question: "ما الخطأ الدوائي (Medication error)؟", options: ["حدث يمكن تفاديه قد يضر بالمريض أثناء استخدام الدواء", "أثر جانبي متوقع", "تحسن المريض", "نفاد الدواء"], answer: "حدث يمكن تفاديه قد يضر بالمريض أثناء استخدام الدواء", explanation: "قد يحدث في الوصف أو الصرف أو الإعطاء.", difficulty: "medium" },
  { id: "basics-022", sectionId: "pharmacy-basics", type: "mcq", question: "ما التشابه اللفظي أو الشكلي بين أسماء الأدوية الذي يسبب الأخطاء؟", options: ["Look-alike Sound-alike (LASA)", "ADR", "OTC", "BID"], answer: "Look-alike Sound-alike (LASA)", explanation: "ويُقلل بوضع حروف كبيرة (Tall man lettering) وفصل التخزين.", difficulty: "hard" },
  { id: "basics-023", sectionId: "pharmacy-basics", type: "mcq", question: "ما قاعدة الحقوق الخمسة (5 Rights) في إعطاء الدواء؟", options: ["المريض الصحيح والدواء الصحيح والجرعة الصحيحة والطريق الصحيح والوقت الصحيح", "الاسم والسعر والشركة واللون والحجم", "الطبيب والصيدلي والمريض والممرض والإدارة", "الصباح والظهر والعصر والمساء والليل"], answer: "المريض الصحيح والدواء الصحيح والجرعة الصحيحة والطريق الصحيح والوقت الصحيح", explanation: "وأضافت بعض المراجع التوثيق الصحيح وغيره.", difficulty: "medium" },
  { id: "basics-024", sectionId: "pharmacy-basics", type: "mcq", question: "ما المقصود بالمخدرات الخاضعة للرقابة (Controlled substances)؟", options: ["أدوية لها خطر إساءة استخدام تُنظَّم قانونيًا بإجراءات صرف وتخزين خاصة", "أدوية للأطفال", "فيتامينات", "أدوية موضعية فقط"], answer: "أدوية لها خطر إساءة استخدام تُنظَّم قانونيًا بإجراءات صرف وتخزين خاصة", explanation: "مثل الأفيونيات وبعض البنزوديازيبينات.", difficulty: "medium" },
  { id: "basics-025", sectionId: "pharmacy-basics", type: "mcq", question: "ما درجة حرارة الغرفة للتخزين في أغلب النشرات؟", options: ["نحو 15 إلى 25 درجة مئوية (أو حتى 30 حسب المنطقة)", "نحو 40 درجة", "تحت الصفر", "نحو 50 درجة"], answer: "نحو 15 إلى 25 درجة مئوية (أو حتى 30 حسب المنطقة)", explanation: "والتفاصيل تُقرأ من نشرة كل منتج.", difficulty: "medium" },
  { id: "basics-026", sectionId: "pharmacy-basics", type: "mcq", question: "ما درجة حرارة الثلاجة لتخزين الأدوية؟", options: ["2 إلى 8 درجات مئوية", "-20 درجة", "15 إلى 25 درجة", "30 إلى 40 درجة"], answer: "2 إلى 8 درجات مئوية", explanation: "مثل الإنسولين واللقاحات، ولا تُحفظ في المجمد ما لم يُنص على ذلك.", difficulty: "easy" },
  { id: "basics-027", sectionId: "pharmacy-basics", type: "mcq", question: "ما سلسلة التبريد (Cold chain)؟", options: ["الحفاظ على حرارة المنتج ضمن النطاق المطلوب من التصنيع حتى الاستعمال", "تجميد جميع الأدوية", "نقل الأدوية بالسيارات", "حفظ الأدوية في الشمس"], answer: "الحفاظ على حرارة المنتج ضمن النطاق المطلوب من التصنيع حتى الاستعمال", explanation: "ضرورية للقاحات والإنسولين.", difficulty: "medium" },
  { id: "basics-028", sectionId: "pharmacy-basics", type: "mcq", question: "ما قاعدة FIFO في مخزن الصيدلية؟", options: ["الداخل أولًا يخرج أولًا", "الأغلى أولًا", "الأحدث أولًا", "الأكبر حجمًا أولًا"], answer: "الداخل أولًا يخرج أولًا", explanation: "وقاعدة FEFO أدق: الأقرب انتهاءً يخرج أولًا.", difficulty: "medium" },
  { id: "basics-029", sectionId: "pharmacy-basics", type: "mcq", question: "ما قاعدة FEFO؟", options: ["الأقرب انتهاءً يُصرف أولًا", "الأحدث إنتاجًا أولًا", "الأرخص أولًا", "الأغلى أولًا"], answer: "الأقرب انتهاءً يُصرف أولًا", explanation: "لتقليل الهدر من انتهاء الصلاحية.", difficulty: "medium" },
  { id: "basics-030", sectionId: "pharmacy-basics", type: "truefalse", question: "لا يُصرف دواء منتهي الصلاحية للمريض.", options: ["صح", "خطأ"], answer: true, explanation: "وتُتخلص منه الصيدلية وفق الإجراءات المعتمدة.", difficulty: "easy" },
  { id: "basics-031", sectionId: "pharmacy-basics", type: "mcq", question: "ما معنى تاريخ الانتهاء (Expiry date) المكتوب مثل 06/2027؟", options: ["الدواء صالح حتى نهاية ذلك الشهر عادة", "الدواء صالح حتى أول الشهر", "الدواء يبدأ مفعوله حينها", "تاريخ التصنيع"], answer: "الدواء صالح حتى نهاية ذلك الشهر عادة", explanation: "ويُراجع الملصق لأن بعض الشركات تذكر اليوم أيضًا.", difficulty: "medium" },
  { id: "basics-032", sectionId: "pharmacy-basics", type: "mcq", question: "ما معنى الدفعة (Batch/Lot number)؟", options: ["رقم تتبع مجموعة منتجة معًا يُستخدم عند سحب المنتج", "سعر الدواء", "رقم الوصفة", "رقم الصيدلية"], answer: "رقم تتبع مجموعة منتجة معًا يُستخدم عند سحب المنتج", explanation: "ضروري لتتبع الجودة والاستدعاء.", difficulty: "medium" },
  { id: "basics-033", sectionId: "pharmacy-basics", type: "mcq", question: "ما الصيدلة السريرية (Clinical pharmacy)؟", options: ["تخصص يركز على الاستخدام الأمثل للدواء ورعاية المريض", "تصنيع الأقراص", "بيع الأدوية فقط", "تسعير الأدوية"], answer: "تخصص يركز على الاستخدام الأمثل للدواء ورعاية المريض", explanation: "ويشمل مراجعة العلاج والمراقبة والتثقيف.", difficulty: "medium" },
  { id: "basics-034", sectionId: "pharmacy-basics", type: "mcq", question: "ما مراجعة الأدوية (Medication reconciliation)؟", options: ["مطابقة قائمة أدوية المريض عند الانتقال بين الرعاية لتجنب الأخطاء", "تسعير الأدوية", "حساب الضرائب", "تخزين الأدوية"], answer: "مطابقة قائمة أدوية المريض عند الانتقال بين الرعاية لتجنب الأخطاء", explanation: "كالدخول والخروج من المستشفى.", difficulty: "hard" },
  { id: "basics-035", sectionId: "pharmacy-basics", type: "mcq", question: "ما تعدد الأدوية (Polypharmacy)؟", options: ["استخدام عدة أدوية معًا، وخاصة عند كبار السن، وقد يزيد المخاطر", "دواء واحد فقط", "دواء جديد", "دواء قديم"], answer: "استخدام عدة أدوية معًا، وخاصة عند كبار السن، وقد يزيد المخاطر", explanation: "تُراجع الأدوية دوريًا لإيقاف غير الضروري.", difficulty: "medium" },
  { id: "basics-036", sectionId: "pharmacy-basics", type: "mcq", question: "ما الالتزام الدوائي (Adherence)؟", options: ["مدى اتباع المريض للعلاج كما وُصف", "سعر الدواء", "مدة الصلاحية", "اسم الدواء"], answer: "مدى اتباع المريض للعلاج كما وُصف", explanation: "وضعفه سبب شائع لفشل العلاج.", difficulty: "easy" },
  { id: "basics-037", sectionId: "pharmacy-basics", type: "mcq", question: "ما أساليب تحسين الالتزام الدوائي؟", options: ["التبسيط والتذكيرات والتثقيف والمتابعة", "تعقيد الجدول", "إخفاء المعلومات", "زيادة الجرعات"], answer: "التبسيط والتذكيرات والتثقيف والمتابعة", explanation: "مثل علب الأدوية الأسبوعية وتطبيقات التذكير.", difficulty: "easy" },
  { id: "basics-038", sectionId: "pharmacy-basics", type: "mcq", question: "ما أول خطوة عند اشتباه حساسية دوائية؟", options: ["إيقاف الدواء المشتبه به وطلب التقييم الطبي", "زيادة الجرعة", "الاستمرار دون تغيير", "إضافة دواء جديد دون مراجعة"], answer: "إيقاف الدواء المشتبه به وطلب التقييم الطبي", explanation: "وفي الحالات الشديدة (تورم الوجه أو صعوبة التنفس) تُطلب الطوارئ فورًا.", difficulty: "medium" },
  { id: "basics-039", sectionId: "pharmacy-basics", type: "mcq", question: "ما الفرق بين الحساسية الدوائية وعدم تحمل الدواء؟", options: ["الحساسية استجابة مناعية، وعدم التحمل أثر جانبي غير مناعي", "لا فرق", "عدم التحمل مناعي", "الحساسية دائمًا خفيفة"], answer: "الحساسية استجابة مناعية، وعدم التحمل أثر جانبي غير مناعي", explanation: "مثل الغثيان من الأموكسيسيلين قد يكون عدم تحمل لا حساسية.", difficulty: "hard" },
  { id: "basics-040", sectionId: "pharmacy-basics", type: "mcq", question: "ما فائدة نشرة الدواء (Patient information leaflet)؟", options: ["توضح الاستخدام والجرعة والاحتياطات والآثار الجانبية والتخزين", "للدعاية فقط", "لا فائدة منها", "لتحديد السعر"], answer: "توضح الاستخدام والجرعة والاحتياطات والآثار الجانبية والتخزين", explanation: "ويُشجَّع المريض على قراءتها وسؤال الصيدلي.", difficulty: "easy" },
  { id: "basics-041", sectionId: "pharmacy-basics", type: "mcq", question: "ما المراجع الدوائية الموثوقة للصيدلي؟", options: ["BNF وMicromedex وLexicomp وUpToDate وMartindale", "مواقع التواصل الاجتماعي", "الإعلانات", "آراء غير موثقة"], answer: "BNF وMicromedex وLexicomp وUpToDate وMartindale", explanation: "ويفضل الاعتماد على مرجع محدث ومعتمد في بلدك.", difficulty: "medium" },
  { id: "basics-042", sectionId: "pharmacy-basics", type: "mcq", question: "ما الدستور الدوائي (Pharmacopoeia)؟", options: ["مرجع رسمي لمعايير جودة المواد الدوائية ومواصفاتها", "قائمة أسعار", "كتاب وصفات منزلية", "دليل تسويق"], answer: "مرجع رسمي لمعايير جودة المواد الدوائية ومواصفاتها", explanation: "مثل USP وBP وEP.", difficulty: "medium" },
  { id: "basics-043", sectionId: "pharmacy-basics", type: "mcq", question: "ما GMP في صناعة الدواء؟", options: ["ممارسات التصنيع الجيد التي تضمن جودة المنتجات", "نظام تسعير", "نظام وصفات", "نظام تخزين فقط"], answer: "ممارسات التصنيع الجيد التي تضمن جودة المنتجات", explanation: "Good Manufacturing Practice.", difficulty: "medium" },
  { id: "basics-044", sectionId: "pharmacy-basics", type: "mcq", question: "ما أنواع التجارب السريرية بحسب المراحل؟", options: ["المرحلة I وII وIII وIV", "A وB وC", "أولى وثانية فقط", "لا توجد مراحل"], answer: "المرحلة I وII وIII وIV", explanation: "المرحلة الأولى سلامة على عدد قليل، والرابعة مراقبة بعد التسويق.", difficulty: "medium" },
  { id: "basics-045", sectionId: "pharmacy-basics", type: "mcq", question: "ما التكافؤ الحيوي (Bioequivalence)؟", options: ["تشابه معدل ومدى امتصاص منتجين بالمادة الفعالة نفسها", "تشابه الاسم", "تشابه اللون", "تشابه السعر"], answer: "تشابه معدل ومدى امتصاص منتجين بالمادة الفعالة نفسها", explanation: "هو أساس اعتماد الأدوية الجنيسة.", difficulty: "hard" },
  { id: "basics-046", sectionId: "pharmacy-basics", type: "mcq", question: "ما الدواء اليتيم (Orphan drug)؟", options: ["دواء لعلاج أمراض نادرة", "دواء بلا اسم", "دواء للأطفال فقط", "دواء رخيص جدًا"], answer: "دواء لعلاج أمراض نادرة", explanation: "وتُشجَّع تنميته بحوافز تنظيمية.", difficulty: "hard" },
  { id: "basics-047", sectionId: "pharmacy-basics", type: "truefalse", question: "يجب أن يحافظ الصيدلي على سرية معلومات المريض الدوائية.", options: ["صح", "خطأ"], answer: true, explanation: "السرية جزء من أخلاقيات المهنة والقانون.", difficulty: "easy" },
  { id: "basics-048", sectionId: "pharmacy-basics", type: "truefalse", question: "لا يجوز للصيدلي استبدال الدواء بدواء مختلف المادة الفعالة دون الرجوع للطبيب.", options: ["صح", "خطأ"], answer: true, explanation: "الاستبدال المسموح عادة يكون بجنيس بالمادة الفعالة نفسها حسب القانون.", difficulty: "medium" },
  { id: "basics-049", sectionId: "pharmacy-basics", type: "truefalse", question: "التثقيف الدوائي للمريض (Counseling) جزء أساسي من دور الصيدلي.", options: ["صح", "خطأ"], answer: true, explanation: "يشمل طريقة الاستخدام والآثار والتخزين ومتى يراجع الطبيب.", difficulty: "easy" },
  { id: "basics-050", sectionId: "pharmacy-basics", type: "truefalse", question: "يجب التخلص من الأدوية المنتهية بطريقة آمنة، لا برميها في المرحاض إلا إذا أوصت النشرة بذلك.", options: ["صح", "خطأ"], answer: true, explanation: "حفاظًا على البيئة وأمان الأطفال، ويُسأل الصيدلي عن برنامج إعادة الأدوية.", difficulty: "easy" },
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
