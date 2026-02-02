/**
 * Login page — Design 7: Experimental Interface · Card · Input-reactive animation
 * Alpine.js + input-reactive (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function experimentalLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  handleSubmit: (e: Event) => void;
  reactIn: (e: FocusEvent) => void;
  reactOut: (e: FocusEvent) => void;
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

    reactIn(e: FocusEvent): void {
      const el = (e.target as HTMLElement).closest("[data-exp-field]") as HTMLElement | null;
      if (el) {
        el.classList.add("is-active");
        if (typeof gsap !== "undefined") {
          gsap.fromTo(el.querySelector(".exp-field__label"), { y: 0 }, { y: -24, duration: 0.25, ease: "power2.out" });
        }
      }
    },

    reactOut(e: FocusEvent): void {
      const el = (e.target as HTMLElement).closest("[data-exp-field]") as HTMLElement | null;
      if (el) el.classList.remove("is-active");
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector(".login-exp__card");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.98 });
  gsap.to(card, {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("experimentalLogin", experimentalLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
