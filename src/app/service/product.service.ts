import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, getDocs, collectionData } from '@angular/fire/firestore'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private firestore: Firestore) {}

  
  async checkIfProductExists(subcategory: string, productId: number): Promise<boolean> {
    const productsCollection = collection(
      this.firestore,
      `products/drinks/subcategory/${subcategory}/products`
    );
    const q = query(productsCollection, where('id', '==', productId));
    const snapshot = await getDocs(q);
    return !snapshot.empty; // Gibt `true` zurück, wenn das Produkt existiert
  }

  // Produkt zu einer Unterkategorie hinzufügen
  addProductToSubcategory(subcategory: string, product: any) {
    const productsCollection = collection(
      this.firestore,
      `products/drinks/subcategory/${subcategory}/products`
    );
    return addDoc(productsCollection, product);
  }

  async getProductsFromSubcategory(subcategory: string): Promise<any[]> {
    const productsCollection = collection(
      this.firestore,
      `products/drinks/subcategory/${subcategory}/products`
    );
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }


  getFilteredProducts(subcategory: string, priceLimit: number): Observable<any[]> {
    const productsCollection = collection(
      this.firestore,
      `products/drinks/subcategory/${subcategory}/products`
    );
    const q = query(productsCollection, where('price', '<=', priceLimit));
    return collectionData(q, { idField: 'id' });
  }
  }
  
  
