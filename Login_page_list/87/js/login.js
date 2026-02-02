// MVP: 로그인 시안 87 — Alpine 데이터·GSAP 진입 (실험적 인터페이스 단계 분할형, 상태 변화 강조)
function expStepLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    step: 1,
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function() { self.loading = false; }, 1200);
    },
    goStep2() {
      if (this.step < 2) this.step = 2;
    },
  };
}
// MVP: GSAP 배경·래퍼·헤더·카드 진입 — 실험적 인터페이스 부드러운 등장
function initExpBg() {
  if (typeof gsap === "undefined") return;
  var bg = document.querySelector("[data-gsap-bg]");
  if (!bg) return;
  gsap.set(bg, { opacity: 0 });
  gsap.to(bg, { opacity: 1, duration: 0.55, ease: "power2.out" });
}
function initExpWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 14 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, delay: 0.06, ease: "power2.out" });
}
function initExpHeader() {
  if (typeof gsap === "undefined") return;
  var header = document.querySelector("[data-gsap-header]");
  if (!header) return;
  gsap.set(header, { opacity: 0, y: 8 });
  gsap.to(header, { opacity: 1, y: 0, duration: 0.44, delay: 0.1, ease: "power2.out" });
}
function initExpCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 10 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.46, delay: 0.12, ease: "power2.out" });
}
// MVP: 상태 변화 강조 — 필드 진입·포커스 시 GSAP 스케일
function initExpFields() {
  if (typeof gsap === "undefined") return;
  var emailField = document.querySelector(".exp-step-field[data-gsap-field]:not(.exp-step-field--pw)");
  if (emailField) {
    gsap.set(emailField, { opacity: 0, y: 6 });
    gsap.to(emailField, { opacity: 1, y: 0, duration: 0.4, delay: 0.16, ease: "power2.out" });
    var inp = emailField.querySelector("input");
    if (inp) {
      inp.addEventListener("focus", function() {
        gsap.to(emailField, { scale: 1.01, duration: 0.26, ease: "power2.out" });
      });
      inp.addEventListener("blur", function() {
        gsap.to(emailField, { scale: 1, duration: 0.22, ease: "power2.in" });
      });
    }
  }
  var pwField = document.querySelector("[data-gsap-field-pw]");
  if (pwField) {
    var pwInp = pwField.querySelector("input");
    if (pwInp) {
      pwInp.addEventListener("focus", function() {
        gsap.to(pwField, { scale: 1.01, duration: 0.26, ease: "power2.out" });
      });
      pwInp.addEventListener("blur", function() {
        gsap.to(pwField, { scale: 1, duration: 0.22, ease: "power2.in" });
      });
    }
  }
}
if (typeof Alpine !== "undefined") Alpine.data("expStepLogin", expStepLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initExpBg();
    setTimeout(function() {
      initExpWrap();
      initExpHeader();
      initExpCard();
      initExpFields();
    }, 50);
  });
} else {
  initExpBg();
  setTimeout(function() {
    initExpWrap();
    initExpHeader();
    initExpCard();
    initExpFields();
  }, 50);
}
