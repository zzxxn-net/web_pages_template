// MVP: 로그인 시안 83 — Alpine 데이터·GSAP 부드러운 전환 (단일 포커스 입력 흐름)
declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: {
  set: (el: Element, o: object) => void;
  to: (el: Element, o: object, vars?: { duration?: number; delay?: number; ease?: string; overwrite?: boolean }) => void;
};
declare const document: Document;

interface CyberSingleFocusLogin {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  focusField: string;
  step: number;
  handleSubmit(e: Event): void;
  revealPassword(): void;
}

function cyberSingleFocusLogin(): CyberSingleFocusLogin {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    step: 1,
    handleSubmit(e: Event): void {
      e.preventDefault();
      const ctx = this as CyberSingleFocusLogin;
      if (ctx.loading) return;
      ctx.loading = true;
      setTimeout(() => {
        ctx.loading = false;
      }, 1200);
    },
    revealPassword(): void {
      const ctx = this as CyberSingleFocusLogin;
      if (ctx.step < 2) ctx.step = 2;
    },
  };
}

// MVP: GSAP 래퍼 진입 — 부드러운 전환
function initCyberWrap(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 12 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initCyberHeader(): void {
  if (typeof gsap === "undefined") return;
  const header = document.querySelector("[data-gsap-header]");
  if (!header) return;
  gsap.set(header, { opacity: 0, y: 8 });
  gsap.to(header, { opacity: 1, y: 0, duration: 0.45, delay: 0.06, ease: "power2.out" });
}

function initCyberCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 10 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.48, delay: 0.1, ease: "power2.out" });
}

// MVP: 단일 포커스 필드 — 이메일 필드 진입, 포커스 시 부드러운 스케일
function initCyberFields(): void {
  if (typeof gsap === "undefined") return;
  const emailField = document.querySelector("[data-gsap-field-email]");
  const pwField = document.querySelector("[data-gsap-field-pw]");
  if (emailField) {
    gsap.set(emailField, { opacity: 0, x: -8 });
    gsap.to(emailField, { opacity: 1, x: 0, duration: 0.4, delay: 0.15, ease: "power2.out" });
    const inp = emailField.querySelector("input");
    if (inp) {
      inp.addEventListener("focus", () => {
        gsap.to(emailField, { scale: 1.01, duration: 0.25, ease: "power2.out" });
      });
      inp.addEventListener("blur", () => {
        gsap.to(emailField, { scale: 1, duration: 0.2, ease: "power2.in" });
      });
    }
  }
  if (pwField) {
    const inp = pwField.querySelector("input");
    if (inp) {
      inp.addEventListener("focus", () => {
        gsap.to(pwField, { scale: 1.01, duration: 0.25, ease: "power2.out" });
      });
      inp.addEventListener("blur", () => {
        gsap.to(pwField, { scale: 1, duration: 0.2, ease: "power2.in" });
      });
    }
  }
}

if (typeof Alpine !== "undefined") Alpine.data("cyberSingleFocusLogin", cyberSingleFocusLogin as () => Record<string, unknown>);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initCyberWrap();
    setTimeout(() => {
      initCyberHeader();
      initCyberCard();
      initCyberFields();
    }, 50);
  });
} else {
  initCyberWrap();
  setTimeout(() => {
    initCyberHeader();
    initCyberCard();
    initCyberFields();
  }, 50);
}
