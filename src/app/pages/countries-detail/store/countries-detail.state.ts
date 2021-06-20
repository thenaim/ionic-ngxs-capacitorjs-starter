import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken, Store } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { AppStoreModel } from '../../../core/store';
import { ApiService } from '../../../services/api/api.service';
import { CountryModel } from '../../../tabs/countries/countries.models';
import { FetchCountryAction } from './countries-detail.actions';
import { apiCountryDetail } from './countries-detail.constant';
import { CountryDetailStateModel } from './countries-detail.models';

export const initialState: CountryDetailStateModel = {
  isLoading: false,
  isFailed: false,
  isSuccess: false,
  listData: {},
  error: null,
};

export const COUNTRIES_DETAIL_STATE_TOKEN = new StateToken<CountryDetailStateModel>('countriesDetail');

@State({
  name: COUNTRIES_DETAIL_STATE_TOKEN,
  defaults: initialState,
})
@Injectable()
export class CountryDetailState {
  constructor(private store: Store, private apiService: ApiService) {}

  @Action(FetchCountryAction.FetchData)
  fetchCountries(ctx: StateContext<CountryDetailStateModel>, action: FetchCountryAction.FetchData) {
    ctx.dispatch(new FetchCountryAction.Start());
    const state = ctx.getState();

    const countryLoaded = Object.keys(state.listData).find((countryCodeKey) => countryCodeKey === action.countryCode);
    if (countryLoaded) {
      if (state.listData[countryLoaded]) {
        return ctx.dispatch(new FetchCountryAction.Success());
      }
    }

    return this.apiService.get(apiCountryDetail(action.countryCode)).pipe(
      tap((countries: CountryModel[]) => {
        if (!countries.length) {
          return ctx.dispatch(new FetchCountryAction.Fail('Error! Country not found.'));
        }
        const country = countries[0];

        const findCountryBorders = this.store.selectSnapshot((appState: AppStoreModel) =>
          appState.countries.listData.filter((filteredCountry) =>
            country.borders.some((borders) => borders.includes(filteredCountry.alpha3Code)),
          ),
        );
        country.bordersList = findCountryBorders;

        ctx.patchState({
          listData: {
            ...state.listData,
            [action.countryCode]: country,
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
    ctx.patchState({
      isLoading: false,
      isSuccess: false,
      isFailed: true,
      error: action.error,
    });
  }
}
