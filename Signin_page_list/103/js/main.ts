/**
 * 시안 103 - 실험적 인터페이스 + 단계 분할형 + 입력 반응형 애니메이션
 * Alpine: step, nextStep/prevStep, 포커스 이동; GSAP: 레이아웃·패널 전환
 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm103(): Record<string, unknown> {
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
    errors: {} as Record<string, string>,

    validateEmail(): void {
      const v = (this as { email: string }).email.trim();
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) { e.email = '이메일을 입력해 주세요.'; return; }
      if (!EMAIL_REGEX.test(v)) { e.email = '올바른 이메일 형식이 아닙니다.'; return; }
      delete e.email;
    },

    validateName(): void {
      const v = (this as { name: string }).name.trim();
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) { e.name = '이름을 입력해 주세요.'; return; }
      if (v.length < 2) { e.name = '이름은 2자 이상 입력해 주세요.'; return; }
      delete e.name;
    },

    validatePassword(): void {
      const v = (this as { password: string }).password;
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) { e.password = '비밀번호를 입력해 주세요.'; return; }
      if (v.length < MIN_PASSWORD_LENGTH) { e.password = '비밀번호는 ' + MIN_PASSWORD_LENGTH + '자 이상이어야 합니다.'; return; }
      delete e.password;
    },

    validatePasswordConfirm(): void {
      const t = this as { password: string; passwordConfirm: string; errors: Record<string, string> };
      if (t.password !== t.passwordConfirm) { t.errors.passwordConfirm = '비밀번호가 일치하지 않습니다.'; return; }
      delete t.errors.passwordConfirm;
    },

    nextStep(): void {
      (this as { validateEmail: () => void }).validateEmail();
      (this as { validateName: () => void }).validateName();
      const e = (this as { errors: Record<string, string> }).errors;
      if (e.email || e.name) return;
      (this as { step: number }).step = 2;
      const refs = (this as { $refs: { panel2?: HTMLElement } }).$refs;
      const panel = refs?.panel2;
      if (panel) {
        const input = panel.querySelector<HTMLInputElement>('input');
        if (input) setTimeout(() => input.focus(), 100);
      }
    },

    prevStep(): void {
      (this as { step: number }).step = 1;
      const refs = (this as { $refs: { panel1?: HTMLElement } }).$refs;
      const panel = refs?.panel1;
      if (panel) {
        const input = panel.querySelector<HTMLInputElement>('input');
        if (input) setTimeout(() => input.focus(), 100);
      }
    },

    goToStep(s: number): void {
      (this as { step: number }).step = s;
    },

    handleSubmit(): void {
      (this as { validatePassword: () => void }).validatePassword();
      (this as { validatePasswordConfirm: () => void }).validatePasswordConfirm();
      const e = (this as { errors: Record<string, string> }).errors;
      if (Object.keys(e).length > 0) return;
      (this as { submitting: boolean }).submitting = true;
      setTimeout(() => { (this as { submitting: boolean }).submitting = false; }, 800);
    },

    initAnim(): void {},
  };
}

if (typeof document !== 'undefined') {
  document.addEventListener('alpine:init', () => { if (window.Alpine) window.Alpine.data('signupForm103', signupForm103); });
  document.addEventListener('DOMContentLoaded', () => {
    const g = (window as unknown as { gsap?: { from: (t: string | HTMLElement, v: object) => void } }).gsap;
    if (g) {
      g.from('.s103-layout', { opacity: 0, y: 10, duration: 0.35, ease: 'power2.out' });
      g.from('.s103-step', { opacity: 0, y: 6, duration: 0.3, ease: 'power2.out', delay: 0.06, stagger: 0.06 });
    }
  });
}

export { signupForm103 };
