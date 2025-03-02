import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      try {
        const { username, password } = this.registerForm.value;
        // Füge .admin zur E-Mail hinzu, um es als Admin-Konto zu kennzeichnen
        const email = `${username}@admin.inventorymanagement.com`;
        
        await createUserWithEmailAndPassword(this.auth, email, password);
        
        // Nach erfolgreicher Registrierung zum Login weiterleiten
        this.router.navigate(['/login']);
      } catch (error: any) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.errorMessage = 'Dieser Benutzername ist bereits vergeben.';
            break;
          case 'auth/invalid-email':
            this.errorMessage = 'Ungültiger Benutzername.';
            break;
          case 'auth/operation-not-allowed':
            this.errorMessage = 'Registrierung ist derzeit nicht möglich.';
            break;
          case 'auth/weak-password':
            this.errorMessage = 'Das Passwort ist zu schwach. Mindestens 6 Zeichen erforderlich.';
            break;
          default:
            this.errorMessage = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
        }
      }
    }
  }
} 