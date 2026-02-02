function darkArchProgLogin() {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    goStep2: function () { if (this.email.trim()) this.step = 2; },
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
  var box = document.querySelector(".login-dark-prog__box");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 20 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  var head = document.querySelector(".login-dark-prog__head");
  if (head) { gsap.set(head, { opacity: 0 }); gsap.to(head, { opacity: 1, duration: 0.4, delay: 0.08, ease: "power2.out" }); }
  var form = document.querySelector(".login-dark-prog__form");
  if (form) { gsap.set(form, { opacity: 0 }); gsap.to(form, { opacity: 1, duration: 0.4, delay: 0.12, ease: "power2.out" }); }
}
function initPanelGSAP() {
  if (typeof gsap === "undefined") return;
  var panel1 = document.querySelector(".dark-prog-panel[data-step='1']");
  var panel2 = document.querySelector(".dark-prog-panel[data-step='2']");
  if (panel1) gsap.set(panel1, { opacity: 1, x: 0 });
  if (panel2) gsap.set(panel2, { opacity: 0, x: 24 });
}
function observeStep() {
  if (typeof gsap === "undefined") return;
  var box = document.querySelector(".login-dark-prog__box");
  if (!box) return;
  var observer = new MutationObserver(function () {
    var panel2 = document.querySelector(".dark-prog-panel[data-step='2']:not(.is-hidden)");
    if (panel2) gsap.to(panel2, { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" });
    var panel1 = document.querySelector(".dark-prog-panel[data-step='1']:not(.is-hidden)");
    if (panel1 === null) {
      var p1 = document.querySelector(".dark-prog-panel[data-step='1']");
      if (p1) gsap.to(p1, { opacity: 0, x: -20, duration: 0.28, ease: "power2.in" });
    }
  });
  observer.observe(box, { attributes: true, subtree: true, attributeFilter: ["class"] });
}
if (typeof Alpine !== "undefined") Alpine.data("darkArchProgLogin", darkArchProgLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(function () { initPanelGSAP(); observeStep(); }, 350);
  });
} else {
  initEntrance();
  setTimeout(function () { initPanelGSAP(); observeStep(); }, 350);
}
