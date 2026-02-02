function darkFullLogin() {
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
  var inner = document.querySelector(".login-dark-full__inner");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 24 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initFocusGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".dark-full-field[data-gsap-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var f = this.closest(".dark-full-field");
      if (f) gsap.to(f, { scale: 1.01, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var f = this.closest(".dark-full-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("darkFullLogin", darkFullLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initFocusGSAP, 350);
  });
} else {
  initEntrance();
  setTimeout(initFocusGSAP, 350);
}
