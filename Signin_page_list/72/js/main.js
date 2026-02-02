/**
 * 시안 72 - 다크 아카이브 + 단계 분할형 + 포커스 이동 중심 UX
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
    step: 1,
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
    focusInputForStep: function (n) {
      var ctx = this;
      ctx.$nextTick(function () {
        var el = ctx.$refs['input' + n];
        if (el && el.focus) el.focus();
      });
    },
    goNext: function () {
      var ctx = this;
      var g = window.gsap;
      if (ctx.step === 1) { this.validateEmail(); if (ctx.errors.email) return; }
      else if (ctx.step === 2) { this.validateName(); if (ctx.errors.name) return; }
      else if (ctx.step === 3) { this.validatePassword(); if (ctx.errors.password) return; }
      var nextStep = ctx.step + 1;
      var outEl = ctx.$refs['panel' + ctx.step];
      var nextEl = ctx.$refs['panel' + nextStep];
      if (g && outEl && nextEl) {
        g.to(outEl, { opacity: 0, y: -8, duration: 0.2, ease: 'power2.in', onComplete: function () {
          ctx.step = nextStep;
          ctx.$nextTick(function () { g.fromTo(nextEl, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }); ctx.focusInputForStep(nextStep); });
        } });
      } else { ctx.step = nextStep; this.focusInputForStep(nextStep); }
    },
    goPrev: function () {
      var ctx = this;
      var g = window.gsap;
      var prevStep = ctx.step - 1;
      var outEl = ctx.$refs['panel' + ctx.step];
      var prevEl = ctx.$refs['panel' + prevStep];
      if (g && outEl && prevEl) {
        g.to(outEl, { opacity: 0, y: 8, duration: 0.2, ease: 'power2.in', onComplete: function () {
          ctx.step = prevStep;
          ctx.$nextTick(function () { g.fromTo(prevEl, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }); ctx.focusInputForStep(prevStep); });
        } });
      } else { ctx.step = prevStep; this.focusInputForStep(prevStep); }
    },
    goToStep: function (n) {
      var ctx = this;
      if (n === ctx.step || n < 1 || n > 4) return;
      var g = window.gsap;
      var outEl = ctx.$refs['panel' + ctx.step];
      var nextEl = ctx.$refs['panel' + n];
      var dir = n > ctx.step ? 1 : -1;
      if (g && outEl && nextEl) {
        g.to(outEl, { opacity: 0, y: dir * -8, duration: 0.2, ease: 'power2.in', onComplete: function () {
          ctx.step = n;
          ctx.$nextTick(function () { g.fromTo(nextEl, { opacity: 0, y: dir * 8 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }); ctx.focusInputForStep(n); });
        } });
      } else { ctx.step = n; this.focusInputForStep(n); }
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
    if (g) g.from('.s72-wrap', { opacity: 0, y: 14, duration: 0.5, ease: 'power2.out' });
  });
}
