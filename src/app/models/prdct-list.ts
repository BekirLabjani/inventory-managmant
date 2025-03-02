export interface PrdctList {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  discountPrice?: number | null;
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
  expirationDate: string; // Kann zu Date geändert werden, falls gewünscht
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

  // Neue Felder für Nährwerte:
  calories: number; // kcal pro 100g/ml oder pro Portion
  nutritionalValues: {
    protein: number; // in g
    carbohydrates: number; // in g
    sugar: number; // in g
    fat: number; // in g
    saturatedFat: number; // in g
    fiber: number; // in g
    salt: number; // in g
  };
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
