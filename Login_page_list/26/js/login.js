function senseSingleLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: null,
    handleSubmit: function(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function() { self.loading = false; }, 1200);
    },
    focusField: function(name) {
      this.activeField = name;
      var targetId = name === "email" ? "sense-email" : "sense-pw";
      var activeEl = document.getElementById(targetId) ? document.getElementById(targetId).closest("[data-sense-focus]") : null;
      document.querySelectorAll("[data-sense-focus]").forEach(function(el) {
        if (el === activeEl) {
          el.classList.add("is-active");
          if (typeof gsap !== "undefined") gsap.to(el, { scale: 1.02, opacity: 1, duration: 0.3, ease: "power2.out" });
        } else {
          el.classList.remove("is-active");
          if (typeof gsap !== "undefined") gsap.to(el, { scale: 1, opacity: 0.9, duration: 0.25, ease: "power2.out" });
        }
      });
    },
    blurField: function() {
      var active = document.activeElement;
      if (!active || !active.closest("[data-sense-focus]")) {
        document.querySelectorAll("[data-sense-focus].is-active").forEach(function(el) {
          el.classList.remove("is-active");
          if (typeof gsap !== "undefined") gsap.to(el, { scale: 1, opacity: 0.9, duration: 0.25 });
        });
        this.activeField = null;
      }
    },
  };
}
function initEntrance() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector(".sense-single-card");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 14 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
if (typeof Alpine !== "undefined") Alpine.data("senseSingleLogin", senseSingleLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
