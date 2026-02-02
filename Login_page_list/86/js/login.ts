// MVP: 로그인 시안 86 — Alpine 데이터·GSAP 부드러운 전환 (미래적 클린 비대칭 레이아웃)
declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: {
  set: (el: Element, o: object) => void;
  to: (el: Element, o: object, vars?: { duration?: number; delay?: number; ease?: string }) => void;
};
declare const document: Document;

interface CleanAsymLogin {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  focusField: string;
  handleSubmit(e: Event): void;
}

function cleanAsymLogin(): CleanAsymLogin {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit(e: Event): void {
      e.preventDefault();
      const ctx = this as CleanAsymLogin;
      if (ctx.loading) return;
      ctx.loading = true;
      setTimeout(() => {
        ctx.loading = false;
      }, 1200);
    },
  };
}

// MVP: GSAP 래퍼·aside·카드 진입 — 부드러운 전환
function initCleanWrap(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 14 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initCleanAside(): void {
  if (typeof gsap === "undefined") return;
  const aside = document.querySelector("[data-gsap-aside]");
  if (!aside) return;
  gsap.set(aside, { opacity: 0, x: -12 });
  gsap.to(aside, { opacity: 1, x: 0, duration: 0.46, delay: 0.06, ease: "power2.out" });
}

function initCleanCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, x: 12 });
  gsap.to(card, { opacity: 1, x: 0, duration: 0.48, delay: 0.1, ease: "power2.out" });
}

// MVP: GSAP 필드 진입·포커스 시 부드러운 스케일
function initCleanFields(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".clean-field[data-gsap-field]");
  fields.forEach((el) => {
    gsap.set(el, { opacity: 0, y: 8 });
    gsap.to(el, { opacity: 1, y: 0, duration: 0.4, delay: 0.14, ease: "power2.out" });
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      gsap.to(el, { scale: 1.01, duration: 0.26, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      gsap.to(el, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("cleanAsymLogin", cleanAsymLogin as () => Record<string, unknown>);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initCleanWrap();
    setTimeout(() => {
      initCleanAside();
      initCleanCard();
      initCleanFields();
    }, 50);
  });
} else {
  initCleanWrap();
  setTimeout(() => {
    initCleanAside();
    initCleanCard();
    initCleanFields();
  }, 50);
}
