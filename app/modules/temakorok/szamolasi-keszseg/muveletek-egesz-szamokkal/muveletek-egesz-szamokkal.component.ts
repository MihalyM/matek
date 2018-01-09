import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'muveletek-egesz-szamokkal',
    templateUrl: 'modules/temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal/muveletek-egesz-szamokkal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuveletekEgeszSzamokkalComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
