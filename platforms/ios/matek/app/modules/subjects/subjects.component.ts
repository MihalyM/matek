import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'subjects',
    templateUrl: 'modules/subjects/subjects.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectsComponent {
  subjects: Array<any> = [
    {
      id: 1,
      title: 'Trigonometria',
      url: '/subjects/trigonometria',
      image: 'trigonometria.png'
    },
    {
      id: 2,
      title: 'Geometria',
      url: '/subjects/geometria',
      image: 'geometria.png'
    },
    {
      id: 3,
      title: 'Halmazelmélet',
      url: '/subjects/halmazelmelet',
      image: 'halmazelmelet.png'
    },
    {
      id: 4,
      title: 'Valószínűségszámítás',
      url: '/subjects/valoszinusegszamitas',
      image: 'valoszinusegszamitas.png'
    }
  ];
}
