declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function futureSingleLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: "",
    handleSubmit(e: Event) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      const self = this;
      setTimeout(function () { self.loading = false; }, 1200);
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector(".login-future-single__wrap");
  const card = document.querySelector(".future-single-card");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (card) {
    gsap.set(card, { opacity: 0, scale: 0.98 });
    gsap.to(card, { opacity: 1, scale: 1, duration: 0.42, delay: 0.06, ease: "power2.out" });
  }
}

function initFocusGSAP() {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".future-single-field[data-future-field]");
  fields.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const f = this.closest(".future-single-field");
      if (f) gsap.to(f, { scale: 1.02, duration: 0.28, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const f = this.closest(".future-single-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.26, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("futureSingleLogin", futureSingleLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEntrance();
    setTimeout(initFocusGSAP, 450);
  });
} else {
  initEntrance();
  setTimeout(initFocusGSAP, 450);
}
