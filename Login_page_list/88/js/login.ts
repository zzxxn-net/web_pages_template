// MVP: 로그인 시안 88 — Alpine 데이터·GSAP 입력 반응형 (현대 판타지 마이크로 인터랙션 중심)
declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: {
  set: (el: Element, o: object) => void;
  to: (el: Element, o: object, vars?: { duration?: number; delay?: number; ease?: string }) => void;
};
declare const document: Document;

interface FantasyMicroLogin {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  focusField: string;
  handleSubmit(e: Event): void;
}

function fantasyMicroLogin(): FantasyMicroLogin {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit(e: Event): void {
      e.preventDefault();
      const ctx = this as FantasyMicroLogin;
      if (ctx.loading) return;
      ctx.loading = true;
      setTimeout(() => {
        ctx.loading = false;
      }, 1200);
    },
  };
}

// MVP: GSAP 래퍼·카드·헤더 진입 — 부드러운 등장
function initFantasyMicroWrap(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 12 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
}

function initFantasyMicroCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.98 });
  gsap.to(card, { opacity: 1, scale: 1, duration: 0.48, delay: 0.06, ease: "power2.out" });
}

function initFantasyMicroHead(): void {
  if (typeof gsap === "undefined") return;
  const head = document.querySelector("[data-gsap-head]");
  if (!head) return;
  gsap.set(head, { opacity: 0, y: 6 });
  gsap.to(head, { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "power2.out" });
}

// MVP: 입력 반응형 애니메이션 — 필드 포커스·블러 시 GSAP 스케일
function initFantasyMicroFields(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".fantasy-micro-field[data-gsap-field]");
  fields.forEach((el) => {
    gsap.set(el, { opacity: 0, y: 6 });
    gsap.to(el, { opacity: 1, y: 0, duration: 0.38, delay: 0.14, ease: "power2.out" });
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      gsap.to(el, { scale: 1.02, duration: 0.26, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      gsap.to(el, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("fantasyMicroLogin", fantasyMicroLogin as () => Record<string, unknown>);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initFantasyMicroWrap();
    setTimeout(() => {
      initFantasyMicroCard();
      initFantasyMicroHead();
      initFantasyMicroFields();
    }, 50);
  });
} else {
  initFantasyMicroWrap();
  setTimeout(() => {
    initFantasyMicroCard();
    initFantasyMicroHead();
    initFantasyMicroFields();
  }, 50);
}
