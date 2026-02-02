/**
 * 회원가입 시안 54 - 미래적 클린 + 풀스크린 몰입형 + 포커스 이동 중심 UX
 * Alpine.js: focusedField, 검증, focusNext(Enter로 다음 필드 이동), 폼 제출 · GSAP: 풀 영역 등장
 */

declare global {
  interface Window {
    Alpine: import('alpinejs').Alpine;
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;
const FOCUS_ORDER = ['email', 'name', 'password', 'passwordConfirm'] as const;

function signupForm() {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    focusedField: null as string | null,
    errors: {} as Record<string, string>,

    validateEmail(): void {
      const v = this.email.trim();
      if (!v) {
        this.errors.email = '이메일을 입력해 주세요.';
        return;
      }
      if (!EMAIL_REGEX.test(v)) {
        this.errors.email = '올바른 이메일 형식이 아닙니다.';
        return;
      }
      delete this.errors.email;
    },

    validateName(): void {
      const v = this.name.trim();
      if (!v) {
        this.errors.name = '이름을 입력해 주세요.';
        return;
      }
      if (v.length < 2) {
        this.errors.name = '이름은 2자 이상 입력해 주세요.';
        return;
      }
      delete this.errors.name;
    },

    validatePassword(): void {
      const v = this.password;
      if (!v) {
        this.errors.password = '비밀번호를 입력해 주세요.';
        return;
      }
      if (v.length < MIN_PASSWORD_LENGTH) {
        this.errors.password = `비밀번호는 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`;
        return;
      }
      delete this.errors.password;
    },

    validatePasswordConfirm(): void {
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        return;
      }
      delete this.errors.passwordConfirm;
    },

    focusNext(current: string): void {
      const idx = FOCUS_ORDER.indexOf(current as (typeof FOCUS_ORDER)[number]);
      if (idx < 0 || idx >= FOCUS_ORDER.length - 1) return;
      const nextId = 's54-' + (current === 'email' ? 'name' : current === 'name' ? 'password' : current === 'password' ? 'passwordConfirm' : '');
      const el = document.getElementById(nextId);
      if (el && typeof (el as HTMLInputElement).focus === 'function') (el as HTMLInputElement).focus();
    },

    handleSubmit(): void {
      this.validateEmail();
      this.validateName();
      this.validatePassword();
      this.validatePasswordConfirm();
      if (Object.keys(this.errors).length > 0) return;

      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
      }, 800);
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    window.Alpine?.data('signupForm', signupForm);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (t: string | Element, v: object) => void } }).gsap;
    if (g) {
      g.from('.s54-full', {
        opacity: 0,
        y: 14,
        duration: 0.48,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
