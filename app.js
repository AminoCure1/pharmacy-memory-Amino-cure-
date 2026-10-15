/* ==================================================
   PHARMACY MEMORY | AMINO CURE
   Main Application Engine
   Offline-first • Arabic RTL • Mobile Friendly
================================================== */

"use strict";

/* ================================================
   1. إعدادات التطبيق
================================================ */

const APP_CONFIG = {
  name: "Pharmacy Memory",
  brand: "Amino Cure",
  storageKey: "pharmacy-memory-v2",
  version: "1.0.0"
};

const APP_ICONS = {
  home: "⌂",
  sections: "▦",
  study: "✦",
  progress: "♧",
  library: "▤",
  search: "⌕",
  settings: "⚙",
  back: "←",
  check: "✓",
  close: "×",
  trophy: "♛",
  fire: "♨",
  book: "▤",
  target: "◎",
  clock: "◷",
  brain: "◉",
  add: "+",
  download: "↓"
};

const STUDY_MODE_INFO = {
  flashcards: {
    title: "البطاقات التعليمية",
    description: "اختبر ذاكرتك واكشف الإجابة بعد المحاولة.",
    icon: "▤"
  },

  mcq: {
    title: "اختيار من متعدد",
    description: "اختر الإجابة الصحيحة من الخيارات.",
    icon: "☷"
  },

  truefalse: {
    title: "صح أم خطأ",
    description: "قيّم العبارة وحدد إن كانت صحيحة.",
    icon: "✓"
  },

  matching: {
    title: "توصيل المفاهيم",
    description: "اربط كل مفهوم بالإجابة المناسبة.",
    icon: "⟷"
  },

  fillblank: {
    title: "أكمل الفراغ",
    description: "اكتب المصطلح المناسب بنفسك.",
    icon: "＿"
  },

  speed: {
    title: "تحدي السرعة",
    description: "أجب عن الأسئلة قبل انتهاء الوقت.",
    icon: "ϟ"
  },

  whoami: {
    title: "من أنا؟",
    description: "اكتشف المصطلح من خلال التلميحات.",
    icon: "◉"
  },

  mixed: {
    title: "اختبار شامل",
    description: "مجموعة متنوعة من الأسئلة للمراجعة.",
    icon: "✦"
  },

  mistakes: {
    title: "مراجعة الأخطاء",
    description: "أعد حل الأسئلة التي أخطأت فيها سابقًا.",
    icon: "↻"
  }
};

/* ================================================
   2. الحالة والبيانات المحفوظة
================================================ */

let appState = {
  page: "home",

  study: {
    active: false,
    mode: "mixed",
    section: "all",
    difficulty: "all",
    count: 10,
    cards: [],
    index: 0,
    score: 0,
    correct: 0,
    wrong: 0,
    answers: [],
    revealed: false,
    selected: null,
    startedAt: 0,
    timeLeft: 60,
    timer: null
  },

  profile: {
    xp: 0,
    level: 1,
    streak: 0,
    bestStreak: 0,
    lastStudyDate: "",
    sessions: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    totalWrong: 0,
    achievements: [],
    mistakes: [],
    history: [],
    dailyGoal: 10,
    todayAnswered: 0
  },

  customCards: [],
  notes: [],
  settings: {
    sound: false,
    timer: true,
    animations: true
  }
};

let rootElement = null;
let toastTimeout = null;


/* ================================================
   3. أدوات عامة
================================================ */

function $(selector, parent = document) {
  return parent.querySelector(selector);
}

function $all(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[character];
  });
}

function shuffleArray(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getToday() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getDateDifference(dateA, dateB) {
  const a = new Date(`${dateA}T00:00:00`);
  const b = new Date(`${dateB}T00:00:00`);

  return Math.round((b - a) / 86400000);
}

function formatNumber(number) {
  return new Intl.NumberFormat("ar-EG").format(number || 0);
}

function showToast(message, type = "info") {
  let toast = $("#appToast");

  if (!toast) {
    toast = document.createElement("div");

    toast.id = "appToast";
    toast.className = "app-toast";

    document.body.appendChild(toast);
  }

  toast.className = `app-toast is-visible toast-${type}`;
  toast.textContent = message;

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

function getLevelInfo(xp = appState.profile.xp) {
  const level = Math.floor(Math.max(0, xp) / 100) + 1;
  const currentLevelXP = Math.max(0, xp) % 100;

  return {
    level,
    currentLevelXP,
    nextLevelXP: 100,
    percentage: currentLevelXP
  };
}

function getAllCards() {
  const original = Array.isArray(window.STUDY_CARDS)
    ? window.STUDY_CARDS
    : [];

  return [...original, ...appState.customCards];
}

function getSection(sectionId) {
  if (sectionId === "all") {
    return {
      id: "all",
      title: "كل الأقسام",
      icon: "▦",
      description: "جميع موضوعات الصيدلة"
    };
  }

  const sections = Array.isArray(window.SECTIONS)
    ? window.SECTIONS
    : [];

  return sections.find(section => section.id === sectionId) || {
    id: sectionId,
    title: sectionId,
    icon: "▤",
    description: ""
  };
}

function getSectionCardCount(sectionId) {
  return getAllCards().filter(card => {
    return sectionId === "all" || card.section === sectionId;
  }).length;
}

function getStudyModes() {
  return Object.keys(STUDY_MODE_INFO);
}

function getModeInfo(mode) {
  return STUDY_MODE_INFO[mode] || STUDY_MODE_INFO.mixed;
}


/* ================================================
   4. حفظ البيانات واستعادتها
================================================ */

function saveAppData() {
  try {
    const data = {
      version: APP_CONFIG.version,
      profile: appState.profile,
      customCards: appState.customCards,
      notes: appState.notes,
      settings: appState.settings
    };

    localStorage.setItem(
      APP_CONFIG.storageKey,
      JSON.stringify(data)
    );

    return true;

  } catch (error) {
    console.error("تعذر حفظ البيانات:", error);

    showToast(
      "تعذر حفظ البيانات. تأكد من وجود مساحة كافية.",
      "error"
    );

    return false;
  }
}

function loadAppData() {
  try {
    const saved = localStorage.getItem(APP_CONFIG.storageKey);

    if (!saved) return;

    const data = JSON.parse(saved);

    if (data.profile && typeof data.profile === "object") {
      appState.profile = {
        ...appState.profile,
        ...data.profile
      };
    }

    if (Array.isArray(data.customCards)) {
      appState.customCards = data.customCards;
    }

    if (Array.isArray(data.notes)) {
      appState.notes = data.notes;
    }

    if (data.settings && typeof data.settings === "object") {
      appState.settings = {
        ...appState.settings,
        ...data.settings
      };
    }

  } catch (error) {
    console.error("تعذر قراءة البيانات المحفوظة:", error);
  }
}


/* ================================================
   5. إنشاء هيكل التطبيق
================================================ */

function initializeRoot() {
  rootElement =
    $("#app") ||
    $("#app-root") ||
    $("#appRoot");

  if (!rootElement) {
    rootElement = document.createElement("div");

    rootElement.id = "app";

    document.body.appendChild(rootElement);
  }

  /*
   * إخفاء الواجهة القديمة إن وجدت، مع إبقاء
   * عناصر السكربت التي قد يحتاجها index.html.
   */
  [...document.body.children].forEach(element => {
    if (element === rootElement) return;

    if (
      element.tagName === "SCRIPT" ||
      element.tagName === "STYLE"
    ) {
      return;
    }

    if (element.tagName === "LINK") return;

    element.hidden = true;
    element.setAttribute("aria-hidden", "true");
  });

  renderApplicationShell();
}

function renderApplicationShell() {
  rootElement.innerHTML = `
    <div class="pm-app" dir="rtl">

      <header class="pm-topbar">
        <button
          class="pm-brand"
          type="button"
          data-action="navigate"
          data-page="home"
          aria-label="الصفحة الرئيسية"
        >
          <span class="pm-brand-mark">Rx</span>

          <span class="pm-brand-text">
            <strong>Pharmacy Memory</strong>
            <small>Amino Cure</small>
          </span>
        </button>

        <button
          class="pm-icon-button"
          type="button"
          data-action="toggle-theme"
          aria-label="تغيير المظهر"
          title="تغيير المظهر"
        >
          ◐
        </button>
      </header>

      <main id="pmPage" class="pm-page"></main>

      <nav class="pm-bottom-nav" aria-label="التنقل الرئيسي">

        <button
          type="button"
          data-action="navigate"
          data-page="home"
          class="pm-nav-item is-active"
        >
          <span>⌂</span>
          <small>الرئيسية</small>
        </button>

        <button
          type="button"
          data-action="navigate"
          data-page="sections"
          class="pm-nav-item"
        >
          <span>▦</span>
          <small>الأقسام</small>
        </button>

        <button
          type="button"
          data-action="navigate"
          data-page="study"
          class="pm-nav-item pm-nav-study"
        >
          <span>✦</span>
          <small>ذاكر</small>
        </button>

        <button
          type="button"
          data-action="navigate"
          data-page="progress"
          class="pm-nav-item"
        >
          <span>♛</span>
          <small>إنجازاتي</small>
        </button>

        <button
          type="button"
          data-action="navigate"
          data-page="library"
          class="pm-nav-item"
        >
          <span>▤</span>
          <small>المكتبة</small>
        </button>

      </nav>

      <div
        id="pmModal"
        class="pm-modal"
        hidden
        role="dialog"
        aria-modal="true"
        aria-labelledby="pmModalTitle"
      >
        <div class="pm-modal-backdrop" data-action="close-modal"></div>

        <div class="pm-modal-card">
          <button
            type="button"
            class="pm-modal-close"
            data-action="close-modal"
            aria-label="إغلاق"
          >×</button>

          <div id="pmModalContent"></div>
        </div>
      </div>

    </div>
  `;

  applySavedTheme();
  bindApplicationEvents();
}


/* ================================================
   6. نظام التنقل
================================================ */

function navigateTo(page) {
  stopStudyTimer();

  appState.page = page;

  $all(".pm-nav-item", rootElement).forEach(button => {
    button.classList.toggle(
      "is-active",
      button.dataset.page === page
    );
  });

  switch (page) {
    case "home":
      renderHome();
      break;

    case "sections":
      renderSections();
      break;

    case "study":
      renderStudySetup();
      break;

    case "progress":
      renderProgress();
      break;

    case "library":
      renderLibrary();
      break;

    default:
      renderHome();
  }

  window.scrollTo({
    top: 0,
    behavior: appState.settings.animations ? "smooth" : "auto"
  });
}


/* ================================================
   7. الواجهة الرئيسية
================================================ */

function renderHome() {
  const page = $("#pmPage");

  const profile = appState.profile;
  const level = getLevelInfo();

  const sections = Array.isArray(window.SECTIONS)
    ? window.SECTIONS
    : [];

  const featuredSections = sections.slice(0, 6);

  const accuracy = profile.totalAnswered
    ? Math.round(
        (profile.totalCorrect / profile.totalAnswered) * 100
      )
    : 0;

  const dailyProgress = clamp(
    (profile.todayAnswered / Math.max(1, profile.dailyGoal)) * 100,
    0,
    100
  );

  page.innerHTML = `

    <section class="pm-hero">

      <div class="pm-hero-glow pm-glow-one"></div>
      <div class="pm-hero-glow pm-glow-two"></div>

      <div class="pm-hero-content">

        <div class="pm-profile-orbit">

          <div class="pm-orbit-ring"></div>

          <div class="pm-profile-placeholder">
            <span>Rx</span>
          </div>

          <span class="pm-floating-label pm-float-pharmacy">
            💊 صيدلة
          </span>

          <span class="pm-floating-label pm-float-design">
            ✦ تصميم
          </span>

          <span class="pm-floating-label pm-float-content">
            ♧ محتوى صحي
          </span>

        </div>

        <p class="pm-eyebrow">مساحتك للتعلّم والتطوّر</p>

        <h1>
          أهلاً بك في
          <span>Pharmacy Memory</span>
        </h1>

        <p class="pm-hero-description">
          ذاكر بذكاء، اختبر معلوماتك، وخلّي كل يوم
          خطوة جديدة في رحلتك الصيدلانية.
        </p>

        <div class="pm-hero-actions">

          <button
            type="button"
            class="pm-button pm-button-primary"
            data-action="navigate"
            data-page="study"
          >
            <span>✦</span>
            ابدأ المذاكرة
          </button>

          <button
            type="button"
            class="pm-button pm-button-secondary"
            data-action="navigate"
            data-page="sections"
          >
            استكشف الأقسام
          </button>

        </div>

      </div>

      <div class="pm-hero-decoration" aria-hidden="true">
        <span>+</span>
        <span>✳</span>
        <span>Rx</span>
      </div>

    </section>


    <section class="pm-section">

      <div class="pm-section-heading">
        <div>
          <p class="pm-eyebrow">رحلتك التعليمية</p>
          <h2>ملخص تقدمك</h2>
        </div>

        <button
          type="button"
          class="pm-text-button"
          data-action="navigate"
          data-page="progress"
        >
          التفاصيل ←
        </button>
      </div>

      <div class="pm-stats-grid">

        <article class="pm-stat-card">
          <span class="pm-stat-icon">✦</span>
          <strong>${formatNumber(profile.xp)}</strong>
          <span>نقطة خبرة</span>
        </article>

        <article class="pm-stat-card">
          <span class="pm-stat-icon">✓</span>
          <strong>${formatNumber(accuracy)}%</strong>
          <span>دقة الإجابات</span>
        </article>

        <article class="pm-stat-card">
          <span class="pm-stat-icon">♨</span>
          <strong>${formatNumber(profile.streak)}</strong>
          <span>أيام متتالية</span>
        </article>

      </div>

    </section>


    <section class="pm-section">

      <div class="pm-section-heading">
        <div>
          <p class="pm-eyebrow">استمر في التقدّم</p>
          <h2>هدف اليوم</h2>
        </div>

        <span class="pm-pill">
          المستوى ${formatNumber(level.level)}
        </span>
      </div>

      <article class="pm-goal-card">

        <div class="pm-goal-top">
          <div>
            <strong>كل سؤال يقربك من هدفك</strong>
            <p>
              ${formatNumber(profile.todayAnswered)}
              من
              ${formatNumber(profile.dailyGoal)}
              إجابة اليوم
            </p>
          </div>

          <span class="pm-goal-number">
            ${Math.round(dailyProgress)}%
          </span>
        </div>

        <div class="pm-progress-track">
          <div
            class="pm-progress-fill"
            style="width:${dailyProgress}%"
          ></div>
        </div>

        <div class="pm-level-row">
          <span>المستوى ${formatNumber(level.level)}</span>
          <span>
            ${formatNumber(level.currentLevelXP)} / 100 XP
          </span>
        </div>

        <div class="pm-progress-track pm-level-track">
          <div
            class="pm-progress-fill"
            style="width:${level.percentage}%"
          ></div>
        </div>

      </article>

    </section>


    <section class="pm-section">

      <div class="pm-section-heading">
        <div>
          <p class="pm-eyebrow">اختَر مجالاً</p>
          <h2>أقسام الصيدلة</h2>
        </div>

        <button
          type="button"
          class="pm-text-button"
          data-action="navigate"
          data-page="sections"
        >
          عرض الكل ←
        </button>
      </div>

      <div class="pm-section-grid">
        ${featuredSections.map(section => `
          <button
            type="button"
            class="pm-category-card"
            data-action="choose-section"
            data-section="${escapeHTML(section.id)}"
          >

            <span class="pm-category-icon">
              ${escapeHTML(section.icon || "▤")}
            </span>

            <strong>${escapeHTML(section.title)}</strong>

            <small>
              ${formatNumber(getSectionCardCount(section.id))}
              بطاقة تعليمية
            </small>

            <span class="pm-category-arrow">←</span>

          </button>
        `).join("")}
      </div>

    </section>


    <section class="pm-section">

      <div class="pm-section-heading">
        <div>
          <p class="pm-eyebrow">طوّر أسلوب مذاكرتك</p>
          <h2>طرق التعلّم</h2>
        </div>
      </div>

      <div class="pm-mode-list">

        ${[
          "flashcards",
          "mcq",
          "truefalse",
          "mixed"
        ].map(mode => {
          const info = getModeInfo(mode);

          return `
            <button
              type="button"
              class="pm-mode-row"
              data-action="choose-mode"
              data-mode="${mode}"
            >

              <span class="pm-mode-icon">
                ${info.icon}
              </span>

              <span class="pm-mode-text">
                <strong>${escapeHTML(info.title)}</strong>
                <small>${escapeHTML(info.description)}</small>
              </span>

              <span class="pm-mode-arrow">←</span>

            </button>
          `;
        }).join("")}

      </div>

    </section>


    <footer class="pm-footer">
      <span class="pm-footer-mark">Rx</span>
      <strong>Amino Cure</strong>
      <p>معلومة أبسط، تعلّم أفضل.</p>
      <small>
        محتوى تعليمي للمذاكرة والمراجعة، وليس بديلاً
        عن المراجع الدوائية المعتمدة.
      </small>
    </footer>

  `;
}


/* ================================================
   8. أقسام الصيدلة
================================================ */

function renderSections() {
  const page = $("#pmPage");

  const sections = Array.isArray(window.SECTIONS)
    ? window.SECTIONS
    : [];

  page.innerHTML = `

    <section class="pm-page-heading">
      <p class="pm-eyebrow">نظّم رحلتك العلمية</p>
      <h1>أقسام الصيدلة</h1>
      <p>
        اختَر القسم الذي تريد مذاكرته، ثم حدّد
        طريقة الاختبار المناسبة لك.
      </p>
    </section>

    <div class="pm-search-box">
      <span>⌕</span>

      <input
        type="search"
        id="pmSectionSearch"
        placeholder="ابحث عن قسم..."
        aria-label="البحث عن قسم"
      >
    </div>

    <div class="pm-all-sections-grid" id="pmSectionsGrid">

      ${sections.map(section => `
        <button
          type="button"
          class="pm-category-card pm-section-detail-card"
          data-action="choose-section"
          data-section="${escapeHTML(section.id)}"
          data-search-text="${escapeHTML(
            `${section.title} ${section.titleEn || ""} ${section.description || ""}`
          )}"
        >

          <span class="pm-category-icon">
            ${escapeHTML(section.icon || "▤")}
          </span>

          <strong>${escapeHTML(section.title)}</strong>

          <small>
            ${escapeHTML(section.titleEn || "")}
          </small>

          <p>
            ${escapeHTML(section.description || "")}
          </p>

          <span class="pm-card-bottom">
            ${formatNumber(getSectionCardCount(section.id))}
            بطاقة
            <span>←</span>
          </span>

        </button>
      `).join("")}

    </div>

  `;

  const searchInput = $("#pmSectionSearch");

  searchInput?.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    $all(".pm-section-detail-card", $("#pmSectionsGrid"))
      .forEach(card => {
        const text = (
          card.dataset.searchText ||
          card.textContent
        ).toLowerCase();

        card.hidden = !text.includes(query);
      });
  });
}


/* ================================================
   9. إعداد جلسة المذاكرة
================================================ */

function renderStudySetup(options = {}) {
  const page = $("#pmPage");

  const presetMode = options.mode || "mixed";
  const presetSection = options.section || "all";

  const sections = Array.isArray(window.SECTIONS)
    ? window.SECTIONS
    : [];

  const totalCards = getAllCards().length;

  const modes = getStudyModes().filter(mode => {
    return mode !== "mistakes" ||
      appState.profile.mistakes.length > 0;
  });

  page.innerHTML = `

    <section class="pm-page-heading">
      <p class="pm-eyebrow">جهّز جلستك</p>
      <h1>ماذا تريد أن تذاكر؟</h1>
      <p>
        خصّص الجلسة بالطريقة التي تناسب وقتك
        ومستواك العلمي.
      </p>
    </section>

    <section class="pm-setup-card">

      <label class="pm-field-label" for="pmStudyMode">
        طريقة المذاكرة
      </label>

      <div class="pm-mode-choice-grid" id="pmModeChoices">

        ${modes.map(mode => {
          const info = getModeInfo(mode);

          return `
            <button
              type="button"
              class="pm-mode-choice ${
                mode === presetMode ? "is-selected" : ""
              }"
              data-action="select-setup-mode"
              data-mode="${mode}"
            >

              <span class="pm-mode-choice-icon">
                ${info.icon}
              </span>

              <strong>${escapeHTML(info.title)}</strong>

              <small>${escapeHTML(info.description)}</small>

            </button>
          `;
        }).join("")}

      </div>

      <input
        type="hidden"
        id="pmStudyMode"
        value="${escapeHTML(presetMode)}"
      >


      <label class="pm-field-label" for="pmStudySection">
        القسم
      </label>

      <select id="pmStudySection" class="pm-select">

        <option value="all">كل الأقسام</option>

        ${sections.map(section => `
          <option
            value="${escapeHTML(section.id)}"
            ${section.id === presetSection ? "selected" : ""}
          >
            ${escapeHTML(section.title)}
          </option>
        `).join("")}

      </select>


      <label class="pm-field-label" for="pmStudyDifficulty">
        مستوى الصعوبة
      </label>

      <select id="pmStudyDifficulty" class="pm-select">

        <option value="all">جميع المستويات</option>
        <option value="easy">سهل</option>
        <option value="medium">متوسط</option>
        <option value="hard">متقدم</option>

      </select>


      <label class="pm-field-label">
        عدد الأسئلة أو البطاقات
      </label>

      <div class="pm-count-options">

        <button
          type="button"
          data-action="select-count"
          data-count="5"
          class="pm-count-button"
        >5</button>

        <button
          type="button"
          data-action="select-count"
          data-count="10"
          class="pm-count-button is-selected"
        >10</button>

        <button
          type="button"
          data-action="select-count"
          data-count="20"
          class="pm-count-button"
        >20</button>

        <button
          type="button"
          data-action="select-count"
          data-count="all"
          class="pm-count-button"
        >الكل</button>

      </div>

      <p class="pm-setup-note">
        يوجد حاليًا ${formatNumber(totalCards)} بطاقة تعليمية
        في قاعدة البيانات، وقد يختلف العدد حسب القسم.
      </p>


      <button
        type="button"
        class="pm-button pm-button-primary pm-button-full"
        data-action="start-study"
      >
        ✦ ابدأ الجلسة
      </button>

    </section>

    <section class="pm-info-panel">
      <span class="pm-info-icon">ⓘ</span>

      <div>
        <strong>تذكير مهم</strong>
        <p>
          الأسئلة الدوائية هنا للمذاكرة فقط.
          عند مراجعة الجرعات أو الحمل أو طب الأطفال،
          ارجع إلى المراجع المعتمدة والمحدثة.
        </p>
      </div>
    </section>

  `;

  updateSelectedCount(10);
}

function updateSelectedCount(count) {
  $all("[data-action='select-count']", rootElement)
    .forEach(button => {
      button.classList.toggle(
        "is-selected",
        button.dataset.count === String(count)
      );
    });
}

function getSelectedStudyMode() {
  return $("#pmStudyMode")?.value || "mixed";
}

function getSelectedStudyCount() {
  return $all("[data-action='select-count']", rootElement)
    .find(button => button.classList.contains("is-selected"))
    ?.dataset.count || "10";
}

function getFilteredStudyCards() {
  const section = $("#pmStudySection")?.value || "all";
  const difficulty = $("#pmStudyDifficulty")?.value || "all";

  let cards = getAllCards().filter(card => {
    const matchesSection =
      section === "all" || card.section === section;

    const matchesDifficulty =
      difficulty === "all" ||
      card.difficulty === difficulty;

    return matchesSection && matchesDifficulty;
  });

  const mode = getSelectedStudyMode();

  if (mode === "mistakes") {
    const mistakeIds = new Set(
      appState.profile.mistakes.map(item => String(item.id))
    );

    cards = cards.filter(card => {
      return mistakeIds.has(String(card.id));
    });
  }

  return cards;
}


/* ================================================
   10. بدء جلسة المذاكرة
================================================ */

function startStudy() {
  const mode = getSelectedStudyMode();

  const requestedCount = getSelectedStudyCount();

  let cards = getFilteredStudyCards();

  if (!cards.length) {
    showToast(
      mode === "mistakes"
        ? "لا توجد أخطاء محفوظة للمراجعة حاليًا."
        : "لا توجد بطاقات في هذا الاختيار. جرّب قسمًا آخر.",
      "warning"
    );

    return;
  }

  cards = shuffleArray(cards);

  if (requestedCount !== "all") {
    cards = cards.slice(0, Number(requestedCount));
  }

  stopStudyTimer();

  appState.study = {
    active: true,
    mode,
    section: $("#pmStudySection")?.value || "all",
    difficulty: $("#pmStudyDifficulty")?.value || "all",
    count: cards.length,
    cards,
    index: 0,
    score: 0,
    correct: 0,
    wrong: 0,
    answers: [],
    revealed: false,
    selected: null,
    startedAt: Date.now(),
    timeLeft: 60,
    timer: null
  };

  if (mode === "matching") {
    appState.study.matchingPairs = shuffleArray(
      cards.map((card, index) => ({
        id: String(card.id ?? index),
        question: card.question,
        answer: card.answer,
        matched: false
      }))
    );
  }

  if (mode === "speed" && appState.settings.timer) {
    appState.study.timeLeft = Math.max(30, cards.length * 10);
  }

  renderCurrentStudyCard();

  if (mode === "speed" && appState.settings.timer) {
    startStudyTimer();
  }
}


/* ================================================
   11. عرض البطاقة الحالية
================================================ */

function renderCurrentStudyCard() {
  const study = appState.study;
  const page = $("#pmPage");

  if (!study.active || study.index >= study.cards.length) {
    finishStudy();
    return;
  }

  const card = study.cards[study.index];
  const mode = study.mode;

  study.revealed = false;
  study.selected = null;

  const progress = (
    (study.index / Math.max(1, study.cards.length)) * 100
  );

  const section = getSection(card.section);

  let content = "";

  if (mode === "flashcards") {
    content = renderFlashcard(card);
  } else if (mode === "matching") {
    content = renderMatchingCard(card);
  } else if (mode === "fillblank") {
    content = renderFillBlankCard(card);
  } else if (mode === "whoami") {
    content = renderWhoAmICard(card);
  } else {
    content = renderQuestionCard(card);
  }

  page.innerHTML = `

    <div class="pm-study-header">

      <button
        type="button"
        class="pm-back-button"
        data-action="exit-study"
      >
        ← خروج
      </button>

      <span class="pm-pill">
        ${escapeHTML(getModeInfo(mode).title)}
      </span>

      ${mode === "speed" && appState.settings.timer ? `
        <span class="pm-timer" id="pmTimer">
          ${formatNumber(study.timeLeft)} ث
        </span>
      ` : ""}

    </div>

    <div class="pm-study-progress">

      <div class="pm-study-progress-labels">
        <span>
          البطاقة ${formatNumber(study.index + 1)}
          من ${formatNumber(study.cards.length)}
        </span>

        <span>
          ${formatNumber(study.score)} نقطة
        </span>
      </div>

      <div class="pm-progress-track">
        <div
          class="pm-progress-fill"
          style="width:${progress}%"
        ></div>
      </div>

    </div>


    <section class="pm-study-card">

      <div class="pm-study-card-meta">
        <span>${escapeHTML(section.title)}</span>

        <span>
          ${escapeHTML(
            card.difficulty === "easy"
              ? "سهل"
              : card.difficulty === "hard"
                ? "متقدم"
                : "متوسط"
          )}
        </span>
      </div>

      ${content}

    </section>


    <div class="pm-study-footer">

      <button
        type="button"
        class="pm-button pm-button-secondary"
        data-action="exit-study"
      >
        إنهاء الجلسة
      </button>

      <span>
        ✓ ${formatNumber(study.correct)}
        &nbsp;
        × ${formatNumber(study.wrong)}
      </span>

    </div>

  `;

  if (mode === "flashcards") {
    bindFlashcardSwipe();
  }
}


/* ================================================
   12. أنواع البطاقات والأسئلة
================================================ */

function renderFlashcard(card) {
  return `

    <div class="pm-flashcard">

      <span class="pm-card-overline">بطاقة تعليمية</span>

      <h2>${escapeHTML(card.question)}</h2>

      <div class="pm-flashcard-answer" id="pmFlashAnswer" hidden>
        <span>الإجابة</span>
        <p>${escapeHTML(card.answer)}</p>

        ${card.explanation ? `
          <small>${escapeHTML(card.explanation)}</small>
        ` : ""}
      </div>

      <button
        type="button"
        class="pm-button pm-button-primary pm-button-full"
        data-action="reveal-flashcard"
      >
        اكشف الإجابة
      </button>

      <div class="pm-self-rating" id="pmSelfRating" hidden>

        <p>هل تذكرت الإجابة؟</p>

        <button
          type="button"
          class="pm-button pm-button-secondary"
          data-action="rate-flashcard"
          data-correct="false"
        >
          أحتاج للمراجعة
        </button>

        <button
          type="button"
          class="pm-button pm-button-primary"
          data-action="rate-flashcard"
          data-correct="true"
        >
          تذكرتها ✓
        </button>

      </div>

    </div>

  `;
}

function renderQuestionCard(card) {
  let options = Array.isArray(card.options)
    ? [...card.options]
    : [];

  if (card.type === "truefalse") {
    options = ["صح", "خطأ"];
  }

  if (!options.length) {
    options = [card.answer];
  }

  const shuffledOptions = shuffleArray(options);

  return `

    <div class="pm-question">

      <span class="pm-card-overline">السؤال</span>

      <h2>${escapeHTML(card.question)}</h2>

      <div class="pm-answer-options">

        ${shuffledOptions.map((option, index) => `
          <button
            type="button"
            class="pm-answer-option"
            data-action="answer-question"
            data-option="${escapeHTML(option)}"
          >

            <span class="pm-option-letter">
              ${String.fromCharCode(65 + index)}
            </span>

            <span>${escapeHTML(option)}</span>

          </button>
        `).join("")}

      </div>

      <div id="pmQuestionFeedback" class="pm-question-feedback" hidden></div>

      <button
        type="button"
        id="pmNextQuestion"
        class="pm-button pm-button-primary pm-button-full"
        data-action="next-question"
        hidden
      >
        السؤال التالي ←
      </button>

    </div>

  `;
}

function renderFillBlankCard(card) {
  const prompt = card.blank || card.question;

  return `

    <div class="pm-fillblank">

      <span class="pm-card-overline">أكمل الفراغ</span>

      <h2>${escapeHTML(prompt)}</h2>

      <form id="pmFillBlankForm" class="pm-fillblank-form">

        <input
          type="text"
          id="pmFillBlankInput"
          class="pm-input"
          placeholder="اكتب إجابتك هنا..."
          autocomplete="off"
          required
        >

        <button
          type="submit"
          class="pm-button pm-button-primary pm-button-full"
        >
          تحقّق من الإجابة
        </button>

      </form>

      <div
        id="pmFillBlankFeedback"
        class="pm-question-feedback"
        hidden
      ></div>

      <button
        type="button"
        id="pmNextQuestion"
        class="pm-button pm-button-primary pm-button-full"
        data-action="next-question"
        hidden
      >
        السؤال التالي ←
      </button>

    </div>

  `;
}

function renderWhoAmICard(card) {
  return `

    <div class="pm-whoami">

      <span class="pm-card-overline">من أنا؟</span>

      <h2>${escapeHTML(card.hint || card.question)}</h2>

      <div class="pm-hidden-answer" id="pmWhoAnswer" hidden>
        <span>الإجابة</span>
        <p>${escapeHTML(card.answer)}</p>

        ${card.explanation ? `
          <small>${escapeHTML(card.explanation)}</small>
        ` : ""}
      </div>

      <button
        type="button"
        class="pm-button pm-button-secondary pm-button-full"
        data-action="reveal-whoami"
      >
        إظهار الإجابة
      </button>

      <div class="pm-self-rating" id="pmWhoRating" hidden>

        <button
          type="button"
          class="pm-button pm-button-secondary"
          data-action="rate-flashcard"
          data-correct="false"
        >
          لم أعرفها
        </button>

        <button
          type="button"
          class="pm-button pm-button-primary"
          data-action="rate-flashcard"
          data-correct="true"
        >
          عرفتها ✓
        </button>

      </div>

    </div>

  `;
}

function renderMatchingCard(card) {
  const study = appState.study;

  if (!study.matchingItems) {
    study.matchingItems = shuffleArray(
      study.cards.map((item, index) => ({
        id: String(item.id ?? index),
        question: item.question,
        answer: item.answer,
        matched: false
      }))
    );
  }

  const pair = study.matchingItems.find(item => {
    return item.id === String(card.id) && !item.matched;
  });

  const currentPair = pair || {
    id: String(card.id),
    question: card.question,
    answer: card.answer,
    matched: false
  };

  return `

    <div class="pm-matching">

      <span class="pm-card-overline">توصيل المفاهيم</span>

      <h2>${escapeHTML(currentPair.question)}</h2>

      <p>
        حاول استرجاع التعريف الصحيح، ثم اكشف الإجابة.
      </p>

      <div id="pmMatchingAnswer" hidden>
        <div class="pm-match-answer">
          ${escapeHTML(currentPair.answer)}
        </div>
      </div>

      <button
        type="button"
        class="pm-button pm-button-primary pm-button-full"
        data-action="reveal-matching"
      >
        عرض الإجابة
      </button>

      <div class="pm-self-rating" id="pmMatchingRating" hidden>

        <button
          type="button"
          class="pm-button pm-button-secondary"
          data-action="rate-flashcard"
          data-correct="false"
        >
          لم أتذكر
        </button>

        <button
          type="button"
          class="pm-button pm-button-primary"
          data-action="rate-flashcard"
          data-correct="true"
        >
          تذكرت ✓
        </button>

      </div>

    </div>

  `;
}


/* ================================================
   13. التحقق من الإجابات
================================================ */

function normalizeAnswer(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/\s+/g, " ");
}

function answersMatch(userAnswer, correctAnswer) {
  const user = normalizeAnswer(userAnswer);
  const correct = normalizeAnswer(correctAnswer);

  if (!user || !correct) return false;

  if (user === correct) return true;

  /*
   * لا نقبل التشابه الجزئي العام تلقائيًا؛
   * لأن المصطلحات الدوائية قد تتشابه في الكتابة.
   */
  return false;
}

function evaluateAnswer(userAnswer, card) {
  if (card.type === "truefalse") {
    return answersMatch(userAnswer, card.answer);
  }

  return answersMatch(userAnswer, card.answer);
}

function submitAnswer(userAnswer) {
  const study = appState.study;

  if (!study.active || study.revealed) return;

  const card = study.cards[study.index];

  const isCorrect = evaluateAnswer(userAnswer, card);

  study.selected = userAnswer;
  study.revealed = true;

  recordStudyAnswer(card, isCorrect, userAnswer);

  const feedback = $("#pmQuestionFeedback");

  if (feedback) {
    feedback.hidden = false;

    feedback.className = isCorrect
      ? "pm-question-feedback is-correct"
      : "pm-question-feedback is-wrong";

    feedback.innerHTML = `

      <strong>
        ${isCorrect ? "إجابة صحيحة ✓" : "إجابة غير صحيحة"}
      </strong>

      <p>
        الإجابة الصحيحة:
        <strong>${escapeHTML(card.answer)}</strong>
      </p>

      ${card.explanation ? `
        <small>${escapeHTML(card.explanation)}</small>
      ` : ""}

    `;
  }

  $all(".pm-answer-option", rootElement).forEach(button => {
    button.disabled = true;

    const option = button.dataset.option;

    if (answersMatch(option, card.answer)) {
      button.classList.add("is-correct");
    } else if (option === userAnswer && !isCorrect) {
      button.classList.add("is-wrong");
    }
  });

  const nextButton = $("#pmNextQuestion");

  if (nextButton) {
    nextButton.hidden = false;
  }
}

function recordStudyAnswer(card, isCorrect, userAnswer) {
  const study = appState.study;
  const profile = appState.profile;

  study.answers.push({
    id: card.id,
    section: card.section,
    correct: isCorrect,
    userAnswer,
    correctAnswer: card.answer
  });

  if (isCorrect) {
    study.correct++;
    study.score += 10;

    profile.xp += 10;
    profile.totalCorrect++;

    removeMistake(card.id);

  } else {
    study.wrong++;
    profile.totalWrong++;

    saveMistake(card);
  }

  profile.totalAnswered++;
  profile.todayAnswered++;

  saveAppData();
}


/* ================================================
   14. مراجعة الأخطاء
================================================ */

function saveMistake(card) {
  const mistakes = appState.profile.mistakes;

  const existing = mistakes.find(item => {
    return String(item.id) === String(card.id);
  });

  if (existing) {
    existing.lastWrongAt = new Date().toISOString();
    existing.count = (existing.count || 1) + 1;
    return;
  }

  mistakes.push({
    id: card.id,
    section: card.section,
    question: card.question,
    answer: card.answer,
    type: card.type,
    difficulty: card.difficulty,
    options: card.options || [],
    explanation: card.explanation || "",
    hint: card.hint || "",
    blank: card.blank || "",
    lastWrongAt: new Date().toISOString(),
    count: 1
  });
}

function removeMistake(cardId) {
  appState.profile.mistakes =
    appState.profile.mistakes.filter(item => {
      return String(item.id) !== String(cardId);
    });
}


/* ================================================
   15. إظهار الإجابات
================================================ */

function revealFlashcard() {
  const answer = $("#pmFlashAnswer");
  const rating = $("#pmSelfRating");

  if (answer) answer.hidden = false;
  if (rating) rating.hidden = false;

  const button = $("[data-action='reveal-flashcard']", rootElement);

  if (button) button.hidden = true;

  appState.study.revealed = true;
}

function revealWhoAmI() {
  const answer = $("#pmWhoAnswer");
  const rating = $("#pmWhoRating");

  if (answer) answer.hidden = false;
  if (rating) rating.hidden = false;

  const button = $("[data-action='reveal-whoami']", rootElement);

  if (button) button.hidden = true;

  appState.study.revealed = true;
}

function revealMatching() {
  const answer = $("#pmMatchingAnswer");
  const rating = $("#pmMatchingRating");

  if (answer) answer.hidden = false;
  if (rating) rating.hidden = false;

  const button = $("[data-action='reveal-matching']", rootElement);

  if (button) button.hidden = true;

  appState.study.revealed = true;
}

function rateFlashcard(isCorrect) {
  const study = appState.study;

  if (!study.active || study.revealed === false) return;

  const card = study.cards[study.index];

  recordStudyAnswer(card, isCorrect, isCorrect ? card.answer : "");

  nextStudyCard();
}

function nextStudyCard() {
  const study = appState.study;

  if (!study.active) return;

  study.index++;
  study.revealed = false;
  study.selected = null;

  renderCurrentStudyCard();
}


/* ================================================
   16. نموذج أكمل الفراغ
================================================ */

function handleFillBlankSubmit(event) {
  event.preventDefault();

  const input = $("#pmFillBlankInput");

  if (!input) return;

  const answer = input.value.trim();

  if (!answer) {
    showToast("اكتب إجابتك أولًا.", "warning");
    return;
  }

  const study = appState.study;
  const card = study.cards[study.index];

  const isCorrect = evaluateAnswer(answer, card);

  study.revealed = true;

  recordStudyAnswer(card, isCorrect, answer);

  input.disabled = true;

  const feedback = $("#pmFillBlankFeedback");

  if (feedback) {
    feedback.hidden = false;

    feedback.className = isCorrect
      ? "pm-question-feedback is-correct"
      : "pm-question-feedback is-wrong";

    feedback.innerHTML = `

      <strong>
        ${isCorrect ? "إجابة صحيحة ✓" : "حاول مراجعة المصطلح"}
      </strong>

      <p>
        الإجابة الصحيحة:
        <strong>${escapeHTML(card.answer)}</strong>
      </p>

      ${card.explanation ? `
        <small>${escapeHTML(card.explanation)}</small>
      ` : ""}

    `;
  }

  const submitButton = $("#pmFillBlankForm button");

  if (submitButton) submitButton.hidden = true;

  const nextButton = $("#pmNextQuestion");

  if (nextButton) nextButton.hidden = false;
}


/* ================================================
   17. مؤقت تحدي السرعة
================================================ */

function startStudyTimer() {
  stopStudyTimer();

  appState.study.timer = setInterval(() => {
    const study = appState.study;

    if (!study.active) {
      stopStudyTimer();
      return;
    }

    study.timeLeft--;

    const timer = $("#pmTimer");

    if (timer) {
      timer.textContent = `${formatNumber(study.timeLeft)} ث`;

      if (study.timeLeft <= 10) {
        timer.classList.add("is-urgent");
      }
    }

    if (study.timeLeft <= 0) {
      stopStudyTimer();

      showToast("انتهى وقت التحدي!", "warning");

      finishStudy();
    }

  }, 1000);
}

function stopStudyTimer() {
  if (appState.study.timer) {
    clearInterval(appState.study.timer);
  }

  if (appState.study) {
    appState.study.timer = null;
  }
}


/* ================================================
   18. إنهاء الجلسة والنتيجة
================================================ */

function finishStudy() {
  stopStudyTimer();

  const study = appState.study;

  if (!study.active) return;

  study.active = false;

  const profile = appState.profile;

  profile.sessions++;

  const sessionTotal = study.correct + study.wrong;

  const accuracy = sessionTotal
    ? Math.round((study.correct / sessionTotal) * 100)
    : 0;

  updateStreak();
  checkAchievements();

  profile.history.unshift({
    date: new Date().toISOString(),
    mode: study.mode,
    section: study.section,
    total: sessionTotal,
    correct: study.correct,
    wrong: study.wrong,
    accuracy,
    xp: study.correct * 10
  });

  profile.history = profile.history.slice(0, 50);

  saveAppData();

  renderStudyResults(accuracy, sessionTotal);
}

function renderStudyResults(accuracy, total) {
  const page = $("#pmPage");
  const study = appState.study;

  page.innerHTML = `

    <section class="pm-result-screen">

      <div class="pm-result-symbol">
        ${accuracy >= 70 ? "✦" : "↻"}
      </div>

      <p class="pm-eyebrow">اكتملت الجلسة</p>

      <h1>
        ${accuracy >= 90
          ? "ممتاز! أداء رائع"
          : accuracy >= 70
            ? "أحسنت! استمر"
            : "بداية جيدة، واصل التعلّم"}
      </h1>

      <p class="pm-result-description">
        كل جلسة تساعدك على تثبيت معلوماتك
        ومعرفة النقاط التي تحتاج إلى مراجعة.
      </p>

      <div class="pm-result-score">
        <strong>${formatNumber(accuracy)}%</strong>
        <span>دقة الإجابات</span>
      </div>

      <div class="pm-result-grid">

        <article class="pm-stat-card">
          <span class="pm-stat-icon">✓</span>
          <strong>${formatNumber(study.correct)}</strong>
          <span>إجابة صحيحة</span>
        </article>

        <article class="pm-stat-card">
          <span class="pm-stat-icon">×</span>
          <strong>${formatNumber(study.wrong)}</strong>
          <span>إجابة خاطئة</span>
        </article>

        <article class="pm-stat-card">
          <span class="pm-stat-icon">✦</span>
          <strong>${formatNumber(study.correct * 10)}</strong>
          <span>نقطة مكتسبة</span>
        </article>

      </div>

      <div class="pm-result-actions">

        <button
          type="button"
          class="pm-button pm-button-primary pm-button-full"
          data-action="repeat-study"
        >
          جلسة جديدة
        </button>

        <button
          type="button"
          class="pm-button pm-button-secondary pm-button-full"
          data-action="navigate"
          data-page="progress"
        >
          عرض تقدمي
        </button>

        ${study.wrong > 0 ? `
          <button
            type="button"
            class="pm-button pm-button-secondary pm-button-full"
            data-action="study-mistakes"
          >
            مراجعة الأخطاء (${formatNumber(study.wrong)})
          </button>
        ` : ""}

      </div>

    </section>

  `;

  if (total === 0) {
    showToast("لم تُسجّل أي إجابات في هذه الجلسة.", "info");
  }
}

function updateStreak() {
  const profile = appState.profile;
  const today = getToday();

  if (profile.lastStudyDate === today) {
    return;
  }

  if (!profile.lastStudyDate) {
    profile.streak = 1;

  } else {
    const difference = getDateDifference(
      profile.lastStudyDate,
      today
    );

    if (difference === 1) {
      profile.streak++;
    } else if (difference > 1) {
      profile.streak = 1;
    }
  }

  profile.bestStreak = Math.max(
    profile.bestStreak,
    profile.streak
  );

  profile.lastStudyDate = today;
}


/* ================================================
   19. الإنجازات
================================================ */

const ACHIEVEMENTS = [
  {
    id: "first-session",
    title: "أول خطوة",
    description: "أكملت أول جلسة مذاكرة.",
    icon: "✦",
    condition: profile => profile.sessions >= 1
  },

  {
    id: "ten-answers",
    title: "بداية قوية",
    description: "أجبت عن 10 أسئلة.",
    icon: "✓",
    condition: profile => profile.totalAnswered >= 10
  },

  {
    id: "fifty-answers",
    title: "متعلّم نشيط",
    description: "أجبت عن 50 سؤالًا.",
    icon: "▤",
    condition: profile => profile.totalAnswered >= 50
  },

  {
    id: "hundred-xp",
    title: "مئة نقطة",
    description: "جمعت 100 نقطة خبرة.",
    icon: "✧",
    condition: profile => profile.xp >= 100
  },

  {
    id: "five-streak",
    title: "استمرارية",
    description: "حافظت على سلسلة من 5 أيام.",
    icon: "♨",
    condition: profile => profile.bestStreak >= 5
  },

  {
    id: "accuracy-90",
    title: "دقة عالية",
    description: "حققت دقة إجمالية 90% بعد 20 إجابة.",
    icon: "◎",
    condition: profile => {
      return profile.totalAnswered >= 20 &&
        (profile.totalCorrect / profile.totalAnswered) >= 0.9;
    }
  }
];

function checkAchievements() {
  const profile = appState.profile;
  const newlyUnlocked = [];

  ACHIEVEMENTS.forEach(achievement => {
    const alreadyUnlocked = profile.achievements.some(item => {
      return item.id === achievement.id;
    });

    if (
      !alreadyUnlocked &&
      achievement.condition(profile)
    ) {
      profile.achievements.push({
        id: achievement.id,
        unlockedAt: new Date().toISOString()
      });

      newlyUnlocked.push(achievement);
    }
  });

  if (newlyUnlocked.length) {
    setTimeout(() => {
      newlyUnlocked.forEach(achievement => {
        showToast(
          `إنجاز جديد: ${achievement.title} ${achievement.icon}`,
          "success"
        );
      });
    }, 300);
  }
}


/* ================================================
   20. صفحة التقدم
================================================ */

function renderProgress() {
  const page = $("#pmPage");
  const profile = appState.profile;

  const accuracy = profile.totalAnswered
    ? Math.round(
        (profile.totalCorrect / profile.totalAnswered) * 100
      )
    : 0;

  const level = getLevelInfo();

  const unlockedIds = new Set(
    profile.achievements.map(item => item.id)
  );

  page.innerHTML = `

    <section class="pm-page-heading">
      <p class="pm-eyebrow">إنجازاتك تستحق المتابعة</p>
      <h1>تقدّمك العلمي</h1>
      <p>
        تابع نشاطك، نقاط خبرتك، والإنجازات التي حققتها.
      </p>
    </section>


    <section class="pm-level-card">

      <div class="pm-level-badge">✦</div>

      <div class="pm-level-info">
        <span>مستواك الحالي</span>
        <h2>المستوى ${formatNumber(level.level)}</h2>

        <p>
          ${formatNumber(profile.xp)} نقطة خبرة إجمالًا
        </p>

        <div class="pm-progress-track">
          <div
            class="pm-progress-fill"
            style="width:${level.percentage}%"
          ></div>
        </div>

        <small>
          ${formatNumber(level.currentLevelXP)} من 100 نقطة للمستوى التالي
        </small>
      </div>

    </section>


    <div class="pm-stats-grid pm-progress-stats">

      <article class="pm-stat-card">
        <span class="pm-stat-icon">▤</span>
        <strong>${formatNumber(profile.sessions)}</strong>
        <span>جلسة مكتملة</span>
      </article>

      <article class="pm-stat-card">
        <span class="pm-stat-icon">✓</span>
        <strong>${formatNumber(profile.totalCorrect)}</strong>
        <span>إجابة صحيحة</span>
      </article>

      <article class="pm-stat-card">
        <span class="pm-stat-icon">◎</span>
        <strong>${formatNumber(accuracy)}%</strong>
        <span>الدقة الإجمالية</span>
      </article>

      <article class="pm-stat-card">
        <span class="pm-stat-icon">♨</span>
        <strong>${formatNumber(profile.bestStreak)}</strong>
        <span>أفضل سلسلة أيام</span>
      </article>

    </div>


    <section class="pm-section">

      <div class="pm-section-heading">
        <div>
          <p class="pm-eyebrow">كل إنجاز خطوة للأمام</p>
          <h2>الشارات والإنجازات</h2>
        </div>

        <span class="pm-pill">
          ${formatNumber(unlockedIds.size)} / ${ACHIEVEMENTS.length}
        </span>
      </div>

      <div class="pm-achievements-grid">

        ${ACHIEVEMENTS.map(achievement => {
          const unlocked = unlockedIds.has(achievement.id);

          return `
            <article class="pm-achievement-card ${
              unlocked ? "is-unlocked" : "is-locked"
            }">

              <span class="pm-achievement-icon">
                ${unlocked ? achievement.icon : "🔒"}
              </span>

              <strong>${escapeHTML(achievement.title)}</strong>

              <p>${escapeHTML(achievement.description)}</p>

              <small>
                ${unlocked ? "تم فتح الإنجاز" : "لم يُفتح بعد"}
              </small>

            </article>
          `;
        }).join("")}

      </div>

    </section>


    <section class="pm-section">

      <div class="pm-section-heading">
        <div>
          <p class="pm-eyebrow">آخر نشاط</p>
          <h2>سجل المذاكرة</h2>
        </div>
      </div>

      <div class="pm-history-list">

        ${
          profile.history.length
            ? profile.history.slice(0, 10).map(item => `
              <article class="pm-history-item">

                <span class="pm-history-icon">✦</span>

                <div class="pm-history-text">
                  <strong>
                    ${escapeHTML(getModeInfo(item.mode).title)}
                  </strong>

                  <small>
                    ${escapeHTML(getSection(item.section).title)}
                    ·
                    ${formatNumber(item.total)} إجابة
                  </small>
                </div>

                <div class="pm-history-score">
                  <strong>${formatNumber(item.accuracy)}%</strong>
                  <small>${formatNumber(item.xp)} XP</small>
                </div>

              </article>
            `).join("")
            : `
              <div class="pm-empty-state">
                <span>▤</span>
                <strong>لا يوجد سجل بعد</strong>
                <p>أكمل أول جلسة مذاكرة ليظهر تقدمك هنا.</p>
              </div>
            `
        }

      </div>

    </section>


    <section class="pm-section">

      <div class="pm-section-heading">
        <div>
          <p class="pm-eyebrow">تحكّم في بياناتك</p>
          <h2>النسخ الاحتياطي</h2>
        </div>
      </div>

      <div class="pm-settings-card">

        <p>
          يمكنك تنزيل نسخة من تقدمك وأسئلتك المخصصة
          للاحتفاظ بها أو نقلها لاحقًا.
        </p>

        <button
          type="button"
          class="pm-button pm-button-primary pm-button-full"
          data-action="export-data"
        >
          ↓ تصدير نسخة احتياطية
        </button>

        <button
          type="button"
          class="pm-button pm-button-secondary pm-button-full"
          data-action="import-data"
        >
          ↑ استيراد نسخة احتياطية
        </button>

        <input
          type="file"
          id="pmImportFile"
          accept=".json,application/json"
          hidden
        >

      </div>

    </section>

  `;
}


/* ================================================
   21. المكتبة والبحث
================================================ */

function renderLibrary() {
  const page = $("#pmPage");

  page.innerHTML = `

    <section class="pm-page-heading">
      <p class="pm-eyebrow">محتواك في مكان واحد</p>
      <h1>المكتبة العلمية</h1>
      <p>
        ابحث عن سؤال أو مصطلح، أو أضف بطاقاتك الخاصة.
      </p>
    </section>

    <div class="pm-search-box">
      <span>⌕</span>

      <input
        type="search"
        id="pmLibrarySearch"
        placeholder="ابحث في الأسئلة والبطاقات..."
        aria-label="البحث في المكتبة"
      >
    </div>

    <div class="pm-library-actions">

      <button
        type="button"
        class="pm-button pm-button-primary"
        data-action="add-card"
      >
        + إضافة بطاقة
      </button>

      <button
        type="button"
        class="pm-button pm-button-secondary"
        data-action="export-data"
      >
        ↓ نسخة احتياطية
      </button>

    </div>

    <div id="pmLibraryResults" class="pm-library-results">
      ${renderLibraryCards(getAllCards())}
    </div>

    <section class="pm-section">

      <div class="pm-section-heading">
        <div>
          <p class="pm-eyebrow">ملاحظاتك الشخصية</p>
          <h2>ملاحظاتي</h2>
        </div>

        <button
          type="button"
          class="pm-text-button"
          data-action="add-note"
        >
          + أضف ملاحظة
        </button>
      </div>

      <div class="pm-notes-list">

        ${
          appState.notes.length
            ? appState.notes.map((note, index) => `
              <article class="pm-note-card">

                <p>${escapeHTML(note.text)}</p>

                <button
                  type="button"
                  class="pm-text-button"
                  data-action="delete-note"
                  data-index="${index}"
                >
                  حذف
                </button>

              </article>
            `).join("")
            : `
              <div class="pm-empty-state">
                <span>▤</span>
                <strong>ملاحظاتك ستظهر هنا</strong>
                <p>اكتب تذكيراتك وملاحظاتك الدراسية.</p>
              </div>
            `
        }

      </div>

    </section>

  `;

  const input = $("#pmLibrarySearch");

  input?.addEventListener("input", () => {
    const query = normalizeAnswer(input.value);

    const results = getAllCards().filter(card => {
      const searchable = normalizeAnswer([
        card.question,
        card.answer,
        card.explanation,
        card.hint,
        getSection(card.section).title
      ].join(" "));

      return searchable.includes(query);
    });

    $("#pmLibraryResults").innerHTML = renderLibraryCards(results);
  });
}

function renderLibraryCards(cards) {
  if (!cards.length) {
    return `
      <div class="pm-empty-state">
        <span>⌕</span>
        <strong>لم نجد نتائج</strong>
        <p>جرّب كلمة بحث مختلفة.</p>
      </div>
    `;
  }

  return cards.map(card => `
    <article class="pm-library-card">

      <div class="pm-library-card-top">
        <span class="pm-pill">
          ${escapeHTML(getSection(card.section).title)}
        </span>

        ${
          card.custom
            ? `
              <button
                type="button"
                class="pm-text-button"
                data-action="delete-card"
                data-card-id="${escapeHTML(card.id)}"
              >
                حذف
              </button>
            `
            : ""
        }
      </div>

      <h3>${escapeHTML(card.question)}</h3>

      <details>
        <summary>عرض الإجابة</summary>

        <p>${escapeHTML(card.answer)}</p>

        ${card.explanation ? `
          <small>${escapeHTML(card.explanation)}</small>
        ` : ""}
      </details>

    </article>
  `).join("");
}


/* ================================================
   22. إضافة بطاقة مخصصة
================================================ */

function openAddCardModal() {
  const sections = Array.isArray(window.SECTIONS)
    ? window.SECTIONS
    : [];

  openModal(`

    <p class="pm-eyebrow">وسّع مكتبتك</p>

    <h2 id="pmModalTitle">إضافة بطاقة جديدة</h2>

    <form id="pmAddCardForm" class="pm-form">

      <label class="pm-field-label" for="pmNewCardSection">
        القسم
      </label>

      <select id="pmNewCardSection" class="pm-select" required>

        ${sections.map(section => `
          <option value="${escapeHTML(section.id)}">
            ${escapeHTML(section.title)}
          </option>
        `).join("")}

      </select>


      <label class="pm-field-label" for="pmNewCardQuestion">
        السؤال أو المصطلح
      </label>

      <textarea
        id="pmNewCardQuestion"
        class="pm-textarea"
        required
        maxlength="500"
        placeholder="اكتب السؤال هنا..."
      ></textarea>


      <label class="pm-field-label" for="pmNewCardAnswer">
        الإجابة الصحيحة
      </label>

      <textarea
        id="pmNewCardAnswer"
        class="pm-textarea"
        required
        maxlength="1000"
        placeholder="اكتب الإجابة هنا..."
      ></textarea>


      <label class="pm-field-label" for="pmNewCardExplanation">
        التوضيح (اختياري)
      </label>

      <textarea
        id="pmNewCardExplanation"
        class="pm-textarea"
        maxlength="1000"
        placeholder="أضف شرحًا يساعدك على التذكر..."
      ></textarea>


      <label class="pm-field-label" for="pmNewCardDifficulty">
        الصعوبة
      </label>

      <select id="pmNewCardDifficulty" class="pm-select">

        <option value="easy">سهل</option>
        <option value="medium" selected>متوسط</option>
        <option value="hard">متقدم</option>

      </select>


      <button
        type="submit"
        class="pm-button pm-button-primary pm-button-full"
      >
        حفظ البطاقة
      </button>

    </form>

  `);
}

function handleAddCardSubmit(event) {
  event.preventDefault();

  const question = $("#pmNewCardQuestion")?.value.trim();
  const answer = $("#pmNewCardAnswer")?.value.trim();

  if (!question || !answer) {
    showToast("أكمل السؤال والإجابة أولًا.", "warning");
    return;
  }

  const card = {
    id: `custom-${Date.now()}`,
    section: $("#pmNewCardSection").value,
    topic: "بطاقة مخصصة",
    type: "flashcard",
    difficulty: $("#pmNewCardDifficulty").value,
    question,
    answer,
    options: [],
    explanation: $("#pmNewCardExplanation").value.trim(),
    hint: "",
    blank: "",
    custom: true
  };

  appState.customCards.push(card);

  saveAppData();
  closeModal();

  showToast("تمت إضافة البطاقة بنجاح.", "success");

  navigateTo("library");
}

function deleteCustomCard(cardId) {
  const card = appState.customCards.find(item => {
    return String(item.id) === String(cardId);
  });

  if (!card) return;

  if (!confirm("هل تريد حذف هذه البطاقة؟")) {
    return;
  }

  appState.customCards =
    appState.customCards.filter(item => {
      return String(item.id) !== String(cardId);
    });

  removeMistake(cardId);

  saveAppData();
  renderLibrary();

  showToast("تم حذف البطاقة.", "success");
}


/* ================================================
   23. الملاحظات
================================================ */

function openAddNoteModal() {
  openModal(`

    <p class="pm-eyebrow">مساحتك الخاصة</p>

    <h2 id="pmModalTitle">إضافة ملاحظة</h2>

    <form id="pmAddNoteForm" class="pm-form">

      <label class="pm-field-label" for="pmNewNote">
        الملاحظة
      </label>

      <textarea
        id="pmNewNote"
        class="pm-textarea"
        maxlength="2000"
        required
        placeholder="اكتب ملاحظتك الدراسية..."
      ></textarea>

      <button
        type="submit"
        class="pm-button pm-button-primary pm-button-full"
      >
        حفظ الملاحظة
      </button>

    </form>

  `);
}

function handleAddNoteSubmit(event) {
  event.preventDefault();

  const input = $("#pmNewNote");

  if (!input) return;

  const text = input.value.trim();

  if (!text) {
    showToast("اكتب الملاحظة أولًا.", "warning");
    return;
  }

  appState.notes.unshift({
    id: `note-${Date.now()}`,
    text,
    createdAt: new Date().toISOString()
  });

  saveAppData();
  closeModal();
  renderLibrary();

  showToast("تم حفظ الملاحظة.", "success");
}

function deleteNote(index) {
  if (!confirm("هل تريد حذف هذه الملاحظة؟")) {
    return;
  }

  appState.notes.splice(index, 1);

  saveAppData();
  renderLibrary();

  showToast("تم حذف الملاحظة.", "success");
}


/* ================================================
   24. النوافذ المنبثقة
================================================ */

function openModal(content) {
  const modal = $("#pmModal");
  const modalContent = $("#pmModalContent");

  if (!modal || !modalContent) return;

  modalContent.innerHTML = content;
  modal.hidden = false;

  const firstInput = $("input, textarea, select", modalContent);

  if (firstInput) {
    setTimeout(() => firstInput.focus(), 50);
  }
}

function closeModal() {
  const modal = $("#pmModal");

  if (modal) {
    modal.hidden = true;
  }
}


/* ================================================
   25. المظهر الفاتح والداكن
================================================ */

function applySavedTheme() {
  let theme = "dark";

  try {
    theme = localStorage.getItem("pharmacy-memory-theme") || "dark";
  } catch (_) {}

  document.documentElement.dataset.theme = theme;

  if (rootElement) {
    rootElement.dataset.theme = theme;
  }
}

function toggleTheme() {
  const current =
    document.documentElement.dataset.theme || "dark";

  const next = current === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = next;

  if (rootElement) {
    rootElement.dataset.theme = next;
  }

  try {
    localStorage.setItem("pharmacy-memory-theme", next);
  } catch (_) {}

  showToast(
    next === "dark"
      ? "تم تفعيل المظهر الداكن."
      : "تم تفعيل المظهر الفاتح.",
    "success"
  );
}


/* ================================================
   26. التصدير والاستيراد
================================================ */

function exportAppData() {
  const data = {
    app: APP_CONFIG.name,
    version: APP_CONFIG.version,
    exportedAt: new Date().toISOString(),
    profile: appState.profile,
    customCards: appState.customCards,
    notes: appState.notes,
    settings: appState.settings
  };

  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = `pharmacy-memory-backup-${getToday()}.json`;

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);

  showToast("تم تجهيز النسخة الاحتياطية.", "success");
}

function importAppData() {
  const input = $("#pmImportFile");

  if (input) {
    input.value = "";
    input.click();
  }
}

function handleImportFile(event) {
  const file = event.target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);

      if (
        !data ||
        typeof data !== "object" ||
        !data.profile
      ) {
        throw new Error("ملف النسخة الاحتياطية غير صالح.");
      }

      if (!confirm(
        "استيراد هذه النسخة سيستبدل تقدمك الحالي. هل تريد المتابعة؟"
      )) {
        return;
      }

      appState.profile = {
        ...appState.profile,
        ...data.profile
      };

      appState.customCards = Array.isArray(data.customCards)
        ? data.customCards
        : [];

      appState.notes = Array.isArray(data.notes)
        ? data.notes
        : [];

      if (data.settings && typeof data.settings === "object") {
        appState.settings = {
          ...appState.settings,
          ...data.settings
        };
      }

      saveAppData();

      showToast("تم استيراد البيانات بنجاح.", "success");

      navigateTo("home");

    } catch (error) {
      console.error(error);

      showToast(
        "تعذر استيراد الملف. تأكد أنه نسخة احتياطية صحيحة.",
        "error"
      );
    }
  };

  reader.readAsText(file);
}


/* ================================================
   27. اختيار القسم أو طريقة المذاكرة
================================================ */

function chooseSection(sectionId) {
  navigateTo("study");

  setTimeout(() => {
    const select = $("#pmStudySection");

    if (select) {
      select.value = sectionId;
    }
  }, 0);
}

function chooseMode(mode) {
  renderStudySetup({ mode });
}


/* ================================================
   28. الأحداث الرئيسية
================================================ */

function bindApplicationEvents() {
  rootElement.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");

    if (!button || !rootElement.contains(button)) {
      return;
    }

    const action = button.dataset.action;

    switch (action) {
      case "navigate":
        navigateTo(button.dataset.page);
        break;

      case "toggle-theme":
        toggleTheme();
        break;

      case "choose-section":
        chooseSection(button.dataset.section);
        break;

      case "choose-mode":
        chooseMode(button.dataset.mode);
        break;

      case "select-setup-mode":
        selectSetupMode(button.dataset.mode);
        break;

      case "select-count":
        updateSelectedCount(button.dataset.count);
        break;

      case "start-study":
        startStudy();
        break;

      case "answer-question":
        submitAnswer(button.dataset.option);
        break;

      case "next-question":
        nextStudyCard();
        break;

      case "reveal-flashcard":
        revealFlashcard();
        break;

      case "reveal-whoami":
        revealWhoAmI();
        break;

      case "reveal-matching":
        revealMatching();
        break;

      case "rate-flashcard":
        rateFlashcard(button.dataset.correct === "true");
        break;

      case "exit-study":
        exitStudy();
        break;

      case "repeat-study":
        navigateTo("study");
        break;

      case "study-mistakes":
        navigateTo("study");

        setTimeout(() => {
          const modeInput = $("#pmStudyMode");

          if (modeInput) {
            modeInput.value = "mistakes";
          }

          $all("[data-action='select-setup-mode']", rootElement)
            .forEach(item => {
              item.classList.toggle(
                "is-selected",
                item.dataset.mode === "mistakes"
              );
            });
        }, 0);

        break;

      case "add-card":
        openAddCardModal();
        break;

      case "delete-card":
        deleteCustomCard(button.dataset.cardId);
        break;

      case "add-note":
        openAddNoteModal();
        break;

      case "delete-note":
        deleteNote(Number(button.dataset.index));
        break;

      case "export-data":
        exportAppData();
        break;

      case "import-data":
        importAppData();
        break;

      case "close-modal":
        closeModal();
        break;

      default:
        break;
    }
  });

  rootElement.addEventListener("submit", event => {
    if (event.target.id === "pmFillBlankForm") {
      handleFillBlankSubmit(event);
    }

    if (event.target.id === "pmAddCardForm") {
      handleAddCardSubmit(event);
    }

    if (event.target.id === "pmAddNoteForm") {
      handleAddNoteSubmit(event);
    }
  });

  rootElement.addEventListener("change", event => {
    if (event.target.id === "pmImportFile") {
      handleImportFile(event);
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function selectSetupMode(mode) {
  const hiddenInput = $("#pmStudyMode");

  if (hiddenInput) {
    hiddenInput.value = mode;
  }

  $all("[data-action='select-setup-mode']", rootElement)
    .forEach(button => {
      button.classList.toggle(
        "is-selected",
        button.dataset.mode === mode
      );
    });
}


/* ================================================
   29. إنهاء جلسة مبكرًا
================================================ */

function exitStudy() {
  const study = appState.study;

  if (!study.active) {
    navigateTo("home");
    return;
  }

  const confirmed = confirm(
    "هل تريد إنهاء الجلسة الحالية؟ سيتم حفظ الإجابات التي أجبت عنها."
  );

  if (!confirmed) return;

  finishStudy();
}


/* ================================================
   30. دعم حركة البطاقات
================================================ */

function bindFlashcardSwipe() {
  const card = $(".pm-study-card");

  if (!card) return;

  let startX = 0;
  let startY = 0;

  card.addEventListener("touchstart", event => {
    const touch = event.touches[0];

    startX = touch.clientX;
    startY = touch.clientY;
  }, { passive: true });

  card.addEventListener("touchend", event => {
    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    if (Math.abs(deltaX) < 90) return;
    if (Math.abs(deltaX) < Math.abs(deltaY)) return;

    /*
     * السحب هنا اختياري ولا يغيّر الإجابة
     * أو يتخطى البطاقة دون تقييم.
     */
  }, { passive: true });
}


/* ================================================
   31. تهيئة التطبيق
================================================ */

function initializeApplication() {
  loadAppData();

  /*
   * إعادة تعيين عداد اليوم عند تغيّر التاريخ.
   */
  const today = getToday();

  if (appState.profile.lastCounterDate !== today) {
    appState.profile.todayAnswered = 0;
    appState.profile.lastCounterDate = today;
  }

  initializeRoot();

  navigateTo("home");

  saveAppData();

  console.log(
    `${APP_CONFIG.name} v${APP_CONFIG.version} initialized.`
  );
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeApplication,
    { once: true }
  );
} else {
  initializeApplication();
              }
