export class Product {
  id?: number;
  categoryId?: number;
  name?: string;
  price?: number;

  constructor({ id, categoryId, name, price }) {
    this.id = id ?? null;
    this.categoryId = categoryId ?? null;
    this.name = name ?? null;
    this.price = price ?? null;
  }
}
