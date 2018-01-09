import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'koordinata-linearis-fuggvenyek',
    templateUrl: 'modules/temakorok/koordinata-linearis-fuggvenyek/koordinata-linearis-fuggvenyek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KoordinataLinearisFuggvenyekComponent {
  list: Array<any> = [];
}
