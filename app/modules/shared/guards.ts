import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as ApplicationSettings from "application-settings";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(
  ) {}

  canActivate() {
    if (ApplicationSettings.getBoolean("authenticated", true)) {
      return true;
    } else {
      return false;
    }
  }
}