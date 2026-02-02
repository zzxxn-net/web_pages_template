declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function expCardLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
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
  const wrap = document.querySelector(".login-exp-card__wrap");
  const brand = document.querySelector(".exp-card-brand[data-gsap-brand]");
  const form = document.querySelector(".exp-card-form[data-gsap-form]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 20 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (brand) {
    gsap.set(brand, { opacity: 0, x: -16 });
    gsap.to(brand, { opacity: 1, x: 0, duration: 0.45, delay: 0.06, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0, x: 16 });
    gsap.to(form, { opacity: 1, x: 0, duration: 0.45, delay: 0.1, ease: "power2.out" });
  }
}

function initStateGSAP() {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".exp-card-field[data-gsap-field]");
  fields.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const f = this.closest(".exp-card-field");
      if (f) gsap.to(f, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const f = this.closest(".exp-card-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("expCardLogin", expCardLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEntrance();
    setTimeout(initStateGSAP, 350);
  });
} else {
  initEntrance();
  setTimeout(initStateGSAP, 350);
}
