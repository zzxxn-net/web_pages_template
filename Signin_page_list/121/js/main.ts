/** 시안 121: 사이버 미니멀 + 단계 분할형(Progressive Form) + GSAP 기반 부드러운 전환 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
    gsap?: { from: (el: string | Element, v: object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm121(): Record<string, unknown> {
  return {
    step: 1,
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    focusedField: null as string | null,
    touched: {} as Record<string, boolean>,
    submitting: false,
    errors: {} as Record<string, string>,

    goNext(): void {
      const t = this as Record<string, unknown>;
      (t.validateEmail as () => void)();
      (t.validateName as () => void)();
      const err = t.errors as Record<string, string>;
      if (err.email || err.name) return;
      t.step = 2;
      const g = window.gsap;
      setTimeout(() => {
        const refs = (t as { $refs?: Record<string, Element> }).$refs;
        if (g && refs && refs.step2) g.from(refs.step2, { opacity: 0, x: 20, duration: 0.3, ease: 'power2.out' });
      }, 0);
    },

    goPrev(): void {
      const t = this as Record<string, unknown>;
      t.step = 1;
      const g = window.gsap;
      setTimeout(() => {
        const refs = (t as { $refs?: Record<string, Element> }).$refs;
        if (g && refs && refs.step1) g.from(refs.step1, { opacity: 0, x: -20, duration: 0.3, ease: 'power2.out' });
      }, 0);
    },

    focusNext(nextId: string): void {
      const el = document.getElementById('s121-' + nextId);
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
    if (window.Alpine) window.Alpine.data('signupForm121', signupForm121);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = window.gsap;
    const inner = document.querySelector('.s121-inner');
    const header = document.querySelector('.s121-header');
    const formWrap = document.querySelector('.s121-form-wrap');
    if (g && inner) {
      g.from(inner, { opacity: 0, duration: 0.5, ease: 'power2.out' });
      if (header) g.from(header, { opacity: 0, y: -10, duration: 0.35, ease: 'power2.out', delay: 0.08 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 12, duration: 0.35, ease: 'power2.out', delay: 0.14 });
    }
  });
}

export { signupForm121 };
