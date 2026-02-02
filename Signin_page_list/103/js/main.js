/**
 * 시안 103 - 실험적 인터페이스 + 단계 분할형 + 입력 반응형 애니메이션
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm103() {
  return {
    step: 1,
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    focusEmail: false,
    focusName: false,
    focusPassword: false,
    focusPasswordConfirm: false,
    submitting: false,
    errors: {},

    validateEmail() {
      const v = this.email.trim();
      if (!v) { this.errors.email = '이메일을 입력해 주세요.'; return; }
      if (!EMAIL_REGEX.test(v)) { this.errors.email = '올바른 이메일 형식이 아닙니다.'; return; }
      delete this.errors.email;
    },

    validateName() {
      const v = this.name.trim();
      if (!v) { this.errors.name = '이름을 입력해 주세요.'; return; }
      if (v.length < 2) { this.errors.name = '이름은 2자 이상 입력해 주세요.'; return; }
      delete this.errors.name;
    },

    validatePassword() {
      const v = this.password;
      if (!v) { this.errors.password = '비밀번호를 입력해 주세요.'; return; }
      if (v.length < MIN_PASSWORD_LENGTH) { this.errors.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.'; return; }
      delete this.errors.password;
    },

    validatePasswordConfirm() {
      if (this.password !== this.passwordConfirm) { this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.'; return; }
      delete this.errors.passwordConfirm;
    },

    nextStep() {
      this.validateEmail();
      this.validateName();
      if (this.errors.email || this.errors.name) return;
      this.step = 2;
      const panel = this.$refs && this.$refs.panel2;
      if (panel) {
        const input = panel.querySelector('input');
        if (input) setTimeout(function () { input.focus(); }, 100);
      }
    },

    prevStep() {
      this.step = 1;
      const panel = this.$refs && this.$refs.panel1;
      if (panel) {
        const input = panel.querySelector('input');
        if (input) setTimeout(function () { input.focus(); }, 100);
      }
    },

    goToStep(s) {
      this.step = s;
    },

    handleSubmit() {
      this.validatePassword();
      this.validatePasswordConfirm();
      if (Object.keys(this.errors).length > 0) return;
      this.submitting = true;
      setTimeout(function () { this.submitting = false; }.bind(this), 800);
    },

    initAnim() {},
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', function () {
    if (window.Alpine) window.Alpine.data('signupForm103', signupForm103);
  });
  document.addEventListener('DOMContentLoaded', function () {
    const g = window.gsap;
    if (g) {
      g.from('.s103-layout', { opacity: 0, y: 10, duration: 0.35, ease: 'power2.out' });
      g.from('.s103-step', { opacity: 0, y: 6, duration: 0.3, ease: 'power2.out', delay: 0.06, stagger: 0.06 });
    }
  });
}
