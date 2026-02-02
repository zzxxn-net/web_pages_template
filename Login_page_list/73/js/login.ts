declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function cyberAsymStateLogin(): Record<string, unknown> {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    success: false,
    focusField: "" as string,
    errorField: "" as string,
    setFocus(f: string): void {
      (this as { focusField: string; errorField: string }).focusField = f;
      (this as { errorField: string }).errorField = "";
    },
    clearFocus(): void {
      (this as { focusField: string }).focusField = "";
    },
    handleSubmit(e: Event): void {
      e.preventDefault();
      const t = this as { loading: boolean; success: boolean; errorField: string };
      if (t.loading) return;
      t.loading = true;
      t.success = false;
      t.errorField = "";
      setTimeout(() => {
        t.loading = false;
        t.success = true;
        setTimeout(() => { (t as { success: boolean }).success = false; }, 1600);
      }, 1000);
    },
  };
}

function initCyberAsymWrap(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, x: -20 });
  gsap.to(wrap, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
}

function initCyberAsymBrand(): void {
  if (typeof gsap === "undefined") return;
  const brand = document.querySelector("[data-gsap-brand]");
  if (!brand) return;
  gsap.set(brand, { opacity: 0, x: -12 });
  gsap.to(brand, { opacity: 1, x: 0, duration: 0.45, delay: 0.08, ease: "power2.out" });
}

function initCyberAsymCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, x: 12 });
  gsap.to(card, { opacity: 1, x: 0, duration: 0.45, delay: 0.12, ease: "power2.out" });
}

function initCyberAsymFields(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".cyber-asym-field[data-gsap-field]");
  fields.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      const w = inp.closest(".cyber-asym-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.2, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      const w = inp.closest(".cyber-asym-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.18, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("cyberAsymStateLogin", cyberAsymStateLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initCyberAsymWrap();
    setTimeout(() => {
      initCyberAsymBrand();
      initCyberAsymCard();
      initCyberAsymFields();
    }, 100);
  });
} else {
  initCyberAsymWrap();
  setTimeout(() => {
    initCyberAsymBrand();
    initCyberAsymCard();
    initCyberAsymFields();
  }, 100);
}
