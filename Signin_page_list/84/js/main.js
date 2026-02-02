/**
 * 시안 84 - 네오 브루탈리즘 + 카드 분리형 레이아웃 + 상태 변화 강조
 * 상태 변화: focused → 카드 테두리/섀도우 핑크, invalid → 빨간 테두리/섀도우, valid → 체크 표시
 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

function signupForm84() {
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
  };
}

if (typeof document !== "undefined") {
  document.addEventListener("alpine:init", function () {
    if (window.Alpine) {
      window.Alpine.data("signupForm84", signupForm84);
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    if (window.gsap) {
      window.gsap.from(".s84-wrap", {
        opacity: 0,
        y: 16,
        duration: 0.45,
        ease: "power2.out",
      });
    }
  });
}
