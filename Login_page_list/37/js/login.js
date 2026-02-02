function futureSingleLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: "",
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
  var wrap = document.querySelector(".login-future-single__wrap");
  var card = document.querySelector(".future-single-card");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (card) {
    gsap.set(card, { opacity: 0, scale: 0.98 });
    gsap.to(card, { opacity: 1, scale: 1, duration: 0.42, delay: 0.06, ease: "power2.out" });
  }
}
function initFocusGSAP() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".future-single-field[data-future-field]");
  for (var i = 0; i < fields.length; i++) {
    var el = fields[i];
    var input = el.querySelector("input");
    if (!input) continue;
    input.addEventListener("focus", function() {
      var f = this.closest(".future-single-field");
      if (f) gsap.to(f, { scale: 1.02, duration: 0.28, ease: "power2.out" });
    });
    input.addEventListener("blur", function() {
      var f = this.closest(".future-single-field");
      if (f) gsap.to(f, { scale: 1, duration: 0.26, ease: "power2.in" });
    });
  }
}
if (typeof Alpine !== "undefined") Alpine.data("futureSingleLogin", futureSingleLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initEntrance();
    setTimeout(initFocusGSAP, 450);
  });
} else {
  initEntrance();
  setTimeout(initFocusGSAP, 450);
}
