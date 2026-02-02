declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function darkArchiveAsymLogin(): Record<string, unknown> {
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

function initAsymEntrance(): void {
  if (typeof gsap === "undefined") return;
  const visual = document.querySelector("[data-gsap-visual]");
  const form = document.querySelector("[data-gsap-form]");
  if (visual) {
    gsap.set(visual, { opacity: 0, x: -24 });
    gsap.to(visual, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0, x: 24 });
    gsap.to(form, { opacity: 1, x: 0, duration: 0.5, delay: 0.12, ease: "power2.out" });
  }
}

function initAsymFieldGSAP(): void {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".dark-asym-field[data-gsap-field]").forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".dark-asym-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".dark-asym-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("darkArchiveAsymLogin", darkArchiveAsymLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initAsymEntrance(); setTimeout(initAsymFieldGSAP, 280); });
} else {
  initAsymEntrance();
  setTimeout(initAsymFieldGSAP, 280);
}
