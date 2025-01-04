import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PrdctList } from '../models/prdct-list';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { collection, Firestore, query, where, getDocs, addDoc } from '@angular/fire/firestore';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatButtonModule, FormsModule, MatInputModule, MatOption, MatSelectModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  
  
}
