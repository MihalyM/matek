"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SubjectsComponent = (function () {
    function SubjectsComponent() {
        this.subjects = [
            {
                id: 1,
                title: 'Trigonometria',
                url: '/subjects/trigonometria',
                image: 'trigonometria.png'
            },
            {
                id: 2,
                title: 'Geometria',
                url: '/subjects/geometria',
                image: 'geometria.png'
            },
            {
                id: 3,
                title: 'Halmazelmélet',
                url: '/subjects/halmazelmelet',
                image: 'halmazelmelet.png'
            },
            {
                id: 4,
                title: 'Valószínűségszámítás',
                url: '/subjects/valoszinusegszamitas',
                image: 'valoszinusegszamitas.png'
            }
        ];
    }
    return SubjectsComponent;
}());
SubjectsComponent = __decorate([
    core_1.Component({
        selector: 'subjects',
        templateUrl: 'modules/subjects/subjects.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], SubjectsComponent);
exports.SubjectsComponent = SubjectsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3ViamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBT25FLElBQWEsaUJBQWlCO0lBTDlCO1FBTUUsYUFBUSxHQUFlO1lBQ3JCO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxlQUFlO2dCQUN0QixHQUFHLEVBQUUseUJBQXlCO2dCQUM5QixLQUFLLEVBQUUsbUJBQW1CO2FBQzNCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEdBQUcsRUFBRSxxQkFBcUI7Z0JBQzFCLEtBQUssRUFBRSxlQUFlO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLEdBQUcsRUFBRSx5QkFBeUI7Z0JBQzlCLEtBQUssRUFBRSxtQkFBbUI7YUFDM0I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QixHQUFHLEVBQUUsZ0NBQWdDO2dCQUNyQyxLQUFLLEVBQUUsMEJBQTBCO2FBQ2xDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsMENBQTBDO1FBQ3ZELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2xELENBQUM7R0FDVyxpQkFBaUIsQ0EyQjdCO0FBM0JZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzdWJqZWN0cycsXG4gICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3N1YmplY3RzL3N1YmplY3RzLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdWJqZWN0c0NvbXBvbmVudCB7XG4gIHN1YmplY3RzOiBBcnJheTxhbnk+ID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6ICdUcmlnb25vbWV0cmlhJyxcbiAgICAgIHVybDogJy9zdWJqZWN0cy90cmlnb25vbWV0cmlhJyxcbiAgICAgIGltYWdlOiAndHJpZ29ub21ldHJpYS5wbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHRpdGxlOiAnR2VvbWV0cmlhJyxcbiAgICAgIHVybDogJy9zdWJqZWN0cy9nZW9tZXRyaWEnLFxuICAgICAgaW1hZ2U6ICdnZW9tZXRyaWEucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICB0aXRsZTogJ0hhbG1hemVsbcOpbGV0JyxcbiAgICAgIHVybDogJy9zdWJqZWN0cy9oYWxtYXplbG1lbGV0JyxcbiAgICAgIGltYWdlOiAnaGFsbWF6ZWxtZWxldC5wbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHRpdGxlOiAnVmFsw7NzesOtbsWxc8OpZ3N6w6Ftw610w6FzJyxcbiAgICAgIHVybDogJy9zdWJqZWN0cy92YWxvc3ppbnVzZWdzemFtaXRhcycsXG4gICAgICBpbWFnZTogJ3ZhbG9zemludXNlZ3N6YW1pdGFzLnBuZydcbiAgICB9XG4gIF07XG59XG4iXX0=