function cyberSingleFocusLogin() {
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
function initCyberWrap() {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 12 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
}
function initCyberCard() {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 8 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.5, delay: 0.06, ease: "power2.out" });
}
function initCyberFields() {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".cyber-field[data-gsap-field]");
  fields.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      const w = inp.closest(".cyber-field");
      if (w) gsap.to(w, { opacity: 1, duration: 0.25, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      const w = inp.closest(".cyber-field");
      if (w) gsap.to(w, { opacity: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("cyberSingleFocusLogin", cyberSingleFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initCyberWrap();
    setTimeout(() => {
      initCyberCard();
      initCyberFields();
    }, 80);
  });
} else {
  initCyberWrap();
  setTimeout(() => {
    initCyberCard();
    initCyberFields();
  }, 80);
}
