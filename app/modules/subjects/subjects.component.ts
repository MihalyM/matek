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
      title: 'Szamolasi keszseg',
      url: '/subjects/szamolasi-keszseg',
      image: 'szamolasi-keszseg.png',
      completed: 1,
      total: 20
    },
    {
      id: 10,
      title: 'Algebrai kifejezesek',
      url: '/subjects/algebrai-kifejezesek',
      image: 'trigonometria.png',
      completed: 8,
      total: 20
    }
  ];
}
