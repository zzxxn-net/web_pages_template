/**
 * 시안 98 - 감성 테크 + 카드 분리형 + 입력 반응형 애니메이션
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm98() {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    focusEmail: false,
    focusName: false,
    focusPassword: false,
    focusPasswordConfirm: false,
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

    handleSubmit() {
      this.validateEmail();
      this.validateName();
      this.validatePassword();
      this.validatePasswordConfirm();
      if (Object.keys(this.errors).length > 0) return;
      this.submitting = true;
      setTimeout(() => { this.submitting = false; }, 800);
    },

    initAnim() {},
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => { if (window.Alpine) window.Alpine.data('signupForm98', signupForm98); });
  document.addEventListener('DOMContentLoaded', () => {
    const g = window.gsap;
    if (g) {
      g.from('.s98-layout', { opacity: 0, duration: 0.35, ease: 'power2.out' });
      g.from('.s98-card--basic', { opacity: 0, y: 14, duration: 0.45, ease: 'power2.out', delay: 0.06 });
      g.from('.s98-card--account', { opacity: 0, y: 14, duration: 0.45, ease: 'power2.out', delay: 0.12 });
    }
  });
}
