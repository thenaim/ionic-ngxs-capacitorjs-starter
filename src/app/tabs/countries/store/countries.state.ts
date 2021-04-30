import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/core/api/api.service';
import { FetchDataAction } from './countries.actions';
import { CountriesStateModel } from './countries.models';

export const initialState: CountriesStateModel = {
  isLoading: false,
  isFailed: false,
  isSuccess: false,
  listData: [],
  errors: [],
  pagination: {
    pagesCount: 0,
    page: 0,
    pageSize: 0,
  },
};

@State<CountriesStateModel>({
  name: 'countries',
  defaults: initialState,
})
@Injectable()
export class CountriesState {
  constructor(private apiService: ApiService) {}

  @Action(FetchDataAction.FetchData)
  fetchCountries(ctx: StateContext<CountriesStateModel>, action: FetchDataAction.FetchData) {
    ctx.dispatch(new FetchDataAction.Start());

    return this.apiService.get(action.api).pipe(
      tap((countries) => ctx.dispatch(new FetchDataAction.Success(countries))),
      catchError(() => ctx.dispatch(new FetchDataAction.Fail('Error! Please try again.'))),
    );
  }

  @Action(FetchDataAction.Start)
  fetchStart(ctx: StateContext<CountriesStateModel>, action: FetchDataAction.Start) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      ...action,
    });
  }

  @Action(FetchDataAction.Success)
  fetchSuccess(ctx: StateContext<CountriesStateModel>, action: FetchDataAction.Success) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      ...action,
    });
  }

  @Action(FetchDataAction.Fail)
  fetchFail(ctx: StateContext<CountriesStateModel>, action: FetchDataAction.Fail) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailed: true,
      errors: [...state.errors, action.error],
    });
  }
}
