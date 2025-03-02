import { Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  // Öffentliche Routen
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  
  // Geschützte Routen
  { 
    path: 'products', 
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'add-product', 
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  
  // Fallback Route
  { path: '**', redirectTo: '/login' }
];
