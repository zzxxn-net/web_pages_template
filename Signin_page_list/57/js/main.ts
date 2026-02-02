/**
 * 시안 57 - 감성 테크 + 단계 분할형 + 입력 반응형 애니메이션
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
    step: 1,
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
      } else if (this.step === 2) {
        this.validateName();
        if (this.errors.name) return;
      } else if (this.step === 3) {
        this.validatePassword();
        if (this.errors.password) return;
      }
      const g = (window as unknown as { gsap?: { to: (el: Element, v: object) => void; fromTo: (el: Element, from: object, to: object) => void } }).gsap;
      const outKey = 'panel' + this.step;
      const outEl = this.$refs[outKey];
      const nextStep = this.step + 1;
      const nextKey = 'panel' + nextStep;
      const nextEl = this.$refs[nextKey];
      if (g && outEl && nextEl) {
        g.to(outEl, { opacity: 0, y: -8, duration: 0.22, ease: 'power2.in', onComplete: () => {
          this.step = nextStep;
          this.$nextTick(() => {
            g.fromTo(nextEl, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
          });
        } });
      } else {
        this.step = nextStep;
      }
    },

    goPrev(): void {
      const g = (window as unknown as { gsap?: { to: (el: Element, v: object) => void; fromTo: (el: Element, from: object, to: object) => void } }).gsap;
      const outKey = 'panel' + this.step;
      const outEl = this.$refs[outKey];
      const prevStep = this.step - 1;
      const prevKey = 'panel' + prevStep;
      const prevEl = this.$refs[prevKey];
      if (g && outEl && prevEl) {
        g.to(outEl, { opacity: 0, y: 8, duration: 0.22, ease: 'power2.in', onComplete: () => {
          this.step = prevStep;
          this.$nextTick(() => {
            g.fromTo(prevEl, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
          });
        } });
      } else {
        this.step = prevStep;
      }
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
      g.from('.s57-wrap', { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out' });
    }
    document.querySelectorAll('.s57-input').forEach((input) => {
      input.addEventListener('focus', () => {
        if (g) g.to(input, { scale: 1.02, duration: 0.25, ease: 'power2.out' });
      });
      input.addEventListener('blur', () => {
        if (g) g.to(input, { scale: 1, duration: 0.25, ease: 'power2.out' });
      });
    });
  });
}

export { signupForm };
