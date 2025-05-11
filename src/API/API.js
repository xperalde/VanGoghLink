const STORAGE_KEY = 'ne-ugadaesh';

export async function fetchProducts() {
  const existing = localStorage.getItem(STORAGE_KEY);
  
  if (existing) {
    return JSON.parse(existing);
  }

  const res = await fetch('/products.json');
  if (!res.ok) {
    throw new Error(`Ошибка загрузки данных: ${res.status}`);
  }

  const products = await res.json();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  return products;
}

// export function clearProductsStorage() {
//   localStorage.removeItem(STORAGE_KEY);
// }