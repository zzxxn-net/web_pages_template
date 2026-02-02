function cyberSplitNoScrollLogin() {
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
function initCyberSplitCards() {
  if (typeof gsap === "undefined") return;
  var cards = document.querySelectorAll(".cyber-split-card[data-gsap-card]");
  gsap.set(cards, { opacity: 0, y: 14 });
  gsap.to(cards, { opacity: 1, y: 0, duration: 0.48, stagger: 0.1, ease: "power2.out" });
}
function initCyberSplitFields() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".cyber-split-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = this.closest(".cyber-split-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.22, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = this.closest(".cyber-split-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("cyberSplitNoScrollLogin", cyberSplitNoScrollLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initCyberSplitCards();
    setTimeout(initCyberSplitFields, 180);
  });
} else {
  initCyberSplitCards();
  setTimeout(initCyberSplitFields, 180);
}
