import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrdctList } from '../models/prdct-list';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private mockDataUrl = 'assets/product-list.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<PrdctList[]> {
    return this.http.get<PrdctList[]>(this.mockDataUrl);
  }
}
