declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function senseFullStateLogin(): Record<string, unknown> {
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

function initSenseFullCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 24 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.52, ease: "power2.out" });
}

function initSenseFullFields(): void {
  if (typeof gsap === "undefined") return;
  const list = document.querySelectorAll(".sense-full-field[data-gsap-field]");
  list.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".sense-full-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    inp.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".sense-full-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.24, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("senseFullStateLogin", senseFullStateLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initSenseFullCard();
    setTimeout(initSenseFullFields, 220);
  });
} else {
  initSenseFullCard();
  setTimeout(initSenseFullFields, 220);
}
