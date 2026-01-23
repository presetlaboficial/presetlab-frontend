import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideHttpClient, withFetch } from '@angular/common/http';

const firebaseConfig = {
  apiKey: 'AIzaSyBy1LDMm_iT041ZBHwoZbQGo4_UWTNU9v8',
  authDomain: 'preset-lab.firebaseapp.com',
  projectId: 'preset-lab',
  storageBucket: 'preset-lab.firebasestorage.app',
  messagingSenderId: '731559612495',
  appId: '1:731559612495:web:57505cd181fe03ee63da3a',
  measurementId: 'G-2F2WNLQDRK',
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});
