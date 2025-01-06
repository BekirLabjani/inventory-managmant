import { Component, OnInit } from '@angular/core';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PrdctList } from '../models/prdct-list';
import { Route, Router } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductService } from '../service/product.service';




@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  
  products: any[] = [];
  products$ = this.productService.getProducts('drinks', 'softdrinks');

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts('drinks', 'softdrinks').subscribe({
      next: (data) => {
        this.products = data; // Produkte laden
        console.log('Geladene Produkte:', this.products);
      },
      error: (err) => {
        console.error('Fehler beim Laden der Produkte:', err);
      },
    });
  }


  addProduct() {
    const product = {
      name: 'Coca-Cola',
      price: 1.2,
      stockQuantity: 50,
      expirationDate: '2025-01-01',
    };
    this.productService.addProduct('drinks', 'softdrinks', 'coca-cola', product).then(() => {
      console.log('Produkt hinzugefügt!');
    });
  }
}