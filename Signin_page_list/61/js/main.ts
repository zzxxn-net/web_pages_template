/**
 * 시안 61 - 사이버 미니멀 + 비대칭 레이아웃 + 포커스 이동 중심 UX
 */
declare global {
  interface Window {
    Alpine: import('alpinejs').Alpine;
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

const FOCUS_LABELS: Record<string, string> = {
  email: '이메일',
  name: '이름',
  password: '비밀번호',
  passwordConfirm: '비밀번호 확인',
};

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

    get focusLabel(): string {
      return this.focusedField ? FOCUS_LABELS[this.focusedField] ?? '' : '';
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
        this.errors.password =
          '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.';
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
    const g = (window as unknown as {
      gsap?: {
        from: (el: string | Element, v: object) => void;
        to: (el: Element, v: object) => void;
      };
    }).gsap;
    if (g) {
      g.from('.s61-layout', {
        opacity: 0,
        y: 12,
        duration: 0.48,
        ease: 'power2.out',
      });
      g.from('.s61-aside', {
        x: -12,
        opacity: 0,
        duration: 0.4,
        delay: 0.08,
        ease: 'power2.out',
      });
      g.from('.s61-form-wrap', {
        x: 12,
        opacity: 0,
        duration: 0.4,
        delay: 0.08,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
