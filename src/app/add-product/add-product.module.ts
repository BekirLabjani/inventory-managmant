import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // AddProductComponent sollte hier entfernt werden, da es eine Standalone-Komponente ist
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: AddProductComponent }
    ])
  ]
})
export class AddProductModule { } 