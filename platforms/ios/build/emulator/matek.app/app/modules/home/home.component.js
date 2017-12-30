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
            account = {
                subjects: [
                    {
                        id: 1,
                        title: 'Trigonometria',
                        url: '/subjects/trigonometria',
                        image: 'trigonometria.png',
                        completed: 1,
                        total: 16
                    },
                    {
                        id: 2,
                        title: 'Geometria',
                        url: '/subjects/geometria',
                        image: 'geometria.png',
                        completed: 4,
                        total: 10
                    },
                    {
                        id: 3,
                        title: 'Halmazelmélet',
                        url: '/subjects/halmazelmelet',
                        image: 'halmazelmelet.png',
                        completed: 10,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSxzREFBK0Q7QUFDL0QsMERBQTREO0FBUzVELElBQWEsYUFBYTtJQUV4Qix1QkFBMkIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBRXZELGdDQUFRLEdBQVI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTyxHQUFHO2dCQUNSLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxFQUFFLEVBQUUsQ0FBQzt3QkFDTCxLQUFLLEVBQUUsZUFBZTt3QkFDdEIsR0FBRyxFQUFFLHlCQUF5Qjt3QkFDOUIsS0FBSyxFQUFFLG1CQUFtQjt3QkFDMUIsU0FBUyxFQUFFLENBQUM7d0JBQ1osS0FBSyxFQUFFLEVBQUU7cUJBQ1Y7b0JBQ0Q7d0JBQ0UsRUFBRSxFQUFFLENBQUM7d0JBQ0wsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLEdBQUcsRUFBRSxxQkFBcUI7d0JBQzFCLEtBQUssRUFBRSxlQUFlO3dCQUN0QixTQUFTLEVBQUUsQ0FBQzt3QkFDWixLQUFLLEVBQUUsRUFBRTtxQkFDVjtvQkFDRDt3QkFDRSxFQUFFLEVBQUUsQ0FBQzt3QkFDTCxLQUFLLEVBQUUsZUFBZTt3QkFDdEIsR0FBRyxFQUFFLHlCQUF5Qjt3QkFDOUIsS0FBSyxFQUFFLG1CQUFtQjt3QkFDMUIsU0FBUyxFQUFFLEVBQUU7d0JBQ2IsS0FBSyxFQUFFLEVBQUU7cUJBQ1Y7b0JBQ0Q7d0JBQ0UsRUFBRSxFQUFFLENBQUM7d0JBQ0wsS0FBSyxFQUFFLHNCQUFzQjt3QkFDN0IsR0FBRyxFQUFFLGdDQUFnQzt3QkFDckMsS0FBSyxFQUFFLDBCQUEwQjt3QkFDakMsU0FBUyxFQUFFLEVBQUU7d0JBQ2IsS0FBSyxFQUFFLEVBQUU7cUJBQ1Y7aUJBQ0Y7YUFDRixDQUFDO1lBQ0YsMEVBQTBFO1lBQzFFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDO0FBL0NZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1FBQzlDLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FHbUMseUJBQWdCO0dBRnhDLGFBQWEsQ0ErQ3pCO0FBL0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IENvbXBpbGVBbmltYXRpb25Hcm91cE1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgc3R5bGVVcmxzOiBbJ21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgYWNjb3VudDtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBhY2NvdW50ID0gSlNPTi5wYXJzZShBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcImFjY291bnRcIiwgXCJ7fVwiKSk7XG4gICAgaWYgKGFjY291bnQgJiYgYWNjb3VudC5lbWFpbCkge1xuICAgICAgYWNjb3VudCA9IHtcbiAgICAgICAgc3ViamVjdHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHRpdGxlOiAnVHJpZ29ub21ldHJpYScsXG4gICAgICAgICAgICB1cmw6ICcvc3ViamVjdHMvdHJpZ29ub21ldHJpYScsXG4gICAgICAgICAgICBpbWFnZTogJ3RyaWdvbm9tZXRyaWEucG5nJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogMSxcbiAgICAgICAgICAgIHRvdGFsOiAxNlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICB0aXRsZTogJ0dlb21ldHJpYScsXG4gICAgICAgICAgICB1cmw6ICcvc3ViamVjdHMvZ2VvbWV0cmlhJyxcbiAgICAgICAgICAgIGltYWdlOiAnZ2VvbWV0cmlhLnBuZycsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IDQsXG4gICAgICAgICAgICB0b3RhbDogMTBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgdGl0bGU6ICdIYWxtYXplbG3DqWxldCcsXG4gICAgICAgICAgICB1cmw6ICcvc3ViamVjdHMvaGFsbWF6ZWxtZWxldCcsXG4gICAgICAgICAgICBpbWFnZTogJ2hhbG1hemVsbWVsZXQucG5nJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogMTAsXG4gICAgICAgICAgICB0b3RhbDogMTJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgdGl0bGU6ICdWYWzDs3N6w61uxbFzw6lnc3rDoW3DrXTDoXMnLFxuICAgICAgICAgICAgdXJsOiAnL3N1YmplY3RzL3ZhbG9zemludXNlZ3N6YW1pdGFzJyxcbiAgICAgICAgICAgIGltYWdlOiAndmFsb3N6aW51c2Vnc3phbWl0YXMucG5nJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogMjAsXG4gICAgICAgICAgICB0b3RhbDogMjBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH07XG4gICAgICAvLyBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjY291bnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5hY2NvdW50KSk7XG4gICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgIH1cbiAgfVxufVxuIl19