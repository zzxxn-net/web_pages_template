// mvp - compiled from main.ts
var products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/200x200/312e81/a5b4fc?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/200x200/312e81/a5b4fc?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/200x200/312e81/a5b4fc?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/200x200/312e81/a5b4fc?text=4" },
];

function shopPage6() {
  return {
    focusedId: null,
    searchQuery: "",
    products: products,
    cart: [],

    init: function() {
      this.runSmoothEntrance();
    },

    setFocus: function(id) {
      this.focusedId = this.focusedId === id ? null : id;
      if (typeof gsap !== "undefined") {
        var cards = document.querySelectorAll(".product-card-6");
        cards.forEach(function(el) {
          var pid = el.dataset.productId;
          var isFocused = pid !== undefined && Number(pid) === id;
          gsap.to(el, { scale: isFocused ? 1.03 : 1, duration: 0.35, ease: "power2.out" });
        });
      }
    },

    addToCart: function(id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector("[data-product-id=\"" + id + "\"] .btn-6");
        if (btn) gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    },

    runSmoothEntrance: function() {
      if (typeof gsap === "undefined") return;
      var searchWrap = document.querySelector(".shop-page-6__search-wrap");
      var grid = document.querySelector(".shop-page-6__grid");
      if (searchWrap) gsap.fromTo(searchWrap, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
      if (grid) gsap.fromTo(grid, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.08, ease: "power2.out" });
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage6", shopPage6);
}
