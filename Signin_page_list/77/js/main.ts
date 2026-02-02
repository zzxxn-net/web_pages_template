/**
 * 시안 77 - 다크 아카이브 + 비대칭 + 포커스 이동
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;
const FOCUS_ORDER: Array<'email' | 'name' | 'password' | 'passwordConfirm'> = ['email', 'name', 'password', 'passwordConfirm'];

function signupForm77(): Record<string, unknown> {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    focusedField: null as string | null,
    errors: {} as Record<string, string>,

    focusNext(current: string): void {
      const idx = FOCUS_ORDER.indexOf(current as 'email');
      if (idx < 0 || idx >= FOCUS_ORDER.length - 1) return;
      const nextKey = FOCUS_ORDER[idx + 1];
      const ref = nextKey === 'email' ? 'inputEmail' : nextKey === 'name' ? 'inputName' : nextKey === 'password' ? 'inputPassword' : 'inputPasswordConfirm';
      const el = (this as Record<string, unknown>)[ref];
      if (el && typeof (el as HTMLElement).focus === 'function') (el as HTMLElement).focus();
    },

    validateEmail(): void {
      const v = (this as { email: string }).email.trim();
      const errors = (this as { errors: Record<string, string> }).errors;
      if (!v) { errors.email = '이메일을 입력해 주세요.'; return; }
      if (!EMAIL_REGEX.test(v)) { errors.email = '올바른 이메일 형식이 아닙니다.'; return; }
      delete errors.email;
    },

    validateName(): void {
      const v = (this as { name: string }).name.trim();
      const errors = (this as { errors: Record<string, string> }).errors;
      if (!v) { errors.name = '이름을 입력해 주세요.'; return; }
      if (v.length < 2) { errors.name = '이름은 2자 이상 입력해 주세요.'; return; }
      delete errors.name;
    },

    validatePassword(): void {
      const v = (this as { password: string }).password;
      const errors = (this as { errors: Record<string, string> }).errors;
      if (!v) { errors.password = '비밀번호를 입력해 주세요.'; return; }
      if (v.length < MIN_PASSWORD_LENGTH) { errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.'; return; }
      delete errors.password;
    },

    validatePasswordConfirm(): void {
      const self = this as { password: string; passwordConfirm: string; errors: Record<string, string> };
      if (self.password !== self.passwordConfirm) { self.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.'; return; }
      delete self.errors.passwordConfirm;
    },

    handleSubmit(): void {
      (this as { validateEmail: () => void }).validateEmail();
      (this as { validateName: () => void }).validateName();
      (this as { validatePassword: () => void }).validatePassword();
      (this as { validatePasswordConfirm: () => void }).validatePasswordConfirm();
      const errors = (this as { errors: Record<string, string> }).errors;
      if (Object.keys(errors).length > 0) return;
      (this as { submitting: boolean }).submitting = true;
      setTimeout(() => { (this as { submitting: boolean }).submitting = false; }, 800);
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) window.Alpine.data('signupForm77', signupForm77);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const gsap = (window as unknown as { gsap?: { fromTo: (el: string | Element, from: object, to: object) => void } }).gsap;
    if (gsap) {
      const inner = document.querySelector('.s77-inner');
      if (inner) gsap.fromTo(inner, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
    }
  });
}

export { signupForm77 };
