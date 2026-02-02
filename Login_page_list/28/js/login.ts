/**
 * Login page — Design 28: Neo Brutalism · Card-separated · Input-reactive animation
 * Alpine.js + GSAP (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function brutalCardLogin(): Record<string, unknown> & {
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
      setTimeout(() => { this.loading = false; }, 1200);
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const brand = document.querySelector(".login-brutal-card__brand");
  const formCard = document.querySelector(".login-brutal-card__form-card");
  if (!brand || !formCard) return;
  gsap.set(brand, { opacity: 0, y: -12 });
  gsap.set(formCard, { opacity: 0, y: 12 });
  gsap.to(brand, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
  gsap.to(formCard, { opacity: 1, y: 0, duration: 0.4, delay: 0.08, ease: "power2.out" });
}

function initInputReactive(): void {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll("[data-brutal-reactive]").forEach((el) => {
    const input = (el as HTMLElement).querySelector("input");
    if (!input) return;
    input.addEventListener("focus", () => {
      gsap.to(el, { scale: 1.02, duration: 0.2, ease: "power2.out" });
    });
    input.addEventListener("blur", () => {
      gsap.to(el, { scale: 1, duration: 0.2, ease: "power2.out" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("brutalCardLogin", brutalCardLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initEntrance(); initInputReactive(); });
} else {
  initEntrance();
  initInputReactive();
}
