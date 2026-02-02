/**
 * Login page — Design 32: Dark Archive · Card Split Layout · Focus-movement UX
 * Alpine.js + GSAP (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function darkSplitLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  focusField: string;
  handleSubmit: (e: Event) => void;
} {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",

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
  const wrap = document.querySelector(".login-dark-split__wrap");
  const cardBrand = document.querySelector(".dark-split-card--brand");
  const cardForm = document.querySelector(".dark-split-card--form");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (cardBrand) {
    gsap.set(cardBrand, { opacity: 0, x: -24 });
    gsap.to(cardBrand, { opacity: 1, x: 0, duration: 0.45, delay: 0.08, ease: "power2.out" });
  }
  if (cardForm) {
    gsap.set(cardForm, { opacity: 0, x: 24 });
    gsap.to(cardForm, { opacity: 1, x: 0, duration: 0.45, delay: 0.12, ease: "power2.out" });
  }
}

function initFocusAnim(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".dark-split-field");
  fields.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      gsap.to(el, { scale: 1.01, duration: 0.25, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      gsap.to(el, { scale: 1, duration: 0.25, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("darkSplitLogin", darkSplitLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initFocusAnim, 600);
  });
} else {
  initEntrance();
  setTimeout(initFocusAnim, 600);
}
