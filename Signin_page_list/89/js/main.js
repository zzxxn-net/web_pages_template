/**
 * 시안 89 - 현대 판타지 + 비대칭 레이아웃 + GSAP 기반 부드러운 전환
 * GSAP: 로드 시 brand·formSection from 좌/우 각각 부드러운 전환
 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

function signupForm89() {
  return {
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
    showPassword: false,
    submitting: false,
    errors: {},

    validateEmail: function () {
      var v = this.email.trim();
      if (!v) { this.errors.email = "이메일을 입력해 주세요."; return; }
      if (!EMAIL_REGEX.test(v)) { this.errors.email = "올바른 이메일 형식이 아닙니다."; return; }
      delete this.errors.email;
    },

    validateName: function () {
      var v = this.name.trim();
      if (!v) { this.errors.name = "이름을 입력해 주세요."; return; }
      if (v.length < 2) { this.errors.name = "이름은 2자 이상 입력해 주세요."; return; }
      delete this.errors.name;
    },

    validatePassword: function () {
      var v = this.password;
      if (!v) { this.errors.password = "비밀번호를 입력해 주세요."; return; }
      if (v.length < MIN_PASSWORD_LENGTH) { this.errors.password = "비밀번호는 " + MIN_PASSWORD_LENGTH + "자 이상이어야 합니다."; return; }
      delete this.errors.password;
    },

    validatePasswordConfirm: function () {
      if (this.password !== this.passwordConfirm) { this.errors.passwordConfirm = "비밀번호가 일치하지 않습니다."; return; }
      delete this.errors.passwordConfirm;
    },

    handleSubmit: function () {
      this.validateEmail();
      this.validateName();
      this.validatePassword();
      this.validatePasswordConfirm();
      if (Object.keys(this.errors).length > 0) return;
      this.submitting = true;
      var self = this;
      setTimeout(function () { self.submitting = false; }, 800);
    },

    initAnim: function () {},
  };
}

if (typeof document !== "undefined") {
  document.addEventListener("alpine:init", function () {
    if (window.Alpine) window.Alpine.data("signupForm89", signupForm89);
  });
  document.addEventListener("DOMContentLoaded", function () {
    if (window.gsap) {
      window.gsap.from(".s89-layout", { opacity: 0, duration: 0.4, ease: "power2.out" });
      window.gsap.from(".s89-brand", { opacity: 0, x: -24, duration: 0.55, ease: "power2.out", delay: 0.05 });
      window.gsap.from(".s89-form-section", { opacity: 0, x: 24, duration: 0.55, ease: "power2.out", delay: 0.1 });
    }
  });
}
