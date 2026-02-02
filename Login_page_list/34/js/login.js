function expMicroLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    handleSubmit: function(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function() { self.loading = false; }, 1200);
    },
  };
}
function initEntrance() {
  if (typeof gsap === "undefined") return;
  var inner = document.querySelector(".login-exp-micro__inner");
  var card = document.querySelector(".exp-micro-card");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, scale: 0.96 });
  gsap.to(inner, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
  if (card) {
    gsap.set(card, { rotation: -2 });
    gsap.to(card, { rotation: -0.5, duration: 0.5, delay: 0.05, ease: "power2.out" });
  }
}
function initMicroLines() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".exp-micro-field[data-exp-field]");
  for (var i = 0; i < fields.length; i++) {
    var el = fields[i];
    var input = el.querySelector("input[type='email'], input[name='password']");
    var line = el.querySelector(".exp-micro-field__line");
    if (!input || !line) continue;
    input.addEventListener("focus", function() {
      gsap.to(this.closest(".exp-micro-field").querySelector(".exp-micro-field__line"), { width: "100%", duration: 0.28, ease: "power2.out" });
    });
    input.addEventListener("blur", function() {
      gsap.to(this.closest(".exp-micro-field").querySelector(".exp-micro-field__line"), { width: 0, duration: 0.22, ease: "power2.in" });
    });
  }
}
if (typeof Alpine !== "undefined") Alpine.data("expMicroLogin", expMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initEntrance();
    setTimeout(initMicroLines, 350);
  });
} else {
  initEntrance();
  setTimeout(initMicroLines, 350);
}
