function cyberProgLogin() {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    goStep2: function () {
      if (this.email.trim()) this.step = 2;
    },
    handleSubmit: function (e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function () { self.loading = false; }, 1200);
    },
  };
}

function initEntrance() {
  if (typeof gsap === "undefined") return;
  var box = document.querySelector(".login-cyber-prog__box");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 16 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
}

function initStepGSAP() {
  if (typeof gsap === "undefined") return;
  var panels = document.querySelectorAll(".cyber-prog-panel[data-gsap-panel]");
  panels.forEach(function (panel) {
    var step = panel.getAttribute("data-step");
    if (step === "1") {
      gsap.set(panel, { opacity: 1 });
    } else {
      gsap.set(panel, { opacity: 0, x: 12 });
    }
  });
}

function observeStep() {
  if (typeof gsap === "undefined") return;
  var box = document.querySelector(".login-cyber-prog__box");
  if (!box) return;
  var observer = new MutationObserver(function () {
    var panel2 = document.querySelector(".cyber-prog-panel[data-step='2']:not(.is-hidden)");
    var panel1 = document.querySelector(".cyber-prog-panel[data-step='1']:not(.is-hidden)");
    if (panel2) {
      gsap.fromTo(panel2, { opacity: 0, x: 12 }, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
    }
    if (panel1 && panel1.style.opacity !== "0") {
      gsap.fromTo(panel1, { opacity: 1, x: 0 }, { opacity: 0, x: -12, duration: 0.25, ease: "power2.in" });
    }
  });
  observer.observe(box, { attributes: true, subtree: true, attributeFilter: ["class"] });
}

if (typeof Alpine !== "undefined") Alpine.data("cyberProgLogin", cyberProgLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    initEntrance();
    setTimeout(function () {
      initStepGSAP();
      observeStep();
    }, 300);
  });
} else {
  initEntrance();
  setTimeout(function () {
    initStepGSAP();
    observeStep();
  }, 300);
}
