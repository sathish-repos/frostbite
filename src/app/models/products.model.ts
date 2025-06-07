export interface Products {
  products: Product[];
}

export interface Product {
  key: string;
  name: string;
  description: string;
  rating: number;
  rating_count: number;
  ingredients: string;
  price: number;
}

export interface Review {
  key: string;
  author: string;
  date: string;
  stars: number;
  title: string;
  helpful_yes: number;
  helpful_no: number;
  text: string;
}
