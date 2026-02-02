function darkArchProgInputLogin() {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    goStep2: function () {
      if (!this.email.trim()) return;
      this.step = 2;
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
function initArchProgBox() {
  if (typeof gsap === "undefined") return;
  var box = document.querySelector("[data-gsap-box]");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 20 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initArchProgPanels() {
  if (typeof gsap === "undefined") return;
  var panels = document.querySelectorAll("[data-gsap-panel]");
  panels.forEach(function (el) {
    gsap.set(el, { opacity: 0, x: -8 });
    var obs = new MutationObserver(function () {
      var isHidden = el.classList.contains("is-hidden");
      gsap.to(el, { opacity: isHidden ? 0 : 1, x: isHidden ? -8 : 0, duration: 0.32, ease: "power2.out" });
    });
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
  });
}
function initArchProgFields() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".arch-prog-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = this.closest(".arch-prog-field");
      if (w) gsap.to(w, { scale: 1.02, duration: 0.24, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = this.closest(".arch-prog-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("darkArchProgInputLogin", darkArchProgInputLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initArchProgBox();
    setTimeout(function () { initArchProgPanels(); initArchProgFields(); }, 200);
  });
} else {
  initArchProgBox();
  setTimeout(function () { initArchProgPanels(); initArchProgFields(); }, 200);
}
