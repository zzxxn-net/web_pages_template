/**
 * 시안 63 - 현대 판타지 + 단계 분할형(Progressive Form) + 입력 반응형 애니메이션
 */
declare global {
  interface Window {
    Alpine: import('alpinejs').Alpine;
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

const STEP_FIELDS = ['email', 'name', 'password', 'passwordConfirm'] as const;

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

    stepActive(step: number): boolean {
      const field = STEP_FIELDS[step - 1];
      return this.focusedField === field;
    },

    stepDone(step: number): boolean {
      if (!this.focusedField) return false;
      const idx = STEP_FIELDS.indexOf(this.focusedField as typeof STEP_FIELDS[number]);
      return idx >= step;
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
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    window.Alpine?.data('signupForm', signupForm);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (el: string | Element, v: object) => void; to: (el: Element, v: object) => void } }).gsap;
    if (g) {
      g.from('.s63-wrap', { opacity: 0, y: 14, duration: 0.5, ease: 'power2.out' });
    }
    document.querySelectorAll('.s63-input').forEach((input) => {
      input.addEventListener('focus', () => {
        if (g) g.to(input, { scale: 1.02, duration: 0.22, ease: 'power2.out' });
      });
      input.addEventListener('blur', () => {
        if (g) g.to(input, { scale: 1, duration: 0.22, ease: 'power2.out' });
      });
    });
  });
}

export { signupForm };
