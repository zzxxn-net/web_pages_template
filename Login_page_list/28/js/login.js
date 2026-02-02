function brutalCardLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
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
  var brand = document.querySelector(".login-brutal-card__brand");
  var formCard = document.querySelector(".login-brutal-card__form-card");
  if (!brand || !formCard) return;
  gsap.set(brand, { opacity: 0, y: -12 });
  gsap.set(formCard, { opacity: 0, y: 12 });
  gsap.to(brand, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
  gsap.to(formCard, { opacity: 1, y: 0, duration: 0.4, delay: 0.08, ease: "power2.out" });
}
function initInputReactive() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll("[data-brutal-reactive]").forEach(function(el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function() {
      gsap.to(el, { scale: 1.02, duration: 0.2, ease: "power2.out" });
    });
    input.addEventListener("blur", function() {
      gsap.to(el, { scale: 1, duration: 0.2, ease: "power2.out" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("brutalCardLogin", brutalCardLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() { initEntrance(); initInputReactive(); });
} else {
  initEntrance();
  initInputReactive();
}
