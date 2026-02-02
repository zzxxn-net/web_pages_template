/**
 * 회원가입 시안 30 - 단일 포커스 입력 흐름 + 실험적 인터페이스
 * 상태 변화 강조 · Alpine.js: step(1~4), 검증, 폼 제출 · GSAP: 카드·스텝 전환
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

    goNext() {
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
      requestAnimationFrame(() => runStepIn(nextStep));
    },

    goPrev() {
      if (this.step <= 1) return;
      const prevStep = this.step - 1;
      this.step = prevStep;
      requestAnimationFrame(() => runStepIn(prevStep));
    },

    handleSubmit() {
      this.validatePasswordConfirm();
      if (Object.keys(this.errors).length > 0) return;

      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
      }, 800);
    },
  };
}

function runStepIn(stepNum) {
  const g = window.gsap;
  const steps = document.querySelectorAll('.expsf-step');
  const panel = steps[stepNum - 1];
  if (g && panel) {
    g.fromTo(
      panel,
      { opacity: 0, x: 12 },
      { opacity: 1, x: 0, duration: 0.32, ease: 'power2.out' }
    );
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    window.Alpine?.data('signupForm', signupForm);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = window.gsap;
    if (g) {
      g.from('.expsf-card', {
        opacity: 0,
        y: 12,
        duration: 0.48,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
