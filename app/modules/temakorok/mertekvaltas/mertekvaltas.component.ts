import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'mertekvaltas',
    templateUrl: 'modules/temakorok/mertekvaltas/mertekvaltas.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MertekvaltasComponent {
  list: Array<any> = [];
}
