function neoBrutalSingleFocusLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: "",
    handleSubmit: function (e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function () { self.loading = false; }, 1200);
    },
  };
}
function initBrutalSingleEntrance() {
  if (typeof gsap === "undefined") return;
  var el = document.querySelector("[data-gsap-card]");
  if (!el) return;
  gsap.set(el, { opacity: 0, y: 16 });
  gsap.to(el, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initBrutalSingleFieldGSAP() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".brutal-single-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = this.closest(".brutal-single-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = this.closest(".brutal-single-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("neoBrutalSingleFocusLogin", neoBrutalSingleFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { initBrutalSingleEntrance(); setTimeout(initBrutalSingleFieldGSAP, 260); });
} else {
  initBrutalSingleEntrance();
  setTimeout(initBrutalSingleFieldGSAP, 260);
}
