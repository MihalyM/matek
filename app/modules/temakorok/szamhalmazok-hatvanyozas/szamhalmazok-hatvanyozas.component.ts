import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'szamhalmazok-hatvanyozas',
    templateUrl: 'modules/temakorok/szamhalmazok-hatvanyozas/szamhalmazok-hatvanyozas.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzamhalmazokHatvanyozasComponent {
  list: Array<any> = [];
}
