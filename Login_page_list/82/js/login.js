function fantasyCardLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      setTimeout(function() { this.loading = false; }.bind(this), 1200);
    },
  };
}
function initFantasyWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 10 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initFantasyHeader() {
  if (typeof gsap === "undefined") return;
  var header = document.querySelector("[data-gsap-header]");
  if (!header) return;
  gsap.set(header, { opacity: 0, y: 8 });
  gsap.to(header, { opacity: 1, y: 0, duration: 0.45, delay: 0.05, ease: "power2.out" });
}
function initFantasyCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 10 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.48, delay: 0.1, ease: "power2.out" });
}
function initFantasyFields() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".fantasy-field[data-gsap-field]");
  fields.forEach(function(el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function() {
      var w = inp.closest(".fantasy-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.25, ease: "power2.out" });
    });
    inp.addEventListener("blur", function() {
      var w = inp.closest(".fantasy-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("fantasyCardLogin", fantasyCardLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initFantasyWrap();
    setTimeout(function() {
      initFantasyHeader();
      initFantasyCard();
      initFantasyFields();
    }, 50);
  });
} else {
  initFantasyWrap();
  setTimeout(function() {
    initFantasyHeader();
    initFantasyCard();
    initFantasyFields();
  }, 50);
}
