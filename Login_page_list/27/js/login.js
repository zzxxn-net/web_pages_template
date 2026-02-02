function cyberAsymLogin() {
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
  var formArea = document.querySelector(".login-cyber-asym__form-area");
  var side = document.querySelector(".login-cyber-asym__side");
  var line = document.querySelector("[data-gsap-line]");
  if (!formArea || !side) return;
  gsap.set(formArea, { opacity: 0, x: -20 });
  gsap.set(side, { opacity: 0, x: 16 });
  gsap.to(formArea, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
  gsap.to(side, { opacity: 1, x: 0, duration: 0.5, delay: 0.1, ease: "power2.out" });
  if (line) {
    gsap.set(line, { scaleX: 0 });
    gsap.to(line, { scaleX: 1, duration: 0.5, delay: 0.25, ease: "power2.out" });
  }
}
if (typeof Alpine !== "undefined") Alpine.data("cyberAsymLogin", cyberAsymLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
