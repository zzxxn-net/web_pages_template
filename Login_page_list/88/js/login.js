// MVP: 로그인 시안 88 — Alpine 데이터·GSAP 입력 반응형 (현대 판타지 마이크로 인터랙션 중심)
function fantasyMicroLogin() {
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
// MVP: GSAP 래퍼·카드·헤더 진입 — 부드러운 등장
function initFantasyMicroWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 12 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initFantasyMicroCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.98 });
  gsap.to(card, { opacity: 1, scale: 1, duration: 0.48, delay: 0.06, ease: "power2.out" });
}
function initFantasyMicroHead() {
  if (typeof gsap === "undefined") return;
  var head = document.querySelector("[data-gsap-head]");
  if (!head) return;
  gsap.set(head, { opacity: 0, y: 6 });
  gsap.to(head, { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "power2.out" });
}
// MVP: 입력 반응형 애니메이션 — 필드 포커스·블러 시 GSAP 스케일
function initFantasyMicroFields() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".fantasy-micro-field[data-gsap-field]");
  fields.forEach(function(el) {
    gsap.set(el, { opacity: 0, y: 6 });
    gsap.to(el, { opacity: 1, y: 0, duration: 0.38, delay: 0.14, ease: "power2.out" });
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function() {
      gsap.to(el, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    inp.addEventListener("blur", function() {
      gsap.to(el, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("fantasyMicroLogin", fantasyMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initFantasyMicroWrap();
    setTimeout(function() {
      initFantasyMicroCard();
      initFantasyMicroHead();
      initFantasyMicroFields();
    }, 50);
  });
} else {
  initFantasyMicroWrap();
  setTimeout(function() {
    initFantasyMicroCard();
    initFantasyMicroHead();
    initFantasyMicroFields();
  }, 50);
}
