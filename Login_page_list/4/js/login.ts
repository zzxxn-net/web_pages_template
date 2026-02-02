/**
 * Login page — Design 4: Neo Brutalism · Progressive Form · State change emphasis
 * Alpine.js + GSAP step transition (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function progressiveLogin(): Record<string, unknown> & {
  step: number;
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  goStep2: () => void;
  handleSubmit: (e: Event) => void;
  onInputFocus: () => void;
} {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,

    goStep2(): void {
      if (!this.email.trim()) return;
      const panel1 = document.querySelector('.step-panel[data-step="1"]');
      if (typeof gsap !== "undefined" && panel1) {
        gsap.to(panel1, {
          opacity: 0,
          x: -20,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            this.step = 2;
            setTimeout(() => {
              const panel2 = document.querySelector('.step-panel[data-step="2"]');
              if (panel2 && typeof gsap !== "undefined") {
                gsap.set(panel2, { opacity: 0, x: 20 });
                gsap.to(panel2, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
              }
            }, 0);
          },
        });
      } else {
        this.step = 2;
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

    onInputFocus(): void {
      // optional: micro interaction on focus
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const box = document.querySelector(".login-progressive__box");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 12 });
  gsap.to(box, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("progressiveLogin", progressiveLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
