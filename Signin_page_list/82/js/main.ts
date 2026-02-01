declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
    gsap?: {
      fromTo: (target: string | Element, fromVars: object, toVars: object) => void;
      to: (target: string | Element, vars: object) => void;
    };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

type FieldKey = 'email' | 'name' | 'password' | 'passwordConfirm';

const FIELD_ORDER: FieldKey[] = ['email', 'name', 'password', 'passwordConfirm'];

interface SignupForm82State {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
  submitting: boolean;
  focusedField: string | null;
  errors: Record<string, string>;
  inputEmail?: HTMLInputElement;
  inputName?: HTMLInputElement;
  inputPassword?: HTMLInputElement;
  inputPasswordConfirm?: HTMLInputElement;
}

function signupForm82(): Record<string, unknown> {
  const state: SignupForm82State = {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    focusedField: null,
    errors: {},
  };

  return {
    ...state,

    validateEmail(this: SignupForm82State): void {
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

    validateName(this: SignupForm82State): void {
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

    validatePassword(this: SignupForm82State): void {
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

    validatePasswordConfirm(this: SignupForm82State): void {
      if (this.password !== this.passwordConfirm) {
        this.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        return;
      }
      delete this.errors.passwordConfirm;
    },

    focusNext(this: SignupForm82State, current: FieldKey): void {
      const idx = FIELD_ORDER.indexOf(current);
      if (idx < 0 || idx >= FIELD_ORDER.length - 1) return;

      const nextKey = FIELD_ORDER[idx + 1];
      const nextInput =
        nextKey === 'email' ? this.inputEmail :
        nextKey === 'name' ? this.inputName :
        nextKey === 'password' ? this.inputPassword :
        this.inputPasswordConfirm;

      if (nextInput && typeof nextInput.focus === 'function') {
        nextInput.focus();
      }
    },

    handleEnterKey(this: SignupForm82State, e: KeyboardEvent): void {
      const target = e.target as HTMLElement;
      if (target.tagName !== 'INPUT' || (target as HTMLInputElement).type === 'submit') return;

      const fieldMap: Record<string, FieldKey> = {
        's82-email': 'email',
        's82-name': 'name',
        's82-password': 'password',
        's82-passwordConfirm': 'passwordConfirm',
      };
      const id = target.id;
      const current = fieldMap[id];
      if (!current) return;

      e.preventDefault();
      if (current === 'passwordConfirm') {
        this.handleSubmit();
      } else {
        this.focusNext(current);
      }
    },

    handleSubmit(this: SignupForm82State): void {
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

    initFocusOrder(this: SignupForm82State): void {
      // Alpine refs are set after init; no extra work needed
    },
  };
}

function runGsap(): void {
  const gsap = (window as Window & { gsap?: typeof window.gsap }).gsap;
  if (!gsap) return;

  const layout = document.querySelector('.s82-layout');
  const aside = document.querySelector('.s82-aside');
  const formSection = document.querySelector('.s82-form-section');

  if (layout) {
    gsap.fromTo(layout, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
  }
  if (aside) {
    gsap.fromTo(aside, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.45, delay: 0.08, ease: 'power2.out' });
  }
  if (formSection) {
    gsap.fromTo(formSection, { opacity: 0, x: 16 }, { opacity: 1, x: 0, duration: 0.45, delay: 0.12, ease: 'power2.out' });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) {
      window.Alpine.data('signupForm82', signupForm82);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    runGsap();
  });
}

export { signupForm82, runGsap };
