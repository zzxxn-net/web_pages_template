function fantasyFullGsapLogin() {
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
  var center = document.querySelector(".fantasy-full-center");
  var title = document.querySelector(".fantasy-full-title");
  var fields = document.querySelectorAll("[data-fantasy-field]");
  var btn = document.querySelector(".fantasy-full-btn");
  if (!center) return;
  gsap.set(center, { opacity: 0, y: 18 });
  gsap.to(center, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
  if (title) {
    gsap.set(title, { opacity: 0, y: 8 });
    gsap.to(title, { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "power2.out" });
  }
  fields.forEach(function(el, i) {
    gsap.set(el, { opacity: 0, y: 10 });
    gsap.to(el, { opacity: 1, y: 0, duration: 0.35, delay: 0.15 + i * 0.06, ease: "power2.out" });
  });
  if (btn) {
    gsap.set(btn, { opacity: 0, y: 8 });
    gsap.to(btn, { opacity: 1, y: 0, duration: 0.4, delay: 0.3, ease: "power2.out" });
  }
}
if (typeof Alpine !== "undefined") Alpine.data("fantasyFullGsapLogin", fantasyFullGsapLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
