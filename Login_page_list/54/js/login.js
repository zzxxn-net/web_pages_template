function brutalFullInputLogin() {
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
  var inner = document.querySelector(".login-brutal-full__inner");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 24 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initInputGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".brutal-full-field[data-gsap-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var w = this.closest(".brutal-full-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var w = this.closest(".brutal-full-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("brutalFullInputLogin", brutalFullInputLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { initEntrance(); setTimeout(initInputGSAP, 320); });
} else {
  initEntrance();
  setTimeout(initInputGSAP, 320);
}
