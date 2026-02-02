/**
 * 시안 69 - 미래적 클린 + 비대칭 레이아웃 + GSAP 기반 부드러운 전환
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
    const g = (window as unknown as { gsap?: { from: (a: Element | string, b: object) => void; to: (a: Element, b: object) => void } }).gsap;
    if (!g) return;
    const layout = document.querySelector('.s69-layout');
    const aside = document.querySelector('.s69-aside');
    const formWrap = document.querySelector('.s69-form-wrap');
    if (layout) g.from(layout, { opacity: 0, duration: 0.6, ease: 'power2.out' });
    if (aside) g.from(aside, { x: -24, opacity: 0, duration: 0.5, delay: 0.1, ease: 'power2.out' });
    if (formWrap) g.from(formWrap, { x: 20, opacity: 0, duration: 0.5, delay: 0.2, ease: 'power2.out' });
    document.querySelectorAll('.s69-input').forEach((input) => {
      input.addEventListener('focus', () => { g.to(input, { scale: 1.01, duration: 0.28, ease: 'power2.out' }); });
      input.addEventListener('blur', () => { g.to(input, { scale: 1, duration: 0.28, ease: 'power2.out' }); });
    });
  });
}

export { signupForm };
