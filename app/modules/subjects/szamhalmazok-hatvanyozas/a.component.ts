import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'trigonometria',
    templateUrl: 'modules/subjects/trigonometria/trigonometria.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrigonometriaComponent {
  list: Array<any> = [
    {
      id: 1,
      title: 'Pitagorasz tétel',
      url: '/subjects/trigonometria/pitagorasz-tetel',
      image: 'pitagorasz-tetel.jpg'
    }
  ];
}
