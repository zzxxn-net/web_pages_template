declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function darkCardFocusLogin(): Record<string, unknown> {
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

function initDarkCardWrap(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 12 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initDarkCardHead(): void {
  if (typeof gsap === "undefined") return;
  const head = document.querySelector("[data-gsap-head]");
  if (!head) return;
  gsap.set(head, { opacity: 0, y: -8 });
  gsap.to(head, { opacity: 1, y: 0, duration: 0.4, delay: 0.06, ease: "power2.out" });
}

function initDarkCardCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 10 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.45, delay: 0.12, ease: "power2.out" });
}

function initDarkCardFields(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".dark-card-field[data-gsap-field]");
  fields.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      const w = inp.closest(".dark-card-field");
      if (w) gsap.to(w, { borderColor: "rgba(180,160,140,0.6)", duration: 0.2, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      const w = inp.closest(".dark-card-field");
      if (w) gsap.to(w, { borderColor: "rgba(140,120,100,0.3)", duration: 0.18, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("darkCardFocusLogin", darkCardFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initDarkCardWrap();
    setTimeout(() => {
      initDarkCardHead();
      initDarkCardCard();
      initDarkCardFields();
    }, 100);
  });
} else {
  initDarkCardWrap();
  setTimeout(() => {
    initDarkCardHead();
    initDarkCardCard();
    initDarkCardFields();
  }, 100);
}
