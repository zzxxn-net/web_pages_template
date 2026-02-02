/**
 * Login page — Design 17: Futuristic Clean · Fullscreen · Input-reactive animation
 * Alpine.js + GSAP input/focus animation (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function futureFullLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  emailFocus: boolean;
  passwordFocus: boolean;
  handleSubmit: (e: Event) => void;
} {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    emailFocus: false,
    passwordFocus: false,

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
  const inner = document.querySelector(".login-future-full__inner");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 12 });
  gsap.to(inner, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
}

function initInputReactive(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll("[data-future-field]");
  fields.forEach((wrap) => {
    const input = wrap.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", () => {
      gsap.to(wrap, {
        boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.4)",
        duration: 0.25,
        ease: "power2.out",
      });
    });
    input.addEventListener("blur", () => {
      gsap.to(wrap, {
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        duration: 0.25,
        ease: "power2.out",
      });
    });
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("futureFullLogin", futureFullLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEntrance();
    initInputReactive();
  });
} else {
  initEntrance();
  initInputReactive();
}
