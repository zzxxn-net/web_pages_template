/**
 * 회원가입 시안 57 - 감성 테크 + 단계 분할형 + 입력 반응형 애니메이션
 * Alpine.js: step, goNext/goPrev, 검증, 폼 제출 · GSAP: 패널 전환 + 입력 포커스 반응(scale)
 */

var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var MIN_PASSWORD_LENGTH = 8;

function signupForm() {
  return {
    step: 1,
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
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
      if (v.length < MIN_PASSWORD_LENGTH) { this.errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.'; return; }
      delete this.errors.password;
    },

    validatePasswordConfirm: function () {
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        return;
      }
      delete this.errors.passwordConfirm;
    },

    goNext: function () {
      var ctx = this;
      if (ctx.step === 1) { ctx.validateEmail(); if (ctx.errors.email) return; }
      else if (ctx.step === 2) { ctx.validateName(); if (ctx.errors.name) return; }
      else if (ctx.step === 3) { ctx.validatePassword(); if (ctx.errors.password) return; }
      var g = window.gsap;
      var outKey = 'panel' + ctx.step;
      var outEl = ctx.$refs[outKey];
      var nextStep = ctx.step + 1;
      var nextKey = 'panel' + nextStep;
      var nextEl = ctx.$refs[nextKey];
      if (g && outEl && nextEl) {
        g.to(outEl, { opacity: 0, y: -8, duration: 0.22, ease: 'power2.in', onComplete: function () {
          ctx.step = nextStep;
          ctx.$nextTick(function () {
            g.fromTo(nextEl, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
          });
        } });
      } else { ctx.step = nextStep; }
    },

    goPrev: function () {
      var ctx = this;
      var g = window.gsap;
      var outKey = 'panel' + ctx.step;
      var outEl = ctx.$refs[outKey];
      var prevStep = ctx.step - 1;
      var prevKey = 'panel' + prevStep;
      var prevEl = ctx.$refs[prevKey];
      if (g && outEl && prevEl) {
        g.to(outEl, { opacity: 0, y: 8, duration: 0.22, ease: 'power2.in', onComplete: function () {
          ctx.step = prevStep;
          ctx.$nextTick(function () {
            g.fromTo(prevEl, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
          });
        } });
      } else { ctx.step = prevStep; }
    },

    handleSubmit: function () {
      var ctx = this;
      ctx.validateEmail();
      ctx.validateName();
      ctx.validatePassword();
      ctx.validatePasswordConfirm();
      if (Object.keys(ctx.errors).length > 0) return;
      ctx.submitting = true;
      setTimeout(function () { ctx.submitting = false; }, 800);
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', function () {
    if (window.Alpine) window.Alpine.data('signupForm', signupForm);
  });
  document.addEventListener('DOMContentLoaded', function () {
    var g = window.gsap;
    if (g) g.from('.s57-wrap', { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out' });
    document.querySelectorAll('.s57-input').forEach(function (input) {
      input.addEventListener('focus', function () {
        if (window.gsap) window.gsap.to(input, { scale: 1.02, duration: 0.25, ease: 'power2.out' });
      });
      input.addEventListener('blur', function () {
        if (window.gsap) window.gsap.to(input, { scale: 1, duration: 0.25, ease: 'power2.out' });
      });
    });
  });
}
