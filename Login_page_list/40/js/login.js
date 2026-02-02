function expSingleLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: "",
    handleSubmit: function(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function() { self.loading = false; }, 1200);
    },
  };
}
function initEntrance() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector(".login-exp-single__wrap");
  var card = document.querySelector(".exp-single-card");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
  if (card) {
    gsap.set(card, { rotation: 1.5 });
    gsap.to(card, { rotation: 0.4, duration: 0.5, delay: 0.05, ease: "power2.out" });
  }
}
function initStateGSAP() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".exp-single-field[data-exp-field]");
  for (var i = 0; i < fields.length; i++) {
    var el = fields[i];
    var input = el.querySelector("input");
    if (!input) continue;
    input.addEventListener("focus", function() {
      var f = this.closest(".exp-single-field");
      if (f) gsap.to(f, { scale: 1.03, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function() {
      var f = this.closest(".exp-single-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.24, ease: "power2.in" });
    });
  }
}
if (typeof Alpine !== "undefined") Alpine.data("expSingleLogin", expSingleLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initEntrance();
    setTimeout(initStateGSAP, 400);
  });
} else {
  initEntrance();
  setTimeout(initStateGSAP, 400);
}
