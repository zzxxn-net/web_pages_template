function futureProgLogin() {
  return {
    step: 1,
    email: "",
    password: "",
    showPassword: false,
    loading: false,
    goStep2: function() {
      if (!this.email.trim()) return;
      var panel1 = document.querySelector('.future-prog-panel[data-step="1"]');
      var self = this;
      if (typeof gsap !== "undefined" && panel1) {
        gsap.to(panel1, { opacity: 0, x: -16, duration: 0.22, ease: "power2.in", onComplete: function() {
          self.step = 2;
          setTimeout(function() {
            var panel2 = document.querySelector('.future-prog-panel[data-step="2"]');
            if (panel2 && typeof gsap !== "undefined") {
              gsap.set(panel2, { opacity: 0, x: 16 });
              gsap.to(panel2, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
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
  var box = document.querySelector(".login-future-prog__box");
  if (!box) return;
  gsap.set(box, { opacity: 0, y: 10 });
  gsap.to(box, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
}
if (typeof Alpine !== "undefined") Alpine.data("futureProgLogin", futureProgLogin);
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initEntrance);
else initEntrance();
