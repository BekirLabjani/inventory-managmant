export interface PrdctList {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  discountPrice?: number | null; // null als erlaubter Wert hinzugefügt
  priceToTray?: number | null;
  pricePerKg: number;
  tax: number;
  package: string;
  volume: string;
  image: string;
  quantity: number;
  stockQuantity: number;
  minimumStockLevel: number;
  reorderQuantity: number;
  expirationDate: string;
  isAvailable: boolean;
  sizes: string[];
  flavors: string[];
  allergens: string[];
  promotions?: string | null;
  newArrival?: boolean;
  bestseller?: boolean;
  ecoFriendly?: boolean;
  recyclingInfo: string;
  category?: string;
  subcategory?: string;
}



export interface Subcategory {
  id: number;
  subcategoryName: string;
}

export interface Category {
  id: number;
  categoryName: string;
  subcategories: Subcategory[];
}
