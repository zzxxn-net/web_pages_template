/**
 * Login page — Design 2: Dark Archive · Full-screen · Input-reactive
 * Alpine.js + GSAP input-reactive animations (compiled from login.ts)
 */
function loginScreen() {
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
    onFieldFocus(e) {
      const input = e.target;
      const field = input.closest("[data-field]");
      if (!field) return;
      field.classList.add("is-focused");
      if (input.value.trim()) field.classList.add("is-filled");
      const line = field.querySelector("[data-line]");
      if (typeof gsap !== "undefined" && line) {
        gsap.to(line, { scaleX: 1, duration: 0.3, ease: "power2.out" });
      }
    },
    onFieldBlur(e) {
      const input = e.target;
      const field = input.closest("[data-field]");
      if (!field) return;
      field.classList.remove("is-focused");
      field.classList.toggle("is-filled", !!input.value.trim());
      const line = field.querySelector("[data-line]");
      if (typeof gsap !== "undefined" && line && !input.value.trim()) {
        gsap.to(line, { scaleX: 0.6, duration: 0.25, ease: "power2.out" });
      }
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  const content = document.querySelector(".login-screen__content");
  if (!content) return;
  gsap.set(content, { opacity: 0, y: 20 });
  gsap.to(content, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: 0.15,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("loginScreen", loginScreen);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
