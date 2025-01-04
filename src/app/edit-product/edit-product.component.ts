import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { PrdctList } from '../models/prdct-list';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  imports: [CommonModule, MatFormFieldModule, MatButtonModule, FormsModule,HttpClientModule]
})
export class EditProductComponent implements OnInit {
  ngOnInit(): void {
      
  }

}
