declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function modernFantasyProgLogin(): Record<string, unknown> {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "" as string,
    goStep2() {
      if ((this as { email: string }).email.trim()) (this as { step: number }).step = 2;
    },
    handleSubmit(e: Event) {
      e.preventDefault();
      const t = this as { loading: boolean };
      if (t.loading) return;
      t.loading = true;
      setTimeout(() => { t.loading = false; }, 1200);
    },
  };
}

function initFantasyEntrance(): void {
  if (typeof gsap === "undefined") return;
  const box = document.querySelector("[data-gsap-box]");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 20 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initFantasyFieldGSAP(): void {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".fantasy-prog-field[data-gsap-field]").forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".fantasy-prog-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".fantasy-prog-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("modernFantasyProgLogin", modernFantasyProgLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initFantasyEntrance(); setTimeout(initFantasyFieldGSAP, 280); });
} else {
  initFantasyEntrance();
  setTimeout(initFantasyFieldGSAP, 280);
}
