/**
 * Login page — Design 11: Modern Fantasy · Full-screen immersive · Scroll-free
 * Alpine.js + GSAP entrance (compiled from login.ts)
 */
function fantasyFullLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    handleSubmit: function (e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function () {
        self.loading = false;
      }, 1200);
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  var center = document.querySelector(".login-fantasy-full__center");
  if (!center) return;
  gsap.set(center, { opacity: 0, y: 16 });
  gsap.to(center, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("fantasyFullLogin", fantasyFullLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
