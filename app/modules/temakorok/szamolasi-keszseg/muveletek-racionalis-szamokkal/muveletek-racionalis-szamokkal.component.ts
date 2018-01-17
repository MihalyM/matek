import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'muveletek-racionalis-szamokkal',
    templateUrl: 'modules/temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal/muveletek-racionalis-szamokkal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuveletekRacionalisSzamokkalComponent  extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
