import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'kerulet-terulet-pitagorasz',
    templateUrl: 'modules/temakorok/kerulet-terulet-pitagorasz/kerulet-terulet-pitagorasz.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeruletTeruletPitagoraszComponent {
  list: Array<any> = [];
}
