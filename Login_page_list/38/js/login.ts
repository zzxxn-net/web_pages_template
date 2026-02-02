declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function senseFullLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    handleSubmit(e: Event) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      const self = this;
      setTimeout(function () { self.loading = false; }, 1200);
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  const inner = document.querySelector(".login-sense-full__inner");
  const bg = document.querySelector(".login-sense-full__bg");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 20 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (bg) {
    gsap.set(bg, { opacity: 0 });
    gsap.to(bg, { opacity: 1, duration: 0.6, ease: "power2.out" });
  }
}

function initInputReactive() {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".sense-full-field[data-sense-field]");
  for (let i = 0; i < fields.length; i++) {
    const el = fields[i];
    const input = el.querySelector("input");
    const line = el.querySelector(".sense-full-field__underline");
    if (!input || !line) continue;
    input.addEventListener("focus", function () {
      gsap.to(line, { width: "100%", duration: 0.3, ease: "power2.out" });
      gsap.to(el, { scale: 1.02, duration: 0.25, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      gsap.to(line, { width: 0, duration: 0.22, ease: "power2.in" });
      gsap.to(el, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  }
}

if (typeof Alpine !== "undefined") Alpine.data("senseFullLogin", senseFullLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initInputReactive, 400);
  });
} else {
  initEntrance();
  setTimeout(initInputReactive, 400);
}
