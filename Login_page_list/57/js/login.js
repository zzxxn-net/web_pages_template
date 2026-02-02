function darkArchiveAsymLogin() {
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
function initAsymEntrance() {
  if (typeof gsap === "undefined") return;
  var visual = document.querySelector("[data-gsap-visual]");
  var form = document.querySelector("[data-gsap-form]");
  if (visual) {
    gsap.set(visual, { opacity: 0, x: -24 });
    gsap.to(visual, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0, x: 24 });
    gsap.to(form, { opacity: 1, x: 0, duration: 0.5, delay: 0.12, ease: "power2.out" });
  }
}
function initAsymFieldGSAP() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".dark-asym-field[data-gsap-field]").forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var w = this.closest(".dark-asym-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var w = this.closest(".dark-asym-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("darkArchiveAsymLogin", darkArchiveAsymLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { initAsymEntrance(); setTimeout(initAsymFieldGSAP, 280); });
} else {
  initAsymEntrance();
  setTimeout(initAsymFieldGSAP, 280);
}
