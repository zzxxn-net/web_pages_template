/**
 * 시안 100 - 다크 아카이브 + 단일 포커스 입력 흐름 + GSAP 기반 부드러운 전환
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;
const STEP_LABELS: Record<number, string> = {
  1: '이메일을 입력하세요.',
  2: '이름을 입력하세요.',
  3: '비밀번호를 설정하세요.',
  4: '비밀번호를 다시 입력하세요.',
};

function signupForm100(): Record<string, unknown> {
  return {
    step: 1,
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    errors: {} as Record<string, string>,

    get stepLabel(): string {
      return STEP_LABELS[(this as { step: number }).step] || '';
    },

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

    goNext(): void {
      const s = (this as { step: number }).step;
      if (s === 1) {
        (this as { validateEmail: () => void }).validateEmail();
        if ((this as { errors: Record<string, string> }).errors.email) return;
      } else if (s === 2) {
        (this as { validateName: () => void }).validateName();
        if ((this as { errors: Record<string, string> }).errors.name) return;
      } else if (s === 3) {
        (this as { validatePassword: () => void }).validatePassword();
        if ((this as { errors: Record<string, string> }).errors.password) return;
      }
      const g = (window as unknown as { gsap?: { to: (t: string | HTMLElement, v: object) => void } }).gsap;
      if (g) g.to('.s100-step--active', { opacity: 0, duration: 0.2, ease: 'power2.in' });
      setTimeout(() => {
        (this as { step: number }).step = Math.min(4, s + 1);
        const refs = (this as { $refs: Record<string, HTMLElement | undefined> }).$refs;
        const next = refs?.inputName ?? refs?.inputPassword ?? refs?.inputPasswordConfirm;
        if (next) (next as HTMLInputElement).focus();
        if (g) g.to('.s100-step--active', { opacity: 1, duration: 0.28, ease: 'power2.out', delay: 0.05 });
      }, 220);
    },

    goPrev(): void {
      const s = (this as { step: number }).step;
      const g = (window as unknown as { gsap?: { to: (t: string | HTMLElement, v: object) => void } }).gsap;
      if (g) g.to('.s100-step--active', { opacity: 0, duration: 0.2, ease: 'power2.in' });
      setTimeout(() => {
        (this as { step: number }).step = Math.max(1, s - 1);
        const refs = (this as { $refs: Record<string, HTMLElement | undefined> }).$refs;
        const prev = refs?.inputEmail ?? refs?.inputName ?? refs?.inputPassword;
        if (prev) (prev as HTMLInputElement).focus();
        if (g) g.to('.s100-step--active', { opacity: 1, duration: 0.28, ease: 'power2.out', delay: 0.05 });
      }, 220);
    },

    handleSubmit(): void {
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
  document.addEventListener('alpine:init', () => { if (window.Alpine) window.Alpine.data('signupForm100', signupForm100); });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (t: string | HTMLElement, v: object) => void } }).gsap;
    if (g) g.from('.s100-layout', { opacity: 0, y: 10, duration: 0.35, ease: 'power2.out' });
  });
}

export { signupForm100 };
