/**
 * 회원가입 시안 21 - 실험적 인터페이스 + 풀스크린 몰입형
 * Alpine.js: 검증, 폼 제출
 * GSAP: 부드러운 전환 (헤더 → 필드 스태거 → 액션 → 푸터)
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
      window.gsap.from('.exp-header', {
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: 'power2.out',
      });
      window.gsap.from('.exp-field', {
        opacity: 0,
        y: 12,
        duration: 0.4,
        stagger: 0.06,
        delay: 0.12,
        ease: 'power2.out',
      });
      window.gsap.from('.exp-actions', {
        opacity: 0,
        y: 10,
        duration: 0.4,
        delay: 0.4,
        ease: 'power2.out',
      });
      window.gsap.from('.exp-footer', {
        opacity: 0,
        y: 8,
        duration: 0.35,
        delay: 0.52,
        ease: 'power2.out',
      });
    }
  });
}

export { signupForm };
