/**
 * 회원가입 시안 54 - 미래적 클린 + 풀스크린 몰입형 + 포커스 이동 중심 UX
 * Alpine.js: focusedField, 검증, focusNext(Enter로 다음 필드 이동), 폼 제출 · GSAP: 풀 영역 등장
 */

var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;
var FOCUS_ORDER = ['email', 'name', 'password', 'passwordConfirm'];

function signupForm() {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    focusedField: null,
    errors: {},

    validateEmail: function () {
      var v = this.email.trim();
      if (!v) {
        this.errors.email = '이메일을 입력해 주세요.';
        return;
      }
      if (!EMAIL_REGEX.test(v)) {
        this.errors.email = '올바른 이메일 형식이 아닙니다.';
        return;
      }
      delete this.errors.email;
    },

    validateName: function () {
      var v = this.name.trim();
      if (!v) {
        this.errors.name = '이름을 입력해 주세요.';
        return;
      }
      if (v.length < 2) {
        this.errors.name = '이름은 2자 이상 입력해 주세요.';
        return;
      }
      delete this.errors.name;
    },

    validatePassword: function () {
      var v = this.password;
      if (!v) {
        this.errors.password = '비밀번호를 입력해 주세요.';
        return;
      }
      if (v.length < MIN_PASSWORD_LENGTH) {
        this.errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.';
        return;
      }
      delete this.errors.password;
    },

    validatePasswordConfirm: function () {
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        return;
      }
      delete this.errors.passwordConfirm;
    },

    focusNext: function (current) {
      var idx = FOCUS_ORDER.indexOf(current);
      if (idx < 0 || idx >= FOCUS_ORDER.length - 1) return;
      var nextId = current === 'email' ? 's54-name' : current === 'name' ? 's54-password' : current === 'password' ? 's54-passwordConfirm' : '';
      var el = document.getElementById(nextId);
      if (el && typeof el.focus === 'function') el.focus();
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

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', function () {
    if (window.Alpine) window.Alpine.data('signupForm', signupForm);
  });

  document.addEventListener('DOMContentLoaded', function () {
    var g = window.gsap;
    if (g) {
      g.from('.s54-full', {
        opacity: 0,
        y: 14,
        duration: 0.48,
        ease: 'power2.out',
      });
    }
  });
}
