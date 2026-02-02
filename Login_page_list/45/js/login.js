function fantasyMicroLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    emailFocus: false,
    passwordFocus: false,
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
  var box = document.querySelector(".login-fantasy-micro__box");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 20 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initMicroGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".fantasy-micro-field[data-gsap-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var f = this.closest(".fantasy-micro-field");
      if (f) gsap.to(f, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var f = this.closest(".fantasy-micro-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
  var toggle = document.querySelector(".fantasy-micro-field__toggle[data-gsap-toggle]");
  if (toggle) {
    toggle.addEventListener("mouseenter", function () {
      gsap.to(toggle, { scale: 1.05, duration: 0.2, ease: "power2.out" });
    });
    toggle.addEventListener("mouseleave", function () {
      gsap.to(toggle, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  }
  var btn = document.querySelector(".fantasy-micro-btn[data-gsap-btn]");
  if (btn) {
    btn.addEventListener("mouseenter", function () {
      gsap.to(btn, { scale: 1.03, duration: 0.22, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", function () {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  }
}

if (typeof Alpine !== "undefined") Alpine.data("fantasyMicroLogin", fantasyMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(initMicroGSAP, 350);
  });
} else {
  initEntrance();
  setTimeout(initMicroGSAP, 350);
}
