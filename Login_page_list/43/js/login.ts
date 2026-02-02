declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function emotionCardLogin() {
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
  const wrap = document.querySelector(".login-emotion-card__wrap");
  const brand = document.querySelector(".emotion-brand-card[data-gsap-brand]");
  const formCard = document.querySelector(".emotion-form-card[data-gsap-form]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 24 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
  if (brand) {
    gsap.set(brand, { opacity: 0, x: -20 });
    gsap.to(brand, { opacity: 1, x: 0, duration: 0.5, delay: 0.08, ease: "power2.out" });
  }
  if (formCard) {
    gsap.set(formCard, { opacity: 0, x: 20 });
    gsap.to(formCard, { opacity: 1, x: 0, duration: 0.5, delay: 0.12, ease: "power2.out" });
  }
}

function initFieldGSAP() {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".emotion-field[data-gsap-field]");
  fields.forEach((el, i) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const f = this.closest(".emotion-field");
      if (f) gsap.to(f, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const f = this.closest(".emotion-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
  const btn = document.querySelector(".emotion-btn[data-gsap-btn]");
  if (btn) {
    gsap.set(btn, { opacity: 0, y: 8 });
    gsap.to(btn, { opacity: 1, y: 0, duration: 0.35, delay: 0.4, ease: "power2.out" });
  }
}

if (typeof Alpine !== "undefined") Alpine.data("emotionCardLogin", emotionCardLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEntrance();
    setTimeout(initFieldGSAP, 400);
  });
} else {
  initEntrance();
  setTimeout(initFieldGSAP, 400);
}
