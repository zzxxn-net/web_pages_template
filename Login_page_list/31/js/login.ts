/**
 * Login page — Design 31: Sensible Tech · Progressive Form · GSAP smooth transitions
 * Alpine.js + GSAP (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function senseProgLogin(): Record<string, unknown> & {
  step: number;
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  goStep2: () => void;
  handleSubmit: (e: Event) => void;
} {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,

    goStep2(): void {
      if (!this.email.trim()) return;
      const panel1 = document.querySelector('.sense-prog-panel[data-step="1"]');
      if (typeof gsap !== "undefined" && panel1) {
        gsap.to(panel1, {
          opacity: 0,
          x: -20,
          duration: 0.28,
          ease: "power2.in",
          onComplete: () => {
            this.step = 2;
            setTimeout(() => {
              const panel2 = document.querySelector('.sense-prog-panel[data-step="2"]');
              if (panel2 && typeof gsap !== "undefined") {
                gsap.set(panel2, { opacity: 0, x: 20 });
                gsap.to(panel2, { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" });
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
      setTimeout(() => { this.loading = false; }, 1200);
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const box = document.querySelector(".login-sense-prog__box");
  const steps = document.querySelector(".sense-prog-steps");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 12 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (steps) {
    gsap.set(steps, { opacity: 0, scale: 0.95 });
    gsap.to(steps, { opacity: 1, scale: 1, duration: 0.4, delay: 0.08, ease: "power2.out" });
  }
}

if (typeof Alpine !== "undefined") Alpine.data("senseProgLogin", senseProgLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
