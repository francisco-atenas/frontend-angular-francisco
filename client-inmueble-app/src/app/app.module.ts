import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '@src/environments/environment';
import { PopupsModule } from './shared/popups';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndicatorsModule } from './shared/indicators';

import { NotificationModule } from './services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase.config)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    IndicatorsModule,
    BrowserAnimationsModule,
    PopupsModule,
    NotificationModule.forRoot(), // Initialize NotificationModule with forRoot
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
