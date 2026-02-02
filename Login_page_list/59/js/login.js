function senseTechSplitLogin() {
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
function initSenseEntrance() {
  if (typeof gsap === "undefined") return;
  var cards = document.querySelectorAll(".sense-split-card[data-gsap-card]");
  gsap.set(cards, { opacity: 0, y: 20 });
  gsap.to(cards, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" });
}
function initSenseFieldGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".sense-split-field[data-gsap-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var w = this.closest(".sense-split-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var w = this.closest(".sense-split-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("senseTechSplitLogin", senseTechSplitLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { initSenseEntrance(); setTimeout(initSenseFieldGSAP, 250); });
} else {
  initSenseEntrance();
  setTimeout(initSenseFieldGSAP, 250);
}
