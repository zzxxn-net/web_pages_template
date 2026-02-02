// mvp - 시안 8: 단일 포커스 + GSAP 부드러운 전환
declare const Alpine: { data: (n: string, f: () => Record<string, unknown>) => void };
declare const gsap: { fromTo: (el: Element, from: object, to: object) => void; to: (el: Element, to: object) => void };

const products = [
  { id: 1, name: "Product 1", price: "₩29,000", img: "https://placehold.co/420x315/2c2825/78716c?text=1" },
  { id: 2, name: "Product 2", price: "₩39,000", img: "https://placehold.co/420x315/2c2825/78716c?text=2" },
  { id: 3, name: "Product 3", price: "₩49,000", img: "https://placehold.co/420x315/2c2825/78716c?text=3" },
  { id: 4, name: "Product 4", price: "₩19,000", img: "https://placehold.co/420x315/2c2825/78716c?text=4" },
];

function shopPage8() {
  return {
    selectedId: 1,
    products,
    cart: [] as number[],
    get selected() {
      return this.products.find((p: { id: number }) => p.id === this.selectedId) || this.products[0];
    },
    init() {
      if (typeof gsap !== "undefined") {
        const focus = document.querySelector(".shop-page-8__focus");
        const list = document.querySelector(".shop-page-8__list");
        if (focus) gsap.fromTo(focus, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
        if (list) gsap.fromTo(list, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "power2.out" });
      }
    },
    setFocus(id: number) {
      if (this.selectedId === id) return;
      this.selectedId = id;
      if (typeof gsap !== "undefined") {
        const panel = document.querySelector(".shop-page-8__focus");
        if (panel) gsap.fromTo(panel, { opacity: 0.7, y: 8 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
      }
    },
    addToCart(id: number) {
      if (!this.cart.includes(id)) this.cart.push(id);
      if (typeof gsap !== "undefined") {
        const btn = document.querySelector(".shop-page-8__focus .btn-8--primary");
        if (btn) gsap.fromTo(btn, { scale: 1.08 }, { scale: 1, duration: 0.25, ease: "power2.out" });
      }
    },
  };
}
if (typeof Alpine !== "undefined") Alpine.data("shopPage8", shopPage8);
