import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AuthAction } from './auth-guard.actions';
import { AuthStateModel } from './auth-guard.models';

@State<AuthStateModel>({
  name: 'auth_guard',
  defaults: {
    isAuth: false,
    accessToken: '',
    refreshToken: '',
  },
})
@Injectable()
export class AuthGuardState {
  @Action(AuthAction.Login)
  login(context: StateContext<AuthAction.Login>) {
    const state = context.getState();
    context.setState({
      ...state,
      isAuth: true,
    });
  }

  @Action(AuthAction.Logout)
  logout(context: StateContext<AuthAction.Logout>) {
    const state = context.getState();
    context.setState({
      ...state,
      isAuth: false,
    });
  }
}
