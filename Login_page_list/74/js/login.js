function brutalFullFixedLogin() {
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
      setTimeout(function () { self.loading = false; }, 1400);
    },
  };
}
function initBrutalFullInner() {
  if (typeof gsap === "undefined") return;
  var inner = document.querySelector("[data-gsap-inner]");
  if (!inner) return;
  gsap.set(inner, { opacity: 0, scale: 0.96 });
  gsap.to(inner, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
}
function initBrutalFullTitle() {
  if (typeof gsap === "undefined") return;
  var title = document.querySelector("[data-gsap-title]");
  if (!title) return;
  gsap.set(title, { opacity: 0, y: -12 });
  gsap.to(title, { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "power2.out" });
}
function initBrutalFullSub() {
  if (typeof gsap === "undefined") return;
  var sub = document.querySelector("[data-gsap-sub]");
  if (!sub) return;
  gsap.set(sub, { opacity: 0, y: -8 });
  gsap.to(sub, { opacity: 1, y: 0, duration: 0.35, delay: 0.18, ease: "power2.out" });
}
function initBrutalFullFields() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".brutal-full-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = inp.closest(".brutal-full-field");
      if (w) gsap.to(w, { borderColor: "#000", duration: 0.2 });
    });
    inp.addEventListener("blur", function () {
      var w = inp.closest(".brutal-full-field");
      if (w) gsap.to(w, { borderColor: "rgba(0,0,0,0.25)", duration: 0.18 });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("brutalFullFixedLogin", brutalFullFixedLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initBrutalFullInner();
    setTimeout(function () {
      initBrutalFullTitle();
      initBrutalFullSub();
      initBrutalFullFields();
    }, 80);
  });
} else {
  initBrutalFullInner();
  setTimeout(function () {
    initBrutalFullTitle();
    initBrutalFullSub();
    initBrutalFullFields();
  }, 80);
}
