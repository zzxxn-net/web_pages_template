/**
 * 시안 88 - 실험적 인터페이스 + 마이크로 인터랙션 중심 + 상태 변화 강조
 * focusedField로 포커스 시 마이크로 인터랙션(scale·라벨·글로우). GSAP 로드·필드 stagger.
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm88(): Record<string, unknown> {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    errors: {} as Record<string, string>,
    focusedField: null as string | null,

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

    initStagger(): void {
      // GSAP 필드 stagger는 DOMContentLoaded에서 실행
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => { if (window.Alpine) window.Alpine.data('signupForm88', signupForm88); });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (t: string | HTMLElement[], v: object) => void } }).gsap;
    if (g) {
      g.from('.s88-wrap', { opacity: 0, y: 18, duration: 0.5, ease: 'power2.out' });
      g.from('.s88-field', { opacity: 0, y: 10, duration: 0.4, stagger: 0.06, ease: 'power2.out', delay: 0.1 });
    }
  });
}

export { signupForm88 };
