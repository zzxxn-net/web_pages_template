/**
 * 회원가입 시안 23 - 풀스크린 몰입형 + 사이버 미니멀
 * Alpine.js: focusedField, 검증, 폼 제출
 * GSAP: 뷰 등장
 */

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
    focusedField: null,
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
      window.gsap.from('.cyber-inner', {
        opacity: 0,
        y: 14,
        duration: 0.45,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
