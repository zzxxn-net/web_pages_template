/**
 * 시안 100 - 다크 아카이브 + 단일 포커스 입력 흐름 + GSAP 기반 부드러운 전환
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;
const STEP_LABELS = {
  1: '이메일을 입력하세요.',
  2: '이름을 입력하세요.',
  3: '비밀번호를 설정하세요.',
  4: '비밀번호를 다시 입력하세요.',
};

function signupForm100() {
  return {
    step: 1,
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    errors: {},

    get stepLabel() {
      return STEP_LABELS[this.step] || '';
    },

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

    goNext() {
      const s = this.step;
      if (s === 1) {
        this.validateEmail();
        if (this.errors.email) return;
      } else if (s === 2) {
        this.validateName();
        if (this.errors.name) return;
      } else if (s === 3) {
        this.validatePassword();
        if (this.errors.password) return;
      }
      const g = window.gsap;
      if (g) g.to('.s100-step--active', { opacity: 0, duration: 0.2, ease: 'power2.in' });
      const self = this;
      setTimeout(function () {
        self.step = Math.min(4, s + 1);
        const refs = self.$refs || {};
        const next = refs.inputName || refs.inputPassword || refs.inputPasswordConfirm;
        if (next) next.focus();
        if (g) g.to('.s100-step--active', { opacity: 1, duration: 0.28, ease: 'power2.out', delay: 0.05 });
      }, 220);
    },

    goPrev() {
      const s = this.step;
      const g = window.gsap;
      if (g) g.to('.s100-step--active', { opacity: 0, duration: 0.2, ease: 'power2.in' });
      const self = this;
      setTimeout(function () {
        self.step = Math.max(1, s - 1);
        const refs = self.$refs || {};
        const prev = refs.inputEmail || refs.inputName || refs.inputPassword;
        if (prev) prev.focus();
        if (g) g.to('.s100-step--active', { opacity: 1, duration: 0.28, ease: 'power2.out', delay: 0.05 });
      }, 220);
    },

    handleSubmit() {
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
    if (window.Alpine) window.Alpine.data('signupForm100', signupForm100);
  });
  document.addEventListener('DOMContentLoaded', function () {
    const g = window.gsap;
    if (g) g.from('.s100-layout', { opacity: 0, y: 10, duration: 0.35, ease: 'power2.out' });
  });
}
