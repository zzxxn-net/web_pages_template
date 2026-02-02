/**
 * Login page — Design 9: Cyber Minimal · Full-screen · State change emphasis
 * Alpine.js + status state (compiled from TypeScript)
 */

declare const Alpine: { data: (name: string, fn: () => Record<string, unknown>) => void };
declare const gsap: typeof import("gsap");
declare const document: Document;

function cyberFullLogin(): Record<string, unknown> & {
  email: string;
  password: string;
  showPassword: boolean;
  loading: boolean;
  status: string;
  statusClass: Record<string, boolean>;
  statusText: string;
  setStatus: (s: string) => void;
  handleSubmit: (e: Event) => void;
} {
  return {
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    status: "idle",

    get statusClass(): Record<string, boolean> {
      return {
        "is-idle": this.status === "idle",
        "is-focus": this.status === "focus",
        "is-loading": this.status === "loading",
      };
    },

    get statusText(): string {
      const map: Record<string, string> = {
        idle: "대기",
        focus: "입력 중",
        loading: "확인 중…",
      };
      return map[this.status] || "대기";
    },

    setStatus(s: string): void {
      this.status = s;
    },

    handleSubmit(e: Event): void {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      this.status = "loading";
      setTimeout(() => {
        this.loading = false;
        this.status = "idle";
      }, 1200);
    },
  };
}

function initEntrance(): void {
  if (typeof gsap === "undefined") return;
  const center = document.querySelector(".login-cyber-full__center");
  if (!center) return;
  gsap.set(center, { opacity: 0, y: 12 });
  gsap.to(center, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
}

if (typeof Alpine !== "undefined") {
  Alpine.data("cyberFullLogin", cyberFullLogin);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEntrance);
} else {
  initEntrance();
}
