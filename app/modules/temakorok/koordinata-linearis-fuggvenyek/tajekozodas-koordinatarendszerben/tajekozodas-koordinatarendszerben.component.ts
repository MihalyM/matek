import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'tajekozodas-koordinatarendszerben',
    templateUrl: 'modules/temakorok/koordinata-linearis-fuggvenyek/tajekozodas-koordinatarendszerben/tajekozodas-koordinatarendszerben.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TajekozodasKoordinatarendszerbenComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
