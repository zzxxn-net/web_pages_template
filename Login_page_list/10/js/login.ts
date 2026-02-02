/**
 * Login page — Design 10: Futuristic Clean · Single focus · Input-reactive
 * Alpine.js + GSAP focus transition (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function futureFocusLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  setActive: (e: FocusEvent) => void;
  clearActive: () => void;
  handleSubmit: (e: Event) => void;
} {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,

    setActive(e: FocusEvent): void {
      const el = (e.target as HTMLElement).closest("[data-focus-field]") as HTMLElement | null;
      const prev = document.querySelector("[data-focus-field].is-active") as HTMLElement | null;
      if (prev && prev !== el && typeof gsap !== "undefined") {
        gsap.to(prev, { scale: 1, opacity: 0.88, duration: 0.25, ease: "power2.out" });
      }
      if (el) {
        el.classList.add("is-active");
        if (typeof gsap !== "undefined") {
          gsap.fromTo(el, { scale: 1, opacity: 0.88 }, { scale: 1.02, opacity: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    clearActive(): void {
      const el = document.activeElement as HTMLElement | null;
      const inside = el?.closest("[data-focus-field]");
      if (!inside) {
        document.querySelectorAll("[data-focus-field].is-active").forEach((node) => {
          (node as HTMLElement).classList.remove("is-active");
          if (typeof gsap !== "undefined") {
            gsap.to(node, { scale: 1, opacity: 0.88, duration: 0.25, ease: "power2.out" });
          }
        });
      }
    },

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
  const center = document.querySelector(".login-future-focus__center");
  if (!center) return;
  gsap.set(center, { opacity: 0, y: 14 });
  gsap.to(center, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("futureFocusLogin", futureFocusLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
