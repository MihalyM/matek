import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'sorozatok',
    templateUrl: 'modules/temakorok/sorozatok/sorozatok.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SorozatokComponent {
  list: Array<any> = [];
}
