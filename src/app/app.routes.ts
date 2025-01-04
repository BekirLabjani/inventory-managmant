import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent }, // Startseite
  { path: 'add-product', component: AddProductComponent }, // Produkt hinzufügen
  { path: 'edit-product/:id', component: EditProductComponent }, // Produkt bearbeiten
  { path: '**', redirectTo: '' } // Fallback
];
