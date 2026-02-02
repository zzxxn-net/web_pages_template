/**
 * 시안 85 - 다크 아카이브 + 단일 포커스 입력 흐름 + 입력 반응형 애니메이션
 * 단일 포커스: focusedField 설정 시 해당 필드만 강조, 나머지는 --dim. GSAP 로드 애니메이션.
 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

function signupForm85() {
  return {
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
    showPassword: false,
    submitting: false,
    errors: {},
    focusedField: null,

    setFocused: function (field) {
      this.focusedField = field;
    },

    validateEmail: function () {
      var v = this.email.trim();
      if (!v) {
        this.errors.email = "이메일을 입력해 주세요.";
        return;
      }
      if (!EMAIL_REGEX.test(v)) {
        this.errors.email = "올바른 이메일 형식이 아닙니다.";
        return;
      }
      delete this.errors.email;
    },

    validateName: function () {
      var v = this.name.trim();
      if (!v) {
        this.errors.name = "이름을 입력해 주세요.";
        return;
      }
      if (v.length < 2) {
        this.errors.name = "이름은 2자 이상 입력해 주세요.";
        return;
      }
      delete this.errors.name;
    },

    validatePassword: function () {
      var v = this.password;
      if (!v) {
        this.errors.password = "비밀번호를 입력해 주세요.";
        return;
      }
      if (v.length < MIN_PASSWORD_LENGTH) {
        this.errors.password = "비밀번호는 " + MIN_PASSWORD_LENGTH + "자 이상이어야 합니다.";
        return;
      }
      delete this.errors.password;
    },

    validatePasswordConfirm: function () {
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
        return;
      }
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
      setTimeout(function () {
        self.submitting = false;
      }, 800);
    },

    initAnim: function () {},
  };
}

if (typeof document !== "undefined") {
  document.addEventListener("alpine:init", function () {
    if (window.Alpine) {
      window.Alpine.data("signupForm85", signupForm85);
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    if (window.gsap) {
      window.gsap.from(".s85-wrap", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });
}
