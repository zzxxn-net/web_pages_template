// MVP: 로그인 시안 85 — Alpine 데이터·GSAP 진입 (감성 테크 카드 분리형, 스크롤 없는 고정 플로우)
declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: {
  set: (el: Element, o: object) => void;
  to: (el: Element, o: object, vars?: { duration?: number; delay?: number; ease?: string }) => void;
};
declare const document: Document;

interface EmotechCardLogin {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  focusField: string;
  handleSubmit(e: Event): void;
}

function emotechCardLogin(): EmotechCardLogin {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit(e: Event): void {
      e.preventDefault();
      const ctx = this as EmotechCardLogin;
      if (ctx.loading) return;
      ctx.loading = true;
      setTimeout(() => {
        ctx.loading = false;
      }, 1200);
    },
  };
}

// MVP: GSAP 래퍼·헤더·카드 진입 — 스크롤 없는 플로우 내 부드러운 등장
function initEmotechWrap(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 14 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initEmotechHeader(): void {
  if (typeof gsap === "undefined") return;
  const header = document.querySelector("[data-gsap-header]");
  if (!header) return;
  gsap.set(header, { opacity: 0, y: 10 });
  gsap.to(header, { opacity: 1, y: 0, duration: 0.44, delay: 0.06, ease: "power2.out" });
}

function initEmotechCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, y: 12 });
  gsap.to(card, { opacity: 1, y: 0, duration: 0.46, delay: 0.1, ease: "power2.out" });
}

// MVP: 필드 포커스 시 GSAP 스케일 — 감성 테크 톤에 맞춘 부드러운 피드백
function initEmotechFields(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".emotech-field[data-gsap-field]");
  fields.forEach((el) => {
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

if (typeof Alpine !== "undefined") Alpine.data("emotechCardLogin", emotechCardLogin as () => Record<string, unknown>);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initEmotechWrap();
    setTimeout(() => {
      initEmotechHeader();
      initEmotechCard();
      initEmotechFields();
    }, 50);
  });
} else {
  initEmotechWrap();
  setTimeout(() => {
    initEmotechHeader();
    initEmotechCard();
    initEmotechFields();
  }, 50);
}
