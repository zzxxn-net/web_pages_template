/**
 * 시안 85 - 다크 아카이브 + 단일 포커스 입력 흐름 + 입력 반응형 애니메이션
 * 단일 포커스: focusedField 설정 시 해당 필드만 강조, 나머지는 --dim. GSAP 로드 애니메이션.
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm85(): Record<string, unknown> {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    errors: {} as Record<string, string>,
    focusedField: null as string | null,

    setFocused(field: string | null): void {
      (this as { focusedField: string | null }).focusedField = field;
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

    initAnim(): void {
      // GSAP 로드 시 wrap 페이드인 (입력 반응형 연출의 시작)
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) {
      window.Alpine.data('signupForm85', signupForm85);
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (t: string, v: object) => void } }).gsap;
    if (g) {
      g.from('.s85-wrap', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm85 };
