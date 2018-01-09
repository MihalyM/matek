import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
import { ContactComponent } from './contact/contact.component';
import { TemakorokComponent } from './temakorok/temakorok.component';
import { TemakorComponent } from './temakorok/temakor.component';

import { MuveletekTermeszetesSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal/muveletek-termeszetes-szamokkal.component';
import { MuveletekEgeszSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal/muveletek-egesz-szamokkal.component';
import { MuveletekRacionalisSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal/muveletek-racionalis-szamokkal.component';

import { HosszTeruletTerfogatUrComponent } from './temakorok/mertekvaltas/hossz-terulet-terfogat-ur/hossz-terulet-terfogat-ur.component';
import { IdoTomegEgyebComponent } from './temakorok/mertekvaltas/ido-tomeg-egyeb/ido-tomeg-egyeb.component';

import { SharedModule } from './shared';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    TemakorokComponent,
    TemakorComponent,

    MuveletekTermeszetesSzamokkalComponent,
    MuveletekEgeszSzamokkalComponent,
    MuveletekRacionalisSzamokkalComponent,

    HosszTeruletTerfogatUrComponent,
    IdoTomegEgyebComponent,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
