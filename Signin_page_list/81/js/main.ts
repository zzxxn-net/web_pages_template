/**
 * 시안 81 - 네오 브루탈리즘 + 카드 분리형 레이아웃 + 입력 반응형 애니메이션
 * GSAP: 포커스 시 필드/카드 입력 반응형 애니메이션 (라벨·테두리·카드 섀도우)
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
    gsap?: {
      fromTo: (target: HTMLElement | string, from: object, to: object) => void;
      from: (target: HTMLElement | string, vars: object) => void;
      to: (target: HTMLElement | string, vars: object) => void;
    };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function getGsap(): typeof window.gsap {
  return (window as unknown as { gsap?: typeof window.gsap }).gsap;
}

function animateFieldFocus81(el: HTMLElement | null, isFocus: boolean): void {
  const g = getGsap();
  if (!g || !el) return;
  const input = el.querySelector<HTMLElement>('.s81-input');
  const label = el.querySelector<HTMLElement>('.s81-label');
  if (isFocus) {
    g.fromTo(input, { scale: 1 }, { scale: 1.01, duration: 0.18, ease: 'power2.out' });
    g.to(input, { scale: 1, duration: 0.2, delay: 0.18, ease: 'power2.inOut' });
    if (label) g.fromTo(label, { opacity: 0.7 }, { opacity: 1, duration: 0.2, ease: 'power2.out' });
  }
}

function animateCardFocus81(card: HTMLElement | null, isFocus: boolean): void {
  const g = getGsap();
  if (!g || !card) return;
  if (isFocus) {
    g.fromTo(card, { y: 0 }, { y: -2, duration: 0.22, ease: 'power2.out' });
  } else {
    g.to(card, { y: 0, duration: 0.2, ease: 'power2.inOut' });
  }
}

function signupForm81(): Record<string, unknown> {
  return {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    submitting: false,
    errors: {} as Record<string, string>,
    focusedField: null as string | null,

    onFocus(_ev: Event, fieldKey: string): void {
      const self = this as {
        focusedField: string | null;
        $refs: { fieldEmail?: HTMLElement; fieldName?: HTMLElement; fieldPassword?: HTMLElement; fieldPasswordConfirm?: HTMLElement; cardAccount?: HTMLElement; cardPassword?: HTMLElement };
      };
      self.focusedField = fieldKey;
      const refMap: Record<string, string> = {
        email: 'fieldEmail',
        name: 'fieldName',
        password: 'fieldPassword',
        passwordConfirm: 'fieldPasswordConfirm',
      };
      const cardMap: Record<string, string> = {
        email: 'cardAccount',
        name: 'cardAccount',
        password: 'cardPassword',
        passwordConfirm: 'cardPassword',
      };
      const refName = refMap[fieldKey];
      const cardName = cardMap[fieldKey];
      const fieldEl = refName ? (self.$refs as Record<string, HTMLElement>)[refName] : null;
      const cardEl = cardName ? (self.$refs as Record<string, HTMLElement>)[cardName] : null;
      requestAnimationFrame(() => {
        animateFieldFocus81(fieldEl || null, true);
        animateCardFocus81(cardEl || null, true);
        if (cardEl) cardEl.classList.add('s81-card--focused');
        if (fieldEl) fieldEl.classList.add('s81-field--focused');
      });
    },

    onBlur(_ev: Event, fieldKey: string): void {
      const self = this as {
        focusedField: string | null;
        $refs: Record<string, HTMLElement | undefined>;
      };
      const refMap: Record<string, string> = {
        email: 'fieldEmail',
        name: 'fieldName',
        password: 'fieldPassword',
        passwordConfirm: 'fieldPasswordConfirm',
      };
      const cardMap: Record<string, string> = {
        email: 'cardAccount',
        name: 'cardAccount',
        password: 'cardPassword',
        passwordConfirm: 'cardPassword',
      };
      const refName = refMap[fieldKey];
      const cardName = cardMap[fieldKey];
      const fieldEl = refName ? self.$refs[refName] : null;
      const cardEl = cardName ? self.$refs[cardName] : null;
      requestAnimationFrame(() => {
        if (fieldEl) fieldEl.classList.remove('s81-field--focused');
        if (cardEl) cardEl.classList.remove('s81-card--focused');
        animateCardFocus81(cardEl || null, false);
      });
      self.focusedField = null;
    },

    focusNext(fromKey: string): void {
      const order = ['email', 'name', 'password', 'passwordConfirm'];
      const idx = order.indexOf(fromKey);
      const nextId = idx < order.length - 1 ? order[idx + 1] : null;
      if (nextId === 'password') {
        (document.getElementById('s81-password') as HTMLInputElement | null)?.focus();
      } else if (nextId === 'passwordConfirm') {
        (document.getElementById('s81-passwordConfirm') as HTMLInputElement | null)?.focus();
      } else if (nextId === 'name') {
        (document.getElementById('s81-name') as HTMLInputElement | null)?.focus();
      } else if (nextId === 'email') {
        (document.getElementById('s81-email') as HTMLInputElement | null)?.focus();
      }
    },

    validateEmail(): void {
      const v = (this as { email: string }).email.trim();
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) {
        e.email = '이메일을 입력해 주세요.';
        return;
      }
      if (!EMAIL_REGEX.test(v)) {
        e.email = '올바른 이메일 형식이 아닙니다.';
        return;
      }
      delete e.email;
    },

    validateName(): void {
      const v = (this as { name: string }).name.trim();
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) {
        e.name = '이름을 입력해 주세요.';
        return;
      }
      if (v.length < 2) {
        e.name = '이름은 2자 이상 입력해 주세요.';
        return;
      }
      delete e.name;
    },

    validatePassword(): void {
      const v = (this as { password: string }).password;
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) {
        e.password = '비밀번호를 입력해 주세요.';
        return;
      }
      if (v.length < MIN_PASSWORD_LENGTH) {
        e.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.';
        return;
      }
      delete e.password;
    },

    validatePasswordConfirm(): void {
      const t = this as { password: string; passwordConfirm: string; errors: Record<string, string> };
      if (t.password !== t.passwordConfirm) {
        t.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        return;
      }
      delete t.errors.passwordConfirm;
    },

    handleSubmit(): void {
      const t = this as {
        validateEmail: () => void;
        validateName: () => void;
        validatePassword: () => void;
        validatePasswordConfirm: () => void;
        errors: Record<string, string>;
        submitting: boolean;
      };
      t.validateEmail();
      t.validateName();
      t.validatePassword();
      t.validatePasswordConfirm();
      if (Object.keys(t.errors).length > 0) return;
      t.submitting = true;
      setTimeout(() => {
        (this as { submitting: boolean }).submitting = false;
      }, 800);
    },
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => {
    if (window.Alpine) window.Alpine.data('signupForm81', signupForm81);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const g = getGsap();
    const viewport = document.querySelector<HTMLElement>('.s81-viewport');
    if (g && viewport) {
      g.from(viewport, { opacity: 0, y: 20, duration: 0.45, ease: 'power2.out' });
      g.from('.s81-card', { opacity: 0, y: 12, duration: 0.35, stagger: 0.08, delay: 0.1, ease: 'power2.out' });
    }
  });
}

export { signupForm81 };
