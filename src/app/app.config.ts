import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

// Firebase Importe hinzufügen
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(), // HttpClient bereitstellen
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "food-online-shop",
        appId: "1:1006773721511:web:4cd8788c2f57100f2b3e82",
        storageBucket: "food-online-shop.firebasestorage.app",
        apiKey: "AIzaSyCEFTmoq0PUqsSgi0k9S1XRPfMueIRIsVg",
        authDomain: "food-online-shop.firebaseapp.com",
        messagingSenderId: "1006773721511",
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
