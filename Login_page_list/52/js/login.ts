declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function fantasyCardFocusLogin(): Record<string, unknown> {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "" as string,
    handleSubmit(e: Event): void {
      e.preventDefault();
      const t = this as { loading: boolean };
      if (t.loading) return;
      t.loading = true;
      setTimeout(() => { t.loading = false; }, 1200);
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector(".login-fantasy-card__wrap");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 20 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  const brand = document.querySelector(".fantasy-card-brand[data-gsap-brand]");
  if (brand) {
    gsap.set(brand, { opacity: 0, x: -16 });
    gsap.to(brand, { opacity: 1, x: 0, duration: 0.42, delay: 0.06, ease: "power2.out" });
  }
  const form = document.querySelector(".fantasy-card-form[data-gsap-form]");
  if (form) {
    gsap.set(form, { opacity: 0, x: 16 });
    gsap.to(form, { opacity: 1, x: 0, duration: 0.42, delay: 0.1, ease: "power2.out" });
  }
}

function initFocusGSAP(): void {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".fantasy-card-field[data-gsap-field]").forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".fantasy-card-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".fantasy-card-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("fantasyCardFocusLogin", fantasyCardFocusLogin as () => Record<string, unknown>);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initEntrance(); setTimeout(initFocusGSAP, 350); });
} else {
  initEntrance();
  setTimeout(initFocusGSAP, 350);
}
