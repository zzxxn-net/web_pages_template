declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function expSingleGsapLogin(): Record<string, unknown> {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: "" as string,
    handleSubmit(e: Event): void {
      e.preventDefault();
      const t = this as { loading: boolean };
      if (t.loading) return;
      t.loading = true;
      setTimeout(() => { t.loading = false; }, 1200);
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector(".exp-single-card[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 24 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initFieldGSAP(): void {
  if (typeof gsap === "undefined") return;
  const list = document.querySelectorAll(".exp-single-field[data-gsap-field]");
  list.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".exp-single-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.28, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".exp-single-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.24, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("expSingleGsapLogin", expSingleGsapLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initEntrance(); setTimeout(initFieldGSAP, 320); });
} else {
  initEntrance();
  setTimeout(initFieldGSAP, 320);
}
