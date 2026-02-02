/** 시안 129: 실험적 인터페이스 + 단일 포커스 입력 흐름 + 스크롤 없는 고정 플로우 */
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;
var STEP_LABELS = ['이메일', '이름', '비밀번호', '비밀번호 확인'];

function signupForm129() {
  return {
    stepIndex: 0,
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    focusedField: null,
    touched: {},
    submitting: false,
    errors: {},
    get stepLabel() {
      return STEP_LABELS[this.stepIndex] || '';
    },
    goNext: function () {
      var idx = this.stepIndex;
      if (idx === 0) {
        this.validateEmail();
        if (this.errors.email) return;
      } else if (idx === 1) {
        this.validateName();
        if (this.errors.name) return;
      } else if (idx === 2) {
        this.validatePassword();
        if (this.errors.password) return;
      }
      if (idx >= 3) return;
      this.stepIndex = idx + 1;
      var g = window.gsap;
      var self = this;
      setTimeout(function () {
        var slotKey = 'slot' + (idx + 1);
        if (g && self.$refs && self.$refs[slotKey])
          g.from(self.$refs[slotKey], { opacity: 0, y: 12, duration: 0.28, ease: 'power2.out' });
      }, 0);
    },
    goPrev: function () {
      var idx = this.stepIndex;
      if (idx <= 0) return;
      this.stepIndex = idx - 1;
      var g = window.gsap;
      var self = this;
      setTimeout(function () {
        var slotKey = 'slot' + (idx - 1);
        if (g && self.$refs && self.$refs[slotKey])
          g.from(self.$refs[slotKey], { opacity: 0, y: -8, duration: 0.28, ease: 'power2.out' });
      }, 0);
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
    initAnim: function () {}
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', function () {
    if (window.Alpine) window.Alpine.data('signupForm129', signupForm129);
  });
  document.addEventListener('DOMContentLoaded', function () {
    var g = window.gsap;
    var inner = document.querySelector('.s129-inner');
    var header = document.querySelector('.s129-header');
    var formWrap = document.querySelector('.s129-form-wrap');
    if (g && inner) {
      g.from(inner, { opacity: 0, duration: 0.45, ease: 'power2.out' });
      if (header) g.from(header, { opacity: 0, y: -8, duration: 0.3, ease: 'power2.out', delay: 0.06 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 10, duration: 0.3, ease: 'power2.out', delay: 0.12 });
    }
  });
}
