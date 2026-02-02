/**
 * Login page — Design 6: Modern Fantasy · Single focus input flow · GSAP smooth
 * Alpine.js + GSAP smooth focus transition (compiled from login.ts)
 */
function fantasyLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    activeField: null,
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1200);
    },
    focusField(e, name) {
      const el = e.target.closest("[data-single-focus]");
      const prevActive = document.querySelector("[data-single-focus].is-active");
      if (prevActive && prevActive !== el && typeof gsap !== "undefined") {
        gsap.to(prevActive, { scale: 1, opacity: 0.85, duration: 0.3, ease: "power2.out" });
      }
      this.activeField = name;
      if (el) {
        el.classList.add("is-active");
        if (typeof gsap !== "undefined") {
          gsap.fromTo(el, { scale: 1, opacity: 0.85 }, { scale: 1.02, opacity: 1, duration: 0.35, ease: "power2.out" });
        }
      }
    },
    blurField() {
      const el = document.activeElement;
      const container = el?.closest("[data-single-focus]");
      if (!container) {
        document.querySelectorAll("[data-single-focus].is-active").forEach((node) => {
          node.classList.remove("is-active");
          if (typeof gsap !== "undefined") {
            gsap.to(node, { scale: 1, opacity: 0.85, duration: 0.25, ease: "power2.out" });
          }
        });
        this.activeField = null;
      }
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector(".login-fantasy__card");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 16 });
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("fantasyLogin", fantasyLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
