/**
 * Login page — Design 22: Futuristic Clean · Card-separated · Scroll-free fixed flow
 * Alpine.js + GSAP entrance (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function futureCardLogin(): Record<string, unknown> & {
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
  const brand = document.querySelector(".login-future-card__brand");
  const formCard = document.querySelector(".login-future-card__form-card");
  if (!brand || !formCard) return;
  gsap.set(brand, { opacity: 0, x: -10 });
  gsap.set(formCard, { opacity: 0, x: 10 });
  gsap.to(brand, { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" });
  gsap.to(formCard, { opacity: 1, x: 0, duration: 0.45, delay: 0.1, ease: "power2.out" });
}

if (typeof Alpine !== "undefined") Alpine.data("futureCardLogin", futureCardLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
