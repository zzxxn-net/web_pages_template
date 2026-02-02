/**
 * Login page — Design 30: Modern Fantasy · Fullscreen · GSAP smooth transitions
 * Alpine.js + GSAP (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function fantasyFullGsapLogin(): Record<string, unknown> & {
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
  const center = document.querySelector(".fantasy-full-center");
  const title = document.querySelector(".fantasy-full-title");
  const fields = document.querySelectorAll("[data-fantasy-field]");
  const btn = document.querySelector(".fantasy-full-btn");
  if (!center) return;
  gsap.set(center, { opacity: 0, y: 18 });
  gsap.to(center, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
  if (title) {
    gsap.set(title, { opacity: 0, y: 8 });
    gsap.to(title, { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "power2.out" });
  }
  fields.forEach((el, i) => {
    gsap.set(el, { opacity: 0, y: 10 });
    gsap.to(el, { opacity: 1, y: 0, duration: 0.35, delay: 0.15 + i * 0.06, ease: "power2.out" });
  });
  if (btn) {
    gsap.set(btn, { opacity: 0, y: 8 });
    gsap.to(btn, { opacity: 1, y: 0, duration: 0.4, delay: 0.3, ease: "power2.out" });
  }
}

if (typeof Alpine !== "undefined") Alpine.data("fantasyFullGsapLogin", fantasyFullGsapLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
