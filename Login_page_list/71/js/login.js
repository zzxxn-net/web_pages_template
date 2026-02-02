function futureFullGSAPLogin() {
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
function initFutureFullCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 22 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.52, ease: "power2.out" });
}
function initFutureFullFields() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".future-full-field[data-gsap-field]");
  fields.forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = inp.closest(".future-full-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = inp.closest(".future-full-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.24, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("futureFullGSAPLogin", futureFullGSAPLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initFutureFullCard();
    setTimeout(initFutureFullFields, 220);
  });
} else {
  initFutureFullCard();
  setTimeout(initFutureFullFields, 220);
}
