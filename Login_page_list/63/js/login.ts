declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function expAsymFocusLogin(): Record<string, unknown> {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "" as string,
    focusPassword(): void {
      const pw = document.getElementById("ea63-pw");
      if (pw) (pw as HTMLElement).focus();
    },
    handleSubmit(e: Event): void {
      e.preventDefault();
      const t = this as { loading: boolean };
      if (t.loading) return;
      t.loading = true;
      setTimeout(() => { t.loading = false; }, 1200);
    },
  };
}

function initExpAsymEntrance(): void {
  if (typeof gsap === "undefined") return;
  const side = document.querySelector("[data-gsap-side]");
  const form = document.querySelector("[data-gsap-form]");
  if (side) {
    gsap.set(side, { opacity: 0, x: -20 });
    gsap.to(side, { opacity: 1, x: 0, duration: 0.48, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0, x: 20 });
    gsap.to(form, { opacity: 1, x: 0, duration: 0.48, delay: 0.1, ease: "power2.out" });
  }
}

function initExpAsymFieldGSAP(): void {
  if (typeof gsap === "undefined") return;
  const list = document.querySelectorAll(".exp-asym-field[data-gsap-field]");
  list.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".exp-asym-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.22, ease: "power2.out" });
    });
    inp.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".exp-asym-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.18, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("expAsymFocusLogin", expAsymFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initExpAsymEntrance(); setTimeout(initExpAsymFieldGSAP, 260); });
} else {
  initExpAsymEntrance();
  setTimeout(initExpAsymFieldGSAP, 260);
}
