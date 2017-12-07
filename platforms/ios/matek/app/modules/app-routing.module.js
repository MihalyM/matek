"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var login_component_1 = require("./login/login.component");
var subjects_component_1 = require("./subjects/subjects.component");
var trigonometria_component_1 = require("./subjects/trigonometria/trigonometria.component");
var pitagorasz_tetel_component_1 = require("./subjects/trigonometria/pitagorasz-tetel/pitagorasz-tetel.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'contact', component: contact_component_1.ContactComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'subjects', component: subjects_component_1.SubjectsComponent },
                { path: 'subjects/trigonometria', component: trigonometria_component_1.TrigonometriaComponent },
                { path: 'subjects/trigonometria/pitagorasz-tetel', component: pitagorasz_tetel_component_1.PitagoraszTetelComponent }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsb0VBQWtFO0FBQ2xFLDRGQUEwRjtBQUMxRixtSEFBZ0g7QUFnQmhILElBQWEsZ0JBQWdCO0lBQTdCO0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxnQkFBZ0I7SUFkNUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsaUNBQXdCLENBQUMsT0FBTyxDQUFDO2dCQUMvQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7Z0JBQ3RDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtnQkFDNUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtnQkFDaEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO2dCQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO2dCQUNsRCxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsZ0RBQXNCLEVBQUU7Z0JBQ3JFLEVBQUUsSUFBSSxFQUFFLHlDQUF5QyxFQUFFLFNBQVMsRUFBRSxxREFBd0IsRUFBRTthQUN6RixDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBQ1csZ0JBQWdCLENBRTVCO0FBRlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJqZWN0c0NvbXBvbmVudCB9IGZyb20gJy4vc3ViamVjdHMvc3ViamVjdHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRyaWdvbm9tZXRyaWFDb21wb25lbnQgfSBmcm9tICcuL3N1YmplY3RzL3RyaWdvbm9tZXRyaWEvdHJpZ29ub21ldHJpYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGl0YWdvcmFzelRldGVsQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJqZWN0cy90cmlnb25vbWV0cmlhL3BpdGFnb3Jhc3otdGV0ZWwvcGl0YWdvcmFzei10ZXRlbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdhYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2NvbnRhY3QnLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnc3ViamVjdHMnLCBjb21wb25lbnQ6IFN1YmplY3RzQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdzdWJqZWN0cy90cmlnb25vbWV0cmlhJywgY29tcG9uZW50OiBUcmlnb25vbWV0cmlhQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdzdWJqZWN0cy90cmlnb25vbWV0cmlhL3BpdGFnb3Jhc3otdGV0ZWwnLCBjb21wb25lbnQ6IFBpdGFnb3Jhc3pUZXRlbENvbXBvbmVudCB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XG5cbn1cbiJdfQ==