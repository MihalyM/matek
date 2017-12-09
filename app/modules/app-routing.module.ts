import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TrigonometriaComponent } from './subjects/trigonometria/trigonometria.component';
import { PitagoraszTetelComponent } from './subjects/trigonometria/pitagorasz-tetel/pitagorasz-tetel.component';
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
        path: 'subjects',
        component: SubjectsComponent,
        canActivate: [CanActivateViaAuthGuard],
        canActivateChild: [CanActivateViaAuthGuard]
      },
      { path: 'subjects/trigonometria', component: TrigonometriaComponent },
      { path: 'subjects/trigonometria/pitagorasz-tetel', component: PitagoraszTetelComponent }
    ])
  ],
  providers: [CanActivateViaAuthGuard],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
