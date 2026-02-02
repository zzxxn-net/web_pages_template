/**
 * Login page — Design 23: Modern Fantasy · Asymmetric · State change emphasis
 * Alpine.js + GSAP entrance (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function fantasyAsymLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  focusEmail: boolean;
  focusPassword: boolean;
  errorEmail: boolean;
  errorPassword: boolean;
  handleSubmit: (e: Event) => void;
} {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusEmail: false,
    focusPassword: false,
    errorEmail: false,
    errorPassword: false,

    handleSubmit(e: Event): void {
      e.preventDefault();
      if (this.loading) return;
      this.errorEmail = false;
      this.errorPassword = false;
      if (!this.email.trim()) this.errorEmail = true;
      if (!this.password) this.errorPassword = true;
      if (this.errorEmail || this.errorPassword) return;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1200);
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const visual = document.querySelector(".login-fantasy-asym__visual");
  const formSection = document.querySelector(".login-fantasy-asym__form-section");
  const shape = document.querySelector("[data-shape]");
  if (!visual || !formSection) return;
  gsap.set(visual, { opacity: 0, x: -24 });
  gsap.set(formSection, { opacity: 0, x: 20 });
  if (shape) gsap.set(shape, { scale: 0.8, opacity: 0 });
  gsap.to(visual, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
  gsap.to(formSection, { opacity: 1, x: 0, duration: 0.5, delay: 0.08, ease: "power2.out" });
  if (shape) gsap.to(shape, { scale: 1, opacity: 0.6, duration: 0.6, delay: 0.15, ease: "power2.out" });
}

if (typeof Alpine !== "undefined") Alpine.data("fantasyAsymLogin", fantasyAsymLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
