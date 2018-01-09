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

// import { SzamolasiKeszsegComponent } from './temakorok/szamolasi-keszseg/szamolasi-keszseg.component';
import { MuveletekTermeszetesSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal/muveletek-termeszetes-szamokkal.component';
import { MuveletekEgeszSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal/muveletek-egesz-szamokkal.component';
import { MuveletekRacionalisSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal/muveletek-racionalis-szamokkal.component';

// import { MertekvaltasComponent } from './temakorok/mertekvaltas/mertekvaltas.component';
// import { HalmazokLogikaKombinatorikaComponent } from './temakorok/halmazok-logika-kombinatorika/halmazok-logika-kombinatorika.component';
// import { StatisztikaGrafikonComponent } from './temakorok/statisztika-grafikon/statisztika-grafikon.component';
// import { SzamhalmazokHatvanyozasComponent } from './temakorok/szamhalmazok-hatvanyozas/szamhalmazok-hatvanyozas.component';
// import { SorozatokComponent } from './temakorok/sorozatok/sorozatok.component';
// import { AranyossagSzazalekComponent } from './temakorok/aranyossag-szazalek/aranyossag-szazalek.component';
// import { SzamelmeletOszthatosagComponent } from './temakorok/szamelmelet-oszthatosag/szamelmelet-oszthatosag.component';
// import { KoordinataLinearisFuggvenyekComponent } from './temakorok/koordinata-linearis-fuggvenyek/koordinata-linearis-fuggvenyek.component';
// import { AlgebraiKifejezesekComponent } from './temakorok/algebrai-kifejezesek/algebrai-kifejezesek.component';
// import { ElsofokuEgyenletekComponent } from './temakorok/elsofoku-egyenletek/elsofoku-egyenletek.component';
// import { SzovegesFeladatokComponent } from './temakorok/szoveges-feladatok/szoveges-feladatok.component';
// import { SikgeometriaComponent } from './temakorok/sikgeometria/sikgeometria.component';
// import { KeruletTeruletPitagoraszComponent } from './temakorok/kerulet-terulet-pitagorasz/kerulet-terulet-pitagorasz.component';
// import { FelszinTerfogatComponent } from './temakorok/felszin-terfogat/felszin-terfogat.component';

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

    // SzamolasiKeszsegComponent,
    MuveletekTermeszetesSzamokkalComponent,
    MuveletekEgeszSzamokkalComponent,
    MuveletekRacionalisSzamokkalComponent,

    // MertekvaltasComponent,
    // HalmazokLogikaKombinatorikaComponent,
    // StatisztikaGrafikonComponent,
    // SzamhalmazokHatvanyozasComponent,
    // SorozatokComponent,
    // AranyossagSzazalekComponent,
    // SzamelmeletOszthatosagComponent,
    // KoordinataLinearisFuggvenyekComponent,
    // AlgebraiKifejezesekComponent,
    // ElsofokuEgyenletekComponent,
    // SzovegesFeladatokComponent,
    // SikgeometriaComponent,
    // KeruletTeruletPitagoraszComponent,
    // FelszinTerfogatComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
