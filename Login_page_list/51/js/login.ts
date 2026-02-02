declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function darkArchProgLogin(): Record<string, unknown> {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    goStep2(): void {
      if ((this as { email: string }).email.trim()) (this as { step: number }).step = 2;
    },
    handleSubmit(e: Event): void {
      e.preventDefault();
      if ((this as { loading: boolean }).loading) return;
      (this as { loading: boolean }).loading = true;
      const self = this as { loading: boolean };
      setTimeout(() => { self.loading = false; }, 1200);
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const box = document.querySelector(".login-dark-prog__box");
  const head = document.querySelector(".login-dark-prog__head");
  const form = document.querySelector(".login-dark-prog__form");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 20 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (head) {
    gsap.set(head, { opacity: 0 });
    gsap.to(head, { opacity: 1, duration: 0.4, delay: 0.08, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0 });
    gsap.to(form, { opacity: 1, duration: 0.4, delay: 0.12, ease: "power2.out" });
  }
}

function initPanelGSAP(): void {
  if (typeof gsap === "undefined") return;
  const panel2 = document.querySelector(".dark-prog-panel[data-step='2']");
  const panel1 = document.querySelector(".dark-prog-panel[data-step='1']");
  if (panel1) gsap.set(panel1, { opacity: 1, x: 0 });
  if (panel2) gsap.set(panel2, { opacity: 0, x: 24 });
}

function observeStep(): void {
  if (typeof gsap === "undefined") return;
  const box = document.querySelector(".login-dark-prog__box");
  if (!box) return;
  const observer = new MutationObserver(() => {
    const panel2 = document.querySelector(".dark-prog-panel[data-step='2']:not(.is-hidden)");
    const panel1 = document.querySelector(".dark-prog-panel[data-step='1']:not(.is-hidden)");
    if (panel2) {
      gsap.to(panel2, { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" });
    }
    if (panel1 && !document.querySelector(".dark-prog-panel[data-step='1']:not(.is-hidden)")) {
      gsap.to(panel1, { opacity: 0, x: -20, duration: 0.28, ease: "power2.in" });
    }
  });
  observer.observe(box, { attributes: true, subtree: true, attributeFilter: ["class"] });
}

if (typeof Alpine !== "undefined") Alpine.data("darkArchProgLogin", darkArchProgLogin as () => Record<string, unknown>);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEntrance();
    setTimeout(() => { initPanelGSAP(); observeStep(); }, 350);
  });
} else {
  initEntrance();
  setTimeout(() => { initPanelGSAP(); observeStep(); }, 350);
}
