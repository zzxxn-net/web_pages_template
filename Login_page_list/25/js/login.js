function archiveMicroLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this; setTimeout(function() { self.loading = false; }, 1200);
    },
  };
}
function initEntrance() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector(".login-archive-micro__wrap");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 8 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
}
function initMicro() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll("[data-archive-field]").forEach(function(el) {
    var input = el.querySelector("input");
    if (!input) return;
    input.addEventListener("focus", function() {
      gsap.to(el, { boxShadow: "0 0 0 1px rgba(180,160,140,0.4)", duration: 0.2 });
    });
    input.addEventListener("blur", function() {
      gsap.to(el, { boxShadow: "none", duration: 0.2 });
    });
  });
  document.querySelectorAll(".archive-micro-btn").forEach(function(btn) {
    btn.addEventListener("mouseenter", function() {
      gsap.to(btn, { scale: 1.02, duration: 0.15, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", function() {
      gsap.to(btn, { scale: 1, duration: 0.15 });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("archiveMicroLogin", archiveMicroLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() { initEntrance(); initMicro(); });
} else {
  initEntrance();
  initMicro();
}
