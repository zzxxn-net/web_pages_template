function fantasyProgLogin() {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    goStep2: function() {
      if (!this.email.trim()) return;
      var panel1 = document.querySelector('.fantasy-prog-panel[data-step="1"]');
      var self = this;
      if (typeof gsap !== "undefined" && panel1) {
        gsap.to(panel1, { opacity: 0, x: -24, duration: 0.28, ease: "power2.in", onComplete: function() {
          self.step = 2;
          setTimeout(function() {
            var panel2 = document.querySelector('.fantasy-prog-panel[data-step="2"]');
            if (panel2 && typeof gsap !== "undefined") {
              gsap.set(panel2, { opacity: 0, x: 24 });
              gsap.to(panel2, { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" });
            }
          }, 0);
        }});
      } else { self.step = 2; }
    },
    handleSubmit: function(e) {
      e.preventDefault();
      if (this.loading) return;
      this.loading = true;
      var self = this;
      setTimeout(function() { self.loading = false; }, 1200);
    },
  };
}
function initEntrance() {
  if (typeof gsap === "undefined") return;
  var box = document.querySelector(".login-fantasy-prog__box");
  var steps = document.querySelector(".fantasy-prog-steps");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 14 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  if (steps) {
    gsap.set(steps, { opacity: 0, scale: 0.95 });
    gsap.to(steps, { opacity: 1, scale: 1, duration: 0.4, delay: 0.08, ease: "power2.out" });
  }
}
function initInputReactive() {
  if (typeof gsap === "undefined") return;
  var fields = document.querySelectorAll(".fantasy-prog-field[data-fantasy-field]");
  for (var i = 0; i < fields.length; i++) {
    var el = fields[i];
    var input = el.querySelector("input");
    if (!input) continue;
    input.addEventListener("focus", function() {
      var field = this.closest(".fantasy-prog-field");
      if (field) gsap.to(field, { scale: 1.02, duration: 0.25, ease: "power2.out" });
    });
    input.addEventListener("blur", function() {
      var field = this.closest(".fantasy-prog-field");
      if (field) gsap.to(field, { scale: 1, duration: 0.22, ease: "power2.in" });
    });
  }
}
if (typeof Alpine !== "undefined") Alpine.data("fantasyProgLogin", fantasyProgLogin);
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    initEntrance();
    setTimeout(initInputReactive, 500);
  });
} else {
  initEntrance();
  setTimeout(initInputReactive, 500);
}
