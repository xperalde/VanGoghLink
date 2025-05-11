const STORAGE_KEY = 'ne-ugadaesh';

const mockProducts = [
  {
    image: "./Image/Vstraiv.svg",
    name: "Встраиваемый светильник Markt",
    price: 3490,
    hasDiscount: true,
    discountPrice: 5060
  },
  {
    image: "./Image/Lin.svg",
    name: "Линейный светильник ARG",
    price: 3490,
    hasDiscount: false,
    discountPrice: 0
  },
  {
    image: "./Image/Svetod.svg",
    name: "Светодиодный светильник",
    price: 5060,
    hasDiscount: true,
    discountPrice: 6060
  },
  {
    image: "./Image/Vstraiv.svg",
    name: "Встраиваемый светильник Markt",
    price: 3490,
    hasDiscount: false,
    discountPrice: 0
  },
  {
    image: "./Image/Lin.svg",
    name: "Линейный светильник ARG",
    price: 6700,
    hasDiscount: true,
    discountPrice: 7060
  },
  {
    image: "./Image/Svetod.svg",
    name: "Светодиодный светильник",
    price: 5060,
    hasDiscount: false,
    discountPrice: 0
  },
  {
    image: "./Image/Vstraiv.svg",
    name: "Встраиваемый светильник Markt",
    price: 3490,
    hasDiscount: true,
    discountPrice: 7060
  },
  {
    image: "./Image/Lin.svg",
    name: "Линейный светильник ARG",
    price: 6700,
    hasDiscount: false,
    discountPrice: 0
  }
];

export async function fetchProducts() {
  const existing = localStorage.getItem(STORAGE_KEY);

  if (existing) {
    return JSON.parse(existing);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(mockProducts));
  return mockProducts;
}
