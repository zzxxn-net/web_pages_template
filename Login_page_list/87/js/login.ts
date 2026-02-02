// MVP: 로그인 시안 87 — Alpine 데이터·GSAP 진입 (실험적 인터페이스 단계 분할형, 상태 변화 강조)
declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: {
  set: (el: Element, o: object) => void;
  to: (el: Element, o: object, vars?: { duration?: number; delay?: number; ease?: string }) => void;
};
declare const document: Document;

interface ExpStepLogin {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  focusField: string;
  step: number;
  handleSubmit(e: Event): void;
  goStep2(): void;
}

function expStepLogin(): ExpStepLogin {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    step: 1,
    handleSubmit(e: Event): void {
      e.preventDefault();
      const ctx = this as ExpStepLogin;
      if (ctx.loading) return;
      ctx.loading = true;
      setTimeout(() => {
        ctx.loading = false;
      }, 1200);
    },
    goStep2(): void {
      const ctx = this as ExpStepLogin;
      if (ctx.step < 2) ctx.step = 2;
    },
  };
}

// MVP: GSAP 배경·래퍼·헤더·카드 진입 — 실험적 인터페이스 부드러운 등장
function initExpBg(): void {
  if (typeof gsap === "undefined") return;
  const bg = document.querySelector("[data-gsap-bg]");
  if (!bg) return;
  gsap.set(bg, { opacity: 0 });
  gsap.to(bg, { opacity: 1, duration: 0.55, ease: "power2.out" });
}

function initExpWrap(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 14 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, delay: 0.06, ease: "power2.out" });
}

function initExpHeader(): void {
  if (typeof gsap === "undefined") return;
  const header = document.querySelector("[data-gsap-header]");
  if (!header) return;
  gsap.set(header, { opacity: 0, y: 8 });
  gsap.to(header, { opacity: 1, y: 0, duration: 0.44, delay: 0.1, ease: "power2.out" });
}

function initExpCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 10 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.46, delay: 0.12, ease: "power2.out" });
}

// MVP: 상태 변화 강조 — 필드 진입·포커스 시 GSAP 스케일
function initExpFields(): void {
  if (typeof gsap === "undefined") return;
  const emailField = document.querySelector(".exp-step-field[data-gsap-field]:not(.exp-step-field--pw)");
  if (emailField) {
    gsap.set(emailField, { opacity: 0, y: 6 });
    gsap.to(emailField, { opacity: 1, y: 0, duration: 0.4, delay: 0.16, ease: "power2.out" });
    const inp = emailField.querySelector("input");
    if (inp) {
      inp.addEventListener("focus", () => {
        gsap.to(emailField, { scale: 1.01, duration: 0.26, ease: "power2.out" });
      });
      inp.addEventListener("blur", () => {
        gsap.to(emailField, { scale: 1, duration: 0.22, ease: "power2.in" });
      });
    }
  }
  const pwField = document.querySelector("[data-gsap-field-pw]");
  if (pwField) {
    const inp = pwField.querySelector("input");
    if (inp) {
      inp.addEventListener("focus", () => {
        gsap.to(pwField, { scale: 1.01, duration: 0.26, ease: "power2.out" });
      });
      inp.addEventListener("blur", () => {
        gsap.to(pwField, { scale: 1, duration: 0.22, ease: "power2.in" });
      });
    }
  }
}

if (typeof Alpine !== "undefined") Alpine.data("expStepLogin", expStepLogin as () => Record<string, unknown>);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initExpBg();
    setTimeout(() => {
      initExpWrap();
      initExpHeader();
      initExpCard();
      initExpFields();
    }, 50);
  });
} else {
  initExpBg();
  setTimeout(() => {
    initExpWrap();
    initExpHeader();
    initExpCard();
    initExpFields();
  }, 50);
}
