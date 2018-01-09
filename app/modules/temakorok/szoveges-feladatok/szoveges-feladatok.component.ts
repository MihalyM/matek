import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'szoveges-feladatok',
    templateUrl: 'modules/temakorok/szoveges-feladatok/szoveges-feladatok.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzovegesFeladatokComponent {
  list: Array<any> = [];
}
