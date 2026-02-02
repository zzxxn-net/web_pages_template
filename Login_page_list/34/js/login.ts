/**
 * Login page — Design 34: Experimental Interface · Micro-interaction · Scroll-free fixed flow
 * Alpine.js + GSAP (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function expMicroLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  handleSubmit: (e: Event) => void;
} {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,

    handleSubmit(e: Event): void {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1200);
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const inner = document.querySelector(".login-exp-micro__inner");
  const card = document.querySelector(".exp-micro-card");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, scale: 0.96 });
  gsap.to(inner, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
  if (card) {
    gsap.set(card, { rotation: -2 });
    gsap.to(card, { rotation: -0.5, duration: 0.5, delay: 0.05, ease: "power2.out" });
  }
}

function initMicroLines(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".exp-micro-field[data-exp-field]");
  fields.forEach((el) => {
    const input = el.querySelector("input[type='email'], input[name='password']");
    const line = el.querySelector(".exp-micro-field__line");
    if (!input || !line) return;
    input.addEventListener("focus", function () {
      gsap.to(line, { width: "100%", duration: 0.28, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      gsap.to(line, { width: 0, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("expMicroLogin", expMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initMicroLines, 350);
  });
} else {
  initEntrance();
  setTimeout(initMicroLines, 350);
}
