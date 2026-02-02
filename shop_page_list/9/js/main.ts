// mvp - 시안 9: 비대칭 + 포커스 이동
declare const Alpine: { data: (n: string, f: () => object) => void };
declare const gsap: { fromTo: (el: Element, a: object, b: object) => void };
const products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/520x325/1c1e22/6b7280?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/520x325/1c1e22/6b7280?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/520x325/1c1e22/6b7280?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/520x325/1c1e22/6b7280?text=4" },
];
function shopPage9() {
  return {
    selectedId: 1,
    products,
    cart: [] as number[],
    get selected() {
      return this.products.find((p: { id: number }) => p.id === this.selectedId) || this.products[0];
    },
    init() {
      if (typeof gsap !== "undefined") {
        const m = document.querySelector(".shop-page-9__main");
        const s = document.querySelector(".shop-page-9__side");
        if (m) gsap.fromTo(m, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" });
        if (s) gsap.fromTo(s, { opacity: 0, x: 16 }, { opacity: 1, x: 0, duration: 0.4, delay: 0.08, ease: "power2.out" });
      }
    },
    setFocus(id: number) {
      if (this.selectedId === id) return;
      this.selectedId = id;
      if (typeof gsap !== "undefined") {
        const h = document.querySelector(".product-hero-9");
        if (h) gsap.fromTo(h, { opacity: 0.85, y: 6 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
      }
    },
    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const b = document.querySelector(".product-hero-9 .btn-9--primary");
        if (b) gsap.fromTo(b, { scale: 1.06 }, { scale: 1, duration: 0.25, ease: "power2.out" });
      }
    },
  };
}
if (typeof Alpine !== "undefined") Alpine.data("shopPage9", shopPage9);
