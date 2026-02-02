function expSingleGsapLogin() {
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
  var card = document.querySelector(".exp-single-card[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 24 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initFieldGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".exp-single-field[data-gsap-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var w = this.closest(".exp-single-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.28, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var w = this.closest(".exp-single-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.24, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("expSingleGsapLogin", expSingleGsapLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initFieldGSAP, 320);
  });
} else {
  initEntrance();
  setTimeout(initFieldGSAP, 320);
}
