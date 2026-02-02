/**
 * Login page — Design 15: Modern Fantasy · Card-separated · State change emphasis
 */
function fantasyCardLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    emailFocused: false,
    passwordFocused: false,
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1200);
    }
  };
}
function initEntrance() {
  if (typeof gsap === "undefined") return;
  const brand = document.querySelector(".login-fantasy__brand");
  const card = document.querySelector(".login-fantasy__card");
  if (!brand || !card) return;
  gsap.set(brand, { opacity: 0, y: -12 });
  gsap.set(card, { opacity: 0, y: 16 });
  gsap.to(brand, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.5, delay: 0.12, ease: "power2.out" });
}
if (typeof Alpine !== "undefined") Alpine.data("fantasyCardLogin", fantasyCardLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
