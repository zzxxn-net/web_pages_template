function cyberAsymStateLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    success: false,
    focusField: "",
    errorField: "",
    setFocus: function (f) {
      this.focusField = f;
      this.errorField = "";
    },
    clearFocus: function () {
      this.focusField = "";
    },
    handleSubmit: function (e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      this.success = false;
      this.errorField = "";
      var self = this;
      setTimeout(function () {
        self.loading = false;
        self.success = true;
        setTimeout(function () { self.success = false; }, 1600);
      }, 1000);
    },
  };
}
function initCyberAsymWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, x: -20 });
  gsap.to(wrap, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
}
function initCyberAsymBrand() {
  if (typeof gsap === "undefined") return;
  var brand = document.querySelector("[data-gsap-brand]");
  if (!brand) return;
  gsap.set(brand, { opacity: 0, x: -12 });
  gsap.to(brand, { opacity: 1, x: 0, duration: 0.45, delay: 0.08, ease: "power2.out" });
}
function initCyberAsymCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, x: 12 });
  gsap.to(card, { opacity: 1, x: 0, duration: 0.45, delay: 0.12, ease: "power2.out" });
}
function initCyberAsymFields() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".cyber-asym-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = inp.closest(".cyber-asym-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.2, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = inp.closest(".cyber-asym-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.18, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("cyberAsymStateLogin", cyberAsymStateLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initCyberAsymWrap();
    setTimeout(function () {
      initCyberAsymBrand();
      initCyberAsymCard();
      initCyberAsymFields();
    }, 100);
  });
} else {
  initCyberAsymWrap();
  setTimeout(function () {
    initCyberAsymBrand();
    initCyberAsymCard();
    initCyberAsymFields();
  }, 100);
}
