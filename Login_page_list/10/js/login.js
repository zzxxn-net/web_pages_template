/**
 * Login page — Design 10: Futuristic Clean · Single focus · Input-reactive
 * Alpine.js + GSAP focus transition (compiled from login.ts)
 */
function futureFocusLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    setActive(e) {
      var el = e.target.closest("[data-focus-field]");
      var prev = document.querySelector("[data-focus-field].is-active");
      if (prev && prev !== el && typeof gsap !== "undefined") {
        gsap.to(prev, { scale: 1, opacity: 0.88, duration: 0.25, ease: "power2.out" });
      }
      if (el) {
        el.classList.add("is-active");
        if (typeof gsap !== "undefined") {
          gsap.fromTo(el, { scale: 1, opacity: 0.88 }, { scale: 1.02, opacity: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },
    clearActive() {
      var el = document.activeElement;
      var inside = el && el.closest("[data-focus-field]");
      if (!inside) {
        document.querySelectorAll("[data-focus-field].is-active").forEach(function (node) {
          node.classList.remove("is-active");
          if (typeof gsap !== "undefined") {
            gsap.to(node, { scale: 1, opacity: 0.88, duration: 0.25, ease: "power2.out" });
          }
        });
      }
    },
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
  var center = document.querySelector(".login-future-focus__center");
  if (!center) return;
  gsap.set(center, { opacity: 0, y: 14 });
  gsap.to(center, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("futureFocusLogin", futureFocusLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
