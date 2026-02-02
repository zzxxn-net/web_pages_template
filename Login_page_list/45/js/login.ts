declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function fantasyMicroLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    emailFocus: false,
    passwordFocus: false,
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
  const box = document.querySelector(".login-fantasy-micro__box");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 20 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initMicroGSAP() {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".fantasy-micro-field[data-gsap-field]");
  fields.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const f = this.closest(".fantasy-micro-field");
      if (f) gsap.to(f, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const f = this.closest(".fantasy-micro-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
  const toggle = document.querySelector(".fantasy-micro-field__toggle[data-gsap-toggle]");
  if (toggle) {
    toggle.addEventListener("mouseenter", function () {
      gsap.to(toggle, { scale: 1.05, duration: 0.2, ease: "power2.out" });
    });
    toggle.addEventListener("mouseleave", function () {
      gsap.to(toggle, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  }
  const btn = document.querySelector(".fantasy-micro-btn[data-gsap-btn]");
  if (btn) {
    btn.addEventListener("mouseenter", function () {
      gsap.to(btn, { scale: 1.03, duration: 0.22, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", function () {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  }
}

if (typeof Alpine !== "undefined") Alpine.data("fantasyMicroLogin", fantasyMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEntrance();
    setTimeout(initMicroGSAP, 350);
  });
} else {
  initEntrance();
  setTimeout(initMicroGSAP, 350);
}
