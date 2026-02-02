/** 시안 130: 네오 브루탈리즘 + 카드 분리형 레이아웃 + 포커스 이동 중심 UX */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
    gsap?: { from: (el: string | Element, v: object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm130(): Record<string, unknown> {
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
      const el = document.getElementById('s130-' + nextId);
      if (el && typeof (el as HTMLInputElement).focus === 'function') (el as HTMLInputElement).focus();
    },

    validateEmail(): void {
      const t = this as Record<string, unknown>;
      const v = (t.email as string).trim();
      const e = t.errors as Record<string, string>;
      if (!v) { e.email = '이메일을 입력해 주세요.'; return; }
      if (!EMAIL_REGEX.test(v)) { e.email = '올바른 이메일 형식이 아닙니다.'; return; }
      delete e.email;
    },

    validateName(): void {
      const t = this as Record<string, unknown>;
      const v = (t.name as string).trim();
      const e = t.errors as Record<string, string>;
      if (!v) { e.name = '이름을 입력해 주세요.'; return; }
      if (v.length < 2) { e.name = '이름은 2자 이상 입력해 주세요.'; return; }
      delete e.name;
    },

    validatePassword(): void {
      const t = this as Record<string, unknown>;
      const v = t.password as string;
      const e = t.errors as Record<string, string>;
      if (!v) { e.password = '비밀번호를 입력해 주세요.'; return; }
      if (v.length < MIN_PASSWORD_LENGTH) { e.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.'; return; }
      delete e.password;
    },

    validatePasswordConfirm(): void {
      const t = this as Record<string, unknown>;
      if (t.password !== t.passwordConfirm) { (t.errors as Record<string, string>).passwordConfirm = '비밀번호가 일치하지 않습니다.'; return; }
      delete (t.errors as Record<string, string>).passwordConfirm;
    },

    handleSubmit(): void {
      const t = this as Record<string, unknown>;
      (t.validateEmail as () => void)();
      (t.validateName as () => void)();
      (t.validatePassword as () => void)();
      (t.validatePasswordConfirm as () => void)();
      if (Object.keys(t.errors as Record<string, string>).length > 0) return;
      t.submitting = true;
      setTimeout(() => { t.submitting = false; }, 800);
    },

    initAnim(): void {},
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) window.Alpine.data('signupForm130', signupForm130);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = window.gsap;
    const inner = document.querySelector('.s130-inner');
    const header = document.querySelector('.s130-header');
    const formWrap = document.querySelector('.s130-form-wrap');
    const cards = document.querySelectorAll('.s130-card');
    if (g && inner) {
      g.from(inner, { opacity: 0, duration: 0.4, ease: 'power2.out' });
      if (header) g.from(header, { opacity: 0, y: -8, duration: 0.3, ease: 'power2.out', delay: 0.05 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 10, duration: 0.3, ease: 'power2.out', delay: 0.1 });
      if (cards.length) g.from(cards, { opacity: 0, y: 8, duration: 0.25, stagger: 0.06, ease: 'power2.out', delay: 0.15 });
    }
  });
}

export { signupForm130 };
