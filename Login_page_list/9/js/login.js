/**
 * Login page — Design 9: Cyber Minimal · Full-screen · State change emphasis
 * Alpine.js + status state (compiled from login.ts)
 */
function cyberFullLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    status: "idle",
    get statusClass() {
      return {
        "is-idle": this.status === "idle",
        "is-focus": this.status === "focus",
        "is-loading": this.status === "loading",
      };
    },
    get statusText() {
      const map = { idle: "대기", focus: "입력 중", loading: "확인 중…" };
      return map[this.status] || "대기";
    },
    setStatus(s) {
      this.status = s;
    },
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      this.status = "loading";
      setTimeout(() => {
        this.loading = false;
        this.status = "idle";
      }, 1200);
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  const center = document.querySelector(".login-cyber-full__center");
  if (!center) return;
  gsap.set(center, { opacity: 0, y: 12 });
  gsap.to(center, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("cyberFullLogin", cyberFullLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
