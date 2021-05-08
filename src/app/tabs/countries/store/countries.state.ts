import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from '../../../core/api/api.service';
import { CountriesActions } from './countries.actions';
import { CountriesStateModel } from './countries.models';

export const initialState: CountriesStateModel = {
  isLoading: false,
  isFailed: false,
  isSuccess: false,
  listData: [],
  regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
  activeRegion: {
    model: {
      region: 'Africa',
    },
  },
  errors: [],
};

@State<CountriesStateModel>({
  name: 'countries',
  defaults: initialState,
})
@Injectable()
export class CountriesState {
  constructor(private apiService: ApiService) {}

  @Action(CountriesActions.Fetch)
  fetchCountries(ctx: StateContext<CountriesStateModel>, action: CountriesActions.Fetch) {
    const state = ctx.getState();
    ctx.patchState({
      isLoading: true,
    });

    if (state.listData.length) {
      ctx.patchState({
        isLoading: false,
        isSuccess: true,
        isFailed: false,
      });
      return;
    }

    return this.apiService.get(action.api).pipe(
      tap((countries) => ctx.dispatch(new CountriesActions.FetchSuccess(countries))),
      catchError(() => ctx.dispatch(new CountriesActions.FetchFail('Error! Please try again.'))),
    );
  }

  @Action(CountriesActions.FetchSuccess)
  fetchSuccess(ctx: StateContext<CountriesStateModel>, action: CountriesActions.FetchSuccess) {
    setTimeout(() => {
      ctx.patchState({
        ...action,
        isLoading: false,
        isSuccess: true,
        isFailed: false,
      });
    }, 2000);
  }

  @Action(CountriesActions.FetchFail)
  fetchFail(ctx: StateContext<CountriesStateModel>, action: CountriesActions.FetchFail) {
    const state = ctx.getState();
    ctx.patchState({
      isLoading: false,
      isSuccess: false,
      isFailed: true,
      errors: [...state.errors, action.error],
    });
  }
}
