/**
 * 시안 86 - 미래적 클린 + 단계 분할형(Progressive Form) + GSAP 기반 부드러운 전환
 * GSAP: goNext/goPrev 시 해당 패널 fromTo(opacity 0, y 12 → opacity 1, y 0) 부드러운 전환
 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

function runPanelIn86(stepNum) {
  var g = window.gsap;
  var panels = document.querySelectorAll(".s86-panel");
  var panel = panels[stepNum - 1];
  if (g && panel) {
    g.fromTo(panel, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.38, ease: "power2.out" });
  }
}

function signupForm86() {
  return {
    step: 1,
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

    goNext: function () {
      if (this.step === 1) {
        this.validateEmail();
        this.validateName();
        if (this.errors.email || this.errors.name) return;
      }
      this.step = 2;
      requestAnimationFrame(function () { runPanelIn86(2); });
    },

    goPrev: function () {
      this.step = 1;
      requestAnimationFrame(function () { runPanelIn86(1); });
    },

    handleSubmit: function () {
      this.validatePassword();
      this.validatePasswordConfirm();
      if (Object.keys(this.errors).length > 0) return;
      this.submitting = true;
      var self = this;
      setTimeout(function () { self.submitting = false; }, 800);
    },
  };
}

if (typeof document !== "undefined") {
  document.addEventListener("alpine:init", function () {
    if (window.Alpine) window.Alpine.data("signupForm86", signupForm86);
  });
  document.addEventListener("DOMContentLoaded", function () {
    if (window.gsap) window.gsap.from(".s86-wrap", { opacity: 0, y: 16, duration: 0.5, ease: "power2.out" });
  });
}
