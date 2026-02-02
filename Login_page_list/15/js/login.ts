/**
 * Login page — Design 15: Modern Fantasy · Card-separated · State change emphasis
 * Alpine.js + GSAP entrance (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function fantasyCardLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  emailFocused: boolean;
  passwordFocused: boolean;
  handleSubmit: (e: Event) => void;
} {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    emailFocused: false,
    passwordFocused: false,

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
  const brand = document.querySelector(".login-fantasy__brand");
  const card = document.querySelector(".login-fantasy__card");
  if (!brand || !card) return;
  gsap.set(brand, { opacity: 0, y: -12 });
  gsap.set(card, { opacity: 0, y: 16 });
  gsap.to(brand, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: 0.12,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("fantasyCardLogin", fantasyCardLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
