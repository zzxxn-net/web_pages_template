/** 시안 117: 다크 아카이브 + 카드 분리형 레이아웃 + 상태 변화 강조 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
    gsap?: { from: (el: string | HTMLElement, v: object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

interface SignupForm117State {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
  focusedField: string | null;
  touched: Record<string, boolean>;
  submitting: boolean;
  errors: Record<string, string>;
  focusNext: (nextId: string) => void;
  cardState: (field: string) => Record<string, boolean>;
  validateEmail: () => void;
  validateName: () => void;
  validatePassword: () => void;
  validatePasswordConfirm: () => void;
  handleSubmit: () => void;
  initAnim: () => void;
}

function signupForm117(): SignupForm117State {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    focusedField: null,
    touched: {} as Record<string, boolean>,
    submitting: false,
    errors: {} as Record<string, string>,

    focusNext(nextId: string): void {
      const el = document.getElementById('s117-' + nextId);
      if (el && typeof (el as HTMLInputElement).focus === 'function') {
        (el as HTMLInputElement).focus();
      }
    },

    cardState(field: string): Record<string, boolean> {
      const self = this as unknown as SignupForm117State;
      const touched = self.touched[field];
      const error = self.errors[field];
      const value = (self as Record<string, unknown>)[field];
      const hasValue = typeof value === 'string' && value.trim().length > 0;
      return {
        's117-card--focused': self.focusedField === field,
        's117-card--valid': !!(touched && !error && hasValue),
        's117-card--invalid': !!error,
      };
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
        this.errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.';
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

    initAnim(): void {},
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) {
      window.Alpine.data('signupForm117', signupForm117);
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = window.gsap;
    const inner = document.querySelector('.s117-inner');
    const header = document.querySelector('.s117-header');
    const formWrap = document.querySelector('.s117-form-wrap');
    if (g && inner) {
      g.from(inner, { opacity: 0, duration: 0.5, ease: 'power2.out' });
      if (header) g.from(header, { opacity: 0, y: -14, duration: 0.4, ease: 'power2.out', delay: 0.08 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 14, duration: 0.4, ease: 'power2.out', delay: 0.15 });
    }
  });
}

export { signupForm117 };
