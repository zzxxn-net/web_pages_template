/**
 * Login page — Design 20: Neo Brutalism · Micro-interaction · Input-reactive
 */
function brutalMicroLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    emailFocus: false,
    passwordFocus: false,
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
  const box = document.querySelector(".login-brutal-micro__box");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 10 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
}
function initInputReactive() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll("[data-brutal-field]").forEach((wrap) => {
    const input = wrap.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", () => { gsap.to(wrap, { scale: 1.02, duration: 0.2, ease: "power2.out" }); });
    input.addEventListener("blur", () => { gsap.to(wrap, { scale: 1, duration: 0.2, ease: "power2.out" }); });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("brutalMicroLogin", brutalMicroLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => { initEntrance(); initInputReactive(); });
else { initEntrance(); initInputReactive(); }
