import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'elsofoku-egyenletek',
    templateUrl: 'modules/subjects/elsofoku-egyenletek/elsofoku-egyenletek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElsofokuEgyenletekComponent {
  list: Array<any> = [
    {
      id: 1,
      title: 'elsofoku-egyenletek',
      url: '/subjects/elsofoku-egyenletek/',
      image: 'pitagorasz-tetel.jpg'
    }
  ];
}
