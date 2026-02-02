declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: {
  set: (el: Element, o: object) => void;
  to: (el: Element, o: object, vars?: { duration?: number; delay?: number; ease?: string }) => void;
};
declare const document: Document;

function expMicroLogin(): Record<string, unknown> {
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
      setTimeout(() => {
        (t as { loading: boolean }).loading = false;
      }, 1200);
    },
  };
}

function initExpBg(): void {
  if (typeof gsap === "undefined") return;
  const bg = document.querySelector("[data-gsap-bg]");
  if (!bg) return;
  gsap.set(bg, { opacity: 0 });
  gsap.to(bg, { opacity: 1, duration: 0.5, ease: "power2.out" });
}

function initExpWrap(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, scale: 0.96 });
  gsap.to(wrap, { opacity: 1, scale: 1, duration: 0.5, delay: 0.05, ease: "power2.out" });
}

function initExpCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 10 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.45, delay: 0.08, ease: "power2.out" });
}

function initExpFields(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".exp-field[data-gsap-field]");
  fields.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      const w = inp.closest(".exp-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.22, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      const w = inp.closest(".exp-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("expMicroLogin", expMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initExpBg();
    initExpWrap();
    setTimeout(() => {
      initExpCard();
      initExpFields();
    }, 60);
  });
} else {
  initExpBg();
  initExpWrap();
  setTimeout(() => {
    initExpCard();
    initExpFields();
  }, 60);
}
