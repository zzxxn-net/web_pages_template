/**
 * Login page — Design 6: Modern Fantasy · Single focus input flow · GSAP smooth
 * Alpine.js + GSAP smooth focus transition (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function fantasyLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  activeField: string | null;
  handleSubmit: (e: Event) => void;
  focusField: (e: FocusEvent, name: string) => void;
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
      setTimeout(() => {
        this.loading = false;
      }, 1200);
    },

    focusField(e: FocusEvent, name: string): void {
      const el = (e.target as HTMLElement).closest("[data-single-focus]") as HTMLElement | null;
      const prevActive = document.querySelector("[data-single-focus].is-active") as HTMLElement | null;
      if (prevActive && prevActive !== el && typeof gsap !== "undefined") {
        gsap.to(prevActive, { scale: 1, opacity: 0.85, duration: 0.3, ease: "power2.out" });
      }
      this.activeField = name;
      if (el) {
        el.classList.add("is-active");
        if (typeof gsap !== "undefined") {
          gsap.fromTo(el, { scale: 1, opacity: 0.85 }, { scale: 1.02, opacity: 1, duration: 0.35, ease: "power2.out" });
        }
      }
    },

    blurField(): void {
      const el = document.activeElement as HTMLElement | null;
      const container = el?.closest("[data-single-focus]");
      if (!container) {
        document.querySelectorAll("[data-single-focus].is-active").forEach((node) => {
          (node as HTMLElement).classList.remove("is-active");
          if (typeof gsap !== "undefined") {
            gsap.to(node, { scale: 1, opacity: 0.85, duration: 0.25, ease: "power2.out" });
          }
        });
        this.activeField = null;
      }
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector(".login-fantasy__card");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 16 });
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("fantasyLogin", fantasyLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
