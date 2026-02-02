function brutalAsymLogin() {
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
  var inner = document.querySelector(".login-brutal-asym__inner");
  var layout = document.querySelector(".brutal-asym-layout");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 20 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
  if (layout) {
    gsap.set(layout, { opacity: 0, scale: 0.98 });
    gsap.to(layout, { opacity: 1, scale: 1, duration: 0.35, delay: 0.06, ease: "power2.out" });
  }
}
if (typeof Alpine !== "undefined") Alpine.data("brutalAsymLogin", brutalAsymLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
