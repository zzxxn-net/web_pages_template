function expSingleFocusInputLogin() {
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
      setTimeout(function () { self.loading = false; }, 1200);
    },
  };
}
function initExpSingleWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.48, ease: "power2.out" });
}
function initExpSingleCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.98 });
  gsap.to(card, { opacity: 1, scale: 1, duration: 0.45, delay: 0.06, ease: "power2.out" });
}
function initExpSingleFields() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".exp-single-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = inp.closest(".exp-single-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.22, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = inp.closest(".exp-single-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("expSingleFocusInputLogin", expSingleFocusInputLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initExpSingleWrap();
    setTimeout(function () { initExpSingleCard(); initExpSingleFields(); }, 180);
  });
} else {
  initExpSingleWrap();
  setTimeout(function () { initExpSingleCard(); initExpSingleFields(); }, 180);
}
