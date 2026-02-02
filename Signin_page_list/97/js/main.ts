/**
 * 시안 97 - 현대 판타지 + 풀스크린 몰입형 + 포커스 이동 중심 UX
 * Alpine: 유효성·제출; 포커스 이동: 로드 시 첫 입력 포커스, 에러 시 첫 오류 필드 포커스; GSAP: 레이아웃 페이드인
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm97(): Record<string, unknown> {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
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

    focusFirstError(): void {
      const e = (this as { errors: Record<string, string> }).errors;
      for (const key of ['email', 'name', 'password', 'passwordConfirm']) {
        if (e[key]) {
          const refName = key === 'email' ? 'inputEmail' : key === 'name' ? 'inputName' : key === 'password' ? 'inputPassword' : 'inputPasswordConfirm';
          const refs = (this as { $refs: Record<string, HTMLElement | undefined> }).$refs;
          const el = refs?.[refName];
          if (el) setTimeout(() => (el as HTMLInputElement).focus(), 50);
          return;
        }
      }
    },

    handleSubmit(): void {
      (this as { validateEmail: () => void }).validateEmail();
      (this as { validateName: () => void }).validateName();
      (this as { validatePassword: () => void }).validatePassword();
      (this as { validatePasswordConfirm: () => void }).validatePasswordConfirm();
      const e = (this as { errors: Record<string, string> }).errors;
      if (Object.keys(e).length > 0) {
        (this as { focusFirstError: () => void }).focusFirstError();
        return;
      }
      (this as { submitting: boolean }).submitting = true;
      setTimeout(() => { (this as { submitting: boolean }).submitting = false; }, 800);
    },

    initAnim(): void {},
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => { if (window.Alpine) window.Alpine.data('signupForm97', signupForm97); });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (t: string | HTMLElement, v: object) => void } }).gsap;
    if (g) {
      g.from('.s97-layout', { opacity: 0, y: 10, duration: 0.4, ease: 'power2.out' });
    }
    setTimeout(() => {
      const el = document.getElementById('s97-email');
      if (el) (el as HTMLInputElement).focus();
    }, 200);
  });
}

export { signupForm97 };
