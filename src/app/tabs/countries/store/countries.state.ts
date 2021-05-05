import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/core/api/api.service';
import { FetchCountriesAction } from './countries.actions';
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
    dirty: false,
    status: '',
    errors: {},
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

  @Action(FetchCountriesAction.FetchData)
  fetchCountries(ctx: StateContext<CountriesStateModel>, action: FetchCountriesAction.FetchData) {
    ctx.dispatch(new FetchCountriesAction.Start());

    return this.apiService.get(action.api).pipe(
      tap((countries) => ctx.dispatch(new FetchCountriesAction.Success(countries))),
      catchError(() => ctx.dispatch(new FetchCountriesAction.Fail('Error! Please try again.'))),
    );
  }

  @Action(FetchCountriesAction.Start)
  fetchStart(ctx: StateContext<CountriesStateModel>, action: FetchCountriesAction.Start) {
    ctx.patchState({
      ...action,
    });
  }

  @Action(FetchCountriesAction.Success)
  fetchSuccess(ctx: StateContext<CountriesStateModel>, action: FetchCountriesAction.Success) {
    ctx.patchState({
      ...action,
    });
  }

  @Action(FetchCountriesAction.Fail)
  fetchFail(ctx: StateContext<CountriesStateModel>, action: FetchCountriesAction.Fail) {
    const state = ctx.getState();
    ctx.patchState({
      isLoading: false,
      isSuccess: false,
      isFailed: true,
      errors: [...state.errors, action.error],
    });
  }
}
