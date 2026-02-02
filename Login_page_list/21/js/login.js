/**
 * Login page — Design 21: Dark Archive · Progressive Form · State change emphasis
 */
function archiveProgLogin() {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    goStep2() {
      if (!this.email.trim()) return;
      const p1 = document.querySelector('.archive-panel[data-step="1"]');
      const p2 = document.querySelector('.archive-panel[data-step="2"]');
      if (typeof gsap === "undefined" || !p1 || !p2) { this.step = 2; return; }
      gsap.to(p1, { opacity: 0, x: -12, duration: 0.25, ease: "power2.in", onComplete: () => {
        this.step = 2;
        gsap.set(p2, { opacity: 0, x: 12 });
        gsap.to(p2, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
      }});
    },
    goStep1() {
      const p1 = document.querySelector('.archive-panel[data-step="1"]');
      const p2 = document.querySelector('.archive-panel[data-step="2"]');
      if (typeof gsap === "undefined" || !p1 || !p2) { this.step = 1; return; }
      gsap.to(p2, { opacity: 0, x: 12, duration: 0.2, ease: "power2.in", onComplete: () => {
        this.step = 1;
        gsap.set(p1, { opacity: 0, x: -12 });
        gsap.to(p1, { opacity: 1, x: 0, duration: 0.28, ease: "power2.out" });
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
  const box = document.querySelector(".login-archive-prog__box");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 16 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
if (typeof Alpine !== "undefined") Alpine.data("archiveProgLogin", archiveProgLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
