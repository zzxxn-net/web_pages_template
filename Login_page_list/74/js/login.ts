declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function brutalFullFixedLogin(): Record<string, unknown> {
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
      setTimeout(() => { t.loading = false; }, 1400);
    },
  };
}

function initBrutalFullInner(): void {
  if (typeof gsap === "undefined") return;
  const inner = document.querySelector("[data-gsap-inner]");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, scale: 0.96 });
  gsap.to(inner, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
}

function initBrutalFullTitle(): void {
  if (typeof gsap === "undefined") return;
  const title = document.querySelector("[data-gsap-title]");
  if (!title) return;
  gsap.set(title, { opacity: 0, y: -12 });
  gsap.to(title, { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "power2.out" });
}

function initBrutalFullSub(): void {
  if (typeof gsap === "undefined") return;
  const sub = document.querySelector("[data-gsap-sub]");
  if (!sub) return;
  gsap.set(sub, { opacity: 0, y: -8 });
  gsap.to(sub, { opacity: 1, y: 0, duration: 0.35, delay: 0.18, ease: "power2.out" });
}

function initBrutalFullFields(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".brutal-full-field[data-gsap-field]");
  fields.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      const w = inp.closest(".brutal-full-field");
      if (w) gsap.to(w, { borderColor: "#000", duration: 0.2 });
    });
    inp.addEventListener("blur", () => {
      const w = inp.closest(".brutal-full-field");
      if (w) gsap.to(w, { borderColor: "rgba(0,0,0,0.25)", duration: 0.18 });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("brutalFullFixedLogin", brutalFullFixedLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initBrutalFullInner();
    setTimeout(() => {
      initBrutalFullTitle();
      initBrutalFullSub();
      initBrutalFullFields();
    }, 80);
  });
} else {
  initBrutalFullInner();
  setTimeout(() => {
    initBrutalFullTitle();
    initBrutalFullSub();
    initBrutalFullFields();
  }, 80);
}
