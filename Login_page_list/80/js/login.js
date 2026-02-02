function brutalAsymLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1200);
    },
  };
}
function initBrutalWrap() {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, x: -12 });
  gsap.to(wrap, { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" });
}
function initBrutalAside() {
  if (typeof gsap === "undefined") return;
  const aside = document.querySelector("[data-gsap-aside]");
  if (!aside) return;
  gsap.set(aside, { opacity: 0, x: -8 });
  gsap.to(aside, { opacity: 1, x: 0, duration: 0.4, delay: 0.06, ease: "power2.out" });
}
function initBrutalCard() {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, x: 12 });
  gsap.to(card, { opacity: 1, x: 0, duration: 0.45, delay: 0.1, ease: "power2.out" });
}
function initBrutalFields() {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".brutal-field[data-gsap-field]");
  fields.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      const w = inp.closest(".brutal-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.22, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      const w = inp.closest(".brutal-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("brutalAsymLogin", brutalAsymLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initBrutalWrap();
    setTimeout(() => {
      initBrutalAside();
      initBrutalCard();
      initBrutalFields();
    }, 50);
  });
} else {
  initBrutalWrap();
  setTimeout(() => {
    initBrutalAside();
    initBrutalCard();
    initBrutalFields();
  }, 50);
}
