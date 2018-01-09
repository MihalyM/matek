import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'felszin-terfogat',
    templateUrl: 'modules/temakorok/felszin-terfogat/felszin-terfogat.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FelszinTerfogatComponent {
  list: Array<any> = [];
}
