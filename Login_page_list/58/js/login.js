function futureCleanMicroLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    focusPassword: function () {
      var el = document.getElementById("fm58-pw");
      if (el && "focus" in el) el.focus();
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
function initMicroEntrance() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 16 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.44, ease: "power2.out" });
}
function initMicroFieldGSAP() {
  if (typeof gsap === "undefined") return;
  var list = document.querySelectorAll(".future-micro-field[data-gsap-field]");
  list.forEach(function (el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function () {
      var w = this.closest(".future-micro-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.2, ease: "power2.out" });
    });
    input.addEventListener("blur", function () {
      var w = this.closest(".future-micro-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.18, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("futureCleanMicroLogin", futureCleanMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { initMicroEntrance(); setTimeout(initMicroFieldGSAP, 200); });
} else {
  initMicroEntrance();
  setTimeout(initMicroFieldGSAP, 200);
}
