/**
 * Login page — Design 18: Emotional Tech · Fullscreen · GSAP smooth transition
 * Alpine.js + GSAP entrance (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function emotionFullLogin(): Record<string, unknown> & {
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
  const bg = document.querySelector(".login-emotion-full__bg");
  const inner = document.querySelector(".login-emotion-full__inner");
  const fields = document.querySelectorAll(".emotion-full-field");
  if (!bg || !inner) return;
  gsap.set(bg, { opacity: 0 });
  gsap.set(inner, { opacity: 0, y: 24 });
  gsap.to(bg, {
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
  });
  gsap.to(inner, {
    opacity: 1,
    y: 0,
    duration: 0.55,
    delay: 0.15,
    ease: "power2.out",
  });
  if (fields.length) {
    gsap.set(fields, { opacity: 0, y: 12 });
    gsap.to(fields, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      delay: 0.35,
      stagger: 0.08,
      ease: "power2.out",
    });
  }
}

if (typeof Alpine !== "undefined") {
  Alpine.data("emotionFullLogin", emotionFullLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
