/**
 * 시안 64 - 다크 아카이브 + 마이크로 인터랙션 중심 + GSAP 기반 부드러운 전환
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
      g.from('.s64-wrap', { opacity: 0, y: 16, duration: 0.55, ease: 'power2.out' });
      g.from('.s64-header', { opacity: 0, y: -6, duration: 0.35, delay: 0.1, ease: 'power2.out' });
      g.from('.s64-field', { opacity: 0, x: -8, duration: 0.3, stagger: 0.06, delay: 0.15, ease: 'power2.out' });
      g.from('.s64-actions', { opacity: 0, y: 8, duration: 0.35, delay: 0.4, ease: 'power2.out' });
    }
    document.querySelectorAll('.s64-input').forEach(function (input) {
      if (!g) return;
      input.addEventListener('focus', function () {
        g.to(input, { scale: 1.01, duration: 0.25, ease: 'power2.out' });
      });
      input.addEventListener('blur', function () {
        g.to(input, { scale: 1, duration: 0.25, ease: 'power2.out' });
      });
    });
    document.querySelectorAll('.s64-submit').forEach(function (btn) {
      if (!g) return;
      btn.addEventListener('mouseenter', function () {
        g.to(btn, { scale: 1.02, duration: 0.2, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', function () {
        g.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' });
      });
    });
  });
}
