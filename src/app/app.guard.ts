import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { appConfig } from './app.config';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardAfterLogin implements CanActivate {
  constructor(private navController: NavController) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuth();
  }

  async checkAuth() {
    return Storage.get({ key: appConfig.storageKeys.token })
      .then((res) => !!res.value)
      .then((isExist) => {
        if (isExist) {
          return true;
        }
        this.navController.navigateRoot(appConfig.routes.auth.login);
        return false;
      });
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuardBeforeLogin implements CanActivate {
  constructor(private navController: NavController) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuth();
  }

  async checkAuth() {
    return Storage.get({ key: appConfig.storageKeys.token })
      .then((res) => !!res.value)
      .then((isExist) => {
        if (isExist) {
          this.navController.navigateRoot('/tabs/tab1');
          return false;
        }
        return true;
      });
  }
}
