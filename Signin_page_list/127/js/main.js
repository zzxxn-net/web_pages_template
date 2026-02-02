/** 시안 127: 미래적 클린 + 마이크로 인터랙션 중심 + 입력 반응형 애니메이션 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

function signupForm127() {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    focusedField: null,
    touched: {},
    submitting: false,
    errors: {},

    focusNext: function (nextId) {
      var el = document.getElementById('s127-' + nextId);
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
    if (window.Alpine) window.Alpine.data('signupForm127', signupForm127);
  });
  document.addEventListener('DOMContentLoaded', function () {
    var g = window.gsap;
    var inner = document.querySelector('.s127-inner');
    var header = document.querySelector('.s127-header');
    var formWrap = document.querySelector('.s127-form-wrap');
    if (g && inner) {
      g.from(inner, { opacity: 0, duration: 0.55, ease: 'power2.out' });
      if (header) g.from(header, { opacity: 0, y: -14, duration: 0.42, ease: 'power2.out', delay: 0.1 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 18, duration: 0.45, ease: 'power2.out', delay: 0.2 });
    }
  });
}
