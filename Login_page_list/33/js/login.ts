/**
 * Login page — Design 33: Cyber Minimal · Single-focus input flow · State change emphasis
 * Alpine.js + GSAP (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function cyberSingleLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  activeField: string;
  handleSubmit: (e: Event) => void;
} {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: "",

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
  const wrap = document.querySelector(".login-cyber-single__wrap");
  const card = document.querySelector(".cyber-single-card");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 14 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
  if (card) {
    gsap.set(card, { opacity: 0, scale: 0.98 });
    gsap.to(card, { opacity: 1, scale: 1, duration: 0.4, delay: 0.06, ease: "power2.out" });
  }
}

function initStateEmphasis(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".cyber-single-field");
  fields.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      gsap.to(el, { scale: 1.02, duration: 0.22, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      gsap.to(el, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("cyberSingleLogin", cyberSingleLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initStateEmphasis, 400);
  });
} else {
  initEntrance();
  setTimeout(initStateEmphasis, 400);
}
