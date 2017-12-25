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
      image: 'trigonometria.png',
      completed: 8,
      total: 20
    },
    {
      id: 2,
      title: 'Geometria',
      url: '/subjects/geometria',
      image: 'geometria.png',
      completed: 1,
      total: 20
    },
    {
      id: 3,
      title: 'Halmazelmélet',
      url: '/subjects/halmazelmelet',
      image: 'halmazelmelet.png',
      completed: 14,
      total: 20
    },
    {
      id: 4,
      title: 'Valószínűségszámítás',
      url: '/subjects/valoszinusegszamitas',
      image: 'valoszinusegszamitas.png',
      completed: 20,
      total: 20
    }
  ];
}
