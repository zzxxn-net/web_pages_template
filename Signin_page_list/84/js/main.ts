/**
 * 시안 84 - 네오 브루탈리즘 + 카드 분리형 레이아웃 + 상태 변화 강조
 * 상태 변화: focused → 카드 테두리/섀도우 핑크, invalid → 빨간 테두리/섀도우, valid → 체크 표시
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm84(): Record<string, unknown> {
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
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) {
      window.Alpine.data('signupForm84', signupForm84);
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (t: string, v: object) => void } }).gsap;
    if (g) {
      g.from('.s84-wrap', {
        opacity: 0,
        y: 16,
        duration: 0.45,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm84 };
