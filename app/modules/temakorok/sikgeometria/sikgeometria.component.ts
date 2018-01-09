import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'sikgeometria',
    templateUrl: 'modules/temakorok/sikgeometria/sikgeometria.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SikgeometriaComponent {
  list: Array<any> = [];
}
