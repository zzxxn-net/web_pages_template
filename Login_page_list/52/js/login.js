function fantasyCardFocusLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit: function (e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function () { self.loading = false; }, 1200);
    },
  };
}
function initEntrance() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector(".login-fantasy-card__wrap");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 20 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  var brand = document.querySelector(".fantasy-card-brand[data-gsap-brand]");
  if (brand) { gsap.set(brand, { opacity: 0, x: -16 }); gsap.to(brand, { opacity: 1, x: 0, duration: 0.42, delay: 0.06, ease: "power2.out" }); }
  var form = document.querySelector(".fantasy-card-form[data-gsap-form]");
  if (form) { gsap.set(form, { opacity: 0, x: 16 }); gsap.to(form, { opacity: 1, x: 0, duration: 0.42, delay: 0.1, ease: "power2.out" }); }
}
function initFocusGSAP() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".fantasy-card-field[data-gsap-field]");
  fields.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var w = this.closest(".fantasy-card-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var w = this.closest(".fantasy-card-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("fantasyCardFocusLogin", fantasyCardFocusLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initFocusGSAP, 350);
  });
} else {
  initEntrance();
  setTimeout(initFocusGSAP, 350);
}
