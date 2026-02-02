/**
 * 회원가입 시안 19 - 단일 포커스 입력 흐름 + 현대 판타지
 * Alpine.js: step(1~4), goNext, goPrev, goToStep, 포커스 이동, 검증
 * GSAP: 카드 등장, 단계 전환 부드러운 전환
 */

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
    transitioning: false,
    errors: {},

    validateEmail() {
      const v = this.email.trim();
      if (!v) {
        this.errors.email = '이메일을 입력해 주세요.';
        return false;
      }
      if (!EMAIL_REGEX.test(v)) {
        this.errors.email = '올바른 이메일 형식이 아닙니다.';
        return false;
      }
      delete this.errors.email;
      return true;
    },

    validateName() {
      const v = this.name.trim();
      if (!v) {
        this.errors.name = '이름을 입력해 주세요.';
        return false;
      }
      if (v.length < 2) {
        this.errors.name = '이름은 2자 이상 입력해 주세요.';
        return false;
      }
      delete this.errors.name;
      return true;
    },

    validatePassword() {
      const v = this.password;
      if (!v) {
        this.errors.password = '비밀번호를 입력해 주세요.';
        return false;
      }
      if (v.length < MIN_PASSWORD_LENGTH) {
        this.errors.password = `비밀번호는 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`;
        return false;
      }
      delete this.errors.password;
      return true;
    },

    validatePasswordConfirm() {
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        return false;
      }
      delete this.errors.passwordConfirm;
      return true;
    },

    validateCurrentStep() {
      if (this.step === 1) return this.validateEmail();
      if (this.step === 2) return this.validateName();
      if (this.step === 3) return this.validatePassword();
      if (this.step === 4) return this.validatePasswordConfirm();
      return true;
    },

    focusInputForStep(s) {
      this.$nextTick(() => {
        const refs = this.$refs;
        const el = s === 1 ? refs.inputEmail : s === 2 ? refs.inputName : s === 3 ? refs.inputPassword : refs.inputPasswordConfirm;
        if (el && typeof el.focus === 'function') el.focus();
      });
    },

    goNext() {
      if (this.transitioning) return;
      if (!this.validateCurrentStep()) return;
      if (this.step >= 4) return;

      const g = window.gsap;
      const refs = this.$refs;
      const steps = [refs.step1, refs.step2, refs.step3, refs.step4].filter(Boolean);
      const currentEl = steps[this.step - 1];
      const nextEl = steps[this.step];

      if (g && currentEl && nextEl) {
        this.transitioning = true;
        g.to(currentEl, {
          opacity: 0,
          x: -16,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            this.step = this.step + 1;
            this.focusInputForStep(this.step);
            g.from(nextEl, {
              opacity: 0,
              x: 16,
              duration: 0.28,
              ease: 'power2.out',
              onComplete: () => {
                this.transitioning = false;
              },
            });
          },
        });
      } else {
        this.step = this.step + 1;
        this.focusInputForStep(this.step);
      }
    },

    goPrev() {
      if (this.transitioning) return;
      if (this.step <= 1) return;

      const g = window.gsap;
      const refs = this.$refs;
      const steps = [refs.step1, refs.step2, refs.step3, refs.step4].filter(Boolean);
      const currentEl = steps[this.step - 1];
      const prevEl = steps[this.step - 2];

      if (g && currentEl && prevEl) {
        this.transitioning = true;
        g.to(currentEl, {
          opacity: 0,
          x: 16,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            this.step = this.step - 1;
            this.focusInputForStep(this.step);
            g.from(prevEl, {
              opacity: 0,
              x: -16,
              duration: 0.28,
              ease: 'power2.out',
              onComplete: () => {
                this.transitioning = false;
              },
            });
          },
        });
      } else {
        this.step = this.step - 1;
        this.focusInputForStep(this.step);
      }
    },

    goToStep(n) {
      if (this.transitioning) return;
      if (n === this.step) return;
      if (n < this.step) {
        this.step = n;
        this.focusInputForStep(this.step);
        return;
      }
      for (let s = this.step; s < n; s++) {
        if (s === 1 && !this.validateEmail()) return;
        if (s === 2 && !this.validateName()) return;
        if (s === 3 && !this.validatePassword()) return;
        if (s === 4 && !this.validatePasswordConfirm()) return;
      }
      this.step = n;
      this.focusInputForStep(this.step);
    },

    handleSubmit() {
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
    if (window.gsap) {
      window.gsap.from('.fantasy-card', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
