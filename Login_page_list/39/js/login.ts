declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function darkFullLogin() {
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
  const inner = document.querySelector(".login-dark-full__inner");
  const bg = document.querySelector(".login-dark-full__bg");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 18 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (bg) {
    gsap.set(bg, { opacity: 0 });
    gsap.to(bg, { opacity: 1, duration: 0.55, ease: "power2.out" });
  }
}

if (typeof Alpine !== "undefined") Alpine.data("darkFullLogin", darkFullLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
