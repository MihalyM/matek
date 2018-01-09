import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'szamelmelet-oszthatosag',
    templateUrl: 'modules/temakorok/szamelmelet-oszthatosag/szamelmelet-oszthatosag.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzamelmeletOszthatosagComponent {
  list: Array<any> = [];
}
