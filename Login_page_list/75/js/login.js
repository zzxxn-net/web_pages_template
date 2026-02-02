function emotionSingleFocusLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: "",
    focusField: "",
    handleSubmit: function (e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function () { self.loading = false; }, 1300);
    },
  };
}
function initEmotionSingleWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 20 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
}
function initEmotionSingleCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.97 });
  gsap.to(card, { opacity: 1, scale: 1, duration: 0.5, delay: 0.08, ease: "power2.out" });
}
function initEmotionSingleFields() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".emotion-single-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = inp.closest(".emotion-single-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.25, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = inp.closest(".emotion-single-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("emotionSingleFocusLogin", emotionSingleFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEmotionSingleWrap();
    setTimeout(function () { initEmotionSingleCard(); initEmotionSingleFields(); }, 120);
  });
} else {
  initEmotionSingleWrap();
  setTimeout(function () { initEmotionSingleCard(); initEmotionSingleFields(); }, 120);
}
