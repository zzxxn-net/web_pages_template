/**
 * 시안 66 - 실험적 인터페이스 + 카드 분리형 + GSAP 부드러운 전환
 */
declare global {
  interface Window {
    Alpine: import('alpinejs').Alpine;
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

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
      if (!v) { this.errors.email = '이메일을 입력해 주세요.'; return; }
      if (!EMAIL_REGEX.test(v)) { this.errors.email = '올바른 이메일 형식이 아닙니다.'; return; }
      delete this.errors.email;
    },

    validateName(): void {
      const v = this.name.trim();
      if (!v) { this.errors.name = '이름을 입력해 주세요.'; return; }
      if (v.length < 2) { this.errors.name = '이름은 2자 이상 입력해 주세요.'; return; }
      delete this.errors.name;
    },

    validatePassword(): void {
      const v = this.password;
      if (!v) { this.errors.password = '비밀번호를 입력해 주세요.'; return; }
      if (v.length < MIN_PASSWORD_LENGTH) {
        this.errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.';
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

    handleSubmit(): void {
      this.validateEmail();
      this.validateName();
      this.validatePassword();
      this.validatePasswordConfirm();
      if (Object.keys(this.errors).length > 0) return;
      this.submitting = true;
      setTimeout(() => { this.submitting = false; }, 800);
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    window.Alpine?.data('signupForm', signupForm);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (el: string | Element, v: object) => void; to: (el: Element, v: object) => void } }).gsap;
    if (g) {
      g.from('.s66-wrap', { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' });
      g.from('.s66-card', { opacity: 0, y: 12, duration: 0.35, stagger: 0.08, delay: 0.1, ease: 'power2.out' });
    }
    document.querySelectorAll('.s66-card').forEach((card) => {
      const input = card.querySelector('.s66-input');
      if (!input || !g) return;
      input.addEventListener('focus', () => { g.to(card, { scale: 1.02, duration: 0.28, ease: 'power2.out' }); });
      input.addEventListener('blur', () => { g.to(card, { scale: 1, duration: 0.28, ease: 'power2.out' }); });
    });
  });
}

export { signupForm };
