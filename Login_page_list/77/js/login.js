function futureProgLogin() {
  return {
    step: 1,
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
function initFutureProgWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}
function initFutureProgCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.98 });
  gsap.to(card, { opacity: 1, scale: 1, duration: 0.45, delay: 0.08, ease: "power2.out" });
}
function initFutureProgFields() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".future-prog-field[data-gsap-field]").forEach(function (el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function () {
      var w = inp.closest(".future-prog-field");
      if (w) gsap.to(w, { scale: 1.01, duration: 0.22, ease: "power2.out" });
    });
    inp.addEventListener("blur", function () {
      var w = inp.closest(".future-prog-field");
      if (w) gsap.to(w, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("futureProgLogin", futureProgLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initFutureProgWrap();
    setTimeout(function () { initFutureProgCard(); initFutureProgFields(); }, 100);
  });
} else {
  initFutureProgWrap();
  setTimeout(function () { initFutureProgCard(); initFutureProgFields(); }, 100);
}
