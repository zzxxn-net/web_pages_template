/**
 * Login page — Design 19: Cyber Minimal · Progressive Form · Input-reactive
 */
function cyberProgLogin() {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    emailFocus: false,
    passwordFocus: false,
    goStep2() {
      if (!this.email.trim()) return;
      const p1 = document.querySelector('.cyber-panel[data-step="1"]');
      const p2 = document.querySelector('.cyber-panel[data-step="2"]');
      if (typeof gsap === "undefined" || !p1 || !p2) { this.step = 2; return; }
      gsap.to(p1, { opacity: 0, x: -16, duration: 0.28, ease: "power2.in", onComplete: () => {
        this.step = 2;
        gsap.set(p2, { opacity: 0, x: 16 });
        gsap.to(p2, { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" });
      }});
    },
    goStep1() {
      const p1 = document.querySelector('.cyber-panel[data-step="1"]');
      const p2 = document.querySelector('.cyber-panel[data-step="2"]');
      if (typeof gsap === "undefined" || !p1 || !p2) { this.step = 1; return; }
      gsap.to(p2, { opacity: 0, x: 16, duration: 0.22, ease: "power2.in", onComplete: () => {
        this.step = 1;
        gsap.set(p1, { opacity: 0, x: -16 });
        gsap.to(p1, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
      }});
    },
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
  const box = document.querySelector(".login-cyber-prog__box");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 14 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initInputReactive() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll("[data-cyber-field]").forEach((wrap) => {
    const input = wrap.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", () => { gsap.to(wrap, { scale: 1.01, duration: 0.2, ease: "power2.out" }); });
    input.addEventListener("blur", () => { gsap.to(wrap, { scale: 1, duration: 0.2, ease: "power2.out" }); });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("cyberProgLogin", cyberProgLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => { initEntrance(); initInputReactive(); });
else { initEntrance(); initInputReactive(); }
