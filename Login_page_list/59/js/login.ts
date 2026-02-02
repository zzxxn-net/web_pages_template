declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function senseTechSplitLogin(): Record<string, unknown> {
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

function initSenseEntrance(): void {
  if (typeof gsap === "undefined") return;
  const cards = document.querySelectorAll(".sense-split-card[data-gsap-card]");
  gsap.set(cards, { opacity: 0, y: 20 });
  gsap.to(cards, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" });
}

function initSenseFieldGSAP(): void {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".sense-split-field[data-gsap-field]").forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".sense-split-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".sense-split-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("senseTechSplitLogin", senseTechSplitLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initSenseEntrance(); setTimeout(initSenseFieldGSAP, 250); });
} else {
  initSenseEntrance();
  setTimeout(initSenseFieldGSAP, 250);
}
