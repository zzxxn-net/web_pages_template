declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function fantasyCardSplitLogin(): Record<string, unknown> {
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

function initFantasySplitEntrance(): void {
  if (typeof gsap === "undefined") return;
  const cardList = document.querySelectorAll(".fantasy-split-card[data-gsap-card]");
  gsap.set(cardList, { opacity: 0, y: 18 });
  gsap.to(cardList, { opacity: 1, y: 0, duration: 0.52, stagger: 0.12, ease: "power2.out" });
}

function initFantasySplitFieldGSAP(): void {
  if (typeof gsap === "undefined") return;
  const fieldList = document.querySelectorAll(".fantasy-split-field[data-gsap-field]");
  fieldList.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".fantasy-split-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    inp.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".fantasy-split-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("fantasyCardSplitLogin", fantasyCardSplitLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initFantasySplitEntrance(); setTimeout(initFantasySplitFieldGSAP, 280); });
} else {
  initFantasySplitEntrance();
  setTimeout(initFantasySplitFieldGSAP, 280);
}
