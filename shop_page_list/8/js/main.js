// mvp - compiled from main.ts
var products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/420x315/2c2825/78716c?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/420x315/2c2825/78716c?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/420x315/2c2825/78716c?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/420x315/2c2825/78716c?text=4" },
];

function shopPage8() {
  return {
    selectedId: 1,
    products: products,
    cart: [],

    get selected() {
      var p = this.products.find(function(x) { return x.id === this.selectedId; }.bind(this));
      return p || this.products[0];
    },

    init: function() {
      this.runEntrance();
    },

    setFocus: function(id) {
      if (this.selectedId === id) return;
      this.selectedId = id;
      if (typeof gsap !== "undefined") {
        var panel = document.querySelector(".shop-page-8__focus");
        if (panel) gsap.fromTo(panel, { opacity: 0.7, y: 8 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
      }
    },

    addToCart: function(id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector(".shop-page-8__focus .btn-8--primary");
        if (btn) gsap.fromTo(btn, { scale: 1.08 }, { scale: 1, duration: 0.25, ease: "power2.out" });
      }
    },

    runEntrance: function() {
      if (typeof gsap === "undefined") return;
      var focus = document.querySelector(".shop-page-8__focus");
      var list = document.querySelector(".shop-page-8__list");
      if (focus) gsap.fromTo(focus, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
      if (list) gsap.fromTo(list, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "power2.out" });
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage8", shopPage8);
}
