import { Injectable } from '@angular/core';  
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class AppService {  
  private temakorok_: Array<any> = [
    {
      id: 1,
      title: 'Számolási készség',
      url: '/temakorok/szamolasi-keszseg',
      image: 'szamolasi-keszseg.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 101,
          title: 'Műveletek természetes számokkal',
          url: '/temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal',
          completed: 0,
          total: 10,
        },
        {
          id: 102,
          title: 'Műveletek egész számokkal',
          url: '/temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal',
          completed: 0,
          total: 5,
        },
        {
          id: 103,
          title: 'Műveletek racionális számokkal',
          url: '/temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal',
          completed: 0,
          total: 5,
        }
      ]
    },
    {
      id: 2,
      title: 'Mértékváltás',
      url: '/temakorok/mertekvaltas',
      image: 'mertekvaltas.png',
      completed: 0,
      total: 15,
      temak: [
        {
          id: 201,
          title: 'Hosszúság, terület és térfogat mérése, űrmérték',
          url: '/temakorok/mertekvaltas/hossz-terulet-terfogat-ur',
          completed: 0,
          total: 10,
        },
        {
          id: 202,
          title: 'Idő, tömeg, egyéb átváltások',
          url: '/temakorok/mertekvaltas/ido-tomeg-egyeb',
          completed: 0,
          total: 5,
        }
      ]
    },
    {
      id: 3,
      title: 'Halmazok, logika és kombinatorika',
      url: '/temakorok/halmazok-logika-kombinatorika',
      image: 'halmazok-logika-kombinatorika.png',
      completed: 0,
      total: 20
    },
    {
      id: 4,
      title: 'Statisztika és grafikonelemzés',
      url: '/temakorok/statisztika-grafikon',
      image: 'statisztika-grafikon.png',
      completed: 0,
      total: 20
    },
    {
      id: 5,
      title: 'Számhalmazok és műveletek, hatványozás',
      url: '/temakorok/szamhalmazok-hatvanyozas',
      image: 'szamhalmazok-hatvanyozas.png',
      completed: 0,
      total: 20
    },
    {
      id: 6,
      title: 'Számsorozatok és a számtani sorozat',
      url: '/temakorok/sorozatok',
      image: 'sorozatok.png',
      completed: 0,
      total: 20
    },
    {
      id: 7,
      title: 'Arányosság, százalékszámítás',
      url: '/temakorok/aranyossag-szazalek',
      image: 'aranyossag-szazalek.png',
      completed: 0,
      total: 20
    },
    {
      id: 8,
      title: 'Számelmélet, összetett oszthatósági feladatok',
      url: '/temakorok/szamelmelet-oszthatosag',
      image: 'szamelmelet-oszthatosag.png',
      completed: 0,
      total: 20
    },
    {
      id: 9,
      title: 'Tájékozódás a koordinátarendszerben és a lineáris függvények',
      url: '/temakorok/koordinata-linearis-fuggvenyek',
      image: 'koordinata-linearis-fuggvenyek.png',
      completed: 0,
      total: 20
    },
    {
      id: 10,
      title: 'Algebrai kifejezések',
      url: '/temakorok/algebrai-kifejezesek',
      image: 'algebrai-kifejezesek.png',
      completed: 0,
      total: 20
    },
    {
      id: 11,
      title: 'Elsőfokú egyenletek, egyenlőtlenségek',
      url: '/temakorok/elsofoku-egyenletek',
      image: 'elsofoku-egyenletek.png',
      completed: 0,
      total: 20
    },
    {
      id: 12,
      title: 'Szöveges feladatok',
      url: '/temakorok/szoveges-feladatok',
      image: 'szoveges-feladatok.png',
      completed: 0,
      total: 20
    },
    {
      id: 13,
      title: 'Síkgeometria és egybevágósági transzformációk',
      url: '/temakorok/sikgeometria',
      image: 'sikgeometria.png',
      completed: 0,
      total: 20
    },
    {
      id: 14,
      title: 'Kerület és terület számítása, Pitagorasz tétele',
      url: '/temakorok/kerulet-terulet-pitagorasz',
      image: 'kerulet-terulet-pitagorasz.png',
      completed: 0,
      total: 20
    },
    {
      id: 15,
      title: 'Térbeli alakzatok, felszín és térfogat számítása',
      url: '/temakorok/felszin-terfogat',
      image: 'felszin-terfogat.png',
      completed: 0,
      total: 20
    }
  ];
  private configSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public config: Observable<any> = this.configSubject.asObservable();
  private temakorokSubject: BehaviorSubject<any> = new BehaviorSubject(this.temakorok_);
  public temakorok: Observable<any> = this.temakorokSubject.asObservable();
  private temakorokInternal;

  constructor() {
    this.temakorok.subscribe((next) => {
      this.temakorokInternal = next;
    })
  }

  getSubject(url: string): any {
    return this.temakorokInternal
      .filter(tema => tema.url === url)[0];
  }

  getTopic(url: string): any {
    const urlSegments = url.split('/');
    urlSegments.pop();
    const temakorUrl = urlSegments.join('/');

    return this.temakorokInternal
      .filter(tema => tema.url === temakorUrl)[0].temak
      .filter(t => t.url === url)[0];
  }

  /*
    TODO:: should set subjects on localStorage if not present
  */

  setPoints(path) {
    // sets points on topic
    // updates subject points
  }
}
