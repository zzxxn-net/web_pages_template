/** 시안 118: 미래적 클린 + 단일 포커스 입력 흐름 + GSAP 기반 부드러운 전환 */
declare global {
  interface Window {
    Alpine: { data: (name: string, fn: () => object) => void };
    gsap?: { from: (el: string | Element, v: object) => void; to: (el: string | Element, v: object) => void };
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function signupForm118(): Record<string, unknown> {
  return {
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
    showPassword: false,
    focusedField: null as string | null,
    touched: {} as Record<string, boolean>,
    submitting: false,
    errors: {} as Record<string, string>,

    onFocus(field: string): void {
      (this as { focusedField: string | null }).focusedField = field;
      const g = (typeof window !== "undefined" && window.gsap) ? window.gsap : null;
      const activeEl = document.querySelector(`.s118-field[data-field="${field}"]`);
      const dimmed = document.querySelectorAll(".s118-field--dimmed");
      if (g && activeEl) {
        g.to(activeEl, { opacity: 1, scale: 1, duration: 0.28, ease: "power2.out" });
        dimmed.forEach((el) => g.to(el, { opacity: 0.55, scale: 0.995, duration: 0.28, ease: "power2.out" }));
      }
    },

    onBlur(): void {
      (this as { focusedField: string | null }).focusedField = null;
    },

    focusNext(nextId: string): void {
      const el = document.getElementById("s118-" + nextId);
      if (el && typeof (el as HTMLInputElement).focus === "function") {
        (el as HTMLInputElement).focus();
      }
    },

    validateEmail(): void {
      const v = (this as { email: string }).email.trim();
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) { e.email = "이메일을 입력해 주세요."; return; }
      if (!EMAIL_REGEX.test(v)) { e.email = "올바른 이메일 형식이 아닙니다."; return; }
      delete e.email;
    },

    validateName(): void {
      const v = (this as { name: string }).name.trim();
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) { e.name = "이름을 입력해 주세요."; return; }
      if (v.length < 2) { e.name = "이름은 2자 이상 입력해 주세요."; return; }
      delete e.name;
    },

    validatePassword(): void {
      const v = (this as { password: string }).password;
      const e = (this as { errors: Record<string, string> }).errors;
      if (!v) { e.password = "비밀번호를 입력해 주세요."; return; }
      if (v.length < MIN_PASSWORD_LENGTH) { e.password = "비밀번호는 " + MIN_PASSWORD_LENGTH + "자 이상이어야 합니다."; return; }
      delete e.password;
    },

    validatePasswordConfirm(): void {
      const t = this as { password: string; passwordConfirm: string; errors: Record<string, string> };
      if (t.password !== t.passwordConfirm) { t.errors.passwordConfirm = "비밀번호가 일치하지 않습니다."; return; }
      delete t.errors.passwordConfirm;
    },

    handleSubmit(): void {
      (this as { validateEmail: () => void }).validateEmail();
      (this as { validateName: () => void }).validateName();
      (this as { validatePassword: () => void }).validatePassword();
      (this as { validatePasswordConfirm: () => void }).validatePasswordConfirm();
      if (Object.keys((this as { errors: Record<string, string> }).errors).length > 0) return;
      (this as { submitting: boolean }).submitting = true;
      setTimeout(() => { (this as { submitting: boolean }).submitting = false; }, 800);
    },

    initAnim(): void {},
  };
}

if (typeof document !== "undefined") {
  document.addEventListener("alpine:init", () => {
    if (window.Alpine) window.Alpine.data("signupForm118", signupForm118);
  });
  document.addEventListener("DOMContentLoaded", () => {
    const g = window.gsap;
    const inner = document.querySelector(".s118-inner");
    const header = document.querySelector(".s118-header");
    const formWrap = document.querySelector(".s118-form-wrap");
    if (g && inner) {
      g.from(inner, { opacity: 0, duration: 0.5, ease: "power2.out" });
      if (header) g.from(header, { opacity: 0, y: -12, duration: 0.38, ease: "power2.out", delay: 0.08 });
      if (formWrap) g.from(formWrap, { opacity: 0, y: 14, duration: 0.38, ease: "power2.out", delay: 0.14 });
    }
  });
}

export { signupForm118 };
