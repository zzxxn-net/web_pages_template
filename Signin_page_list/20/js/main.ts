/**
 * 회원가입 시안 20 - 네오 브루탈리즘 + 마이크로 인터랙션 중심
 * Alpine.js: focusedField, validEmail/validName/validPassword/validPasswordConfirm, 검증
 * GSAP: 카드 등장
 */

declare global {
  interface Window {
    Alpine: import('alpinejs').Alpine;
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm() {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    focusedField: null as string | null,
    errors: {} as Record<string, string>,

    get validEmail(): boolean {
      const v = this.email.trim();
      if (!v) return false;
      if (!EMAIL_REGEX.test(v)) return false;
      return !this.errors.email;
    },

    get validName(): boolean {
      const v = this.name.trim();
      if (!v || v.length < 2) return false;
      return !this.errors.name;
    },

    get validPassword(): boolean {
      const v = this.password;
      if (!v || v.length < MIN_PASSWORD_LENGTH) return false;
      return !this.errors.password;
    },

    get validPasswordConfirm(): boolean {
      if (this.password !== this.passwordConfirm) return false;
      if (!this.passwordConfirm) return false;
      return !this.errors.passwordConfirm;
    },

    validateEmail(): void {
      const v = this.email.trim();
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

    validateName(): void {
      const v = this.name.trim();
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

    validatePassword(): void {
      const v = this.password;
      if (!v) {
        this.errors.password = '비밀번호를 입력해 주세요.';
        return;
      }
      if (v.length < MIN_PASSWORD_LENGTH) {
        this.errors.password = `비밀번호는 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`;
        return;
      }
      delete this.errors.password;
    },

    validatePasswordConfirm(): void {
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        return;
      }
      delete this.errors.passwordConfirm;
    },

    handleSubmit(): void {
      this.validateEmail();
      this.validateName();
      this.validatePassword();
      this.validatePasswordConfirm();
      if (Object.keys(this.errors).length > 0) return;

      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
      }, 800);
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    window.Alpine?.data('signupForm', signupForm);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (t: string, v: object) => void } }).gsap;
    if (g) {
      g.from('.brutal-card', {
        opacity: 0,
        y: 12,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
