/* ==================================================
   PHARMACY MEMORY | الأصوات
   أصوات مولّدة بالكود، بدون ملفات. يُحمَّل بعد app.js
================================================== */
(function () {
  "use strict";

  const KEY = "pharmacy-memory-sound";
  let ctx = null;
  let enabled = true;

  try {
    enabled = localStorage.getItem(KEY) !== "off";
  } catch (_) {}

  function getCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  /* نغمة واحدة */
  function tone(freq, start, dur, type, vol) {
    const c = getCtx();
    if (!c) return;

    const t0 = c.currentTime + start;
    const osc = c.createOscillator();
    const gain = c.createGain();

    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, t0);

    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(vol || 0.2, t0 + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  const SOUNDS = {
    tick() {
      tone(900, 0, 0.05, "triangle", 0.08);
    },
    correct() {
      tone(660, 0, 0.14, "sine", 0.22);
      tone(880, 0.1, 0.22, "sine", 0.22);
    },
    wrong() {
      tone(230, 0, 0.18, "sawtooth", 0.14);
      tone(165, 0.14, 0.28, "sawtooth", 0.14);
    },
    finish() {
      [523, 659, 784, 1047].forEach((f, i) => {
        tone(f, i * 0.12, 0.28, "triangle", 0.2);
      });
    },
    achievement() {
      [784, 988, 1175, 1568].forEach((f, i) => {
        tone(f, i * 0.09, 0.3, "sine", 0.18);
      });
    }
  };

  function play(name, delay) {
    if (!enabled || !SOUNDS[name]) return;

    try {
      if (delay) {
        setTimeout(() => SOUNDS[name](), delay * 1000);
      } else {
        SOUNDS[name]();
      }
    } catch (error) {
      console.error(error);
    }
  }

  /* ---------- ربط الأصوات بالتطبيق ---------- */

  /* إجابة صحيحة أو خاطئة */
  const origRecord = window.recordStudyAnswer;

  window.recordStudyAnswer = function (card, isCorrect) {
    const result = origRecord.apply(this, arguments);

    play(isCorrect ? "correct" : "wrong");

    if (!isCorrect && enabled && navigator.vibrate) {
      navigator.vibrate(70);
    }

    return result;
  };

  /* نهاية الجلسة */
  const origFinish = window.finishStudy;

  window.finishStudy = function () {
    const wasActive = appState.study && appState.study.active;
    const result = origFinish.apply(this, arguments);

    if (wasActive) play("finish");

    return result;
  };

  /* إنجاز جديد */
  const origAch = window.checkAchievements;

  window.checkAchievements = function () {
    const before = appState.profile.achievements.length;
    const result = origAch.apply(this, arguments);

    if (appState.profile.achievements.length > before) {
      play("achievement", 0.8);
    }

    return result;
  };

  /* نقرة خفيفة على الأزرار (ما عدا الإجابات حتى لا تتداخل) */
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    const skip = ["answer-question", "rate-flashcard"];

    if (!skip.includes(button.dataset.action)) play("tick");
  });

  /* ---------- زر الكتم في الشريط العلوي ---------- */
  function updateButton(button) {
    button.textContent = enabled ? "🔊" : "🔇";
    button.setAttribute("aria-label", enabled ? "كتم الصوت" : "تشغيل الصوت");
    button.title = enabled ? "كتم الصوت" : "تشغيل الصوت";
  }

  function addMuteButton() {
    if (document.getElementById("pmSoundToggle")) return;

    const themeButton = document.querySelector("[data-action='toggle-theme']");

    if (!themeButton || !themeButton.parentNode) return;

    const button = document.createElement("button");

    button.id = "pmSoundToggle";
    button.type = "button";
    button.className = "pm-icon-button";
    button.style.fontSize = "18px";

    updateButton(button);

    button.addEventListener("click", () => {
      enabled = !enabled;

      try {
        localStorage.setItem(KEY, enabled ? "on" : "off");
      } catch (_) {}

      updateButton(button);

      if (enabled) play("correct");
    });

    themeButton.parentNode.insertBefore(button, themeButton);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      addMuteButton();
      setTimeout(addMuteButton, 300);
    });
  } else {
    addMuteButton();
    setTimeout(addMuteButton, 300);
  }

})();
