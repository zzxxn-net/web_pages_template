/**
 * 시안 60 - 미래적 클린 + 카드 분리형 + 상태 변화 강조
 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

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
    cardState: function (field) {
      var focused = this.focusedField === field;
      var invalid = Boolean(this.errors[field]);
      var valid = this.getFieldValid(field);
      return {
        's60-card--focused': focused,
        's60-card--invalid': invalid,
        's60-card--valid': !invalid && valid,
      };
    },
    getFieldValid: function (field) {
      switch (field) {
        case 'email':
          return Boolean(this.email.trim()) && EMAIL_REGEX.test(this.email.trim());
        case 'name':
          return this.name.trim().length >= 2;
        case 'password':
          return this.password.length >= MIN_PASSWORD_LENGTH;
        case 'passwordConfirm':
          return Boolean(this.passwordConfirm && this.password === this.passwordConfirm);
        default:
          return false;
      }
    },
    validateEmail: function () {
      var v = this.email.trim();
      if (!v) { this.errors.email = '이메일을 입력해 주세요.'; return; }
      if (!EMAIL_REGEX.test(v)) { this.errors.email = '올바른 이메일 형식이 아닙니다.'; return; }
      delete this.errors.email;
    },
    validateName: function () {
      var v = this.name.trim();
      if (!v) { this.errors.name = '이름을 입력해 주세요.'; return; }
      if (v.length < 2) { this.errors.name = '이름은 2자 이상 입력해 주세요.'; return; }
      delete this.errors.name;
    },
    validatePassword: function () {
      var v = this.password;
      if (!v) { this.errors.password = '비밀번호를 입력해 주세요.'; return; }
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
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', function () {
    if (window.Alpine) window.Alpine.data('signupForm', signupForm);
  });
  document.addEventListener('DOMContentLoaded', function () {
    var g = window.gsap;
    if (g) {
      g.from('.s60-wrap', { opacity: 0, y: 16, duration: 0.52, ease: 'power2.out' });
    }
    document.querySelectorAll('.s60-card').forEach(function (card) {
      var input = card.querySelector('.s60-input');
      if (!input || !g) return;
      input.addEventListener('focus', function () {
        g.to(card, { scale: 1.01, duration: 0.26, ease: 'power2.out' });
      });
      input.addEventListener('blur', function () {
        g.to(card, { scale: 1, duration: 0.26, ease: 'power2.out' });
      });
    });
  });
}
