import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from '../../../core/api/api.service';
import { FetchCountryAction } from './countries-detail.actions';
import { apiCountryDetail } from './countries-detail.constant';
import { CountryDetailStateModel } from './countries-detail.models';

export const initialState: CountryDetailStateModel = {
  isLoading: false,
  isFailed: false,
  isSuccess: false,
  countryDetail: {},
  errors: [],
};

@State<CountryDetailStateModel>({
  name: 'countries_detail',
  defaults: initialState,
})
@Injectable()
export class CountryDetailState {
  constructor(private apiService: ApiService) {}

  @Action(FetchCountryAction.FetchData)
  fetchCountries(ctx: StateContext<CountryDetailStateModel>, action: FetchCountryAction.FetchData) {
    ctx.dispatch(new FetchCountryAction.Start());
    const state = ctx.getState();

    const countryLoaded = Object.keys(state.countryDetail).find((countryCode) => countryCode === action.countryCode);
    if (countryLoaded) {
      ctx.dispatch(new FetchCountryAction.Success());
      return;
    }

    return this.apiService.get(apiCountryDetail(action.countryCode)).pipe(
      tap((country: any[]) => {
        ctx.patchState({
          countryDetail: {
            ...state.countryDetail,
            [action.countryCode]: country[0],
          },
        });
        ctx.dispatch(new FetchCountryAction.Success());
      }),
      catchError(() => ctx.dispatch(new FetchCountryAction.Fail('Error! Please try again.'))),
    );
  }

  @Action(FetchCountryAction.Start)
  fetchStart(ctx: StateContext<CountryDetailStateModel>, action: FetchCountryAction.Start) {
    ctx.patchState({
      ...action,
    });
  }

  @Action(FetchCountryAction.Success)
  fetchSuccess(ctx: StateContext<CountryDetailStateModel>, action: FetchCountryAction.Success) {
    ctx.patchState({
      ...action,
    });
  }

  @Action(FetchCountryAction.Fail)
  fetchFail(ctx: StateContext<CountryDetailStateModel>, action: FetchCountryAction.Fail) {
    const state = ctx.getState();
    ctx.patchState({
      isLoading: false,
      isSuccess: false,
      isFailed: true,
      errors: [...state.errors, action.error],
    });
  }
}
