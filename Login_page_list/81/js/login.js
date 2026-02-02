function expMicroLogin() {
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
      setTimeout(function() { this.loading = false; }.bind(this), 1200);
    },
  };
}
function initExpBg() {
  if (typeof gsap === "undefined") return;
  var bg = document.querySelector("[data-gsap-bg]");
  if (!bg) return;
  gsap.set(bg, { opacity: 0 });
  gsap.to(bg, { opacity: 1, duration: 0.5, ease: "power2.out" });
}
function initExpWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, scale: 0.96 });
  gsap.to(wrap, { opacity: 1, scale: 1, duration: 0.5, delay: 0.05, ease: "power2.out" });
}
function initExpCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 10 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.45, delay: 0.08, ease: "power2.out" });
}
function initExpFields() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".exp-field[data-gsap-field]");
  fields.forEach(function(el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function() {
      var w = inp.closest(".exp-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.22, ease: "power2.out" });
    });
    inp.addEventListener("blur", function() {
      var w = inp.closest(".exp-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("expMicroLogin", expMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initExpBg();
    initExpWrap();
    setTimeout(function() {
      initExpCard();
      initExpFields();
    }, 60);
  });
} else {
  initExpBg();
  initExpWrap();
  setTimeout(function() {
    initExpCard();
    initExpFields();
  }, 60);
}
