/**
 * 시안 106 - 감성 테크 + 단일 포커스 입력 흐름 + 스크롤 없는 고정 플로우
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm106() {
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

    goNext() {
      if (this.step === 1) {
        this.validateEmail();
        if (this.errors.email) return;
      } else if (this.step === 2) {
        this.validateName();
        if (this.errors.name) return;
      } else if (this.step === 3) {
        this.validatePassword();
        if (this.errors.password) return;
      }
      if (this.step < 4) this.step++;
    },

    handleSubmit() {
      this.validateEmail();
      this.validateName();
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
    if (window.Alpine) window.Alpine.data('signupForm106', signupForm106);
  });
  document.addEventListener('DOMContentLoaded', function () {
    const g = window.gsap;
    if (g) {
      g.from('.s106-layout', { opacity: 0, y: 10, duration: 0.4, ease: 'power2.out' });
      g.from('.s106-header', { opacity: 0, y: -4, duration: 0.32, ease: 'power2.out', delay: 0.06 });
      g.from('.s106-panels', { opacity: 0, duration: 0.3, ease: 'power2.out', delay: 0.12 });
    }
  });
}
