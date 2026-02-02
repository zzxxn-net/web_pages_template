function darkSplitLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit: function(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function() { self.loading = false; }, 1200);
    },
  };
}
function initEntrance() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector(".login-dark-split__wrap");
  var cardBrand = document.querySelector(".dark-split-card--brand");
  var cardForm = document.querySelector(".dark-split-card--form");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (cardBrand) {
    gsap.set(cardBrand, { opacity: 0, x: -24 });
    gsap.to(cardBrand, { opacity: 1, x: 0, duration: 0.45, delay: 0.08, ease: "power2.out" });
  }
  if (cardForm) {
    gsap.set(cardForm, { opacity: 0, x: 24 });
    gsap.to(cardForm, { opacity: 1, x: 0, duration: 0.45, delay: 0.12, ease: "power2.out" });
  }
}
function initFocusAnim() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".dark-split-field");
  fields.forEach(function(el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function() {
      gsap.to(el, { scale: 1.01, duration: 0.25, ease: "power2.out" });
    });
    input.addEventListener("blur", function() {
      gsap.to(el, { scale: 1, duration: 0.25, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("darkSplitLogin", darkSplitLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initEntrance();
    setTimeout(initFocusAnim, 600);
  });
} else {
  initEntrance();
  setTimeout(initFocusAnim, 600);
}
