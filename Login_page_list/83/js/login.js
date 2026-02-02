// MVP: 로그인 시안 83 — Alpine 데이터·GSAP 부드러운 전환 (단일 포커스 입력 흐름)
function cyberSingleFocusLogin() {
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
    revealPassword() {
      if (this.step < 2) this.step = 2;
    },
  };
}
// MVP: GSAP 래퍼 진입 — 부드러운 전환
function initCyberWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 12 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initCyberHeader() {
  if (typeof gsap === "undefined") return;
  var header = document.querySelector("[data-gsap-header]");
  if (!header) return;
  gsap.set(header, { opacity: 0, y: 8 });
  gsap.to(header, { opacity: 1, y: 0, duration: 0.45, delay: 0.06, ease: "power2.out" });
}
function initCyberCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 10 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.48, delay: 0.1, ease: "power2.out" });
}
// MVP: 단일 포커스 필드 — 이메일 필드 진입, 포커스 시 부드러운 스케일
function initCyberFields() {
  if (typeof gsap === "undefined") return;
  var emailField = document.querySelector("[data-gsap-field-email]");
  var pwField = document.querySelector("[data-gsap-field-pw]");
  if (emailField) {
    gsap.set(emailField, { opacity: 0, x: -8 });
    gsap.to(emailField, { opacity: 1, x: 0, duration: 0.4, delay: 0.15, ease: "power2.out" });
    var inp = emailField.querySelector("input");
    if (inp) {
      inp.addEventListener("focus", function() {
        gsap.to(emailField, { scale: 1.01, duration: 0.25, ease: "power2.out" });
      });
      inp.addEventListener("blur", function() {
        gsap.to(emailField, { scale: 1, duration: 0.2, ease: "power2.in" });
      });
    }
  }
  if (pwField) {
    var pwInp = pwField.querySelector("input");
    if (pwInp) {
      pwInp.addEventListener("focus", function() {
        gsap.to(pwField, { scale: 1.01, duration: 0.25, ease: "power2.out" });
      });
      pwInp.addEventListener("blur", function() {
        gsap.to(pwField, { scale: 1, duration: 0.2, ease: "power2.in" });
      });
    }
  }
}
if (typeof Alpine !== "undefined") Alpine.data("cyberSingleFocusLogin", cyberSingleFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initCyberWrap();
    setTimeout(function() {
      initCyberHeader();
      initCyberCard();
      initCyberFields();
    }, 50);
  });
} else {
  initCyberWrap();
  setTimeout(function() {
    initCyberHeader();
    initCyberCard();
    initCyberFields();
  }, 50);
}
