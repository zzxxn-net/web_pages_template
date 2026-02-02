function emotionFullLogin() {
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
  var inner = document.querySelector(".login-emotion-full__inner");
  var head = document.querySelector(".login-emotion-full__head");
  var form = document.querySelector(".login-emotion-full__form");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, y: 24 });
  gsap.to(inner, { opacity: 1, y: 0, duration: 0.52, ease: "power2.out" });
  if (head) {
    gsap.set(head, { opacity: 0, y: 12 });
    gsap.to(head, { opacity: 1, y: 0, duration: 0.4, delay: 0.08, ease: "power2.out" });
  }
  if (form) {
    gsap.set(form, { opacity: 0 });
    gsap.to(form, { opacity: 1, duration: 0.4, delay: 0.14, ease: "power2.out" });
  }
}

function initInputReactive() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".emotion-full-field[data-gsap-field]");
  fields.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var wrap = this.closest(".emotion-full-field");
      if (wrap) gsap.to(wrap, { scale: 1.01, duration: 0.28, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var wrap = this.closest(".emotion-full-field");
      if (wrap) gsap.to(wrap, { scale: 1, duration: 0.24, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("emotionFullLogin", emotionFullLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initInputReactive, 400);
  });
} else {
  initEntrance();
  setTimeout(initInputReactive, 400);
}
