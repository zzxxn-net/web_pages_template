declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object) => void };
declare const document: Document;

function futureCleanMicroLogin(): Record<string, unknown> {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "" as string,
    focusPassword(): void {
      const el = document.getElementById("fm58-pw");
      if (el && "focus" in el) (el as HTMLInputElement).focus();
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

function initMicroEntrance(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 16 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.44, ease: "power2.out" });
}

function initMicroFieldGSAP(): void {
  if (typeof gsap === "undefined") return;
  const list = document.querySelectorAll(".future-micro-field[data-gsap-field]");
  list.forEach((el) => {
    const input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function (this: HTMLInputElement) {
      const w = this.closest(".future-micro-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.2, ease: "power2.out" });
    });
    input.addEventListener("blur", function (this: HTMLInputElement) {
      const w = this.closest(".future-micro-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.18, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("futureCleanMicroLogin", futureCleanMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { initMicroEntrance(); setTimeout(initMicroFieldGSAP, 200); });
} else {
  initMicroEntrance();
  setTimeout(initMicroFieldGSAP, 200);
}
