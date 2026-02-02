function darkFullLogin() {
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
  var inner = document.querySelector(".login-dark-full__inner");
  var bg = document.querySelector(".login-dark-full__bg");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 18 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (bg) {
    gsap.set(bg, { opacity: 0 });
    gsap.to(bg, { opacity: 1, duration: 0.55, ease: "power2.out" });
  }
}
if (typeof Alpine !== "undefined") Alpine.data("darkFullLogin", darkFullLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
