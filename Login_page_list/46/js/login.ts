declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function darkFullLogin() {
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
  const inner = document.querySelector(".login-dark-full__inner");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 24 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initFocusGSAP() {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".dark-full-field[data-gsap-field]");
  fields.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const f = this.closest(".dark-full-field");
      if (f) gsap.to(f, { scale: 1.01, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const f = this.closest(".dark-full-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("darkFullLogin", darkFullLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEntrance();
    setTimeout(initFocusGSAP, 350);
  });
} else {
  initEntrance();
  setTimeout(initFocusGSAP, 350);
}
