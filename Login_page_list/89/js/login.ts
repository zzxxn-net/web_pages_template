// MVP: 로그인 시안 89 — Alpine·GSAP (네오 브루탈리즘 풀스크린 몰입형)
declare const Alpine: { data: (n: string, fn: () => Record<string, unknown>) => void };
declare const gsap: { set: (el: Element, o: object) => void; to: (el: Element, o: object, v?: object) => void };
declare const document: Document;

function brutalFullLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit(e: Event) {
      e.preventDefault();
      const t = this as { loading: boolean };
      if (t.loading) return;
      t.loading = true;
      setTimeout(() => { (this as { loading: boolean }).loading = false; }, 1200);
    },
  };
}

function initBrutalFullWrap() {
  if (typeof gsap === "undefined") return;
  const wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.52, ease: "power2.out" });
}

function initBrutalFullCard() {
  if (typeof gsap === "undefined") return;
  const card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.97 });
  gsap.to(card, { opacity: 1, scale: 1, duration: 0.5, delay: 0.06, ease: "power2.out" });
}

function initBrutalFullHead() {
  if (typeof gsap === "undefined") return;
  const head = document.querySelector("[data-gsap-head]");
  if (!head) return;
  gsap.set(head, { opacity: 0, y: 8 });
  gsap.to(head, { opacity: 1, y: 0, duration: 0.44, delay: 0.1, ease: "power2.out" });
}

function initBrutalFullFields() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".brutal-full-field[data-gsap-field]").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 8 });
    gsap.to(el, { opacity: 1, y: 0, duration: 0.4, delay: 0.14, ease: "power2.out" });
    const inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", () => gsap.to(el, { scale: 1.01, duration: 0.26, ease: "power2.out" }));
    inp.addEventListener("blur", () => gsap.to(el, { scale: 1, duration: 0.22, ease: "power2.in" }));
  });
}

if (typeof Alpine !== "undefined") Alpine.data("brutalFullLogin", brutalFullLogin as () => Record<string, unknown>);

const run = () => {
  initBrutalFullWrap();
  setTimeout(() => { initBrutalFullCard(); initBrutalFullHead(); initBrutalFullFields(); }, 50);
};
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
else run();
