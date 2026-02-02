/**
 * 시안 75 - 사이버 미니멀 + 카드 분리형 레이아웃 + GSAP 기반 부드러운 전환
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm75(): Record<string, unknown> {
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
      const v = (this as { email: string }).email.trim();
      const errors = (this as { errors: Record<string, string> }).errors;
      if (!v) {
        errors.email = '이메일을 입력해 주세요.';
        return;
      }
      if (!EMAIL_REGEX.test(v)) {
        errors.email = '올바른 이메일 형식이 아닙니다.';
        return;
      }
      delete errors.email;
    },

    validateName(): void {
      const v = (this as { name: string }).name.trim();
      const errors = (this as { errors: Record<string, string> }).errors;
      if (!v) {
        errors.name = '이름을 입력해 주세요.';
        return;
      }
      if (v.length < 2) {
        errors.name = '이름은 2자 이상 입력해 주세요.';
        return;
      }
      delete errors.name;
    },

    validatePassword(): void {
      const v = (this as { password: string }).password;
      const errors = (this as { errors: Record<string, string> }).errors;
      if (!v) {
        errors.password = '비밀번호를 입력해 주세요.';
        return;
      }
      if (v.length < MIN_PASSWORD_LENGTH) {
        errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.';
        return;
      }
      delete errors.password;
    },

    validatePasswordConfirm(): void {
      const self = this as { password: string; passwordConfirm: string; errors: Record<string, string> };
      if (self.password !== self.passwordConfirm) {
        self.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        return;
      }
      delete self.errors.passwordConfirm;
    },

    handleSubmit(): void {
      (this as { validateEmail: () => void }).validateEmail();
      (this as { validateName: () => void }).validateName();
      (this as { validatePassword: () => void }).validatePassword();
      (this as { validatePasswordConfirm: () => void }).validatePasswordConfirm();
      const errors = (this as { errors: Record<string, string> }).errors;
      if (Object.keys(errors).length > 0) return;
      (this as { submitting: boolean }).submitting = true;
      setTimeout(() => {
        (this as { submitting: boolean }).submitting = false;
      }, 800);
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) window.Alpine.data('signupForm75', signupForm75);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const gsap = (window as unknown as { gsap?: { fromTo: (el: string | Element[], from: object, to: object) => void } }).gsap;
    if (gsap) {
      const wrap = document.querySelector('.s75-wrap');
      const cards = document.querySelectorAll('.s75-card');
      if (wrap) {
        gsap.fromTo(wrap, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
      }
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, delay: 0.15, ease: 'power2.out' }
        );
      }
    }
  });
}

export { signupForm75 };
