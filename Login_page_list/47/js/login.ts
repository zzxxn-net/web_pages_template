declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function futureAsymLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    handleSubmit(e: Event) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      const self = this;
      setTimeout(function () {
        self.loading = false;
      }, 1200);
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  const grid = document.querySelector(".login-future-asym__grid");
  const brand = document.querySelector(".future-asym-brand");
  const panel = document.querySelector(".future-asym-panel");
  if (!grid) return;
  gsap.set(grid, { opacity: 0, y: 20 });
  gsap.to(grid, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (brand) {
    gsap.set(brand, { opacity: 0, x: -16 });
    gsap.to(brand, { opacity: 1, x: 0, duration: 0.45, delay: 0.06, ease: "power2.out" });
  }
  if (panel) {
    gsap.set(panel, { opacity: 0, x: 16 });
    gsap.to(panel, { opacity: 1, x: 0, duration: 0.45, delay: 0.1, ease: "power2.out" });
  }
}

function initInputGSAP() {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".future-asym-field[data-gsap-field]");
  fields.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const f = this.closest(".future-asym-field");
      if (f) gsap.to(f, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const f = this.closest(".future-asym-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("futureAsymLogin", futureAsymLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEntrance();
    setTimeout(initInputGSAP, 350);
  });
} else {
  initEntrance();
  setTimeout(initInputGSAP, 350);
}
