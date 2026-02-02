// mvp - compiled from main.ts
var products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/220x220/3f3f46/a8a29e?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/220x220/3f3f46/a8a29e?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/220x220/3f3f46/a8a29e?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/220x220/3f3f46/a8a29e?text=4" },
];

function shopPage7() {
  return {
    addedIds: new Set(),
    likes: new Set(),
    products: products,
    cart: [],

    init: function() {
      this.runEntrance();
    },

    addToCart: function(id) {
      if (this.addedIds.has(id)) return;
      this.addedIds.add(id);
      this.addedIds = new Set(this.addedIds);
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var card = document.querySelector(".product-card-7[data-product-id=\"" + id + "\"]");
        if (card) gsap.fromTo(card, { scale: 1.05 }, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    },

    toggleLike: function(id) {
      if (this.likes.has(id)) this.likes.delete(id);
      else this.likes.add(id);
      this.likes = new Set(this.likes);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector(".product-card-7[data-product-id=\"" + id + "\"] .btn-7:not(.btn-7--cart)");
        if (btn) gsap.fromTo(btn, { scale: 1.2 }, { scale: 1, duration: 0.2, ease: "power2.out" });
      }
    },

    runEntrance: function() {
      if (typeof gsap === "undefined") return;
      var cards = document.querySelectorAll(".product-card-7");
      gsap.fromTo(cards, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out" });
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage7", shopPage7);
}
