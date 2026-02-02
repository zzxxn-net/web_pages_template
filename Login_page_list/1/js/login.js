/**
 * Login page — Design 1: Cyber Minimal
 * Alpine.js component + GSAP entrance (compiled from login.ts)
 */
function loginCard() {
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
    onInputFocus(e) {
      const el = e.target;
      if (typeof gsap !== "undefined") {
        gsap.to(el, { duration: 0.2, ease: "power2.out", overwrite: true });
      }
    },
    onInputBlur(_e) {},
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector(".login-wrap");
  const card = document.querySelector(".login-card");
  if (!wrap || !card) return;
  gsap.set(wrap, { opacity: 0 });
  gsap.set(card, { opacity: 0, y: 16 });
  gsap.to(wrap, {
    opacity: 1,
    duration: 0.4,
    ease: "power2.out",
  });
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: 0.1,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("loginCard", loginCard);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
