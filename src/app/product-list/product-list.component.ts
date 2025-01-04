import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PrdctList } from '../models/prdct-list';
import { Route, Router } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent  {

}