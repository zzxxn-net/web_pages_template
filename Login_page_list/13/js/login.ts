/**
 * Login page — Design 13: Neo Brutalism · Fullscreen Immersive · Focus-driven UX
 * Alpine.js + GSAP focus transitions (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function brutalFullLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  focusStep: number;
  onFocus: (step: number) => void;
  onBlur: (step: number) => void;
  focusPassword: () => void;
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

    onBlur(step: number): void {
      // Keep step visible briefly; could reset to 0 after delay for strict "focus only" hint
      // Here we leave step as-is so dot indicator stays until next focus
    },

    focusPassword(): void {
      const el = document.getElementById("password") as HTMLInputElement | null;
      if (el) el.focus();
    },

    submitIfReady(): void {
      if (this.email.trim() && this.password.length > 0 && !this.loading) {
        (document.querySelector(".login-brutal-full__form") as HTMLFormElement | null)?.requestSubmit();
      }
    },

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

function initFocusAnimations(): void {
  if (typeof gsap === "undefined") return;
  const inner = document.querySelector(".login-brutal-full__inner");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 12 });
  gsap.to(inner, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("brutalFullLogin", brutalFullLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFocusAnimations);
} else {
  initFocusAnimations();
}
