import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthAction } from '../../core/auth-guard/auth-guard.actions';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  constructor(private store: Store) {}

  onLogout() {
    this.store.dispatch(new AuthAction.Logout());
  }
}
