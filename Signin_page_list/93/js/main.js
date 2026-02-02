/**
 * 시안 93 - 사이버 미니멀 + 단일 포커스 입력 흐름 + 상태 변화 강조
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;
const STEP_LABELS = {
  1: '이메일을 입력하세요.',
  2: '이름을 입력하세요.',
  3: '비밀번호를 설정하세요.',
  4: '비밀번호를 다시 입력하세요.',
};

function signupForm93() {
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
      this.step = Math.min(4, this.step + 1);
      setTimeout(() => {
        const next = this.$refs?.inputName ?? this.$refs?.inputPassword;
        if (next) next.focus();
      }, 50);
    },

    goPrev() {
      this.step = Math.max(1, this.step - 1);
      setTimeout(() => {
        const prev = this.$refs?.inputEmail ?? this.$refs?.inputName ?? this.$refs?.inputPassword;
        if (prev) prev.focus();
      }, 50);
    },

    handleSubmit() {
      this.validatePasswordConfirm();
      if (Object.keys(this.errors).length > 0) return;
      this.submitting = true;
      setTimeout(() => { this.submitting = false; }, 800);
    },

    initAnim() {},
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => { if (window.Alpine) window.Alpine.data('signupForm93', signupForm93); });
  document.addEventListener('DOMContentLoaded', () => {
    const g = window.gsap;
    if (g) {
      g.from('.s93-layout', { opacity: 0, y: 10, duration: 0.35, ease: 'power2.out' });
    }
  });
}
