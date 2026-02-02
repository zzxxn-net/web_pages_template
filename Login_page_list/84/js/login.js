// MVP: 로그인 시안 84 — Alpine 데이터·GSAP 진입 (다크 아카이브 풀스크린 몰입형, 상태 변화 강조)
function archiveImmersiveLogin() {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    focusField: "",
    handleSubmit(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function() { self.loading = false; }, 1200);
    },
  };
}
// MVP: GSAP 배경·래퍼 진입 — 풀스크린 몰입감
function initArchiveBg() {
  if (typeof gsap === "undefined") return;
  var bg = document.querySelector("[data-gsap-bg]");
  if (!bg) return;
  gsap.set(bg, { opacity: 0 });
  gsap.to(bg, { opacity: 1, duration: 0.6, ease: "power2.out" });
}
function initArchiveWrap() {
  if (typeof gsap === "undefined") return;
  var wrap = document.querySelector("[data-gsap-wrap]");
  if (!wrap) return;
  gsap.set(wrap, { opacity: 0, y: 16 });
  gsap.to(wrap, { opacity: 1, y: 0, duration: 0.5, delay: 0.08, ease: "power2.out" });
}
function initArchiveCard() {
  if (typeof gsap === "undefined") return;
  var card = document.querySelector("[data-gsap-card]");
  if (!card) return;
  gsap.set(card, { opacity: 0, scale: 0.98 });
  gsap.to(card, { opacity: 1, scale: 1, duration: 0.48, delay: 0.12, ease: "power2.out" });
}
function initArchiveHead() {
  if (typeof gsap === "undefined") return;
  var head = document.querySelector("[data-gsap-head]");
  if (!head) return;
  gsap.set(head, { opacity: 0, y: 6 });
  gsap.to(head, { opacity: 1, y: 0, duration: 0.4, delay: 0.16, ease: "power2.out" });
}
// MVP: 상태 변화 강조 — 필드 포커스 시 GSAP 스케일
function initArchiveFields() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".archive-field[data-gsap-field]");
  fields.forEach(function(el) {
    var inp = el.querySelector("input");
    if (!inp) return;
    inp.addEventListener("focus", function() {
      gsap.to(el, { scale: 1.01, duration: 0.25, ease: "power2.out" });
    });
    inp.addEventListener("blur", function() {
      gsap.to(el, { scale: 1, duration: 0.2, ease: "power2.in" });
    });
  });
}
if (typeof Alpine !== "undefined") Alpine.data("archiveImmersiveLogin", archiveImmersiveLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initArchiveBg();
    setTimeout(function() {
      initArchiveWrap();
      initArchiveCard();
      initArchiveHead();
      initArchiveFields();
    }, 50);
  });
} else {
  initArchiveBg();
  setTimeout(function() {
    initArchiveWrap();
    initArchiveCard();
    initArchiveHead();
    initArchiveFields();
  }, 50);
}
