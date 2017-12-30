"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var subjects_component_1 = require("./subjects/subjects.component");
var algebrai_kifejezesek_component_1 = require("./subjects/algebrai-kifejezesek/algebrai-kifejezesek.component");
var guards_1 = require("./shared/guards");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot([
                {
                    path: '',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'about',
                    component: about_component_1.AboutComponent
                },
                {
                    path: 'contact',
                    component: contact_component_1.ContactComponent
                },
                {
                    path: 'login',
                    component: login_component_1.LoginComponent
                },
                {
                    path: "register",
                    component: register_component_1.RegisterComponent
                },
                {
                    path: 'subjects',
                    component: subjects_component_1.SubjectsComponent,
                    canActivate: [guards_1.CanActivateViaAuthGuard],
                    canActivateChild: [guards_1.CanActivateViaAuthGuard]
                },
                { path: 'subjects/algebrai-kifejezesek', component: algebrai_kifejezesek_component_1.AlgebraiKifejezesekComponent },
                { path: 'subjects/algebrai-kifejezesek/', component: algebrai_kifejezesek_component_1.AlgebraiKifejezesekComponent }
            ])
        ],
        providers: [guards_1.CanActivateViaAuthGuard],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsb0VBQWtFO0FBQ2xFLG9FQUFrRTtBQUNsRSxpSEFBOEc7QUFDOUcsMENBQTBEO0FBc0MxRCxJQUFhLGdCQUFnQjtJQUE3QjtJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksZ0JBQWdCO0lBcEM1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUM7Z0JBQy9CO29CQUNFLElBQUksRUFBRSxFQUFFO29CQUNSLFNBQVMsRUFBRSw4QkFBYTtpQkFDekI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsU0FBUyxFQUFFLGdDQUFjO2lCQUMxQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsU0FBUztvQkFDZixTQUFTLEVBQUUsb0NBQWdCO2lCQUM1QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixTQUFTLEVBQUUsZ0NBQWM7aUJBQzFCO2dCQUNEO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixTQUFTLEVBQUUsc0NBQWlCO2lCQUM3QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsU0FBUyxFQUFFLHNDQUFpQjtvQkFDNUIsV0FBVyxFQUFFLENBQUMsZ0NBQXVCLENBQUM7b0JBQ3RDLGdCQUFnQixFQUFFLENBQUMsZ0NBQXVCLENBQUM7aUJBQzVDO2dCQUNELEVBQUUsSUFBSSxFQUFFLCtCQUErQixFQUFFLFNBQVMsRUFBRSw2REFBNEIsRUFBRTtnQkFDbEYsRUFBRSxJQUFJLEVBQUUsZ0NBQWdDLEVBQUUsU0FBUyxFQUFFLDZEQUE0QixFQUFFO2FBQ3BGLENBQUM7U0FDSDtRQUNELFNBQVMsRUFBRSxDQUFDLGdDQUF1QixDQUFDO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxnQkFBZ0IsQ0FFNUI7QUFGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViamVjdHNDb21wb25lbnQgfSBmcm9tICcuL3N1YmplY3RzL3N1YmplY3RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGdlYnJhaUtpZmVqZXplc2VrQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJqZWN0cy9hbGdlYnJhaS1raWZlamV6ZXNlay9hbGdlYnJhaS1raWZlamV6ZXNlay5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGVWaWFBdXRoR3VhcmQgfSBmcm9tICcuL3NoYXJlZC9ndWFyZHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnYWJvdXQnLFxuICAgICAgICBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnY29udGFjdCcsXG4gICAgICAgIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2xvZ2luJyxcbiAgICAgICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJyZWdpc3RlclwiLFxuICAgICAgICBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50XG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgcGF0aDogJ3N1YmplY3RzJyxcbiAgICAgICAgY29tcG9uZW50OiBTdWJqZWN0c0NvbXBvbmVudCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDYW5BY3RpdmF0ZVZpYUF1dGhHdWFyZF0sXG4gICAgICAgIGNhbkFjdGl2YXRlQ2hpbGQ6IFtDYW5BY3RpdmF0ZVZpYUF1dGhHdWFyZF1cbiAgICAgIH0sXG4gICAgICB7IHBhdGg6ICdzdWJqZWN0cy9hbGdlYnJhaS1raWZlamV6ZXNlaycsIGNvbXBvbmVudDogQWxnZWJyYWlLaWZlamV6ZXNla0NvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnc3ViamVjdHMvYWxnZWJyYWkta2lmZWplemVzZWsvJywgY29tcG9uZW50OiBBbGdlYnJhaUtpZmVqZXplc2VrQ29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBwcm92aWRlcnM6IFtDYW5BY3RpdmF0ZVZpYUF1dGhHdWFyZF0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xuXG59XG4iXX0=