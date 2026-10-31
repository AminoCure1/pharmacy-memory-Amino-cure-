/* ==================================================
   PHARMACY MEMORY | أقسامي الخاصة
   إضافة قسم + أسئلة (فردي وجماعي)
   يُحمَّل بعد app.js
================================================== */
(function () {
  "use strict";

  const cs = { managing: null, mode: "single", bulkDraft: "" };

  appState.customSections = [];

  /* ---------- الستايل ---------- */
  const style = document.createElement("style");
  style.textContent = `
    .pm-custom-panel { margin-bottom: 24px; }
    .pm-custom-row { display:flex; align-items:center; justify-content:space-between; gap:10px; margin-top:10px; padding:13px; border:1px solid var(--border); border-radius:var(--radius-md); background:var(--surface); }
    .pm-custom-info { min-width:0; display:flex; flex-direction:column; }
    .pm-custom-info strong { font-size:13px; overflow-wrap:anywhere; }
    .pm-custom-info small { color:var(--text-muted); font-size:10px; }
    .pm-custom-actions { display:flex; gap:8px; flex-shrink:0; }
    .pm-custom-actions .pm-button { min-height:38px; padding:8px 12px; font-size:11px; }
    .pm-manager-bar { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:16px; }
    .pm-danger { color:var(--red); border-color:var(--red); }
    .pm-mode-tabs { grid-template-columns:repeat(2,minmax(0,1fr)); margin-bottom:16px; }
    .pm-option-input { display:flex; align-items:center; gap:10px; margin-top:10px; }
    .pm-option-input input[type="radio"] { width:22px; height:22px; accent-color:var(--green); flex-shrink:0; }
    .pm-option-input .pm-input { flex:1; }
    .pm-form-actions { display:flex; gap:10px; margin-top:18px; }
    .pm-form-actions .pm-button { flex:1; margin-top:0; }
    .pm-bulk-text { min-height:220px; }
    .pm-q-options { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:6px; }
    .pm-q-options li { padding:8px 10px; border:1px solid var(--border); border-radius:10px; font-size:12px; background:var(--bg-secondary); }
    .pm-q-options li.is-correct { border-color:var(--green); background:var(--green-soft); color:var(--green); font-weight:700; }
  `;
  document.head.appendChild(style);

  /* ---------- دمج الأقسام الخاصة مع قائمة الأقسام ---------- */
  function sync() {
    if (!Array.isArray(window.SECTIONS)) window.SECTIONS = [];

    for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
      if (window.SECTIONS[i].custom) window.SECTIONS.splice(i, 1);
    }

    appState.customSections.forEach(s => window.SECTIONS.push(s));
  }

  /* ---------- الحفظ والتحميل ---------- */
  const origSave = window.saveAppData;

  window.saveAppData = function () {
    const ok = origSave();

    try {
      const raw = localStorage.getItem(APP_CONFIG.storageKey);
      const data = raw ? JSON.parse(raw) : {};

      data.customSections = appState.customSections;
      localStorage.setItem(APP_CONFIG.storageKey, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }

    return ok;
  };

  const origLoad = window.loadAppData;

  window.loadAppData = function () {
    origLoad();

    try {
      const raw = localStorage.getItem(APP_CONFIG.storageKey);

      if (raw) {
        const data = JSON.parse(raw);

        if (Array.isArray(data.customSections)) {
          appState.customSections = data.customSections;
        }
      }
    } catch (error) {
      console.error(error);
    }

    sync();
  };

  /* ---------- النسخة الاحتياطية ---------- */
  window.exportAppData = function () {
    const data = {
      app: APP_CONFIG.name,
      version: APP_CONFIG.version,
      exportedAt: new Date().toISOString(),
      profile: appState.profile,
      customCards: appState.customCards,
      customSections: appState.customSections,
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
  };

  window.handleImportFile = function (event) {
    const file = event.target.files && event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);

        if (!data || typeof data !== "object" || !data.profile) {
          throw new Error("ملف غير صالح");
        }

        if (!confirm("استيراد هذه النسخة سيستبدل تقدمك الحالي. هل تريد المتابعة؟")) {
          return;
        }

        appState.profile = { ...appState.profile, ...data.profile };
        appState.customCards = Array.isArray(data.customCards) ? data.customCards : [];
        appState.customSections = Array.isArray(data.customSections) ? data.customSections : [];
        appState.notes = Array.isArray(data.notes) ? data.notes : [];

        if (data.settings && typeof data.settings === "object") {
          appState.settings = { ...appState.settings, ...data.settings };
        }

        sync();
        saveAppData();

        showToast("تم استيراد البيانات بنجاح.", "success");
        navigateTo("home");

      } catch (error) {
        console.error(error);
        showToast("تعذر استيراد الملف. تأكد أنه نسخة احتياطية صحيحة.", "error");
      }
    };

    reader.readAsText(file);
  };

  /* ---------- أدوات ---------- */
  function hasDuplicates(options) {
    return new Set(options.map(o => normalizeAnswer(o))).size !== options.length;
  }

  function makeQuestion(sectionId, question, options, correctIndex) {
    return {
      id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      section: sectionId,
      sectionId: sectionId,
      topic: "سؤال مخصص",
      type: "mcq",
      difficulty: "medium",
      question,
      options,
      answer: options[correctIndex],
      explanation: "",
      hint: "",
      blank: "",
      custom: true
    };
  }

  function sectionCards(sectionId) {
    return appState.customCards.filter(c => c.section === sectionId);
  }

  /* ---------- لوحة "أقسامي" في صفحة الأقسام ---------- */
  function panelHTML() {
    const list = appState.customSections;

    return `
      <section class="pm-custom-panel">

        <div class="pm-section-heading">
          <div>
            <p class="pm-eyebrow">من صنعك</p>
            <h2>أقسامي</h2>
          </div>

          <button type="button" class="pm-button pm-button-primary"
            data-action="add-section">＋ إضافة قسم</button>
        </div>

        ${list.length ? list.map(s => `
          <article class="pm-custom-row">
            <div class="pm-custom-info">
              <strong>${escapeHTML(s.title)}</strong>
              <small>${formatNumber(sectionCards(s.id).length)} سؤال</small>
            </div>

            <div class="pm-custom-actions">
              <button type="button" class="pm-button pm-button-secondary"
                data-action="manage-section"
                data-section="${escapeHTML(s.id)}">إدارة</button>

              <button type="button" class="pm-button pm-button-primary"
                data-action="choose-section"
                data-section="${escapeHTML(s.id)}">ذاكر</button>
            </div>
          </article>
        `).join("") : `
          <div class="pm-empty-state">
            <span>＋</span>
            <strong>لا توجد أقسام خاصة بعد</strong>
            <p>أنشئ قسمًا واكتب أسئلتك بنفسك.</p>
          </div>
        `}

      </section>
    `;
  }

  const origRenderSections = window.renderSections;

  window.renderSections = function () {
    origRenderSections();

    const box = $(".pm-search-box");

    if (box) box.insertAdjacentHTML("beforebegin", panelHTML());
  };

  /* ---------- نافذة إضافة قسم ---------- */
  function openAddSection() {
    openModal(`
      <p class="pm-eyebrow">قسم جديد</p>
      <h2 id="pmModalTitle">إضافة قسم</h2>

      <form id="pmAddSectionForm" class="pm-form">
        <label class="pm-field-label" for="pmNewSectionName">اسم القسم</label>
        <input type="text" id="pmNewSectionName" class="pm-input"
          maxlength="60" required placeholder="مثال: مراجعة المضادات الحيوية">

        <button type="submit"
          class="pm-button pm-button-primary pm-button-full">إنشاء القسم</button>
      </form>
    `);
  }

  /* ---------- صفحة إدارة القسم ---------- */
  function renderManager(sectionId) {
    const section = appState.customSections.find(s => s.id === sectionId);

    if (!section) {
      navigateTo("sections");
      return;
    }

    cs.managing = sectionId;

    const cards = sectionCards(sectionId);
    const page = $("#pmPage");

    const singleForm = `
      <form id="pmQuestionForm" class="pm-setup-card pm-form">

        <label class="pm-field-label" for="pmQText">السؤال</label>
        <textarea id="pmQText" class="pm-textarea" required
          maxlength="500" placeholder="اكتب السؤال هنا..."></textarea>

        <label class="pm-field-label">الخيارات (حدد الدائرة بجانب الإجابة الصحيحة)</label>

        ${["A", "B", "C", "D"].map((letter, i) => `
          <div class="pm-option-input">
            <input type="radio" name="pmCorrect" value="${i}"
              ${i === 0 ? "checked" : ""}
              aria-label="الإجابة الصحيحة ${letter}">
            <input type="text" class="pm-input" id="pmOpt${i}"
              maxlength="300" required placeholder="الخيار ${letter}">
          </div>
        `).join("")}

        <div class="pm-form-actions">
          <button type="reset" class="pm-button pm-button-secondary">مسح</button>
          <button type="submit" class="pm-button pm-button-primary">إضافة السؤال</button>
        </div>

      </form>
    `;

    const bulkForm = `
      <form id="pmBulkForm" class="pm-setup-card pm-form">

        <label class="pm-field-label" for="pmBulkText">أسئلة متعددة</label>

        <textarea id="pmBulkText" class="pm-textarea pm-bulk-text" rows="12"
          required placeholder="ما عاصمة الهند؟
كولكاتا
مومباي
*دلهي
أجرا

السؤال الثاني؟
خيار 1
*خيار 2
خيار 3
خيار 4">${escapeHTML(cs.bulkDraft)}</textarea>

        <p class="pm-setup-note">
          السطر الأول هو السؤال، وكل خيار في سطر. ضع علامة * قبل الإجابة الصحيحة.
          افصل بين الأسئلة بسطر فارغ. الأسئلة غير الصالحة تبقى في الخانة لتصححها.
        </p>

        <button type="submit"
          class="pm-button pm-button-primary pm-button-full">إضافة الأسئلة</button>

      </form>
    `;

    page.innerHTML = `
      <section class="pm-page-heading">
        <p class="pm-eyebrow">إدارة القسم</p>
        <h1>${escapeHTML(section.title)}</h1>
        <p>${formatNumber(cards.length)} سؤال في هذا القسم.</p>
      </section>

      <div class="pm-manager-bar">
        <button type="button" class="pm-back-button"
          data-action="navigate" data-page="sections">← الأقسام</button>

        <button type="button" class="pm-back-button"
          data-action="rename-section"
          data-section="${escapeHTML(sectionId)}">تغيير الاسم</button>

        <button type="button" class="pm-back-button pm-danger"
          data-action="delete-section"
          data-section="${escapeHTML(sectionId)}">حذف القسم</button>
      </div>

      <div class="pm-count-options pm-mode-tabs">
        <button type="button" data-action="manager-mode" data-mode="single"
          class="pm-count-button ${cs.mode === "single" ? "is-selected" : ""}">إضافة فردية</button>
        <button type="button" data-action="manager-mode" data-mode="bulk"
          class="pm-count-button ${cs.mode === "bulk" ? "is-selected" : ""}">إضافة جماعية</button>
      </div>

      ${cs.mode === "single" ? singleForm : bulkForm}

      <section class="pm-section">
        <div class="pm-section-heading">
          <div>
            <p class="pm-eyebrow">محتوى القسم</p>
            <h2>الأسئلة المضافة</h2>
          </div>

          ${cards.length ? `
            <button type="button" class="pm-button pm-button-primary"
              data-action="choose-section"
              data-section="${escapeHTML(sectionId)}">ابدأ المذاكرة</button>
          ` : ""}
        </div>

        <div class="pm-library-results">
          ${cards.length ? cards.map((c, n) => `
            <article class="pm-library-card">
              <div class="pm-library-card-top">
                <span class="pm-pill">${formatNumber(n + 1)}</span>
                <button type="button" class="pm-text-button"
                  data-action="delete-q"
                  data-card-id="${escapeHTML(c.id)}">حذف</button>
              </div>

              <h3>${escapeHTML(c.question)}</h3>

              <ul class="pm-q-options">
                ${(c.options || []).map(o => `
                  <li class="${o === c.answer ? "is-correct" : ""}">
                    ${o === c.answer ? "✓ " : ""}${escapeHTML(o)}
                  </li>
                `).join("")}
              </ul>
            </article>
          `).join("") : `
            <div class="pm-empty-state">
              <span>▤</span>
              <strong>لا توجد أسئلة بعد</strong>
              <p>أضف أول سؤال من النموذج بالأعلى.</p>
            </div>
          `}
        </div>
      </section>
    `;
  }

  /* ---------- تحليل الإضافة الجماعية ---------- */
  function parseBulk(text) {
    const blocks = String(text)
      .split(/\n\s*\n/)
      .map(b => b.trim())
      .filter(Boolean);

    const good = [];
    const bad = [];

    blocks.forEach(block => {
      const lines = block
        .split("\n")
        .map(l => l.trim())
        .filter(Boolean);

      const question = (lines.shift() || "").replace(/^\*/, "").trim();
      const options = [];
      let correct = -1;
      let stars = 0;

      lines.forEach(line => {
        let t = line;

        if (t.startsWith("*")) {
          stars++;
          correct = options.length;
          t = t.slice(1).trim();
        }

        if (t) options.push(t);
      });

      const valid =
        question &&
        options.length >= 2 &&
        options.length <= 6 &&
        stars === 1 &&
        !hasDuplicates(options);

      if (valid) good.push({ question, options, correct });
      else bad.push(block);
    });

    return { good, bad };
  }

  /* ---------- الضغطات ---------- */
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    const action = button.dataset.action;

    switch (action) {

      case "add-section":
        openAddSection();
        break;

      case "manage-section":
        cs.mode = "single";
        cs.bulkDraft = "";
        renderManager(button.dataset.section);
        break;

      case "manager-mode": {
        const bulk = $("#pmBulkText");

        if (bulk) cs.bulkDraft = bulk.value;

        cs.mode = button.dataset.mode;
        renderManager(cs.managing);
        break;
      }

      case "rename-section": {
        const section = appState.customSections.find(
          s => s.id === button.dataset.section
        );

        if (!section) break;

        const name = (prompt("اسم القسم الجديد:", section.title) || "").trim();

        if (!name) break;

        section.title = name;
        section.name = name;

        sync();
        saveAppData();
        renderManager(section.id);
        showToast("تم تغيير الاسم.", "success");
        break;
      }

      case "delete-q": {
        if (!confirm("هل تريد حذف هذا السؤال؟")) break;

        const id = button.dataset.cardId;

        appState.customCards = appState.customCards.filter(
          c => String(c.id) !== String(id)
        );

        removeMistake(id);
        saveAppData();
        renderManager(cs.managing);
        showToast("تم حذف السؤال.", "success");
        break;
      }

      case "delete-section": {
        const sectionId = button.dataset.section;

        if (!confirm("سيتم حذف القسم وكل أسئلته. هل تريد المتابعة؟")) break;

        sectionCards(sectionId).forEach(c => removeMistake(c.id));

        appState.customCards = appState.customCards.filter(
          c => c.section !== sectionId
        );
        appState.customSections = appState.customSections.filter(
          s => s.id !== sectionId
        );

        sync();
        saveAppData();
        navigateTo("sections");
        showToast("تم حذف القسم.", "success");
        break;
      }

      default:
        break;
    }
  });

  /* ---------- إرسال النماذج ---------- */
  document.addEventListener("submit", event => {
    const formId = event.target.id;

    if (
      formId !== "pmAddSectionForm" &&
      formId !== "pmQuestionForm" &&
      formId !== "pmBulkForm"
    ) {
      return;
    }

    event.preventDefault();

    /* إنشاء قسم */
    if (formId === "pmAddSectionForm") {
      const name = $("#pmNewSectionName").value.trim();

      if (!name) {
        showToast("اكتب اسم القسم أولًا.", "warning");
        return;
      }

      const section = {
        id: `custom-sec-${Date.now()}`,
        name,
        title: name,
        icon: "✎",
        description: "قسم من إنشائي",
        custom: true
      };

      appState.customSections.push(section);
      sync();
      saveAppData();
      closeModal();

      cs.mode = "single";
      cs.bulkDraft = "";
      renderManager(section.id);
      showToast("تم إنشاء القسم. أضف أول سؤال.", "success");
      return;
    }

    /* سؤال واحد */
    if (formId === "pmQuestionForm") {
      const question = $("#pmQText").value.trim();
      const options = [0, 1, 2, 3].map(i => $(`#pmOpt${i}`).value.trim());
      const checked = $("input[name='pmCorrect']:checked", event.target);
      const correct = checked ? Number(checked.value) : 0;

      if (!question || options.some(o => !o)) {
        showToast("أكمل السؤال والخيارات الأربعة.", "warning");
        return;
      }

      if (hasDuplicates(options)) {
        showToast("يوجد خياران متشابهان. غيّر أحدهما.", "warning");
        return;
      }

      appState.customCards.push(
        makeQuestion(cs.managing, question, options, correct)
      );

      saveAppData();
      renderManager(cs.managing);
      showToast("تمت إضافة السؤال.", "success");

      setTimeout(() => {
        const box = $("#pmQText");
        if (box) box.focus();
      }, 50);

      return;
    }

    /* إضافة جماعية */
    const { good, bad } = parseBulk($("#pmBulkText").value);

    good.forEach(item => {
      appState.customCards.push(
        makeQuestion(cs.managing, item.question, item.options, item.correct)
      );
    });

    cs.bulkDraft = bad.join("\n\n");

    saveAppData();
    renderManager(cs.managing);

    if (good.length && !bad.length) {
      showToast(`تمت إضافة ${good.length} سؤال.`, "success");
    } else if (good.length) {
      showToast(`أُضيف ${good.length} سؤال، و${bad.length} يحتاج تصحيحًا.`, "warning");
    } else {
      showToast("لم يُضف شيء. تأكد من علامة * وعدد الخيارات.", "error");
    }
  });

  /* ---------- لو كان التطبيق اشتغل قبل تحميل هذا الملف ---------- */
  if (typeof rootElement !== "undefined" && rootElement) {
    window.loadAppData();
    navigateTo(appState.page || "home");
  }

})();
