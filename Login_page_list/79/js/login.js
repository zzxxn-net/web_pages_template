function emoFullscreenLogin() {
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
function initEmoBg() {
  if (typeof gsap === "undefined") return;
  const bg = document.querySelector("[data-gsap-bg]");
  if (!bg) return;
  gsap.set(bg, { opacity: 0 });
  gsap.to(bg, { opacity: 1, duration: 0.6, ease: "power2.out" });
}
function initEmoWrap() {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 14 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, delay: 0.05, ease: "power2.out" });
}
function initEmoCard() {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.98 });
  gsap.to(card, { opacity: 1, scale: 1, duration: 0.48, delay: 0.1, ease: "power2.out" });
}
function initEmoFields() {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".emo-field[data-gsap-field]");
  fields.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      const w = inp.closest(".emo-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.28, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      const w = inp.closest(".emo-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("emoFullscreenLogin", emoFullscreenLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEmoBg();
    initEmoWrap();
    setTimeout(() => {
      initEmoCard();
      initEmoFields();
    }, 60);
  });
} else {
  initEmoBg();
  initEmoWrap();
  setTimeout(() => {
    initEmoCard();
    initEmoFields();
  }, 60);
}
