import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'aranyossag-szazalek',
    templateUrl: 'modules/temakorok/aranyossag-szazalek/aranyossag-szazalek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AranyossagSzazalekComponent {
  list: Array<any> = [];
}
