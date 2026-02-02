/**
 * 시안 132: 다크 아카이브 + 비대칭 레이아웃 + GSAP 기반 부드러운 전환
 * Alpine.js + GSAP
 */
declare global {
  interface Window {
    Alpine?: { data: (name: string, fn: () => Record<string, unknown>) => void };
    gsap?: {
      from: (target: string | Element | null, vars: Record<string, unknown>) => void;
    };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm132(): Record<string, unknown> {
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
      const el = document.getElementById('s132-' + nextId);
      if (el && typeof (el as HTMLInputElement).focus === 'function') {
        (el as HTMLInputElement).focus();
      }
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
      const e = t.errors as Record<string, string>;
      if (t.password !== t.passwordConfirm) { e.passwordConfirm = '비밀번호가 일치하지 않습니다.'; return; }
      delete e.passwordConfirm;
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

function registerAlpine(): void {
  if (typeof document === 'undefined') return;
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) window.Alpine.data('signupForm132', signupForm132);
  });
}

function runGsapAnimations(): void {
  const g = window.gsap;
  if (!g) return;

  const inner = document.querySelector('.s132-inner');
  const aside = document.querySelector('.s132-aside');
  const formWrap = document.querySelector('.s132-form-wrap');
  const fields = document.querySelectorAll('.s132-field');

  if (inner) {
    g.from(inner, { opacity: 0, duration: 0.4, ease: 'power2.out' });
  }
  if (aside) {
    g.from(aside, { opacity: 0, x: -24, duration: 0.5, ease: 'power2.out', delay: 0.08 });
  }
  if (formWrap) {
    g.from(formWrap, { opacity: 0, x: 24, duration: 0.5, ease: 'power2.out', delay: 0.12 });
  }
  if (fields.length) {
    g.from(fields, { opacity: 0, y: 12, duration: 0.35, stagger: 0.05, ease: 'power2.out', delay: 0.2 });
  }
}

if (typeof document !== 'undefined') {
  registerAlpine();
  document.addEventListener('DOMContentLoaded', runGsapAnimations);
}

export { signupForm132 };
