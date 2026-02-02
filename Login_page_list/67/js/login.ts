declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function cyberSplitNoScrollLogin(): Record<string, unknown> {
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

function initCyberSplitCards(): void {
  if (typeof gsap === "undefined") return;
  const cards = document.querySelectorAll(".cyber-split-card[data-gsap-card]");
  gsap.set(cards, { opacity: 0, y: 14 });
  gsap.to(cards, { opacity: 1, y: 0, duration: 0.48, stagger: 0.1, ease: "power2.out" });
}

function initCyberSplitFields(): void {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".cyber-split-field[data-gsap-field]").forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".cyber-split-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.22, ease: "power2.out" });
    });
    inp.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".cyber-split-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("cyberSplitNoScrollLogin", cyberSplitNoScrollLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initCyberSplitCards();
    setTimeout(initCyberSplitFields, 180);
  });
} else {
  initCyberSplitCards();
  setTimeout(initCyberSplitFields, 180);
}
