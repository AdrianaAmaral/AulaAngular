
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    Page404Component,
        
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAssDDM-ZE0-I4TPsd7piAnOfCdoJpEFsU",
        authDomain: "conversor-moedas-cast.firebaseapp.com",
        projectId: "conversor-moedas-cast",
        storageBucket: "conversor-moedas-cast.appspot.com",
        messagingSenderId: "862594594654",
        appId: "1:862594594654:web:176e0181b26f1107afc1cf"
      }
    ), AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }