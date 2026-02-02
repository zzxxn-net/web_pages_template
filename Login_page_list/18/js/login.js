/**
 * Login page — Design 18: Emotional Tech · Fullscreen · GSAP smooth transition
 */
function emotionFullLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
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
  const bg = document.querySelector(".login-emotion-full__bg");
  const inner = document.querySelector(".login-emotion-full__inner");
  const fields = document.querySelectorAll(".emotion-full-field");
  if (!bg || !inner) return;
  gsap.set(bg, { opacity: 0 });
  gsap.set(inner, { opacity: 0, y: 24 });
  gsap.to(bg, { opacity: 1, duration: 0.6, ease: "power2.out" });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.55, delay: 0.15, ease: "power2.out" });
  if (fields.length) {
    gsap.set(fields, { opacity: 0, y: 12 });
    gsap.to(fields, { opacity: 1, y: 0, duration: 0.4, delay: 0.35, stagger: 0.08, ease: "power2.out" });
  }
}
if (typeof Alpine !== "undefined") Alpine.data("emotionFullLogin", emotionFullLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
