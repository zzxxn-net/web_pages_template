declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function emotionSingleFocusLogin(): Record<string, unknown> {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: "" as string,
    focusField: "" as string,
    handleSubmit(e: Event): void {
      e.preventDefault();
      const t = this as { loading: boolean };
      if (t.loading) return;
      t.loading = true;
      setTimeout(() => { t.loading = false; }, 1300);
    },
  };
}

function initEmotionSingleWrap(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 20 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
}

function initEmotionSingleCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.97 });
  gsap.to(card, { opacity: 1, scale: 1, duration: 0.5, delay: 0.08, ease: "power2.out" });
}

function initEmotionSingleFields(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".emotion-single-field[data-gsap-field]");
  fields.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      const w = inp.closest(".emotion-single-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.25, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      const w = inp.closest(".emotion-single-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("emotionSingleFocusLogin", emotionSingleFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEmotionSingleWrap();
    setTimeout(() => { initEmotionSingleCard(); initEmotionSingleFields(); }, 120);
  });
} else {
  initEmotionSingleWrap();
  setTimeout(() => { initEmotionSingleCard(); initEmotionSingleFields(); }, 120);
}
