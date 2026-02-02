/**
 * 시안 83 - 감성 테크 + 비대칭 레이아웃 + 포커스 이동 중심 UX
 * 포커스 이동: Enter 시 유효성 통과하면 다음 필드로 자동 포커스, 좌측 브랜드에 현재 필드 힌트 표시
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

const FOCUS_ORDER: Array<'email' | 'name' | 'password' | 'passwordConfirm'> = [
  'email',
  'name',
  'password',
  'passwordConfirm',
];

function signupForm83(): Record<string, unknown> {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    errors: {} as Record<string, string>,
    focusedField: null as string | null,
    focusedLabel: '',

    setFocus(field: string, label: string): void {
      (this as { focusedField: string | null }).focusedField = field;
      (this as { focusedLabel: string }).focusedLabel = label;
    },

    clearFocusIfNotRelated(): void {
      setTimeout(() => {
        const active = document.activeElement;
        const inputs = document.querySelectorAll('.s83-input, .s83-pw-btn');
        const isInput = Array.from(inputs).some((el) => el === active);
        if (!isInput) {
          (this as { focusedField: string | null }).focusedField = null;
          (this as { focusedLabel: string }).focusedLabel = '';
        }
      }, 0);
    },

    validateEmail(): void {
      const v = (this as { email: string }).email.trim();
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) {
        e.email = '이메일을 입력해 주세요.';
        return;
      }
      if (!EMAIL_REGEX.test(v)) {
        e.email = '올바른 이메일 형식이 아닙니다.';
        return;
      }
      delete e.email;
    },

    validateName(): void {
      const v = (this as { name: string }).name.trim();
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) {
        e.name = '이름을 입력해 주세요.';
        return;
      }
      if (v.length < 2) {
        e.name = '이름은 2자 이상 입력해 주세요.';
        return;
      }
      delete e.name;
    },

    validatePassword(): void {
      const v = (this as { password: string }).password;
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) {
        e.password = '비밀번호를 입력해 주세요.';
        return;
      }
      if (v.length < MIN_PASSWORD_LENGTH) {
        e.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.';
        return;
      }
      delete e.password;
    },

    validatePasswordConfirm(): void {
      const t = this as {
        password: string;
        passwordConfirm: string;
        errors: Record<string, string>;
      };
      if (t.password !== t.passwordConfirm) {
        t.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        return;
      }
      delete t.errors.passwordConfirm;
    },

    focusNext(current: 'email' | 'name' | 'password' | 'passwordConfirm'): void {
      const idx = FOCUS_ORDER.indexOf(current);
      if (idx < 0 || idx >= FOCUS_ORDER.length - 1) return;

      const runValidation = (): boolean => {
        if (current === 'email') {
          (this as { validateEmail: () => void }).validateEmail();
          return !(this as { errors: Record<string, string> }).errors.email;
        }
        if (current === 'name') {
          (this as { validateName: () => void }).validateName();
          return !(this as { errors: Record<string, string> }).errors.name;
        }
        if (current === 'password') {
          (this as { validatePassword: () => void }).validatePassword();
          return !(this as { errors: Record<string, string> }).errors.password;
        }
        return true;
      };

      if (!runValidation()) return;

      const nextField = FOCUS_ORDER[idx + 1];
      const refKey = 'input' + nextField.charAt(0).toUpperCase() + nextField.slice(1);
      const ref = (this as Record<string, unknown>)[refKey] as HTMLElement | undefined;
      if (ref && typeof ref.focus === 'function') {
        ref.focus();
      }
    },

    handleSubmit(): void {
      (this as { validateEmail: () => void }).validateEmail();
      (this as { validateName: () => void }).validateName();
      (this as { validatePassword: () => void }).validatePassword();
      (this as { validatePasswordConfirm: () => void }).validatePasswordConfirm();
      const e = (this as { errors: Record<string, string> }).errors;
      if (Object.keys(e).length > 0) return;
      (this as { submitting: boolean }).submitting = true;
      setTimeout(() => {
        (this as { submitting: boolean }).submitting = false;
      }, 800);
    },

    initFocusFlow(): void {
      // 포커스 이동 UX 초기화 (GSAP은 DOMContentLoaded에서 실행)
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) {
      window.Alpine.data('signupForm83', signupForm83);
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (t: string, v: object) => void } }).gsap;
    if (g) {
      g.from('.s83-layout', {
        opacity: 0,
        y: 24,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm83 };
