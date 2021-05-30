import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { AddBadgeAction, RemoveBadgeAction } from '../../tabs.state';
import { AddCountryLikeAction, RemoveCountryLikeAction } from './favorites.actions';
import { FavoritesStateModel } from './favorites.model';

export const initialState: FavoritesStateModel = {
  listData: [],
  isLoading: false,
  isFailed: false,
  isSuccess: false,
  error: null,
};

export const FAVORITES_STATE_TOKEN = new StateToken<FavoritesStateModel>('favorites');

@State({
  name: FAVORITES_STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class FaviritesState {
  constructor() {}

  @Action(AddCountryLikeAction)
  addCountryLikeAction(ctx: StateContext<FavoritesStateModel>, action: AddCountryLikeAction) {
    const state = ctx.getState();

    const index = state.listData.indexOf(action.alpha3Code);
    if (index > -1) {
      return;
    }

    ctx.setState({
      ...state,
      listData: [...state.listData, action.alpha3Code],
    });

    ctx.dispatch(new AddBadgeAction('favorites'));
  }

  @Action(RemoveCountryLikeAction)
  removeCountryLikeAction(ctx: StateContext<FavoritesStateModel>, action: RemoveCountryLikeAction) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      listData: state.listData.filter((like) => like !== action.alpha3Code),
    });

    ctx.dispatch(new RemoveBadgeAction('favorites'));
  }
}
