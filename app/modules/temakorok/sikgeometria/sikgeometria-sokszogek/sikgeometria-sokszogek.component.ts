import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'sikgeometria-sokszogek',
    templateUrl: 'modules/temakorok/sikgeometria/sikgeometria-sokszogek/sikgeometria-sokszogek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SikgeometriaSokszogekComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
