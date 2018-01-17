import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'muveletek-termeszetes-szamokkal',
    templateUrl: 'modules/temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal/muveletek-termeszetes-szamokkal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuveletekTermeszetesSzamokkalComponent  extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
