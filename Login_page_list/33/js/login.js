function cyberSingleLogin() {
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
  var wrap = document.querySelector(".login-cyber-single__wrap");
  var card = document.querySelector(".cyber-single-card");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 14 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
  if (card) {
    gsap.set(card, { opacity: 0, scale: 0.98 });
    gsap.to(card, { opacity: 1, scale: 1, duration: 0.4, delay: 0.06, ease: "power2.out" });
  }
}
function initStateEmphasis() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".cyber-single-field");
  for (var i = 0; i < fields.length; i++) {
    var el = fields[i];
    var input = el.querySelector("input");
    if (!input) continue;
    input.addEventListener("focus", function() {
      gsap.to(this.closest(".cyber-single-field"), { scale: 1.02, duration: 0.22, ease: "power2.out" });
    });
    input.addEventListener("blur", function() {
      gsap.to(this.closest(".cyber-single-field"), { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  }
}
if (typeof Alpine !== "undefined") Alpine.data("cyberSingleLogin", cyberSingleLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initEntrance();
    setTimeout(initStateEmphasis, 400);
  });
} else {
  initEntrance();
  setTimeout(initStateEmphasis, 400);
}
