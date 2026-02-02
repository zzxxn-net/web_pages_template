/**
 * 회원가입 시안 52 - 사이버 미니멀 + 단계 분할형(Progressive Form)
 * GSAP 기반 부드러운 전환 · Alpine.js: step, 검증, goNext/goPrev/goToStep · GSAP: 패널 전환
 */

declare global {
  interface Window {
    Alpine: import('alpinejs').Alpine;
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

interface SignupFormContext {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
  submitting: boolean;
  step: number;
  errors: Record<string, string>;
  $refs: Record<string, HTMLElement | undefined>;
  $nextTick: (cb: () => void) => void;
  validateEmail: () => void;
  validateName: () => void;
  validatePassword: () => void;
  validatePasswordConfirm: () => void;
  goNext: () => void;
  goPrev: () => void;
  goToStep: (n: number) => void;
  handleSubmit: () => void;
}

function signupForm(): Record<string, unknown> {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    step: 1,
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
      const ctx = this as unknown as SignupFormContext;
      const g = (window as unknown as { gsap?: { to: (t: Element, v: object) => { then: (cb: () => void) => void }; fromTo: (t: Element, from: object, to: object) => void } }).gsap;
      if (ctx.step === 1) {
        ctx.validateEmail();
        if (ctx.errors.email) return;
      } else if (ctx.step === 2) {
        ctx.validateName();
        if (ctx.errors.name) return;
      } else if (ctx.step === 3) {
        ctx.validatePassword();
        if (ctx.errors.password) return;
      }

      const outKey = 'panel' + ctx.step;
      const outEl = ctx.$refs[outKey];
      const nextStep = ctx.step + 1;
      const nextKey = 'panel' + nextStep;
      const nextEl = ctx.$refs[nextKey];

      if (g && outEl && nextEl) {
        g.to(outEl, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            ctx.step = nextStep;
            ctx.$nextTick(() => {
              g.fromTo(nextEl, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' });
            });
          },
        });
      } else {
        ctx.step = nextStep;
      }
    },

    goPrev(): void {
      const ctx = this as unknown as SignupFormContext;
      const g = (window as unknown as { gsap?: { to: (t: Element, v: object) => void; fromTo: (t: Element, from: object, to: object) => void } }).gsap;
      const outKey = 'panel' + ctx.step;
      const outEl = ctx.$refs[outKey];
      const prevStep = ctx.step - 1;
      const prevKey = 'panel' + prevStep;
      const prevEl = ctx.$refs[prevKey];

      if (g && outEl && prevEl) {
        g.to(outEl, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            ctx.step = prevStep;
            ctx.$nextTick(() => {
              g.fromTo(prevEl, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' });
            });
          },
        });
      } else {
        ctx.step = prevStep;
      }
    },

    goToStep(n: number): void {
      const ctx = this as unknown as SignupFormContext;
      if (n === ctx.step || n < 1 || n > 4) return;
      const g = (window as unknown as { gsap?: { to: (t: Element, v: object) => void; fromTo: (t: Element, from: object, to: object) => void } }).gsap;
      const outKey = 'panel' + ctx.step;
      const outEl = ctx.$refs[outKey];
      const nextKey = 'panel' + n;
      const nextEl = ctx.$refs[nextKey];
      const dir = n > ctx.step ? 1 : -1;
      if (g && outEl && nextEl) {
        g.to(outEl, {
          opacity: 0,
          y: dir * -10,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            ctx.step = n;
            ctx.$nextTick(() => {
              g.fromTo(nextEl, { opacity: 0, y: dir * 10 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' });
            });
          },
        });
      } else {
        ctx.step = n;
      }
    },

    handleSubmit(): void {
      const ctx = this as unknown as SignupFormContext;
      ctx.validateEmail();
      ctx.validateName();
      ctx.validatePassword();
      ctx.validatePasswordConfirm();
      if (Object.keys(ctx.errors).length > 0) return;

      ctx.submitting = true;
      setTimeout(() => {
        ctx.submitting = false;
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
      g.from('.s52-wrap', {
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
