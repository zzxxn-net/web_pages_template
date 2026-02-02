function expAsymFocusLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    focusPassword: function () {
      var el = document.getElementById("ea63-pw");
      if (el && "focus" in el) el.focus();
    },
    handleSubmit: function (e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function () { self.loading = false; }, 1200);
    },
  };
}
function initExpAsymEntrance() {
  if (typeof gsap === "undefined") return;
  var side = document.querySelector("[data-gsap-side]");
  var form = document.querySelector("[data-gsap-form]");
  if (side) {
    gsap.set(side, { opacity: 0, x: -20 });
    gsap.to(side, { opacity: 1, x: 0, duration: 0.48, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0, x: 20 });
    gsap.to(form, { opacity: 1, x: 0, duration: 0.48, delay: 0.1, ease: "power2.out" });
  }
}
function initExpAsymFieldGSAP() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".exp-asym-field[data-gsap-field]").forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var w = this.closest(".exp-asym-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.22, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var w = this.closest(".exp-asym-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.18, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("expAsymFocusLogin", expAsymFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { initExpAsymEntrance(); setTimeout(initExpAsymFieldGSAP, 260); });
} else {
  initExpAsymEntrance();
  setTimeout(initExpAsymFieldGSAP, 260);
}
