function fantasyCardSplitLogin() {
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
function initFantasySplitEntrance() {
  if (typeof gsap === "undefined") return;
  var cards = document.querySelectorAll(".fantasy-split-card[data-gsap-card]");
  gsap.set(cards, { opacity: 0, y: 18 });
  gsap.to(cards, { opacity: 1, y: 0, duration: 0.52, stagger: 0.12, ease: "power2.out" });
}
function initFantasySplitFieldGSAP() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".fantasy-split-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = this.closest(".fantasy-split-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = this.closest(".fantasy-split-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("fantasyCardSplitLogin", fantasyCardSplitLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { initFantasySplitEntrance(); setTimeout(initFantasySplitFieldGSAP, 280); });
} else {
  initFantasySplitEntrance();
  setTimeout(initFantasySplitFieldGSAP, 280);
}
