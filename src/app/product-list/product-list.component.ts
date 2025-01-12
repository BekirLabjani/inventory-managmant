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
  constructor(private productService: ProductService) {}
  products: any[] = []; // Array, um die Produkte zu speichern

  product = {
    id: 2001,
    name: 'Evian',
    description: 'Natürliches Mineralwasser',
    brand: 'Evian',
    price: 1.50,
    quantity: 100,
    stockQuantity: 100,
    minimumStockLevel: 10,
    category: 'Drinks',
    subcategory: 'Whater',
  };


  ngOnInit(): void {
    this.loadProducts();
  }

  // Produkte laden
  async loadProducts() {
    try {
      this.products = await this.productService.getProductsFromSubcategory('water');
      console.log('Products loaded:', this.products);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  addProduct() {
    this.productService
      .addProductToSubcategory('water', this.product)
      .then(() => {
        console.log('Product added successfully to water!');
      })
      .catch((error) => {
        console.error('Error adding product: ', error);
      });
  }

  
  
}