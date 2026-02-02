/**
 * 시안 99 - 네오 브루탈리즘 + 단계 분할형 + 상태 변화 강조
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm99() {
  return {
    step: 1,
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    touched: {},
    submitting: false,
    errors: {},

    validateEmail() {
      const v = this.email.trim();
      if (!v) { this.errors.email = '이메일을 입력해 주세요.'; return; }
      if (!EMAIL_REGEX.test(v)) { this.errors.email = '올바른 이메일 형식이 아닙니다.'; return; }
      delete this.errors.email;
    },

    validateName() {
      const v = this.name.trim();
      if (!v) { this.errors.name = '이름을 입력해 주세요.'; return; }
      if (v.length < 2) { this.errors.name = '이름은 2자 이상 입력해 주세요.'; return; }
      delete this.errors.name;
    },

    validatePassword() {
      const v = this.password;
      if (!v) { this.errors.password = '비밀번호를 입력해 주세요.'; return; }
      if (v.length < MIN_PASSWORD_LENGTH) { this.errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.'; return; }
      delete this.errors.password;
    },

    validatePasswordConfirm() {
      if (this.password !== this.passwordConfirm) { this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.'; return; }
      delete this.errors.passwordConfirm;
    },

    nextStep() {
      this.validateEmail();
      this.validateName();
      if (this.errors.email || this.errors.name) return;
      const g = window.gsap;
      if (g) {
        g.to('.s99-panel', { opacity: 0, duration: 0.15, ease: 'power2.in' });
      }
      const self = this;
      setTimeout(function () {
        self.step = 2;
        const panel2 = self.$refs && self.$refs.panel2;
        if (panel2) {
          const input = panel2.querySelector('input');
          if (input) setTimeout(function () { input.focus(); }, 100);
        }
        if (g) {
          g.to('.s99-panel', { opacity: 1, duration: 0.22, ease: 'power2.out', delay: 0.05 });
        }
      }, 160);
    },

    prevStep() {
      const g = window.gsap;
      if (g) {
        g.to('.s99-panel', { opacity: 0, duration: 0.15, ease: 'power2.in' });
      }
      const self = this;
      setTimeout(function () {
        self.step = 1;
        const panel1 = self.$refs && self.$refs.panel1;
        if (panel1) {
          const input = panel1.querySelector('input');
          if (input) setTimeout(function () { input.focus(); }, 100);
        }
        if (g) {
          g.to('.s99-panel', { opacity: 1, duration: 0.22, ease: 'power2.out', delay: 0.05 });
        }
      }, 160);
    },

    goToStep(s) {
      this.step = s;
    },

    handleSubmit() {
      this.validatePassword();
      this.validatePasswordConfirm();
      if (Object.keys(this.errors).length > 0) return;
      this.submitting = true;
      setTimeout(function () { this.submitting = false; }.bind(this), 800);
    },

    initAnim() {},
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', function () {
    if (window.Alpine) window.Alpine.data('signupForm99', signupForm99);
  });
  document.addEventListener('DOMContentLoaded', function () {
    const g = window.gsap;
    if (g) {
      g.from('.s99-layout', { opacity: 0, y: 8, duration: 0.3, ease: 'power2.out' });
    }
  });
}
