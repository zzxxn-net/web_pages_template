/**
 * Login page — Design 8: Dark Archive · Asymmetric · Scroll-free fixed flow
 * Alpine.js + GSAP entrance (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function archiveLogin(): Record<string, unknown> & {
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
  const strip = document.querySelector(".login-archive__strip");
  const card = document.querySelector(".login-archive__card");
  if (!strip || !card) return;
  gsap.set(strip, { opacity: 0, x: -20 });
  gsap.set(card, { opacity: 0, x: 20 });
  gsap.to(strip, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    delay: 0.1,
    ease: "power2.out",
  });
  gsap.to(card, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    delay: 0.2,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("archiveLogin", archiveLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
