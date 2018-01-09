import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'halmazok-logika-kombinatorika',
    templateUrl: 'modules/temakorok/halmazok-logika-kombinatorika/halmazok-logika-kombinatorika.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HalmazokLogikaKombinatorikaComponent {
  list: Array<any> = [];
}
