/**
 * Login page — Design 3: Futuristic Clean · Asymmetric · Focus-movement UX
 * Alpine.js + GSAP focus transition (compiled from login.ts)
 */
function loginPanel() {
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
    onFocus(e) {
      const el = e.target;
      const group = el.closest("[data-focus-group]");
      if (group) {
        group.classList.add("is-focused");
        if (typeof gsap !== "undefined") {
          gsap.fromTo(group, { scale: 1 }, { scale: 1, duration: 0.2, ease: "power2.out" });
        }
      }
    },
    onBlur() {
      document.querySelectorAll("[data-focus-group].is-focused").forEach((g) => {
        g.classList.remove("is-focused");
      });
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  const visual = document.querySelector(".login-asymmetric__visual");
  const formPanel = document.querySelector(".login-form-panel");
  if (!visual || !formPanel) return;
  gsap.set(visual, { opacity: 0, x: -20 });
  gsap.set(formPanel, { opacity: 0, x: 20 });
  gsap.to(visual, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    delay: 0.1,
    ease: "power2.out",
  });
  gsap.to(formPanel, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    delay: 0.2,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("loginPanel", loginPanel);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
