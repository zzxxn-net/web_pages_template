/**
 * Login page — Design 24: Experimental Interface · Fullscreen · Focus-driven UX
 * Alpine.js + GSAP (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function expFullLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  focusStep: number;
  onFocus: (step: number) => void;
  onBlur: (step: number) => void;
  goPassword: () => void;
  submitIfReady: () => void;
  handleSubmit: (e: Event) => void;
} {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusStep: 0,

    onFocus(step: number): void {
      this.focusStep = step;
    },

    onBlur(_step: number): void {},

    goPassword(): void {
      const el = document.getElementById("exp-pw") as HTMLInputElement | null;
      if (el) el.focus();
    },

    submitIfReady(): void {
      if (this.email.trim() && this.password.length && !this.loading) {
        (document.querySelector(".login-exp-full__form") as HTMLFormElement | null)?.requestSubmit();
      }
    },

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
  const inner = document.querySelector(".login-exp-full__inner");
  const grid = document.querySelector(".login-exp-full__grid");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 20 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (grid) {
    gsap.set(grid, { opacity: 0 });
    gsap.to(grid, { opacity: 1, duration: 0.8, delay: 0.1 });
  }
}

if (typeof Alpine !== "undefined") Alpine.data("expFullLogin", expFullLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
