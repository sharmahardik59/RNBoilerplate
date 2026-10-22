export interface ProductsData {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: [];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string | undefined;
  title: string;
}

export interface HomeData extends ProductsData {
  products: Array<HomeData>;
}
