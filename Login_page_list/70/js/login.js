function fantasyAsymInputLogin() {
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
function initFantasyAsymWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 20 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initFantasyAsymSideForm() {
  if (typeof gsap === "undefined") return;
  var side = document.querySelector("[data-gsap-side]");
  var form = document.querySelector("[data-gsap-form]");
  if (side) {
    gsap.set(side, { opacity: 0, x: -12 });
    gsap.to(side, { opacity: 1, x: 0, duration: 0.48, delay: 0.08, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0, x: 12 });
    gsap.to(form, { opacity: 1, x: 0, duration: 0.48, delay: 0.12, ease: "power2.out" });
  }
}
function initFantasyAsymFields() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".fantasy-asym-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = inp.closest(".fantasy-asym-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = inp.closest(".fantasy-asym-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("fantasyAsymInputLogin", fantasyAsymInputLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initFantasyAsymWrap();
    setTimeout(function () { initFantasyAsymSideForm(); initFantasyAsymFields(); }, 200);
  });
} else {
  initFantasyAsymWrap();
  setTimeout(function () { initFantasyAsymSideForm(); initFantasyAsymFields(); }, 200);
}
