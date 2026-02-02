/** 시안 122: 네오 브루탈리즘 + 마이크로 인터랙션 중심 + 상태 변화 강조 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
    gsap?: { from: (el: string | HTMLElement, v: object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm122(): Record<string, unknown> {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    focusedField: null as string | null,
    touched: {} as Record<string, boolean>,
    submitting: false,
    errors: {} as Record<string, string>,

    focusNext(nextId: string): void {
      const el = document.getElementById('s122-' + nextId);
      if (el && typeof (el as HTMLInputElement).focus === 'function') {
        (el as HTMLInputElement).focus();
      }
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
      window.Alpine.data('signupForm122', signupForm122);
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = window.gsap;
    const inner = document.querySelector('.s122-inner');
    const header = document.querySelector('.s122-header');
    const formWrap = document.querySelector('.s122-form-wrap');
    if (g && inner) {
      g.from(inner, { opacity: 0, duration: 0.52, ease: 'power2.out' });
      if (header) g.from(header, { opacity: 0, y: -10, duration: 0.4, ease: 'power2.out', delay: 0.1 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 12, duration: 0.4, ease: 'power2.out', delay: 0.18 });
    }
  });
}

export { signupForm122 };
