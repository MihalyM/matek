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
      total: 20,
      temak: [
        {
          id: 301,
          title: 'Halmaz, logika',
          url: '/temakorok/halmazok-logika-kombinatorika/halmaz-logika',
          completed: 0,
          total: 10
        },
        {
          id: 302,
          title: 'Kombinatorika',
          url: '/temakorok/halmazok-logika-kombinatorika/kombinatorika',
          completed: 0,
          total: 10
        }
      ]
    },
    {
      id: 4,
      title: 'Statisztika és grafikonelemzés',
      url: '/temakorok/statisztika-grafikon',
      image: 'statisztika-grafikon.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 401,
          title: 'Statisztika',
          url: '/temakorok/statisztika-grafikon/statisztika',
          completed: 0,
          total: 10,
        },
        {
          id: 402,
          title: 'Grafikonelemzés',
          url: '/temakorok/statisztika-grafikon/grafikonelemzes',
          completed: 0,
          total: 10,
        }
      ]
    },
    {
      id: 5,
      title: 'Számhalmazok és műveletek, hatványozás',
      url: '/temakorok/szamhalmazok-hatvanyozas',
      image: 'szamhalmazok-hatvanyozas.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 501,
          title: 'Számhalmazok',
          url: '/temakorok/szamhalmazok-hatvanyozas/szamhalmazok',
          completed: 0,
          total: 10,
        },
        {
          id: 502,
          title: 'Számhalmaz műveletek',
          url: '/temakorok/szamhalmazok-hatvanyozas/szamhalmaz-muveletek',
          completed: 0,
          total: 5,
        },
        {
          id: 503,
          title: 'Hatványozás',
          url: '/temakorok/szamhalmazok-hatvanyozas/hatvanyozas',
          completed: 0,
          total: 5,
        }
      ]
    },
    {
      id: 6,
      title: 'Számsorozatok és a számtani sorozat',
      url: '/temakorok/sorozatok',
      image: 'sorozatok.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 601,
          title: 'Sorozatok',
          url: '/temakorok/sorozatok/szamsorozatok',
          completed: 0,
          total: 15,
        },
        {
          id: 602,
          title: 'Számtani sorozatok',
          url: '/temakorok/sorozatok/szamtani-sorozatok',
          completed: 0,
          total: 5,
        }
      ]
    },
    {
      id: 7,
      title: 'Arányosság, százalékszámítás',
      url: '/temakorok/aranyossag-szazalek',
      image: 'aranyossag-szazalek.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 701,
          title: 'Alapfogalmak',
          url: '/temakorok/aranyossag-szazalek/arany-szazalek-alapfogalmak',
          completed: 0,
          total: 5,
        },
        {
          id: 702,
          title: 'Szövegértelmezés',
          url: '/temakorok/aranyossag-szazalek/szovegertelmezes',
          completed: 0,
          total: 5,
        },
        {
          id: 703,
          title: 'Százalékszámítás',
          url: '/temakorok/aranyossag-szazalek/szazalekszamitas',
          completed: 0,
          total: 5,
        },
        {
          id: 704,
          title: 'Fordított arányosság',
          url: '/temakorok/aranyossag-szazalek/forditott-aranyossag',
          completed: 0,
          total: 5,
        }
      ]
    },
    {
      id: 8,
      title: 'Számelmélet, összetett oszthatósági feladatok',
      url: '/temakorok/szamelmelet-oszthatosag',
      image: 'szamelmelet-oszthatosag.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 801,
          title: 'Osztó, többszörös, oszthatósági szabályok',
          url: '/temakorok/szamelmelet-oszthatosag/oszto-tobbszoros',
          completed: 0,
          total: 10,
        },
        {
          id: 802,
          title: 'Számelmélet alaptétele, legnagyobb közös osztó, legkisebb közös többszörös',
          url: '/temakorok/szamelmelet-oszthatosag/legnagyobb-legkisebb',
          completed: 0,
          total: 10,
        }
      ]
    },
    {
      id: 9,
      title: 'Tájékozódás a koordinátarendszerben és a lineáris függvények',
      url: '/temakorok/koordinata-linearis-fuggvenyek',
      image: 'koordinata-linearis-fuggvenyek.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 901,
          title: 'Tájékozódás a koordinátarendszerben',
          url: '/temakorok/koordinata-linearis-fuggvenyek/tajekozodas-koordinatarendszerben',
          completed: 0,
          total: 5,
        },
        {
          id: 902,
          title: 'Lineáris függvények',
          url: '/temakorok/koordinata-linearis-fuggvenyek/linearis-fuggvenyek',
          completed: 0,
          total: 15,
        }
      ]
    },
    {
      id: 10,
      title: 'Algebrai kifejezések',
      url: '/temakorok/algebrai-kifejezesek',
      image: 'algebrai-kifejezesek.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 1001,
          title: 'Algebrai kifejezések',
          url: '/temakorok/algebrai-kifejezesek/algebrai-kifejezesek',
          completed: 0,
          total: 15,
        },
        {
          id: 1002,
          title: 'Műveletek algebrai kifejezésekkel',
          url: '/temakorok/algebrai-kifejezesek/muveletek-algebrai-kifejezesekkel',
          completed: 0,
          total: 5,
        }
      ]
    },
    {
      id: 11,
      title: 'Elsőfokú egyenletek, egyenlőtlenségek',
      url: '/temakorok/elsofoku-egyenletek',
      image: 'elsofoku-egyenletek.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 1101,
          title: 'Elsőfokú egyenletek',
          url: '/temakorok/elsofoku-egyenletek/elsofoku-egyenletek',
          completed: 0,
          total: 5,
        },
        {
          id: 1102,
          title: 'Elsőfokú egyenlőtlenségek',
          url: '/temakorok/elsofoku-egyenletek/elsofoku-egyenlotlensegek',
          completed: 0,
          total: 15,
        }
      ]
    },
    {
      id: 12,
      title: 'Szöveges feladatok',
      url: '/temakorok/szoveges-feladatok',
      image: 'szoveges-feladatok.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 1201,
          title: 'Szöveges feladatokról általában, keveréses feladatok, mozgásos feladatok',
          url: '/temakorok/szoveges-feladatok/szoveges-altalanos',
          completed: 0,
          total: 15,
        },
        {
          id: 1202,
          title: 'Számjegyes, életkoros, munkavégzéses, vegyes feladatok',
          url: '/temakorok/szoveges-feladatok/szoveges-vegyes',
          completed: 0,
          total: 5,
        }
      ]
    },
    {
      id: 13,
      title: 'Síkgeometria és egybevágósági transzformációk',
      url: '/temakorok/sikgeometria',
      image: 'sikgeometria.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 1301,
          title: 'Síkgeometria alapfogalmak',
          url: '/temakorok/sikgeometria/sikgeometria-alapfogalmak',
          completed: 0,
          total: 5,
        },
        {
          id: 1302,
          title: 'Háromszögek',
          url: '/temakorok/sikgeometria/sikgeometria-haromszogek',
          completed: 0,
          total: 5,
        },
        {
          id: 1303,
          title: 'Négyszögek, sokszögek, kör',
          url: '/temakorok/sikgeometria/sikgeometria-sokszogek',
          completed: 0,
          total: 5,
        },
        {
          id: 1304,
          title: 'Egybevágósági transzformációk',
          url: '/temakorok/sikgeometria/sikgeometria-egybevagosag',
          completed: 0,
          total: 5,
        }
      ]
    },
    {
      id: 14,
      title: 'Kerület és terület számítása, Pitagorasz tétele',
      url: '/temakorok/kerulet-terulet-pitagorasz',
      image: 'kerulet-terulet-pitagorasz.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 1401,
          title: 'Kerület',
          url: '/temakorok/kerulet-terulet-pitagorasz/kerulet',
          completed: 0,
          total: 10,
        },
        {
          id: 1402,
          title: 'Terület',
          url: '/temakorok/kerulet-terulet-pitagorasz/terulet',
          completed: 0,
          total: 10,
        }
      ]
    },
    {
      id: 15,
      title: 'Térbeli alakzatok, felszín és térfogat számítása',
      url: '/temakorok/felszin-terfogat',
      image: 'felszin-terfogat.png',
      completed: 0,
      total: 20,
      temak: [
        {
          id: 1501,
          title: 'Térbeli alakzatok, felszín és térfogat számítása alapfogalmak',
          url: '/temakorok/felszin-terfogat/felszin-terfogat-alapfogalmak',
          completed: 0,
          total: 5,
        },
        {
          id: 1502,
          title: 'Testek felszíne',
          url: '/temakorok/felszin-terfogat/testek-felszine',
          completed: 0,
          total: 10,
        },
        {
          id: 1503,
          title: 'Testek térfogata',
          url: '/temakorok/felszin-terfogat/testek-terfogata',
          completed: 0,
          total: 5,
        }
      ]
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
