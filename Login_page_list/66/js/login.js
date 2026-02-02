function senseFullStateLogin() {
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
function initSenseFullCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 24 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.52, ease: "power2.out" });
}
function initSenseFullFields() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".sense-full-field[data-gsap-field]");
  list.forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = this.closest(".sense-full-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = this.closest(".sense-full-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.24, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("senseFullStateLogin", senseFullStateLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initSenseFullCard();
    setTimeout(initSenseFullFields, 220);
  });
} else {
  initSenseFullCard();
  setTimeout(initSenseFullFields, 220);
}
