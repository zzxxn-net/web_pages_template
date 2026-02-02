function futureAsymLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
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
  var grid = document.querySelector(".login-future-asym__grid");
  var brand = document.querySelector(".future-asym-brand");
  var panel = document.querySelector(".future-asym-panel");
  if (!grid) return;
  gsap.set(grid, { opacity: 0, y: 20 });
  gsap.to(grid, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (brand) {
    gsap.set(brand, { opacity: 0, x: -16 });
    gsap.to(brand, { opacity: 1, x: 0, duration: 0.45, delay: 0.06, ease: "power2.out" });
  }
  if (panel) {
    gsap.set(panel, { opacity: 0, x: 16 });
    gsap.to(panel, { opacity: 1, x: 0, duration: 0.45, delay: 0.1, ease: "power2.out" });
  }
}

function initInputGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".future-asym-field[data-gsap-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var f = this.closest(".future-asym-field");
      if (f) gsap.to(f, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var f = this.closest(".future-asym-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("futureAsymLogin", futureAsymLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initInputGSAP, 350);
  });
} else {
  initEntrance();
  setTimeout(initInputGSAP, 350);
}
