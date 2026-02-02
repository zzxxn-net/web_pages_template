function darkMicroInputLogin() {
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
function initDarkMicroCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 18 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initDarkMicroFields() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".dark-micro-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = this.closest(".dark-micro-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = this.closest(".dark-micro-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("darkMicroInputLogin", darkMicroInputLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initDarkMicroCard();
    setTimeout(initDarkMicroFields, 200);
  });
} else {
  initDarkMicroCard();
  setTimeout(initDarkMicroFields, 200);
}
