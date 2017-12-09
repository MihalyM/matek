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
var trigonometria_component_1 = require("./subjects/trigonometria/trigonometria.component");
var pitagorasz_tetel_component_1 = require("./subjects/trigonometria/pitagorasz-tetel/pitagorasz-tetel.component");
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
                { path: 'subjects/trigonometria', component: trigonometria_component_1.TrigonometriaComponent },
                { path: 'subjects/trigonometria/pitagorasz-tetel', component: pitagorasz_tetel_component_1.PitagoraszTetelComponent }
            ])
        ],
        providers: [guards_1.CanActivateViaAuthGuard],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsb0VBQWtFO0FBQ2xFLG9FQUFrRTtBQUNsRSw0RkFBMEY7QUFDMUYsbUhBQWdIO0FBQ2hILDBDQUEwRDtBQXNDMUQsSUFBYSxnQkFBZ0I7SUFBN0I7SUFFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLGdCQUFnQjtJQXBDNUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsaUNBQXdCLENBQUMsT0FBTyxDQUFDO2dCQUMvQjtvQkFDRSxJQUFJLEVBQUUsRUFBRTtvQkFDUixTQUFTLEVBQUUsOEJBQWE7aUJBQ3pCO2dCQUNEO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLFNBQVMsRUFBRSxnQ0FBYztpQkFDMUI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsU0FBUyxFQUFFLG9DQUFnQjtpQkFDNUI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsU0FBUyxFQUFFLGdDQUFjO2lCQUMxQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsU0FBUyxFQUFFLHNDQUFpQjtpQkFDN0I7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFNBQVMsRUFBRSxzQ0FBaUI7b0JBQzVCLFdBQVcsRUFBRSxDQUFDLGdDQUF1QixDQUFDO29CQUN0QyxnQkFBZ0IsRUFBRSxDQUFDLGdDQUF1QixDQUFDO2lCQUM1QztnQkFDRCxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsZ0RBQXNCLEVBQUU7Z0JBQ3JFLEVBQUUsSUFBSSxFQUFFLHlDQUF5QyxFQUFFLFNBQVMsRUFBRSxxREFBd0IsRUFBRTthQUN6RixDQUFDO1NBQ0g7UUFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBdUIsQ0FBQztRQUNwQyxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBQ1csZ0JBQWdCLENBRTVCO0FBRlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YmplY3RzQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJqZWN0cy9zdWJqZWN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJpZ29ub21ldHJpYUNvbXBvbmVudCB9IGZyb20gJy4vc3ViamVjdHMvdHJpZ29ub21ldHJpYS90cmlnb25vbWV0cmlhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaXRhZ29yYXN6VGV0ZWxDb21wb25lbnQgfSBmcm9tICcuL3N1YmplY3RzL3RyaWdvbm9tZXRyaWEvcGl0YWdvcmFzei10ZXRlbC9waXRhZ29yYXN6LXRldGVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZVZpYUF1dGhHdWFyZCB9IGZyb20gJy4vc2hhcmVkL2d1YXJkcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdhYm91dCcsXG4gICAgICAgIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdjb250YWN0JyxcbiAgICAgICAgY29tcG9uZW50OiBDb250YWN0Q29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInJlZ2lzdGVyXCIsXG4gICAgICAgIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBwYXRoOiAnc3ViamVjdHMnLFxuICAgICAgICBjb21wb25lbnQ6IFN1YmplY3RzQ29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0NhbkFjdGl2YXRlVmlhQXV0aEd1YXJkXSxcbiAgICAgICAgY2FuQWN0aXZhdGVDaGlsZDogW0NhbkFjdGl2YXRlVmlhQXV0aEd1YXJkXVxuICAgICAgfSxcbiAgICAgIHsgcGF0aDogJ3N1YmplY3RzL3RyaWdvbm9tZXRyaWEnLCBjb21wb25lbnQ6IFRyaWdvbm9tZXRyaWFDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3N1YmplY3RzL3RyaWdvbm9tZXRyaWEvcGl0YWdvcmFzei10ZXRlbCcsIGNvbXBvbmVudDogUGl0YWdvcmFzelRldGVsQ29tcG9uZW50IH1cbiAgICBdKVxuICBdLFxuICBwcm92aWRlcnM6IFtDYW5BY3RpdmF0ZVZpYUF1dGhHdWFyZF0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xuXG59XG4iXX0=