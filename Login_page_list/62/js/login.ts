declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function neoBrutalSingleFocusLogin(): Record<string, unknown> {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: "" as string,
    handleSubmit(e: Event) {
      e.preventDefault();
      const t = this as { loading: boolean };
      if (t.loading) return;
      t.loading = true;
      setTimeout(() => { t.loading = false; }, 1200);
    },
  };
}

function initBrutalSingleEntrance(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 16 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initBrutalSingleFieldGSAP(): void {
  if (typeof gsap === "undefined") return;
  const list = document.querySelectorAll(".brutal-single-field[data-gsap-field]");
  list.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".brutal-single-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".brutal-single-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("neoBrutalSingleFocusLogin", neoBrutalSingleFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initBrutalSingleEntrance(); setTimeout(initBrutalSingleFieldGSAP, 260); });
} else {
  initBrutalSingleEntrance();
  setTimeout(initBrutalSingleFieldGSAP, 260);
}
