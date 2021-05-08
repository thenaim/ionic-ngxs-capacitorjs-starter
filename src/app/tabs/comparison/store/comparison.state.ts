import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddBadgeAction, RemoveBadgeAction } from '../../tabs.state';
import { AddCountryComparisonAction, RemoveCountryComparisonAction } from './comparison.actions';
import { ComparisonStateModel } from './comparison.models';

export const initialState: ComparisonStateModel = {
  listData: [],
  minComparisons: 2,
  maxComparisons: 4,
};

@State<ComparisonStateModel>({
  name: 'comparison',
  defaults: initialState,
})
@Injectable()
export class ComparisonState {
  constructor() {}

  @Action(AddCountryComparisonAction)
  addCountryComparisonAction(ctx: StateContext<ComparisonStateModel>, action: AddCountryComparisonAction) {
    const state = ctx.getState();

    const index = state.listData.indexOf(action.alpha3Code);
    if (index > -1) {
      return;
    }

    if (state.listData.length < state.maxComparisons) {
      ctx.setState({
        ...state,
        listData: [...state.listData, action.alpha3Code],
      });

      ctx.dispatch(new AddBadgeAction('comparison'));
    }
  }

  @Action(RemoveCountryComparisonAction)
  removeCountryComparisonAction(ctx: StateContext<ComparisonStateModel>, action: RemoveCountryComparisonAction) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      listData: state.listData.filter((like) => like !== action.alpha3Code),
    });

    ctx.dispatch(new RemoveBadgeAction('comparison'));
  }
}
