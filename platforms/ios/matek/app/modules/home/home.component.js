"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ApplicationSettings = require("application-settings");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var account = JSON.parse(ApplicationSettings.getString("account", "{}"));
        if (account && account.email) {
            account.progress = {
                subjects: [
                    {
                        id: 1,
                        title: 'Trigonometria',
                        url: '/subjects/trigonometria',
                        image: 'trigonometria.png',
                        completed: 12,
                        total: 16
                    },
                    {
                        id: 2,
                        title: 'Geometria',
                        url: '/subjects/geometria',
                        image: 'geometria.png',
                        completed: 3,
                        total: 10
                    },
                    {
                        id: 3,
                        title: 'Halmazelmélet',
                        url: '/subjects/halmazelmelet',
                        image: 'halmazelmelet.png',
                        completed: 0,
                        total: 12
                    },
                    {
                        id: 4,
                        title: 'Valószínűségszámítás',
                        url: '/subjects/valoszinusegszamitas',
                        image: 'valoszinusegszamitas.png',
                        completed: 20,
                        total: 20
                    }
                ]
            };
            // ApplicationSettings.setString("account", JSON.stringify(this.account));
            this.account = account;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        styleUrls: ['modules/home/home.component.css'],
        templateUrl: 'modules/home/home.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSxzREFBK0Q7QUFDL0QsMERBQTREO0FBUzVELElBQWEsYUFBYTtJQUV4Qix1QkFBMkIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBRXZELGdDQUFRLEdBQVI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLFFBQVEsR0FBRztnQkFDakIsUUFBUSxFQUFFO29CQUNSO3dCQUNFLEVBQUUsRUFBRSxDQUFDO3dCQUNMLEtBQUssRUFBRSxlQUFlO3dCQUN0QixHQUFHLEVBQUUseUJBQXlCO3dCQUM5QixLQUFLLEVBQUUsbUJBQW1CO3dCQUMxQixTQUFTLEVBQUUsRUFBRTt3QkFDYixLQUFLLEVBQUUsRUFBRTtxQkFDVjtvQkFDRDt3QkFDRSxFQUFFLEVBQUUsQ0FBQzt3QkFDTCxLQUFLLEVBQUUsV0FBVzt3QkFDbEIsR0FBRyxFQUFFLHFCQUFxQjt3QkFDMUIsS0FBSyxFQUFFLGVBQWU7d0JBQ3RCLFNBQVMsRUFBRSxDQUFDO3dCQUNaLEtBQUssRUFBRSxFQUFFO3FCQUNWO29CQUNEO3dCQUNFLEVBQUUsRUFBRSxDQUFDO3dCQUNMLEtBQUssRUFBRSxlQUFlO3dCQUN0QixHQUFHLEVBQUUseUJBQXlCO3dCQUM5QixLQUFLLEVBQUUsbUJBQW1CO3dCQUMxQixTQUFTLEVBQUUsQ0FBQzt3QkFDWixLQUFLLEVBQUUsRUFBRTtxQkFDVjtvQkFDRDt3QkFDRSxFQUFFLEVBQUUsQ0FBQzt3QkFDTCxLQUFLLEVBQUUsc0JBQXNCO3dCQUM3QixHQUFHLEVBQUUsZ0NBQWdDO3dCQUNyQyxLQUFLLEVBQUUsMEJBQTBCO3dCQUNqQyxTQUFTLEVBQUUsRUFBRTt3QkFDYixLQUFLLEVBQUUsRUFBRTtxQkFDVjtpQkFDRjthQUNGLENBQUM7WUFDRiwwRUFBMEU7WUFDMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7QUEvQ1ksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7UUFDOUMsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO3FDQUdtQyx5QkFBZ0I7R0FGeEMsYUFBYSxDQStDekI7QUEvQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQ29tcGlsZUFuaW1hdGlvbkdyb3VwTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvbWUnLFxuICBzdHlsZVVybHM6IFsnbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBhY2NvdW50O1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGFjY291bnQgPSBKU09OLnBhcnNlKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWNjb3VudFwiLCBcInt9XCIpKTtcbiAgICBpZiAoYWNjb3VudCAmJiBhY2NvdW50LmVtYWlsKSB7XG4gICAgICBhY2NvdW50LnByb2dyZXNzID0ge1xuICAgICAgICBzdWJqZWN0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6ICdUcmlnb25vbWV0cmlhJyxcbiAgICAgICAgICAgIHVybDogJy9zdWJqZWN0cy90cmlnb25vbWV0cmlhJyxcbiAgICAgICAgICAgIGltYWdlOiAndHJpZ29ub21ldHJpYS5wbmcnLFxuICAgICAgICAgICAgY29tcGxldGVkOiAxMixcbiAgICAgICAgICAgIHRvdGFsOiAxNlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICB0aXRsZTogJ0dlb21ldHJpYScsXG4gICAgICAgICAgICB1cmw6ICcvc3ViamVjdHMvZ2VvbWV0cmlhJyxcbiAgICAgICAgICAgIGltYWdlOiAnZ2VvbWV0cmlhLnBuZycsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IDMsXG4gICAgICAgICAgICB0b3RhbDogMTBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgdGl0bGU6ICdIYWxtYXplbG3DqWxldCcsXG4gICAgICAgICAgICB1cmw6ICcvc3ViamVjdHMvaGFsbWF6ZWxtZWxldCcsXG4gICAgICAgICAgICBpbWFnZTogJ2hhbG1hemVsbWVsZXQucG5nJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogMCxcbiAgICAgICAgICAgIHRvdGFsOiAxMlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICB0aXRsZTogJ1ZhbMOzc3rDrW7FsXPDqWdzesOhbcOtdMOhcycsXG4gICAgICAgICAgICB1cmw6ICcvc3ViamVjdHMvdmFsb3N6aW51c2Vnc3phbWl0YXMnLFxuICAgICAgICAgICAgaW1hZ2U6ICd2YWxvc3ppbnVzZWdzemFtaXRhcy5wbmcnLFxuICAgICAgICAgICAgY29tcGxldGVkOiAyMCxcbiAgICAgICAgICAgIHRvdGFsOiAyMFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfTtcbiAgICAgIC8vIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWNjb3VudFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFjY291bnQpKTtcbiAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgfVxuICB9XG59XG4iXX0=