import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'aranyossag-szazalek',
    templateUrl: 'modules/subjects/aranyossag-szazalek/aranyossag-szazalek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AranyossagSzazalekComponent {
  list: Array<any> = [
    {
      id: 1,
      title: 'aranyossag-szazalek',
      url: '/subjects/aranyossag-szazalek/',
      image: 'pitagorasz-tetel.jpg'
    }
  ];
}
