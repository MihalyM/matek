"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SubjectsComponent = (function () {
    function SubjectsComponent() {
        this.subjects = [
            {
                id: 1,
                title: 'Szamolasi keszseg',
                url: '/subjects/szamolasi-keszseg',
                image: 'szamolasi-keszseg.png',
                completed: 1,
                total: 20
            },
            {
                id: 10,
                title: 'Algebrai kifejezesek',
                url: '/subjects/algebrai-kifejezesek',
                image: 'trigonometria.png',
                completed: 8,
                total: 20
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3ViamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBT25FLElBQWEsaUJBQWlCO0lBTDlCO1FBTUUsYUFBUSxHQUFlO1lBQ3JCO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLEdBQUcsRUFBRSw2QkFBNkI7Z0JBQ2xDLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCLFNBQVMsRUFBRSxDQUFDO2dCQUNaLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QixHQUFHLEVBQUUsZ0NBQWdDO2dCQUNyQyxLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixTQUFTLEVBQUUsQ0FBQztnQkFDWixLQUFLLEVBQUUsRUFBRTthQUNWO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsMENBQTBDO1FBQ3ZELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2xELENBQUM7R0FDVyxpQkFBaUIsQ0FtQjdCO0FBbkJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzdWJqZWN0cycsXG4gICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3N1YmplY3RzL3N1YmplY3RzLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdWJqZWN0c0NvbXBvbmVudCB7XG4gIHN1YmplY3RzOiBBcnJheTxhbnk+ID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6ICdTemFtb2xhc2kga2VzenNlZycsXG4gICAgICB1cmw6ICcvc3ViamVjdHMvc3phbW9sYXNpLWtlc3pzZWcnLFxuICAgICAgaW1hZ2U6ICdzemFtb2xhc2kta2VzenNlZy5wbmcnLFxuICAgICAgY29tcGxldGVkOiAxLFxuICAgICAgdG90YWw6IDIwXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTAsXG4gICAgICB0aXRsZTogJ0FsZ2VicmFpIGtpZmVqZXplc2VrJyxcbiAgICAgIHVybDogJy9zdWJqZWN0cy9hbGdlYnJhaS1raWZlamV6ZXNlaycsXG4gICAgICBpbWFnZTogJ3RyaWdvbm9tZXRyaWEucG5nJyxcbiAgICAgIGNvbXBsZXRlZDogOCxcbiAgICAgIHRvdGFsOiAyMFxuICAgIH1cbiAgXTtcbn1cbiJdfQ==