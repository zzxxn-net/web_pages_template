// mvp - compiled from main.ts
var products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/520x325/1c1e22/6b7280?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/520x325/1c1e22/6b7280?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/520x325/1c1e22/6b7280?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/520x325/1c1e22/6b7280?text=4" },
];

function shopPage9() {
  return {
    selectedId: 1,
    products: products,
    cart: [],
    get selected() {
      return this.products.find(function(p) { return p.id === this.selectedId; }.bind(this)) || this.products[0];
    },
    init: function() {
      if (typeof gsap !== "undefined") {
        var main = document.querySelector(".shop-page-9__main");
        var side = document.querySelector(".shop-page-9__side");
        if (main) gsap.fromTo(main, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" });
        if (side) gsap.fromTo(side, { opacity: 0, x: 16 }, { opacity: 1, x: 0, duration: 0.4, delay: 0.08, ease: "power2.out" });
      }
    },
    setFocus: function(id) {
      if (this.selectedId === id) return;
      this.selectedId = id;
      if (typeof gsap !== "undefined") {
        var hero = document.querySelector(".product-hero-9");
        if (hero) gsap.fromTo(hero, { opacity: 0.85, y: 6 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
      }
    },
    addToCart: function(id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector(".product-hero-9 .btn-9--primary");
        if (btn) gsap.fromTo(btn, { scale: 1.06 }, { scale: 1, duration: 0.25, ease: "power2.out" });
      }
    },
  };
}
if (typeof Alpine !== "undefined") Alpine.data("shopPage9", shopPage9);
