/**
 * Login page — Design 13: Neo Brutalism · Fullscreen Immersive · Focus-driven UX
 * Alpine.js + GSAP focus transitions (compiled from TypeScript)
 */
function brutalFullLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusStep: 0,
    onFocus(step) {
      this.focusStep = step;
    },
    onBlur(step) {},
    focusPassword() {
      const el = document.getElementById("password");
      if (el)
        el.focus();
    },
    submitIfReady() {
      if (this.email.trim() && this.password.length > 0 && !this.loading) {
        document.querySelector(".login-brutal-full__form")?.requestSubmit();
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading)
        return;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1200);
    }
  };
}
function initFocusAnimations() {
  if (typeof gsap === "undefined")
    return;
  const inner = document.querySelector(".login-brutal-full__inner");
  if (!inner)
    return;
  gsap.set(inner, { opacity: 0, y: 12 });
  gsap.to(inner, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out"
  });
}
if (typeof Alpine !== "undefined") {
  Alpine.data("brutalFullLogin", brutalFullLogin);
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFocusAnimations);
} else {
  initFocusAnimations();
}
