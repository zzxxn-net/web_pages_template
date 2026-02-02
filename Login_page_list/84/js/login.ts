// MVP: 로그인 시안 84 — Alpine 데이터·GSAP 진입 (다크 아카이브 풀스크린 몰입형, 상태 변화 강조)
declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: {
  set: (el: Element, o: object) => void;
  to: (el: Element, o: object, vars?: { duration?: number; delay?: number; ease?: string }) => void;
};
declare const document: Document;

interface ArchiveImmersiveLogin {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  focusField: string;
  handleSubmit(e: Event): void;
}

function archiveImmersiveLogin(): ArchiveImmersiveLogin {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit(e: Event): void {
      e.preventDefault();
      const ctx = this as ArchiveImmersiveLogin;
      if (ctx.loading) return;
      ctx.loading = true;
      setTimeout(() => {
        ctx.loading = false;
      }, 1200);
    },
  };
}

// MVP: GSAP 배경·래퍼 진입 — 풀스크린 몰입감
function initArchiveBg(): void {
  if (typeof gsap === "undefined") return;
  const bg = document.querySelector("[data-gsap-bg]");
  if (!bg) return;
  gsap.set(bg, { opacity: 0 });
  gsap.to(bg, { opacity: 1, duration: 0.6, ease: "power2.out" });
}

function initArchiveWrap(): void {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, delay: 0.08, ease: "power2.out" });
}

function initArchiveCard(): void {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.98 });
  gsap.to(card, { opacity: 1, scale: 1, duration: 0.48, delay: 0.12, ease: "power2.out" });
}

function initArchiveHead(): void {
  if (typeof gsap === "undefined") return;
  const head = document.querySelector("[data-gsap-head]");
  if (!head) return;
  gsap.set(head, { opacity: 0, y: 6 });
  gsap.to(head, { opacity: 1, y: 0, duration: 0.4, delay: 0.16, ease: "power2.out" });
}

// MVP: 상태 변화 강조 — 필드 포커스 시 GSAP 스케일
function initArchiveFields(): void {
  if (typeof gsap === "undefined") return;
  const fields = document.querySelectorAll(".archive-field[data-gsap-field]");
  fields.forEach((el) => {
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => {
      gsap.to(el, { scale: 1.01, duration: 0.25, ease: "power2.out" });
    });
    inp.addEventListener("blur", () => {
      gsap.to(el, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}

if (typeof Alpine !== "undefined") Alpine.data("archiveImmersiveLogin", archiveImmersiveLogin as () => Record<string, unknown>);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initArchiveBg();
    setTimeout(() => {
      initArchiveWrap();
      initArchiveCard();
      initArchiveHead();
      initArchiveFields();
    }, 50);
  });
} else {
  initArchiveBg();
  setTimeout(() => {
    initArchiveWrap();
    initArchiveCard();
    initArchiveHead();
    initArchiveFields();
  }, 50);
}
