import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'algebrai-kifejezesek',
    templateUrl: 'modules/temakorok/algebrai-kifejezesek/algebrai-kifejezesek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlgebraiKifejezesekComponent {
  list: Array<any> = [];
}
