/**
 * Login page — Design 14: Experimental Interface · Progressive Form · GSAP smooth transition
 */
function expProgLogin() {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    goStep2() {
      if (!this.email.trim())
        return;
      const panel1 = document.querySelector('.exp-panel[data-step="1"]');
      const panel2 = document.querySelector('.exp-panel[data-step="2"]');
      if (typeof gsap === "undefined" || !panel1 || !panel2) {
        this.step = 2;
        return;
      }
      gsap.to(panel1, {
        opacity: 0,
        y: -8,
        scale: 0.98,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          this.step = 2;
          gsap.set(panel2, { opacity: 0, y: 12 });
          gsap.to(panel2, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: 0.05,
            ease: "power2.out"
          });
        }
      });
    },
    goStep1() {
      const panel1 = document.querySelector('.exp-panel[data-step="1"]');
      const panel2 = document.querySelector('.exp-panel[data-step="2"]');
      if (typeof gsap === "undefined" || !panel1 || !panel2) {
        this.step = 1;
        return;
      }
      gsap.to(panel2, {
        opacity: 0,
        y: 8,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          this.step = 1;
          gsap.set(panel1, { opacity: 0, y: -8 });
          gsap.to(panel1, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out"
          });
        }
      });
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
function initEntrance() {
  if (typeof gsap === "undefined")
    return;
  const wrap = document.querySelector(".login-exp-prog__wrap");
  const steps = document.querySelector(".login-exp-prog__steps");
  if (!wrap || !steps)
    return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.set(steps, { opacity: 0, x: -8 });
  gsap.to(wrap, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out"
  });
  gsap.to(steps, {
    opacity: 1,
    x: 0,
    duration: 0.45,
    delay: 0.1,
    ease: "power2.out"
  });
}
if (typeof Alpine !== "undefined") {
  Alpine.data("expProgLogin", expProgLogin);
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
