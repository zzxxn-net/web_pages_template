/**
 * Login page — Design 16: Dark Archive · Single-focus flow · GSAP smooth transition
 * Alpine.js + GSAP focus/entrance (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function archiveFocusLogin(): Record<string, unknown> & {
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
  const inner = document.querySelector(".login-archive-focus__inner");
  const fields = document.querySelectorAll("[data-archive-field]");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 20 });
  gsap.to(inner, {
    opacity: 1,
    y: 0,
    duration: 0.55,
    ease: "power2.out",
  });
  if (fields.length) {
    gsap.set(fields, { opacity: 0.6 });
    gsap.to(fields, {
      opacity: 1,
      duration: 0.4,
      delay: 0.2,
      stagger: 0.06,
      ease: "power2.out",
    });
  }
}

function initFocusTransitions(): void {
  if (typeof gsap === "undefined") return;
  const container = document.querySelector(".login-archive-focus__form");
  if (!container) return;
  container.addEventListener("focusin", (e: Event) => {
    const target = (e as FocusEvent).target as HTMLElement;
    const field = target.closest("[data-archive-field]");
    if (!field) return;
    gsap.to(field, {
      scale: 1.02,
      duration: 0.25,
      ease: "power2.out",
    });
  });
  container.addEventListener("focusout", (e: Event) => {
    const target = (e as FocusEvent).target as HTMLElement;
    const field = target.closest("[data-archive-field]");
    if (!field) return;
    gsap.to(field, {
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("archiveFocusLogin", archiveFocusLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEntrance();
    initFocusTransitions();
  });
} else {
  initEntrance();
  initFocusTransitions();
}
