/**
 * 회원가입 시안 38 - 감성 테크 + 비대칭 레이아웃
 * 포커스 이동 중심 UX · Alpine.js: focusedField, focusNext, 검증, 폼 제출 · GSAP: 뷰 등장
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

    focusNext(field: 'name' | 'password' | 'passwordConfirm'): void {
      const refs = (this as unknown as { $refs: Record<string, HTMLElement | undefined> }).$refs;
      const map = {
        name: refs.inputName,
        password: refs.inputPassword,
        passwordConfirm: refs.inputPasswordConfirm,
      };
      const el = map[field] as HTMLInputElement | undefined;
      if (el && typeof el.focus === 'function') el.focus();
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
      g.from('.emasym-form-inner', {
        opacity: 0,
        x: 10,
        duration: 0.45,
        ease: 'power2.out',
      });
      g.from('.emasym-visual-content', {
        opacity: 0,
        y: 8,
        duration: 0.4,
        delay: 0.05,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
