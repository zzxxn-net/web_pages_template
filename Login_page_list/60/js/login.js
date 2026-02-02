function modernFantasyProgLogin() {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    goStep2: function () {
      if (this.email.trim()) this.step = 2;
    },
    handleSubmit: function (e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function () { self.loading = false; }, 1200);
    },
  };
}
function initFantasyEntrance() {
  if (typeof gsap === "undefined") return;
  var box = document.querySelector("[data-gsap-box]");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 20 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initFantasyFieldGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".fantasy-prog-field[data-gsap-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var w = this.closest(".fantasy-prog-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var w = this.closest(".fantasy-prog-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("modernFantasyProgLogin", modernFantasyProgLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { initFantasyEntrance(); setTimeout(initFantasyFieldGSAP, 280); });
} else {
  initFantasyEntrance();
  setTimeout(initFantasyFieldGSAP, 280);
}
