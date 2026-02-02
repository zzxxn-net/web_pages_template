/**
 * Login page — Design 11: Modern Fantasy · Full-screen immersive · Scroll-free
 * Alpine.js + GSAP entrance (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function fantasyFullLogin(): Record<string, unknown> & {
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
  const center = document.querySelector(".login-fantasy-full__center");
  if (!center) return;
  gsap.set(center, { opacity: 0, y: 16 });
  gsap.to(center, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("fantasyFullLogin", fantasyFullLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
