import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TrigonometriaComponent } from './subjects/trigonometria/trigonometria.component';
import { PitagoraszTetelComponent } from './subjects/trigonometria/pitagorasz-tetel/pitagorasz-tetel.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'subjects/trigonometria', component: TrigonometriaComponent },
      { path: 'subjects/trigonometria/pitagorasz-tetel', component: PitagoraszTetelComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
