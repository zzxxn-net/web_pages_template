declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function cyberMicroLogin(): Record<string, unknown> {
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
      setTimeout(() => { self.loading = false; }, 1200);
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const box = document.querySelector(".login-cyber-micro__box");
  const head = document.querySelector(".login-cyber-micro__head");
  const form = document.querySelector(".login-cyber-micro__form");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 16 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
  if (head) {
    gsap.set(head, { opacity: 0 });
    gsap.to(head, { opacity: 1, duration: 0.35, delay: 0.06, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0 });
    gsap.to(form, { opacity: 1, duration: 0.35, delay: 0.1, ease: "power2.out" });
  }
}

function initMicroField(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".cyber-micro-field[data-gsap-field]");
  fields.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const wrap = this.closest(".cyber-micro-field");
      if (wrap) gsap.to(wrap, { scale: 1.01, duration: 0.2, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const wrap = this.closest(".cyber-micro-field");
      if (wrap) gsap.to(wrap, { scale: 1, duration: 0.18, ease: "power2.in" });
    });
  });
}

function initMicroBtn(): void {
  const btn = document.querySelector(".cyber-micro-btn[data-micro-btn]");
  if (!btn || typeof gsap === "undefined") return;
  btn.addEventListener("click", function (this: HTMLElement) {
    gsap.to(this, { scale: 0.98, duration: 0.08, yoyo: true, repeat: 1 });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("cyberMicroLogin", cyberMicroLogin as () => Record<string, unknown>);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEntrance();
    setTimeout(() => { initMicroField(); initMicroBtn(); }, 300);
  });
} else {
  initEntrance();
  setTimeout(() => { initMicroField(); initMicroBtn(); }, 300);
}
