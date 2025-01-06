import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, collection, collectionData } from '@angular/fire/firestore';
import { getDocs, query } from 'firebase/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private firestore: Firestore) {}

  // Kategorie hinzufügen
  async addCategory(categoryId: string, categoryName: string) {
    const categoryDoc = doc(this.firestore, `products/${categoryId}`);
    await setDoc(categoryDoc, { category: categoryName });
  }

  // Unterkategorie hinzufügen
  async addSubcategory(categoryId: string, subcategoryId: string, subcategoryName: string) {
    const subcategoryDoc = doc(this.firestore, `products/${categoryId}/subcategory/${subcategoryId}`);
    await setDoc(subcategoryDoc, { subcategory: subcategoryName });
  }

  // Produkt hinzufügen
  async addProduct(categoryId: string, subcategoryId: string, productId: string, productData: any) {
    const productDoc = doc(
      this.firestore,
      `products/${categoryId}/subcategory/${subcategoryId}/product/${productId}`
    );
    await setDoc(productDoc, productData);
  }

  // Produkte abrufen
  getProducts(categoryId: string, subcategoryId: string): Observable<any[]> {
    const productsRef = collection(
      this.firestore,
      `products/${categoryId}/subcategory/${subcategoryId}/product`
    ); // Referenz zur Unterkollektion
    return collectionData(productsRef, { idField: 'id' }); // Ruft die Daten direkt ab
  }
}
  
