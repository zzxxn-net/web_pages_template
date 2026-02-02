/** 시안 123: 실험적 인터페이스 + 카드 분리형 레이아웃 + 포커스 이동 중심 UX */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
    gsap?: {
      from: (el: string | HTMLElement, v: object) => void;
      to: (el: string | HTMLElement, v: object) => void;
    };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm123(): Record<string, unknown> {
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
      const nextEl = document.getElementById('s123-' + nextId) as HTMLInputElement | null;
      const cardRef = 'card' + nextId.charAt(0).toUpperCase() + nextId.slice(1);
      const cardEl = (this as { [k: string]: unknown })['$refs']?.[cardRef] as HTMLElement | undefined;
      const g = window.gsap;
      if (cardEl && g) {
        g.to(cardEl, { scale: 1.02, duration: 0.28, ease: 'power2.out' });
      }
      if (nextEl && typeof nextEl.focus === 'function') {
        requestAnimationFrame(() => nextEl.focus());
      }
    },

    validateEmail(): void {
      const v = (this as { email: string }).email.trim();
      if (!v) {
        (this as { errors: Record<string, string> }).errors.email = '이메일을 입력해 주세요.';
        return;
      }
      if (!EMAIL_REGEX.test(v)) {
        (this as { errors: Record<string, string> }).errors.email = '올바른 이메일 형식이 아닙니다.';
        return;
      }
      delete (this as { errors: Record<string, string> }).errors.email;
    },

    validateName(): void {
      const v = (this as { name: string }).name.trim();
      if (!v) {
        (this as { errors: Record<string, string> }).errors.name = '이름을 입력해 주세요.';
        return;
      }
      if (v.length < 2) {
        (this as { errors: Record<string, string> }).errors.name = '이름은 2자 이상 입력해 주세요.';
        return;
      }
      delete (this as { errors: Record<string, string> }).errors.name;
    },

    validatePassword(): void {
      const v = (this as { password: string }).password;
      if (!v) {
        (this as { errors: Record<string, string> }).errors.password = '비밀번호를 입력해 주세요.';
        return;
      }
      if (v.length < MIN_PASSWORD_LENGTH) {
        (this as { errors: Record<string, string> }).errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.';
        return;
      }
      delete (this as { errors: Record<string, string> }).errors.password;
    },

    validatePasswordConfirm(): void {
      if ((this as { password: string }).password !== (this as { passwordConfirm: string }).passwordConfirm) {
        (this as { errors: Record<string, string> }).errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        return;
      }
      delete (this as { errors: Record<string, string> }).errors.passwordConfirm;
    },

    handleSubmit(): void {
      this.validateEmail();
      this.validateName();
      this.validatePassword();
      this.validatePasswordConfirm();
      if (Object.keys((this as { errors: Record<string, string> }).errors).length > 0) return;
      (this as { submitting: boolean }).submitting = true;
      setTimeout(() => {
        (this as { submitting: boolean }).submitting = false;
      }, 800);
    },

    initAnim(): void {},
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) {
      window.Alpine.data('signupForm123', signupForm123);
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = window.gsap;
    const inner = document.querySelector('.s123-inner');
    const header = document.querySelector('.s123-header');
    const formWrap = document.querySelector('.s123-form-wrap');
    if (g && inner) {
      g.from(inner, { opacity: 0, duration: 0.5, ease: 'power2.out' });
      if (header) g.from(header, { opacity: 0, y: -12, duration: 0.38, ease: 'power2.out', delay: 0.08 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 16, duration: 0.4, ease: 'power2.out', delay: 0.16 });
    }
  });
}

export { signupForm123 };
