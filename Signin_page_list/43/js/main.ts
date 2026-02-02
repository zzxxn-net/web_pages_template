/**
 * 회원가입 시안 43 - 미래적 클린 + 단일 포커스 입력 흐름
 * 포커스 이동 중심 UX · Alpine.js: step, goNext/goPrev/goToStep, focusStepInput · GSAP: 카드·스텝 전환
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
    step: 1 as number,
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
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

    goNext(): void {
      if (this.step === 1) {
        this.validateEmail();
        if (this.errors.email) return;
      }
      if (this.step === 2) {
        this.validateName();
        if (this.errors.name) return;
      }
      if (this.step === 3) {
        this.validatePassword();
        if (this.errors.password) return;
      }
      if (this.step >= 4) return;

      const nextStep = this.step + 1;
      this.step = nextStep;
      this.$nextTick(() => this.focusStepInput(nextStep));
      requestAnimationFrame(() => runStepIn(nextStep));
    },

    goPrev(): void {
      if (this.step <= 1) return;
      const prevStep = this.step - 1;
      this.step = prevStep;
      this.$nextTick(() => this.focusStepInput(prevStep));
      requestAnimationFrame(() => runStepIn(prevStep));
    },

    goToStep(n: number): void {
      if (n < 1 || n > 4) return;
      this.step = n;
      this.$nextTick(() => this.focusStepInput(n));
      requestAnimationFrame(() => runStepIn(n));
    },

    focusStepInput(stepNum: number): void {
      const refs = (this as unknown as { $refs: Record<string, HTMLElement | undefined> }).$refs;
      const el = refs['inputStep' + stepNum];
      if (el && typeof (el as HTMLInputElement).focus === 'function') (el as HTMLInputElement).focus();
    },

    handleSubmit(): void {
      this.validatePasswordConfirm();
      if (Object.keys(this.errors).length > 0) return;

      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
      }, 800);
    },
  };
}

function runStepIn(stepNum: number): void {
  const g = (window as unknown as { gsap?: { fromTo: (t: HTMLElement, from: object, to: object) => void } }).gsap;
  const steps = document.querySelectorAll<HTMLElement>('.fcf-step');
  const panel = steps[stepNum - 1];
  if (g && panel) {
    g.fromTo(
      panel,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
    );
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    window.Alpine?.data('signupForm', signupForm);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (t: string, v: object) => void } }).gsap;
    if (g) {
      g.from('.fcf-card', {
        opacity: 0,
        y: 12,
        duration: 0.45,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
