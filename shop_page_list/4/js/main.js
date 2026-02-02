// mvp - compiled from main.ts
function shopPage4() {
  var products = [
    { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/420x420/fbcfe8/9d174d?text=1" },
    { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/420x420/fbcfe8/9d174d?text=2" },
    { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/420x420/fbcfe8/9d174d?text=3" },
    { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/420x420/fbcfe8/9d174d?text=4" },
  ];
  return {
    current: 0,
    products: products,
    cart: [],

    init: function() {
      this.runHeroAnimation();
      this.setupInputReactive();
    },

    selectProduct: function(index) {
      this.current = index;
      if (typeof gsap !== "undefined") {
        var hero = document.querySelector(".shop-page-4__hero");
        if (hero) {
          gsap.fromTo(hero, { scale: 0.98, opacity: 0.9 }, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    },

    addToCart: function(id) {
      if (this.cart.indexOf(id) === -1) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        var btn = document.querySelector(".shop-page-4__hero .btn-4");
        if (btn) {
          gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
      }
    },

    setupInputReactive: function() {
      if (typeof gsap === "undefined") return;
      var thumbs = document.querySelectorAll(".product-thumb-4");
      thumbs.forEach(function(el) {
        el.addEventListener("mouseenter", function() {
          gsap.to(el, { scale: 1.03, duration: 0.2, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", function() {
          gsap.to(el, { scale: 1, duration: 0.2 });
        });
      });
      var hero = document.querySelector(".shop-page-4__hero");
      if (hero) {
        hero.addEventListener("mouseenter", function() {
          gsap.to(hero, { scale: 1.02, duration: 0.25, ease: "power2.out" });
        });
        hero.addEventListener("mouseleave", function() {
          gsap.to(hero, { scale: 1, duration: 0.25 });
        });
      }
    },

    runHeroAnimation: function() {
      if (typeof gsap === "undefined") return;
      var hero = document.querySelector(".shop-page-4__hero");
      var strip = document.querySelector(".shop-page-4__strip");
      if (hero) {
        gsap.fromTo(hero, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
      }
      if (strip) {
        gsap.fromTo(strip, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, delay: 0.1, ease: "power2.out" });
      }
    },
  };
}

if (typeof Alpine !== "undefined") {
  Alpine.data("shopPage4", shopPage4);
}
