import { Injectable } from '@angular/core';  
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class appService {  
  private configSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public config: Observable<any> = this.configSubject.asObservable();

  account = {
    subjects: [
      {
        id: 1,
        title: 'Trigonometria',
        url: '/subjects/trigonometria',
        image: 'trigonometria.png',
        list: [
          {
            id: 11,
            title: 'Pitagorasz tétel',
            url: '/subjects/trigonometria/pitagorasz-tetel',
            image: 'pitagorasz-tetel.jpg'
          },
          {
            id: 12,
            title: 'Masik tétel',
            url: '/subjects/trigonometria/masik-tetel',
            image: 'pitagorasz-tetel.jpg'
          },
          {
            id: 13,
            title: 'Harmadik tétel',
            url: '/subjects/trigonometria/harmadik-tetel',
            image: 'pitagorasz-tetel.jpg'
          }
        ]
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
    ]
  };
}