declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element | Element[], o: object) => void; to: (el: Element | Element[], o: object) => void };
declare const document: Document;

function darkArchProgInputLogin(): Record<string, unknown> {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "" as string,
    goStep2(): void {
      if (!(this as { email: string }).email.trim()) return;
      (this as { step: number }).step = 2;
    },
    handleSubmit(e: Event): void {
      e.preventDefault();
      const t = this as { loading: boolean };
      if (t.loading) return;
      t.loading = true;
      setTimeout(() => { t.loading = false; }, 1200);
    },
  };
}

function initArchProgBox(): void {
  if (typeof gsap === "undefined") return;
  const box = document.querySelector("[data-gsap-box]");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 20 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initArchProgPanels(): void {
  if (typeof gsap === "undefined") return;
  const panels = document.querySelectorAll("[data-gsap-panel]");
  panels.forEach((el) => {
    gsap.set(el, { opacity: 0, x: -8 });
    const obs = new MutationObserver(() => {
      const isHidden = (el as HTMLElement).classList.contains("is-hidden");
      gsap.to(el, { opacity: isHidden ? 0 : 1, x: isHidden ? -8 : 0, duration: 0.32, ease: "power2.out" });
    });
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
  });
}

function initArchProgFields(): void {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".arch-prog-field[data-gsap-field]").forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".arch-prog-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    inp.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".arch-prog-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("darkArchProgInputLogin", darkArchProgInputLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initArchProgBox();
    setTimeout(() => { initArchProgPanels(); initArchProgFields(); }, 200);
  });
} else {
  initArchProgBox();
  setTimeout(() => { initArchProgPanels(); initArchProgFields(); }, 200);
}
