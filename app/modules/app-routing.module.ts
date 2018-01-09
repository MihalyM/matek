import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TemakorokComponent } from './temakorok/temakorok.component';
import { TemakorComponent } from './temakorok/temakor.component';

import { MuveletekTermeszetesSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal/muveletek-termeszetes-szamokkal.component';
import { MuveletekEgeszSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal/muveletek-egesz-szamokkal.component';
import { MuveletekRacionalisSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal/muveletek-racionalis-szamokkal.component';

import { HosszTeruletTerfogatUrComponent } from './temakorok/mertekvaltas/hossz-terulet-terfogat-ur/hossz-terulet-terfogat-ur.component';
import { IdoTomegEgyebComponent } from './temakorok/mertekvaltas/ido-tomeg-egyeb/ido-tomeg-egyeb.component';

import { CanActivateViaAuthGuard } from './shared/guards';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      { 
        path: 'temakorok',
        component: TemakorokComponent,
        canActivate: [CanActivateViaAuthGuard],
        canActivateChild: [CanActivateViaAuthGuard]
      },
      { path: 'temakorok/:id', component: TemakorComponent },
      { path: 'temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal', component: MuveletekTermeszetesSzamokkalComponent },
      { path: 'temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal', component: MuveletekEgeszSzamokkalComponent },
      { path: 'temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal', component: MuveletekRacionalisSzamokkalComponent },

      { path: 'temakorok/mertekvaltas/hossz-terulet-terfogat-ur', component: HosszTeruletTerfogatUrComponent },
      { path: 'temakorok/mertekvaltas/ido-tomeg-egyeb', component: IdoTomegEgyebComponent },
    ])
  ],
  providers: [CanActivateViaAuthGuard],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
