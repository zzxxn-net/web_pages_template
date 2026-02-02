function darkCardFocusLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit: function (e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function () { self.loading = false; }, 1200);
    },
  };
}
function initDarkCardWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 12 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initDarkCardHead() {
  if (typeof gsap === "undefined") return;
  var head = document.querySelector("[data-gsap-head]");
  if (!head) return;
  gsap.set(head, { opacity: 0, y: -8 });
  gsap.to(head, { opacity: 1, y: 0, duration: 0.4, delay: 0.06, ease: "power2.out" });
}
function initDarkCardCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 10 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.45, delay: 0.12, ease: "power2.out" });
}
function initDarkCardFields() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".dark-card-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = inp.closest(".dark-card-field");
      if (w) gsap.to(w, { borderColor: "rgba(180,160,140,0.6)", duration: 0.2, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = inp.closest(".dark-card-field");
      if (w) gsap.to(w, { borderColor: "rgba(140,120,100,0.3)", duration: 0.18, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("darkCardFocusLogin", darkCardFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initDarkCardWrap();
    setTimeout(function () {
      initDarkCardHead();
      initDarkCardCard();
      initDarkCardFields();
    }, 100);
  });
} else {
  initDarkCardWrap();
  setTimeout(function () {
    initDarkCardHead();
    initDarkCardCard();
    initDarkCardFields();
  }, 100);
}
