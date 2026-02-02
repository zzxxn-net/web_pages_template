function cyberMicroLogin() {
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
  var box = document.querySelector(".login-cyber-micro__box");
  var head = document.querySelector(".login-cyber-micro__head");
  var form = document.querySelector(".login-cyber-micro__form");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 16 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
  if (head) { gsap.set(head, { opacity: 0 }); gsap.to(head, { opacity: 1, duration: 0.35, delay: 0.06, ease: "power2.out" }); }
  if (form) { gsap.set(form, { opacity: 0 }); gsap.to(form, { opacity: 1, duration: 0.35, delay: 0.1, ease: "power2.out" }); }
}
function initMicroField() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".cyber-micro-field[data-gsap-field]");
  fields.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var wrap = this.closest(".cyber-micro-field");
      if (wrap) gsap.to(wrap, { scale: 1.01, duration: 0.2, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var wrap = this.closest(".cyber-micro-field");
      if (wrap) gsap.to(wrap, { scale: 1, duration: 0.18, ease: "power2.in" });
    });
  });
}
function initMicroBtn() {
  var btn = document.querySelector(".cyber-micro-btn[data-micro-btn]");
  if (!btn || typeof gsap === "undefined") return;
  btn.addEventListener("click", function () {
    gsap.to(this, { scale: 0.98, duration: 0.08, yoyo: true, repeat: 1 });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("cyberMicroLogin", cyberMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(function () { initMicroField(); initMicroBtn(); }, 300);
  });
} else {
  initEntrance();
  setTimeout(function () { initMicroField(); initMicroBtn(); }, 300);
}
