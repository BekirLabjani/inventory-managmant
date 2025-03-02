import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  private readonly EMAIL_DOMAIN = '@admin.inventorymanagement.com';

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        const { username, password } = this.loginForm.value;
        const email = username + this.EMAIL_DOMAIN;
        await signInWithEmailAndPassword(this.auth, email, password);
        
        // Nach erfolgreichem Login zur Produktliste navigieren
        this.router.navigate(['/products']);
      } catch (error: any) {
        switch (error.code) {
          case 'auth/user-not-found':
            this.errorMessage = 'Kein Benutzer mit diesem Benutzernamen gefunden.';
            break;
          case 'auth/wrong-password':
            this.errorMessage = 'Falsches Passwort.';
            break;
          case 'auth/invalid-email':
            this.errorMessage = 'Ungültiger Benutzername.';
            break;
          case 'auth/user-disabled':
            this.errorMessage = 'Dieser Account wurde deaktiviert.';
            break;
          case 'auth/too-many-requests':
            this.errorMessage = 'Zu viele Anmeldeversuche. Bitte versuchen Sie es später erneut.';
            break;
          default:
            this.errorMessage = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
            console.error('Login error:', error);
        }
      }
    }
  }
}
