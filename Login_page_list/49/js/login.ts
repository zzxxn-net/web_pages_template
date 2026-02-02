declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function emotionFullLogin(): Record<string, unknown> {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "" as string,
    handleSubmit(e: Event): void {
      e.preventDefault();
      if ((this as { loading: boolean }).loading) return;
      (this as { loading: boolean }).loading = true;
      const self = this as { loading: boolean };
      setTimeout(() => {
        self.loading = false;
      }, 1200);
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const inner = document.querySelector(".login-emotion-full__inner");
  const head = document.querySelector(".login-emotion-full__head");
  const form = document.querySelector(".login-emotion-full__form");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 24 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.52, ease: "power2.out" });
  if (head) {
    gsap.set(head, { opacity: 0, y: 12 });
    gsap.to(head, { opacity: 1, y: 0, duration: 0.4, delay: 0.08, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0 });
    gsap.to(form, { opacity: 1, duration: 0.4, delay: 0.14, ease: "power2.out" });
  }
}

function initInputReactive(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".emotion-full-field[data-gsap-field]");
  fields.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const wrap = this.closest(".emotion-full-field");
      if (wrap) gsap.to(wrap, { scale: 1.01, duration: 0.28, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const wrap = this.closest(".emotion-full-field");
      if (wrap) gsap.to(wrap, { scale: 1, duration: 0.24, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("emotionFullLogin", emotionFullLogin as () => Record<string, unknown>);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEntrance();
    setTimeout(initInputReactive, 400);
  });
} else {
  initEntrance();
  setTimeout(initInputReactive, 400);
}
