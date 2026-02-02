/**
 * 회원가입 시안 15 - 단계 분할형(Progressive) + 사이버 미니멀
 * Alpine.js: step, goNext, goPrev, 검증, 포커스 이동
 * GSAP: 카드 등장, 단계 전환 애니메이션
 */

declare global {
  interface Window {
    Alpine: import('alpinejs').Alpine;
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

interface GsapGlobal {
  gsap?: {
    to: (target: Element | string, vars: Record<string, unknown>) => { then?: (cb: () => void) => void };
    from: (target: Element | string, vars: Record<string, unknown>) => { then?: (cb: () => void) => void };
  };
}

function signupForm() {
  return {
    step: 1 as 1 | 2,
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    errors: {} as Record<string, string>,
    transitioning: false,

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

    validateStep1(): boolean {
      this.validateEmail();
      this.validateName();
      return !this.errors.email && !this.errors.name;
    },

    focusName(): void {
      const el = (this as unknown as { $refs: { inputName?: HTMLElement } }).$refs?.inputName;
      if (el && typeof el.focus === 'function') el.focus();
    },

    focusStep2First(): void {
      const el = (this as unknown as { $refs: { inputPassword?: HTMLElement } }).$refs?.inputPassword;
      if (el && typeof el.focus === 'function') el.focus();
    },

    focusPasswordConfirm(): void {
      const el = (this as unknown as { $refs: { inputPasswordConfirm?: HTMLElement } }).$refs?.inputPasswordConfirm;
      if (el && typeof el.focus === 'function') el.focus();
    },

    goNext(): void {
      if (this.transitioning) return;
      if (!this.validateStep1()) return;

      const gsap = (window as unknown as GsapGlobal).gsap;
      const panel1 = (this as unknown as { $refs: { panelStep1?: HTMLElement } }).$refs?.panelStep1;
      const panel2 = (this as unknown as { $refs: { panelStep2?: HTMLElement } }).$refs?.panelStep2;

      const g = (window as unknown as GsapGlobal).gsap;
      if (g && panel1 && panel2) {
        this.transitioning = true;
        g.to(panel1, {
          x: -24,
          opacity: 0,
          duration: 0.22,
          ease: 'power2.in',
          onComplete: () => {
            this.step = 2;
            (this as unknown as { $nextTick: (cb: () => void) => void }).$nextTick(() => {
              this.focusStep2First();
              g.from(panel2, {
                x: 24,
                opacity: 0,
                duration: 0.28,
                ease: 'power2.out',
                onComplete: () => {
                  this.transitioning = false;
                },
              });
            });
          },
        });
      } else {
        this.step = 2;
        (this as unknown as { $nextTick?: (cb: () => void) => void }).$nextTick?.(() => this.focusStep2First());
      }
    },

    goPrev(): void {
      if (this.transitioning) return;

      const panel1 = (this as unknown as { $refs: { panelStep1?: HTMLElement } }).$refs?.panelStep1;
      const panel2 = (this as unknown as { $refs: { panelStep2?: HTMLElement } }).$refs?.panelStep2;
      const g = (window as unknown as GsapGlobal).gsap;
      if (g && panel1 && panel2) {
        this.transitioning = true;
        g.to(panel2, {
          x: 24,
          opacity: 0,
          duration: 0.22,
          ease: 'power2.in',
          onComplete: () => {
            this.step = 1;
            (this as unknown as { $nextTick: (cb: () => void) => void }).$nextTick(() => {
              const emailEl = (this as unknown as { $refs: { inputEmail?: HTMLElement } }).$refs?.inputEmail;
              if (emailEl && typeof emailEl.focus === 'function') emailEl.focus();
              g.from(panel1, {
                x: -24,
                opacity: 0,
                duration: 0.28,
                ease: 'power2.out',
                onComplete: () => {
                  this.transitioning = false;
                },
              });
            });
          },
        });
      } else {
        this.step = 1;
      }
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
    const g = (window as unknown as GsapGlobal).gsap;
    if (g) {
      g.from('.prog-card', {
        opacity: 0,
        y: 12,
        duration: 0.45,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
