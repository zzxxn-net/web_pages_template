/**
 * 시안 76 - 감성 테크 + 단일 포커스 + 상태 변화 강조
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm76(): Record<string, unknown> {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    focusedField: null as string | null,
    errors: {} as Record<string, string>,
    valid: { email: false, name: false, password: false, passwordConfirm: false } as Record<string, boolean>,

    validateEmail(): void {
      const v = (this as { email: string }).email.trim();
      const errors = (this as { errors: Record<string, string> }).errors;
      const valid = (this as { valid: Record<string, boolean> }).valid;
      if (!v) {
        errors.email = '이메일을 입력해 주세요.';
        valid.email = false;
        return;
      }
      if (!EMAIL_REGEX.test(v)) {
        errors.email = '올바른 이메일 형식이 아닙니다.';
        valid.email = false;
        return;
      }
      delete errors.email;
      valid.email = true;
    },

    validateName(): void {
      const v = (this as { name: string }).name.trim();
      const errors = (this as { errors: Record<string, string> }).errors;
      const valid = (this as { valid: Record<string, boolean> }).valid;
      if (!v) {
        errors.name = '이름을 입력해 주세요.';
        valid.name = false;
        return;
      }
      if (v.length < 2) {
        errors.name = '이름은 2자 이상 입력해 주세요.';
        valid.name = false;
        return;
      }
      delete errors.name;
      valid.name = true;
    },

    validatePassword(): void {
      const v = (this as { password: string }).password;
      const errors = (this as { errors: Record<string, string> }).errors;
      const valid = (this as { valid: Record<string, boolean> }).valid;
      if (!v) {
        errors.password = '비밀번호를 입력해 주세요.';
        valid.password = false;
        return;
      }
      if (v.length < MIN_PASSWORD_LENGTH) {
        errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.';
        valid.password = false;
        return;
      }
      delete errors.password;
      valid.password = true;
    },

    validatePasswordConfirm(): void {
      const self = this as {
        password: string;
        passwordConfirm: string;
        errors: Record<string, string>;
        valid: Record<string, boolean>;
      };
      if (self.password !== self.passwordConfirm) {
        self.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        self.valid.passwordConfirm = false;
        return;
      }
      delete self.errors.passwordConfirm;
      self.valid.passwordConfirm = !!self.passwordConfirm;
    },

    handleSubmit(): void {
      (this as { validateEmail: () => void }).validateEmail();
      (this as { validateName: () => void }).validateName();
      (this as { validatePassword: () => void }).validatePassword();
      (this as { validatePasswordConfirm: () => void }).validatePasswordConfirm();
      const errors = (this as { errors: Record<string, string> }).errors;
      if (Object.keys(errors).length > 0) return;
      (this as { submitting: boolean }).submitting = true;
      setTimeout(() => {
        (this as { submitting: boolean }).submitting = false;
      }, 800);
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) window.Alpine.data('signupForm76', signupForm76);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const gsap = (window as unknown as { gsap?: { fromTo: (el: string | Element, from: object, to: object) => void } }).gsap;
    if (gsap) {
      const viewport = document.querySelector('.s76-viewport');
      if (viewport) {
        gsap.fromTo(viewport, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' });
      }
    }
  });
}

export { signupForm76 };
