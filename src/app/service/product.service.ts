import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, getDocs, collectionData, doc, setDoc } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { PrdctList } from '../models/prdct-list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private firestore: Firestore) {}

  getCollectionData(collectionName: string): Observable<any[]> {
    const collectionRef = collection(this.firestore, collectionName);
    return collectionData(collectionRef, { idField: 'id' });
  }

  async addProduct(product: PrdctList) {
    try {
      // Erstelle eine Referenz zum Kategorie-Dokument
      const categoryDocRef = doc(this.firestore, 'products', 'all');
      
      // Erstelle die Produkt-Collection innerhalb des Kategorie-Dokuments
      const productsCollectionRef = collection(categoryDocRef, 'items');
      
      // Füge das Produkt zur Unterkollektion hinzu
      const docRef = await addDoc(productsCollectionRef, {
        ...product,
        createdAt: new Date().getTime()
      });
      
      return docRef.id;
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Produkts:', error);
      throw error;
    }
  }
}