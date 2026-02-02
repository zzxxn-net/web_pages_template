declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function fantasyAsymInputLogin(): Record<string, unknown> {
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

function initFantasyAsymWrap(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 20 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initFantasyAsymSideForm(): void {
  if (typeof gsap === "undefined") return;
  const side = document.querySelector("[data-gsap-side]");
  const form = document.querySelector("[data-gsap-form]");
  if (side) {
    gsap.set(side, { opacity: 0, x: -12 });
    gsap.to(side, { opacity: 1, x: 0, duration: 0.48, delay: 0.08, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0, x: 12 });
    gsap.to(form, { opacity: 1, x: 0, duration: 0.48, delay: 0.12, ease: "power2.out" });
  }
}

function initFantasyAsymFields(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".fantasy-asym-field[data-gsap-field]");
  fields.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      const w = inp.closest(".fantasy-asym-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      const w = inp.closest(".fantasy-asym-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("fantasyAsymInputLogin", fantasyAsymInputLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initFantasyAsymWrap();
    setTimeout(() => { initFantasyAsymSideForm(); initFantasyAsymFields(); }, 200);
  });
} else {
  initFantasyAsymWrap();
  setTimeout(() => { initFantasyAsymSideForm(); initFantasyAsymFields(); }, 200);
}
