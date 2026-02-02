// MVP: 로그인 시안 86 — Alpine 데이터·GSAP 부드러운 전환 (미래적 클린 비대칭 레이아웃)
function cleanAsymLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function() { self.loading = false; }, 1200);
    },
  };
}
// MVP: GSAP 래퍼·aside·카드 진입 — 부드러운 전환
function initCleanWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 14 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initCleanAside() {
  if (typeof gsap === "undefined") return;
  var aside = document.querySelector("[data-gsap-aside]");
  if (!aside) return;
  gsap.set(aside, { opacity: 0, x: -12 });
  gsap.to(aside, { opacity: 1, x: 0, duration: 0.46, delay: 0.06, ease: "power2.out" });
}
function initCleanCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, x: 12 });
  gsap.to(card, { opacity: 1, x: 0, duration: 0.48, delay: 0.1, ease: "power2.out" });
}
// MVP: GSAP 필드 진입·포커스 시 부드러운 스케일
function initCleanFields() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".clean-field[data-gsap-field]");
  fields.forEach(function(el) {
    gsap.set(el, { opacity: 0, y: 8 });
    gsap.to(el, { opacity: 1, y: 0, duration: 0.4, delay: 0.14, ease: "power2.out" });
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function() {
      gsap.to(el, { scale: 1.01, duration: 0.26, ease: "power2.out" });
    });
    inp.addEventListener("blur", function() {
      gsap.to(el, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("cleanAsymLogin", cleanAsymLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initCleanWrap();
    setTimeout(function() {
      initCleanAside();
      initCleanCard();
      initCleanFields();
    }, 50);
  });
} else {
  initCleanWrap();
  setTimeout(function() {
    initCleanAside();
    initCleanCard();
    initCleanFields();
  }, 50);
}
