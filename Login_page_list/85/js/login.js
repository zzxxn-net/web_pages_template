// MVP: 로그인 시안 85 — Alpine 데이터·GSAP 진입 (감성 테크 카드 분리형, 스크롤 없는 고정 플로우)
function emotechCardLogin() {
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
// MVP: GSAP 래퍼·헤더·카드 진입 — 스크롤 없는 플로우 내 부드러운 등장
function initEmotechWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 14 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initEmotechHeader() {
  if (typeof gsap === "undefined") return;
  var header = document.querySelector("[data-gsap-header]");
  if (!header) return;
  gsap.set(header, { opacity: 0, y: 10 });
  gsap.to(header, { opacity: 1, y: 0, duration: 0.44, delay: 0.06, ease: "power2.out" });
}
function initEmotechCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 12 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.46, delay: 0.1, ease: "power2.out" });
}
// MVP: 필드 포커스 시 GSAP 스케일 — 감성 테크 톤에 맞춘 부드러운 피드백
function initEmotechFields() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".emotech-field[data-gsap-field]");
  fields.forEach(function(el) {
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
if (typeof Alpine !== "undefined") Alpine.data("emotechCardLogin", emotechCardLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initEmotechWrap();
    setTimeout(function() {
      initEmotechHeader();
      initEmotechCard();
      initEmotechFields();
    }, 50);
  });
} else {
  initEmotechWrap();
  setTimeout(function() {
    initEmotechHeader();
    initEmotechCard();
    initEmotechFields();
  }, 50);
}
