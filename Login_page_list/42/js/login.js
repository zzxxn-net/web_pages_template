function brutalSingleLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: "",
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
  var wrap = document.querySelector(".login-brutal-single__wrap");
  var card = document.querySelector(".brutal-single-card[data-brutal-card]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 20 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (card) {
    gsap.set(card, { scale: 0.98 });
    gsap.to(card, { scale: 1, duration: 0.45, delay: 0.05, ease: "power2.out" });
  }
}

function initFocusGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".brutal-single-field[data-brutal-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var f = this.closest(".brutal-single-field");
      if (f) gsap.to(f, { scale: 1.02, duration: 0.28, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var f = this.closest(".brutal-single-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.24, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("brutalSingleLogin", brutalSingleLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initFocusGSAP, 350);
  });
} else {
  initEntrance();
  setTimeout(initFocusGSAP, 350);
}
