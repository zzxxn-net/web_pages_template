/**
 * Login page — Design 5: Emotional Tech · Micro-interaction · Scroll-free fixed
 * Alpine.js + micro-interactions (compiled from login.ts)
 */
function emotionalLogin() {
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
    microIn(e) {
      const el = e.target;
      const field = el.closest("[data-micro]");
      if (field) {
        field.classList.add("is-focused");
        if (typeof gsap !== "undefined") {
          gsap.to(field, { duration: 0.2, ease: "power2.out", overwrite: true });
        }
      }
    },
    microOut(e) {
      const el = e.target;
      const field = el.closest("[data-micro]");
      if (field) field.classList.remove("is-focused");
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector(".login-emotional__card");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 10 });
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("emotionalLogin", emotionalLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
