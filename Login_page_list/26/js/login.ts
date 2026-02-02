/**
 * Login page — Design 26: Sensible Tech · Single focus · Input-reactive animation
 * Alpine.js + GSAP (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function senseSingleLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  activeField: string | null;
  handleSubmit: (e: Event) => void;
  focusField: (name: string) => void;
  blurField: () => void;
} {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: null as string | null,

    handleSubmit(e: Event): void {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 1200);
    },

    focusField(name: string): void {
      this.activeField = name;
      const targetId = name === "email" ? "sense-email" : "sense-pw";
      const activeEl = document.getElementById(targetId)?.closest("[data-sense-focus]") as HTMLElement | null;
      document.querySelectorAll("[data-sense-focus]").forEach((el) => {
        if (el === activeEl) {
          el.classList.add("is-active");
          if (typeof gsap !== "undefined") gsap.to(el, { scale: 1.02, opacity: 1, duration: 0.3, ease: "power2.out" });
        } else {
          el.classList.remove("is-active");
          if (typeof gsap !== "undefined") gsap.to(el, { scale: 1, opacity: 0.9, duration: 0.25, ease: "power2.out" });
        }
      });
    },

    blurField(): void {
      const active = document.activeElement as HTMLElement | null;
      if (!active || !active.closest("[data-sense-focus]")) {
        document.querySelectorAll("[data-sense-focus].is-active").forEach((el) => {
          el.classList.remove("is-active");
          if (typeof gsap !== "undefined") gsap.to(el, { scale: 1, opacity: 0.9, duration: 0.25 });
        });
        this.activeField = null;
      }
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector(".sense-single-card");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 14 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

if (typeof Alpine !== "undefined") Alpine.data("senseSingleLogin", senseSingleLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
