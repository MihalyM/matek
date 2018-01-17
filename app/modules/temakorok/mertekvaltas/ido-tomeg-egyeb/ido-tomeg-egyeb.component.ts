import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'IdoTomegEgyebComponent',
    templateUrl: 'modules/temakorok/mertekvaltas/ido-tomeg-egyeb/ido-tomeg-egyeb.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdoTomegEgyebComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
