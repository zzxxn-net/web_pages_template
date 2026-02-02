/**
 * Login page — Design 24: Experimental Interface · Fullscreen · Focus-driven UX
 */
function expFullLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusStep: 0,
    onFocus(step) { this.focusStep = step; },
    onBlur() {},
    goPassword() {
      const el = document.getElementById("exp-pw");
      if (el) el.focus();
    },
    submitIfReady() {
      if (this.email.trim() && this.password.length && !this.loading) {
        document.querySelector(".login-exp-full__form")?.requestSubmit();
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 1200);
    },
  };
}
function initEntrance() {
  if (typeof gsap === "undefined") return;
  const inner = document.querySelector(".login-exp-full__inner");
  const grid = document.querySelector(".login-exp-full__grid");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 20 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (grid) {
    gsap.set(grid, { opacity: 0 });
    gsap.to(grid, { opacity: 1, duration: 0.8, delay: 0.1 });
  }
}
if (typeof Alpine !== "undefined") Alpine.data("expFullLogin", expFullLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
