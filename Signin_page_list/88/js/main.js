/**
 * 시안 88 - 실험적 인터페이스 + 마이크로 인터랙션 중심 + 상태 변화 강조
 * focusedField로 포커스 시 마이크로 인터랙션(scale·라벨·글로우). GSAP 로드·필드 stagger.
 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

function signupForm88() {
  return {
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
    showPassword: false,
    submitting: false,
    errors: {},
    focusedField: null,

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

    initStagger: function () {},
  };
}

if (typeof document !== "undefined") {
  document.addEventListener("alpine:init", function () {
    if (window.Alpine) window.Alpine.data("signupForm88", signupForm88);
  });
  document.addEventListener("DOMContentLoaded", function () {
    if (window.gsap) {
      window.gsap.from(".s88-wrap", { opacity: 0, y: 18, duration: 0.5, ease: "power2.out" });
      window.gsap.from(".s88-field", { opacity: 0, y: 10, duration: 0.4, stagger: 0.06, ease: "power2.out", delay: 0.1 });
    }
  });
}
