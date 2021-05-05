import { State, Action, StateContext } from '@ngxs/store';
import { NavController } from '@ionic/angular';
import { NgZone, Injectable } from '@angular/core';
import { NavigateRoot, NavigateForward, NavigateBackward, NavigateBack } from './ionic-router.actions';

export interface IonicRouterStateModel {
  path?: any;
}

@State<IonicRouterStateModel>({
  name: 'ionicRouter',
  defaults: {
    path: undefined,
  },
})
@Injectable()
export class IonicRouterState {
  constructor(private navCtrl: NavController, private ngZone: NgZone) {}

  @Action(NavigateRoot)
  navigateRoot(context: StateContext<IonicRouterStateModel>, action: NavigateRoot) {
    this.ngZone.run(() => this.navCtrl.navigateRoot(action.path, action.options));
    context.setState({ path: action.path });
  }

  @Action(NavigateForward)
  navigateForward(context: StateContext<IonicRouterStateModel>, action: NavigateForward) {
    this.ngZone.run(() => this.navCtrl.navigateForward(action.path, action.options));
    context.setState({ path: action.path });
  }

  @Action(NavigateBackward)
  navigateBack(context: StateContext<IonicRouterStateModel>, action: NavigateBackward) {
    this.ngZone.run(() => this.navCtrl.navigateBack(action.path, action.options));
    context.setState({ path: action.path });
  }

  @Action(NavigateBack)
  goBack(context: StateContext<IonicRouterStateModel>, action: NavigateBack) {
    this.ngZone.run(() => this.navCtrl.back(action.options));
    context.setState({ path: null });
  }
}
