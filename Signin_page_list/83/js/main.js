/**
 * 시안 83 - 감성 테크 + 비대칭 레이아웃 + 포커스 이동 중심 UX
 * 포커스 이동: Enter 시 유효성 통과하면 다음 필드로 자동 포커스, 좌측 브랜드에 현재 필드 힌트 표시
 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;
var FOCUS_ORDER = ["email", "name", "password", "passwordConfirm"];

function signupForm83() {
  return {
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
    showPassword: false,
    submitting: false,
    errors: {},
    focusedField: null,
    focusedLabel: "",

    setFocus: function (field, label) {
      this.focusedField = field;
      this.focusedLabel = label;
    },

    clearFocusIfNotRelated: function () {
      var self = this;
      setTimeout(function () {
        var active = document.activeElement;
        var inputs = document.querySelectorAll(".s83-input, .s83-pw-btn");
        var isInput = Array.from(inputs).some(function (el) {
          return el === active;
        });
        if (!isInput) {
          self.focusedField = null;
          self.focusedLabel = "";
        }
      }, 0);
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

    focusNext: function (current) {
      var idx = FOCUS_ORDER.indexOf(current);
      if (idx < 0 || idx >= FOCUS_ORDER.length - 1) return;

      var runValidation = function () {
        if (current === "email") {
          this.validateEmail();
          return !this.errors.email;
        }
        if (current === "name") {
          this.validateName();
          return !this.errors.name;
        }
        if (current === "password") {
          this.validatePassword();
          return !this.errors.password;
        }
        return true;
      }.call(this);

      if (!runValidation) return;

      var nextField = FOCUS_ORDER[idx + 1];
      var refKey =
        "input" + nextField.charAt(0).toUpperCase() + nextField.slice(1);
      var ref = this.$refs && this.$refs[refKey];
      if (!ref && typeof document !== "undefined") {
        var id = "s83-" + (nextField === "passwordConfirm" ? "passwordConfirm" : nextField);
        ref = document.getElementById(id);
      }
      if (ref && typeof ref.focus === "function") {
        ref.focus();
      }
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

    initFocusFlow: function () {},
  };
}

if (typeof document !== "undefined") {
  document.addEventListener("alpine:init", function () {
    if (window.Alpine) {
      window.Alpine.data("signupForm83", signupForm83);
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    if (window.gsap) {
      window.gsap.from(".s83-layout", {
        opacity: 0,
        y: 24,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });
}
