import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      brand: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      discountPrice: [null],
      priceToTray: [null],
      volume: ['', Validators.required],
      stockQuantity: ['', [Validators.required, Validators.min(0)]],
      minimumStockLevel: [0],
      reorderQuantity: [0],
      category: ['', Validators.required],
      subcategory: [''],
      package: [''],
      tax: [19],
      image: [''],
      expirationDate: [''],
      isAvailable: [true],
      sizes: [''],
      flavors: [''],
      allergens: [''],
      promotions: [''],
      newArrival: [false],
      bestseller: [false],
      ecoFriendly: [false],
      recyclingInfo: [''],
      nutritionalValues: this.fb.group({
        calories: [0],
        protein: [0],
        carbohydrates: [0],
        sugar: [0],
        fat: [0],
        saturatedFat: [0],
        fiber: [0],
        salt: [0]
      })
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    if (this.productForm.valid) {
      try {
        // Konvertiere String-Arrays
        const formValue = this.productForm.value;
        formValue.sizes = formValue.sizes ? formValue.sizes.split(',').map((s: string) => s.trim()) : [];
        formValue.flavors = formValue.flavors ? formValue.flavors.split(',').map((f: string) => f.trim()) : [];
        formValue.allergens = formValue.allergens ? formValue.allergens.split(',').map((a: string) => a.trim()) : [];

        const productData = {
          ...formValue,
          pricePerKg: this.calculatePricePerKg(formValue.price, formValue.volume)
        };
        
        await this.productService.addProduct(productData);
        alert('Produkt wurde erfolgreich hinzugefügt!');
        this.resetForm();
      } catch (error) {
        console.error('Fehler beim Hinzufügen des Produkts:', error);
        alert('Fehler beim Hinzufügen des Produkts. Bitte versuchen Sie es erneut.');
      }
    }
  }

  resetForm() {
    this.productForm.reset({
      isAvailable: true,
      tax: 19,
      newArrival: false,
      bestseller: false,
      ecoFriendly: false,
      nutritionalValues: {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        sugar: 0,
        fat: 0,
        saturatedFat: 0,
        fiber: 0,
        salt: 0
      }
    });
  }

  private calculatePricePerKg(price: number, volume: string): number {
    const match = volume.match(/[\d.]+/);
    if (!match) return 0;
    
    const volumeNumber = parseFloat(match[0]);
    if (volumeNumber <= 0) return 0;

    return price / volumeNumber;
  }
}