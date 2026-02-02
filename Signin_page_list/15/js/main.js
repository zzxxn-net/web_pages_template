/**
 * 회원가입 시안 15 - 단계 분할형(Progressive) + 사이버 미니멀
 * Alpine.js: step, goNext, goPrev, 검증, 포커스 이동
 * GSAP: 카드 등장, 단계 전환 애니메이션
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
    errors: {},
    transitioning: false,

    validateEmail() {
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

    validateName() {
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

    validatePassword() {
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

    validatePasswordConfirm() {
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        return;
      }
      delete this.errors.passwordConfirm;
    },

    validateStep1() {
      this.validateEmail();
      this.validateName();
      return !this.errors.email && !this.errors.name;
    },

    focusName() {
      const el = this.$refs?.inputName;
      if (el && typeof el.focus === 'function') el.focus();
    },

    focusStep2First() {
      const el = this.$refs?.inputPassword;
      if (el && typeof el.focus === 'function') el.focus();
    },

    focusPasswordConfirm() {
      const el = this.$refs?.inputPasswordConfirm;
      if (el && typeof el.focus === 'function') el.focus();
    },

    goNext() {
      if (this.transitioning) return;
      if (!this.validateStep1()) return;

      const panel1 = this.$refs?.panelStep1;
      const panel2 = this.$refs?.panelStep2;
      const g = window.gsap;
      if (g && panel1 && panel2) {
        this.transitioning = true;
        g.to(panel1, {
          x: -24,
          opacity: 0,
          duration: 0.22,
          ease: 'power2.in',
          onComplete: () => {
            this.step = 2;
            this.$nextTick(() => {
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
        this.$nextTick?.(() => this.focusStep2First());
      }
    },

    goPrev() {
      if (this.transitioning) return;

      const panel1 = this.$refs?.panelStep1;
      const panel2 = this.$refs?.panelStep2;
      const g = window.gsap;
      if (g && panel1 && panel2) {
        this.transitioning = true;
        g.to(panel2, {
          x: 24,
          opacity: 0,
          duration: 0.22,
          ease: 'power2.in',
          onComplete: () => {
            this.step = 1;
            this.$nextTick(() => {
              const emailEl = this.$refs?.inputEmail;
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
      window.gsap.from('.prog-card', {
        opacity: 0,
        y: 12,
        duration: 0.45,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
