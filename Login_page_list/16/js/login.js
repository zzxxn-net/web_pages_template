/**
 * Login page — Design 16: Dark Archive · Single-focus flow · GSAP smooth transition
 */
function archiveFocusLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: "",
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 1200);
    }
  };
}
function initEntrance() {
  if (typeof gsap === "undefined") return;
  const inner = document.querySelector(".login-archive-focus__inner");
  const fields = document.querySelectorAll("[data-archive-field]");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 20 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
  if (fields.length) {
    gsap.set(fields, { opacity: 0.6 });
    gsap.to(fields, { opacity: 1, duration: 0.4, delay: 0.2, stagger: 0.06, ease: "power2.out" });
  }
}
function initFocusTransitions() {
  if (typeof gsap === "undefined") return;
  const container = document.querySelector(".login-archive-focus__form");
  if (!container) return;
  container.addEventListener("focusin", (e) => {
    const target = e.target;
    const field = target.closest("[data-archive-field]");
    if (!field) return;
    gsap.to(field, { scale: 1.02, duration: 0.25, ease: "power2.out" });
  });
  container.addEventListener("focusout", (e) => {
    const target = e.target;
    const field = target.closest("[data-archive-field]");
    if (!field) return;
    gsap.to(field, { scale: 1, duration: 0.25, ease: "power2.out" });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("archiveFocusLogin", archiveFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initEntrance(); initFocusTransitions(); });
} else {
  initEntrance();
  initFocusTransitions();
}
