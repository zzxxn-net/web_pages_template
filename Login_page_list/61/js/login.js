function cyberMinimalFullLogin() {
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
function initCyberEntrance() {
  if (typeof gsap === "undefined") return;
  var inner = document.querySelector("[data-gsap-inner]");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 12 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.48, ease: "power2.out" });
}
function initCyberFieldGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".cyber-full-field[data-gsap-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var w = this.closest(".cyber-full-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.22, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var w = this.closest(".cyber-full-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.18, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("cyberMinimalFullLogin", cyberMinimalFullLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { initCyberEntrance(); setTimeout(initCyberFieldGSAP, 220); });
} else {
  initCyberEntrance();
  setTimeout(initCyberFieldGSAP, 220);
}
