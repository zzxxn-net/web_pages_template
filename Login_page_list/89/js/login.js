// MVP: 로그인 시안 89 — Alpine 데이터·GSAP 부드러운 전환 (네오 브루탈리즘 풀스크린 몰입형)
function brutalFullLogin() {
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
// MVP: GSAP 래퍼·카드·헤더 진입 — 부드러운 전환
function initBrutalFullWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.52, ease: "power2.out" });
}
function initBrutalFullCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.97 });
  gsap.to(card, { opacity: 1, scale: 1, duration: 0.5, delay: 0.06, ease: "power2.out" });
}
function initBrutalFullHead() {
  if (typeof gsap === "undefined") return;
  var head = document.querySelector("[data-gsap-head]");
  if (!head) return;
  gsap.set(head, { opacity: 0, y: 8 });
  gsap.to(head, { opacity: 1, y: 0, duration: 0.44, delay: 0.1, ease: "power2.out" });
}
// MVP: GSAP 필드 진입·포커스 시 부드러운 스케일
function initBrutalFullFields() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".brutal-full-field[data-gsap-field]");
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
if (typeof Alpine !== "undefined") Alpine.data("brutalFullLogin", brutalFullLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initBrutalFullWrap();
    setTimeout(function() {
      initBrutalFullCard();
      initBrutalFullHead();
      initBrutalFullFields();
    }, 50);
  });
} else {
  initBrutalFullWrap();
  setTimeout(function() {
    initBrutalFullCard();
    initBrutalFullHead();
    initBrutalFullFields();
  }, 50);
}
