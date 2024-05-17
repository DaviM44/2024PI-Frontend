import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TelaInicialProfComponent } from './tela-inicial-prof/tela-inicial-prof.component';
import { AuthpService } from './authp.service';
import { TelaInicialAdmComponent } from './tela-inicial-adm/tela-inicial-adm.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TelaLoginAdmComponent } from './tela-login-adm/tela-login-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    NavbarComponent,
    TelaInicialProfComponent,
    TelaInicialAdmComponent,
    TelaLoginAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatCardModule
    
  ],
  providers: [AuthpService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
