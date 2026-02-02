/**
 * 시안 76 - 감성 테크 + 단일 포커스 입력 흐름 + 상태 변화 강조
 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

function signupForm76() {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    focusedField: null,
    errors: {},
    valid: { email: false, name: false, password: false, passwordConfirm: false },
    validateEmail: function () {
      var v = this.email.trim();
      if (!v) {
        this.errors.email = '이메일을 입력해 주세요.';
        this.valid.email = false;
        return;
      }
      if (!EMAIL_REGEX.test(v)) {
        this.errors.email = '올바른 이메일 형식이 아닙니다.';
        this.valid.email = false;
        return;
      }
      delete this.errors.email;
      this.valid.email = true;
    },
    validateName: function () {
      var v = this.name.trim();
      if (!v) {
        this.errors.name = '이름을 입력해 주세요.';
        this.valid.name = false;
        return;
      }
      if (v.length < 2) {
        this.errors.name = '이름은 2자 이상 입력해 주세요.';
        this.valid.name = false;
        return;
      }
      delete this.errors.name;
      this.valid.name = true;
    },
    validatePassword: function () {
      var v = this.password;
      if (!v) {
        this.errors.password = '비밀번호를 입력해 주세요.';
        this.valid.password = false;
        return;
      }
      if (v.length < MIN_PASSWORD_LENGTH) {
        this.errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.';
        this.valid.password = false;
        return;
      }
      delete this.errors.password;
      this.valid.password = true;
    },
    validatePasswordConfirm: function () {
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        this.valid.passwordConfirm = false;
        return;
      }
      delete this.errors.passwordConfirm;
      this.valid.passwordConfirm = !!this.passwordConfirm;
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
    if (window.Alpine) window.Alpine.data('signupForm76', signupForm76);
  });
  document.addEventListener('DOMContentLoaded', function () {
    var gsap = window.gsap;
    if (gsap) {
      var viewport = document.querySelector('.s76-viewport');
      if (viewport) {
        gsap.fromTo(viewport, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' });
      }
    }
  });
}
