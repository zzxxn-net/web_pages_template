/**
 * Login page — Design 7: Experimental Interface · Card · Input-reactive animation
 * Alpine.js + input-reactive (compiled from login.ts)
 */
function experimentalLogin() {
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
    reactIn(e) {
      const el = e.target.closest("[data-exp-field]");
      if (el) {
        el.classList.add("is-active");
        if (typeof gsap !== "undefined") {
          const label = el.querySelector(".exp-field__label");
          if (label) gsap.fromTo(label, { y: 0 }, { y: -24, duration: 0.25, ease: "power2.out" });
        }
      }
    },
    reactOut(e) {
      const el = e.target.closest("[data-exp-field]");
      if (el) el.classList.remove("is-active");
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector(".login-exp__card");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.98 });
  gsap.to(card, {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("experimentalLogin", experimentalLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
