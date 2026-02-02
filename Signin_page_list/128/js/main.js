/** 시안 128: 감성 테크 + 단계 분할형(Progressive Form) + 상태 변화 강조 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

function signupForm128() {
  return {
    step: 1,
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    focusedField: null,
    touched: {},
    submitting: false,
    errors: {},

    goNext: function () {
      this.validateEmail();
      this.validateName();
      if (this.errors.email || this.errors.name) return;
      this.step = 2;
      var g = window.gsap;
      var self = this;
      setTimeout(function () {
        if (g && self.$refs && self.$refs.step2) g.from(self.$refs.step2, { opacity: 0, x: 20, duration: 0.3, ease: 'power2.out' });
      }, 0);
    },

    goPrev: function () {
      this.step = 1;
      var g = window.gsap;
      var self = this;
      setTimeout(function () {
        if (g && self.$refs && self.$refs.step1) g.from(self.$refs.step1, { opacity: 0, x: -20, duration: 0.3, ease: 'power2.out' });
      }, 0);
    },

    focusNext: function (nextId) {
      var el = document.getElementById('s128-' + nextId);
      if (el && typeof el.focus === 'function') el.focus();
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
      if (v.length < MIN_PASSWORD_LENGTH) { this.errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.'; return; }
      delete this.errors.password;
    },

    validatePasswordConfirm: function () {
      if (this.password !== this.passwordConfirm) { this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.'; return; }
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

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', function () {
    if (window.Alpine) window.Alpine.data('signupForm128', signupForm128);
  });
  document.addEventListener('DOMContentLoaded', function () {
    var g = window.gsap;
    var inner = document.querySelector('.s128-inner');
    var header = document.querySelector('.s128-header');
    var formWrap = document.querySelector('.s128-form-wrap');
    if (g && inner) {
      g.from(inner, { opacity: 0, duration: 0.5, ease: 'power2.out' });
      if (header) g.from(header, { opacity: 0, y: -10, duration: 0.35, ease: 'power2.out', delay: 0.08 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 12, duration: 0.35, ease: 'power2.out', delay: 0.14 });
    }
  });
}
