/**
 * Login page — Design 8: Dark Archive · Asymmetric · Scroll-free fixed flow
 * Alpine.js + GSAP entrance (compiled from login.ts)
 */
function archiveLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1200);
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  var strip = document.querySelector(".login-archive__strip");
  var card = document.querySelector(".login-archive__card");
  if (!strip || !card) return;
  gsap.set(strip, { opacity: 0, x: -20 });
  gsap.set(card, { opacity: 0, x: 20 });
  gsap.to(strip, { opacity: 1, x: 0, duration: 0.5, delay: 0.1, ease: "power2.out" });
  gsap.to(card, { opacity: 1, x: 0, duration: 0.5, delay: 0.2, ease: "power2.out" });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("archiveLogin", archiveLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
