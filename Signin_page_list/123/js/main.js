/** 시안 123: 실험적 인터페이스 + 카드 분리형 레이아웃 + 포커스 이동 중심 UX */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

function signupForm123() {
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
      var nextEl = document.getElementById('s123-' + nextId);
      var refName = 'card' + nextId.charAt(0).toUpperCase() + nextId.slice(1);
      var cardEl = this.$refs && this.$refs[refName];
      var g = window.gsap;
      if (cardEl && g) {
        g.to(cardEl, { scale: 1.02, duration: 0.28, ease: 'power2.out' });
      }
      if (nextEl && typeof nextEl.focus === 'function') {
        requestAnimationFrame(function () { nextEl.focus(); });
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
    if (window.Alpine) window.Alpine.data('signupForm123', signupForm123);
  });
  document.addEventListener('DOMContentLoaded', function () {
    var g = window.gsap;
    var inner = document.querySelector('.s123-inner');
    var header = document.querySelector('.s123-header');
    var formWrap = document.querySelector('.s123-form-wrap');
    if (g && inner) {
      g.from(inner, { opacity: 0, duration: 0.5, ease: 'power2.out' });
      if (header) g.from(header, { opacity: 0, y: -12, duration: 0.38, ease: 'power2.out', delay: 0.08 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 16, duration: 0.4, ease: 'power2.out', delay: 0.16 });
    }
  });
}
