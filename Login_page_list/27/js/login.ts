/**
 * Login page — Design 27: Cyber Minimal · Asymmetric · GSAP smooth transitions
 * Alpine.js + GSAP (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function cyberAsymLogin(): Record<string, unknown> & {
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
  const formArea = document.querySelector(".login-cyber-asym__form-area");
  const side = document.querySelector(".login-cyber-asym__side");
  const line = document.querySelector("[data-gsap-line]");
  if (!formArea || !side) return;
  gsap.set(formArea, { opacity: 0, x: -20 });
  gsap.set(side, { opacity: 0, x: 16 });
  gsap.to(formArea, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
  gsap.to(side, { opacity: 1, x: 0, duration: 0.5, delay: 0.1, ease: "power2.out" });
  if (line) {
    gsap.set(line, { scaleX: 0 });
    gsap.to(line, { scaleX: 1, duration: 0.5, delay: 0.25, ease: "power2.out" });
  }
}

if (typeof Alpine !== "undefined") Alpine.data("cyberAsymLogin", cyberAsymLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
