import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
import { ContactComponent } from './contact/contact.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TrigonometriaComponent } from './subjects/trigonometria/trigonometria.component';
import { PitagoraszTetelComponent } from './subjects/trigonometria/pitagorasz-tetel/pitagorasz-tetel.component';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    NativeScriptModule,
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
    SubjectsComponent,
    TrigonometriaComponent,
    PitagoraszTetelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
