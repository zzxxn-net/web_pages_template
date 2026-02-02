// mvp
function shopPage13() {
  return {
    added: [],

    addWithFeedback: function (id) {
      if (this.added.indexOf(id) === -1) this.added.push(id);
      if (typeof gsap === "undefined") return;
      var card = document.querySelector('.card-13[data-product="' + id + '"]');
      var btn = card ? card.querySelector(".btn-13") : null;
      if (btn) {
        gsap.fromTo(btn, { scale: 1.15 }, { scale: 1, duration: 0.35, ease: "power2.out" });
      }
      if (card) {
        gsap.fromTo(card, { boxShadow: "0 0 0 2px rgba(219, 39, 119, 0.5)" }, { boxShadow: "0 4px 18px rgba(219, 39, 119, 0.08)", duration: 0.4, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage13", shopPage13);
}
