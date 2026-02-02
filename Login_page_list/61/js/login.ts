declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function cyberMinimalFullLogin(): Record<string, unknown> {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "" as string,
    handleSubmit(e: Event) {
      e.preventDefault();
      const t = this as { loading: boolean };
      if (t.loading) return;
      t.loading = true;
      setTimeout(() => { t.loading = false; }, 1200);
    },
  };
}

function initCyberEntrance(): void {
  if (typeof gsap === "undefined") return;
  const el = document.querySelector("[data-gsap-inner]");
  if (!el) return;
  gsap.set(el, { opacity: 0, y: 12 });
  gsap.to(el, { opacity: 1, y: 0, duration: 0.48, ease: "power2.out" });
}

function initCyberFieldGSAP(): void {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".cyber-full-field[data-gsap-field]").forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".cyber-full-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.22, ease: "power2.out" });
    });
    inp.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".cyber-full-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.18, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("cyberMinimalFullLogin", cyberMinimalFullLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initCyberEntrance(); setTimeout(initCyberFieldGSAP, 220); });
} else {
  initCyberEntrance();
  setTimeout(initCyberFieldGSAP, 220);
}
