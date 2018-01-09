import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'statisztika-grafikon',
    templateUrl: 'modules/temakorok/statisztika-grafikon/statisztika-grafikon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisztikaGrafikonComponent {
  list: Array<any> = [];
}
