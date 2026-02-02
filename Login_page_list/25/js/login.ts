/**
 * Login page — Design 25: Dark Archive · Micro-interaction · Scroll-free fixed flow
 * Alpine.js + GSAP micro (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function archiveMicroLogin(): Record<string, unknown> & {
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
  const wrap = document.querySelector(".login-archive-micro__wrap");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 8 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
}

function initMicro(): void {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll("[data-archive-field]").forEach((el) => {
    const input = (el as HTMLElement).querySelector("input");
    if (!input) return;
    input.addEventListener("focus", () => {
      gsap.to(el, { boxShadow: "0 0 0 1px rgba(180,160,140,0.4)", duration: 0.2 });
    });
    input.addEventListener("blur", () => {
      gsap.to(el, { boxShadow: "none", duration: 0.2 });
    });
  });
  document.querySelectorAll(".archive-micro-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.02, duration: 0.15, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.15 });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("archiveMicroLogin", archiveMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initEntrance(); initMicro(); });
} else {
  initEntrance();
  initMicro();
}
