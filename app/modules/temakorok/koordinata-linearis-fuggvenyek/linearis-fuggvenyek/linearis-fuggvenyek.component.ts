import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'linearis-fuggvenyek',
    templateUrl: 'modules/temakorok/koordinata-linearis-fuggvenyek/linearis-fuggvenyek/linearis-fuggvenyek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinearisFuggvenyekComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
