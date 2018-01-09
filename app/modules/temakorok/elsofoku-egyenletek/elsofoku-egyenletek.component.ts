import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'elsofoku-egyenletek',
    templateUrl: 'modules/temakorok/elsofoku-egyenletek/elsofoku-egyenletek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElsofokuEgyenletekComponent {
  list: Array<any> = [];
}
