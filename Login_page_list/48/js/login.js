function expCardLogin() {
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
  var wrap = document.querySelector(".login-exp-card__wrap");
  var brand = document.querySelector(".exp-card-brand[data-gsap-brand]");
  var form = document.querySelector(".exp-card-form[data-gsap-form]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 20 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (brand) {
    gsap.set(brand, { opacity: 0, x: -16 });
    gsap.to(brand, { opacity: 1, x: 0, duration: 0.45, delay: 0.06, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0, x: 16 });
    gsap.to(form, { opacity: 1, x: 0, duration: 0.45, delay: 0.1, ease: "power2.out" });
  }
}

function initStateGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".exp-card-field[data-gsap-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var f = this.closest(".exp-card-field");
      if (f) gsap.to(f, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var f = this.closest(".exp-card-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("expCardLogin", expCardLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initStateGSAP, 350);
  });
} else {
  initEntrance();
  setTimeout(initStateGSAP, 350);
}
