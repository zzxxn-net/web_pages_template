/**
 * 회원가입 시안 52 - 사이버 미니멀 + 단계 분할형(Progressive Form)
 * GSAP 기반 부드러운 전환 · Alpine.js: step, 검증, goNext/goPrev/goToStep · GSAP: 패널 전환
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

    goNext: function () {
      var ctx = this;
      var g = window.gsap;
      if (ctx.step === 1) {
        ctx.validateEmail();
        if (ctx.errors.email) return;
      } else if (ctx.step === 2) {
        ctx.validateName();
        if (ctx.errors.name) return;
      } else if (ctx.step === 3) {
        ctx.validatePassword();
        if (ctx.errors.password) return;
      }

      var outKey = 'panel' + ctx.step;
      var outEl = ctx.$refs[outKey];
      var nextStep = ctx.step + 1;
      var nextKey = 'panel' + nextStep;
      var nextEl = ctx.$refs[nextKey];

      if (g && outEl && nextEl) {
        g.to(outEl, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: function () {
            ctx.step = nextStep;
            ctx.$nextTick(function () {
              g.fromTo(nextEl, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' });
            });
          },
        });
      } else {
        ctx.step = nextStep;
      }
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
        g.to(outEl, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: function () {
            ctx.step = prevStep;
            ctx.$nextTick(function () {
              g.fromTo(prevEl, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' });
            });
          },
        });
      } else {
        ctx.step = prevStep;
      }
    },

    goToStep: function (n) {
      var ctx = this;
      if (n === ctx.step || n < 1 || n > 4) return;
      var g = window.gsap;
      var outKey = 'panel' + ctx.step;
      var outEl = ctx.$refs[outKey];
      var nextKey = 'panel' + n;
      var nextEl = ctx.$refs[nextKey];
      var dir = n > ctx.step ? 1 : -1;
      if (g && outEl && nextEl) {
        g.to(outEl, {
          opacity: 0,
          y: dir * -10,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: function () {
            ctx.step = n;
            ctx.$nextTick(function () {
              g.fromTo(nextEl, { opacity: 0, y: dir * 10 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' });
            });
          },
        });
      } else {
        ctx.step = n;
      }
    },

    handleSubmit: function () {
      var ctx = this;
      ctx.validateEmail();
      ctx.validateName();
      ctx.validatePassword();
      ctx.validatePasswordConfirm();
      if (Object.keys(ctx.errors).length > 0) return;

      ctx.submitting = true;
      setTimeout(function () {
        ctx.submitting = false;
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
      g.from('.s52-wrap', {
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  });
}
