import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'algebrai-kifejezesek',
    templateUrl: 'modules/subjects/algebrai-kifejezesek/algebrai-kifejezesek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlgebraiKifejezesekComponent {
  list: Array<any> = [
    {
      id: 1,
      title: 'Műveletek természetes számokkal',
      url: '/subjects/algebrai-kifejezesek/',
      image: 'pitagorasz-tetel.jpg'
    },
    {
      id: 2,
      title: 'Műveletek egész számokkal',
      url: '/subjects/algebrai-kifejezesek/',
      image: 'pitagorasz-tetel.jpg'
    },
    {
      id: 3,
      title: 'Műveletek racionális számokkal',
      url: '/subjects/algebrai-kifejezesek/',
      image: 'pitagorasz-tetel.jpg'
    }
  ];
}
