/**
 * 시안 105 - 다크 아카이브 + 마이크로 인터랙션 중심 + 포커스 이동 중심 UX
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;
const FOCUS_ORDER: Array<'email' | 'name' | 'password' | 'passwordConfirm'> = ['email', 'name', 'password', 'passwordConfirm'];

function signupForm105(): Record<string, unknown> {
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

    validateEmail(): void {
      const v = (this as { email: string }).email.trim();
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) { e.email = '이메일을 입력해 주세요.'; return; }
      if (!EMAIL_REGEX.test(v)) { e.email = '올바른 이메일 형식이 아닙니다.'; return; }
      delete e.email;
    },

    validateName(): void {
      const v = (this as { name: string }).name.trim();
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) { e.name = '이름을 입력해 주세요.'; return; }
      if (v.length < 2) { e.name = '이름은 2자 이상 입력해 주세요.'; return; }
      delete e.name;
    },

    validatePassword(): void {
      const v = (this as { password: string }).password;
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) { e.password = '비밀번호를 입력해 주세요.'; return; }
      if (v.length < MIN_PASSWORD_LENGTH) { e.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.'; return; }
      delete e.password;
    },

    validatePasswordConfirm(): void {
      const t = this as { password: string; passwordConfirm: string; errors: Record<string, string> };
      if (t.password !== t.passwordConfirm) { t.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.'; return; }
      delete t.errors.passwordConfirm;
    },

    focusNext(current: 'email' | 'name' | 'password' | 'passwordConfirm'): void {
      const idx = FOCUS_ORDER.indexOf(current);
      if (idx < 0 || idx >= FOCUS_ORDER.length - 1) return;
      const nextIdMap: Record<string, string> = { email: 's105-email', name: 's105-name', password: 's105-password', passwordConfirm: 's105-passwordConfirm' };
      const nextKey = FOCUS_ORDER[idx + 1];
      const next = document.getElementById(nextIdMap[nextKey]);
      if (next && typeof (next as HTMLInputElement).focus === 'function') (next as HTMLInputElement).focus();
    },

    handleSubmit(): void {
      (this as { validateEmail: () => void }).validateEmail();
      (this as { validateName: () => void }).validateName();
      (this as { validatePassword: () => void }).validatePassword();
      (this as { validatePasswordConfirm: () => void }).validatePasswordConfirm();
      const e = (this as { errors: Record<string, string> }).errors;
      if (Object.keys(e).length > 0) return;
      (this as { submitting: boolean }).submitting = true;
      setTimeout(() => { (this as { submitting: boolean }).submitting = false; }, 800);
    },

    initAnim(): void {},
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => { if (window.Alpine) window.Alpine.data('signupForm105', signupForm105); });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (el: string | HTMLElement, vars: object) => void } }).gsap;
    if (g) {
      g.from('.s105-layout', { opacity: 0, y: 8, duration: 0.35, ease: 'power2.out' });
      g.from('.s105-header', { opacity: 0, y: -6, duration: 0.3, ease: 'power2.out', delay: 0.05 });
      g.from('.s105-field', { opacity: 0, y: 4, duration: 0.28, stagger: 0.04, ease: 'power2.out', delay: 0.1 });
    }
  });
}

export { signupForm105 };
