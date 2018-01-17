import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'szazalekszamitas',
    templateUrl: 'modules/temakorok/aranyossag-szazalek/szazalekszamitas/szazalekszamitas.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzazalekszamitasComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
