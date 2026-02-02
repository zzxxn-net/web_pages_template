/**
 * Login page — Design 12: Emotional Tech · Asymmetric · GSAP smooth transition
 * Alpine.js + GSAP entrance (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function emotionalAsymLogin(): Record<string, unknown> & {
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
  const visual = document.querySelector(".login-emotional-asym__visual");
  const panel = document.querySelector(".login-emotional-asym__panel");
  if (!visual || !panel) return;
  gsap.set(visual, { opacity: 0, x: -24 });
  gsap.set(panel, { opacity: 0, x: 24 });
  gsap.to(visual, {
    opacity: 1,
    x: 0,
    duration: 0.55,
    delay: 0.08,
    ease: "power2.out",
  });
  gsap.to(panel, {
    opacity: 1,
    x: 0,
    duration: 0.55,
    delay: 0.18,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("emotionalAsymLogin", emotionalAsymLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
