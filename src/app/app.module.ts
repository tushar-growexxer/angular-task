import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingService} from "./app-routing.service";
import {AuthService} from "./login/auth.service";
import {ContactModule} from "./contacts/contact.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingService,
    ContactModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
