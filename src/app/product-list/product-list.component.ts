import { Component, OnInit } from '@angular/core';
import { Firestore, collection, query, where, getDocs, collectionGroup, doc } from '@angular/fire/firestore';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PrdctList } from '../models/prdct-list';
import { Route, Router } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductService } from '../service/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule, CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private firestore: Firestore) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  async loadProducts() {
    try {
      // Hole die Referenz zum all-Dokument
      const categoryDocRef = doc(this.firestore, 'products', 'all');
      
      // Hole die Produkte aus der items-Unterkollektion
      const productsCollectionRef = collection(categoryDocRef, 'items');
      const querySnapshot = await getDocs(productsCollectionRef);
      
      this.products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        path: `products/all/items/${doc.id}`,
        ...doc.data()
      }));

      console.log('Produkte geladen:', this.products);
    } catch (error) {
      console.error('Fehler beim Laden der Produkte:', error);
    }
  }
}