/**
 * 시안 105 - 다크 아카이브 + 마이크로 인터랙션 중심 + 포커스 이동 중심 UX
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;
const FOCUS_ORDER = ['email', 'name', 'password', 'passwordConfirm'];

function signupForm105() {
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

    focusNext(current) {
      const idx = FOCUS_ORDER.indexOf(current);
      if (idx < 0 || idx >= FOCUS_ORDER.length - 1) return;
      const nextIdMap = { email: 's105-email', name: 's105-name', password: 's105-password', passwordConfirm: 's105-passwordConfirm' };
      const nextKey = FOCUS_ORDER[idx + 1];
      const next = document.getElementById(nextIdMap[nextKey]);
      if (next && typeof next.focus === 'function') next.focus();
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
    if (window.Alpine) window.Alpine.data('signupForm105', signupForm105);
  });
  document.addEventListener('DOMContentLoaded', function () {
    const g = window.gsap;
    if (g) {
      g.from('.s105-layout', { opacity: 0, y: 8, duration: 0.35, ease: 'power2.out' });
      g.from('.s105-header', { opacity: 0, y: -6, duration: 0.3, ease: 'power2.out', delay: 0.05 });
      g.from('.s105-field', { opacity: 0, y: 4, duration: 0.28, stagger: 0.04, ease: 'power2.out', delay: 0.1 });
    }
  });
}
