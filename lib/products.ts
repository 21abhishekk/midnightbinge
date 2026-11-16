export type Product = { id: string; slug: string; name: string; category: "Makhana" | "Chips" | "Nuts"; price: number; mrp?: number; weight: string; blurb: string; color: string; rating?: number; reviewCount?: number };
export const products: Product[] = [
  { id: "makhana", slug: "makhana", name: "Makhana", category: "Makhana", price: 140, weight: "55 g", blurb: "Crunchy Roasted Foxnuts", color: "#E0B25A" },
  { id: "cripso", slug: "cripso", name: "Cripso", category: "Chips", price: 60, weight: "50 g", blurb: "High-protein snack with 10g of protein per pack", color: "#E8553D" },
];
export const discountPercent = (p: Product) => (p.mrp && p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0);
export const bySlug = (s: string) => products.find((p) => p.slug === s);
export const byId = (id: string) => products.find((p) => p.id === id);
