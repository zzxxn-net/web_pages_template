declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function futureFullGSAPLogin(): Record<string, unknown> {
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

function initFutureFullCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 22 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.52, ease: "power2.out" });
}

function initFutureFullFields(): void {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".future-full-field[data-gsap-field]").forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      const w = inp.closest(".future-full-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      const w = inp.closest(".future-full-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.24, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("futureFullGSAPLogin", futureFullGSAPLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initFutureFullCard();
    setTimeout(initFutureFullFields, 220);
  });
} else {
  initFutureFullCard();
  setTimeout(initFutureFullFields, 220);
}
