/** 시안 129: 실험적 인터페이스 + 단일 포커스 입력 흐름 + 스크롤 없는 고정 플로우 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
    gsap?: { from: (el: string | Element, v: object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;
const STEP_LABELS = ['이메일', '이름', '비밀번호', '비밀번호 확인'];

function signupForm129(): Record<string, unknown> {
  return {
    stepIndex: 0,
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    focusedField: null as string | null,
    touched: {} as Record<string, boolean>,
    submitting: false,
    errors: {} as Record<string, string>,

    get stepLabel(): string {
      return STEP_LABELS[this.stepIndex as number] ?? '';
    },

    goNext(): void {
      const t = this as Record<string, unknown>;
      const idx = t.stepIndex as number;
      if (idx === 0) {
        (t.validateEmail as () => void)();
        if ((t.errors as Record<string, string>).email) return;
      } else if (idx === 1) {
        (t.validateName as () => void)();
        if ((t.errors as Record<string, string>).name) return;
      } else if (idx === 2) {
        (t.validatePassword as () => void)();
        if ((t.errors as Record<string, string>).password) return;
      }
      if (idx >= 3) return;
      t.stepIndex = idx + 1;
      const g = window.gsap;
      setTimeout(() => {
        const refs = (t as { $refs?: Record<string, Element> }).$refs;
        const slotKey = 'slot' + (idx + 1);
        if (g && refs && refs[slotKey]) g.from(refs[slotKey], { opacity: 0, y: 12, duration: 0.28, ease: 'power2.out' });
      }, 0);
    },

    goPrev(): void {
      const t = this as Record<string, unknown>;
      const idx = t.stepIndex as number;
      if (idx <= 0) return;
      t.stepIndex = idx - 1;
      const g = window.gsap;
      setTimeout(() => {
        const refs = (t as { $refs?: Record<string, Element> }).$refs;
        const slotKey = 'slot' + (idx - 1);
        if (g && refs && refs[slotKey]) g.from(refs[slotKey], { opacity: 0, y: -8, duration: 0.28, ease: 'power2.out' });
      }, 0);
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
    if (window.Alpine) window.Alpine.data('signupForm129', signupForm129);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = window.gsap;
    const inner = document.querySelector('.s129-inner');
    const header = document.querySelector('.s129-header');
    const formWrap = document.querySelector('.s129-form-wrap');
    if (g && inner) {
      g.from(inner, { opacity: 0, duration: 0.45, ease: 'power2.out' });
      if (header) g.from(header, { opacity: 0, y: -8, duration: 0.3, ease: 'power2.out', delay: 0.06 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 10, duration: 0.3, ease: 'power2.out', delay: 0.12 });
    }
  });
}

export { signupForm129 };
