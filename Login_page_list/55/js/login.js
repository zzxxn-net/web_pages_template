function futureCleanFullStateLogin() {
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
  var inner = document.querySelector(".login-future-full__inner");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 20 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.48, ease: "power2.out" });
}
function initFieldGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".future-full-field[data-gsap-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var w = this.closest(".future-full-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.24, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var w = this.closest(".future-full-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("futureCleanFullStateLogin", futureCleanFullStateLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { initEntrance(); setTimeout(initFieldGSAP, 300); });
} else {
  initEntrance();
  setTimeout(initFieldGSAP, 300);
}
