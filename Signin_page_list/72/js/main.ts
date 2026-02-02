/**
 * 시안 72 - 다크 아카이브 + 단계 분할형(Progressive Form) + 포커스 이동 중심 UX
 */
declare global {
  interface Window {
    Alpine: import('alpinejs').Alpine;
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

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

    focusInputForStep(n: number): void {
      const ctx = this as { $refs: Record<string, HTMLElement | undefined>; $nextTick: (cb: () => void) => void };
      ctx.$nextTick(() => {
        const el = ctx.$refs['input' + n];
        if (el && 'focus' in el) (el as HTMLInputElement).focus();
      });
    },

    goNext(): void {
      const ctx = this as { step: number; errors: Record<string, string>; $refs: Record<string, HTMLElement | undefined>; $nextTick: (cb: () => void) => void };
      const g = (window as unknown as { gsap?: { to: (t: Element, v: object) => void; fromTo: (t: Element, from: object, to: object) => void } }).gsap;
      if (ctx.step === 1) { this.validateEmail(); if (ctx.errors.email) return; }
      else if (ctx.step === 2) { this.validateName(); if (ctx.errors.name) return; }
      else if (ctx.step === 3) { this.validatePassword(); if (ctx.errors.password) return; }
      const nextStep = ctx.step + 1;
      const outEl = ctx.$refs['panel' + ctx.step];
      const nextEl = ctx.$refs['panel' + nextStep];
      if (g && outEl && nextEl) {
        g.to(outEl, { opacity: 0, y: -8, duration: 0.2, ease: 'power2.in', onComplete: () => {
          ctx.step = nextStep;
          ctx.$nextTick(() => { g.fromTo(nextEl, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }); this.focusInputForStep(nextStep); });
        } });
      } else { ctx.step = nextStep; this.focusInputForStep(nextStep); }
    },

    goPrev(): void {
      const ctx = this as { step: number; $refs: Record<string, HTMLElement | undefined>; $nextTick: (cb: () => void) => void };
      const g = (window as unknown as { gsap?: { to: (t: Element, v: object) => void; fromTo: (t: Element, from: object, to: object) => void } }).gsap;
      const prevStep = ctx.step - 1;
      const outEl = ctx.$refs['panel' + ctx.step];
      const prevEl = ctx.$refs['panel' + prevStep];
      if (g && outEl && prevEl) {
        g.to(outEl, { opacity: 0, y: 8, duration: 0.2, ease: 'power2.in', onComplete: () => {
          ctx.step = prevStep;
          ctx.$nextTick(() => { g.fromTo(prevEl, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }); this.focusInputForStep(prevStep); });
        } });
      } else { ctx.step = prevStep; this.focusInputForStep(prevStep); }
    },

    goToStep(n: number): void {
      const ctx = this as { step: number; $refs: Record<string, HTMLElement | undefined>; $nextTick: (cb: () => void) => void };
      if (n === ctx.step || n < 1 || n > 4) return;
      const g = (window as unknown as { gsap?: { to: (t: Element, v: object) => void; fromTo: (t: Element, from: object, to: object) => void } }).gsap;
      const outEl = ctx.$refs['panel' + ctx.step];
      const nextEl = ctx.$refs['panel' + n];
      const dir = n > ctx.step ? 1 : -1;
      if (g && outEl && nextEl) {
        g.to(outEl, { opacity: 0, y: dir * -8, duration: 0.2, ease: 'power2.in', onComplete: () => {
          ctx.step = n;
          ctx.$nextTick(() => { g.fromTo(nextEl, { opacity: 0, y: dir * 8 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }); this.focusInputForStep(n); });
        } });
      } else { ctx.step = n; this.focusInputForStep(n); }
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
    const g = (window as unknown as { gsap?: { from: (t: string | Element, v: object) => void } }).gsap;
    if (g) g.from('.s72-wrap', { opacity: 0, y: 14, duration: 0.5, ease: 'power2.out' });
  });
}

export { signupForm };
