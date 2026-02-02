/**
 * Login page — Design 1: Cyber Minimal
 * Alpine.js component + GSAP entrance, TypeScript
 */

declare const Alpine: {
  data: (name: string, fn: () => Record<string, unknown>) => void;
};
declare const gsap: typeof import("gsap");
declare const document: Document;

interface LoginCardState {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
}

function loginCard(): LoginCardState & {
  handleSubmit: (e: Event) => void;
  onInputFocus: (e: FocusEvent) => void;
  onInputBlur: (e: FocusEvent) => void;
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
      // MVP: simulate submit; replace with HTMX or fetch
      setTimeout(() => {
        this.loading = false;
      }, 1200);
    },

    onInputFocus(e: FocusEvent): void {
      const el = (e.target as HTMLElement);
      if (typeof gsap !== "undefined") {
        gsap.to(el, { duration: 0.2, ease: "power2.out", overwrite: true });
      }
    },

    onInputBlur(_e: FocusEvent): void {
      // Optional: blur state handling
    },
  };
}

// GSAP entrance animation (run after DOM ready)
function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector(".login-wrap");
  const card = document.querySelector(".login-card");
  if (!wrap || !card) return;

  gsap.set(wrap, { opacity: 0 });
  gsap.set(card, { opacity: 0, y: 16 });

  gsap.to(wrap, {
    opacity: 1,
    duration: 0.4,
    ease: "power2.out",
  });
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: 0.1,
    ease: "power2.out",
  });
}

// Alpine.js registration
if (typeof Alpine !== "undefined") {
  Alpine.data("loginCard", loginCard);
}

// DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
