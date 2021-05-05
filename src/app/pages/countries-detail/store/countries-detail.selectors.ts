import { createSelector } from '@ngxs/store';
import { RouterState, RouterStateModel } from '@ngxs/router-plugin';
import { CountryDetailStateModel } from './countries-detail.models';
import { CountryDetailState } from './countries-detail.state';

export class CountryDetailSelectors {
  static selectCountry() {
    return createSelector(
      [CountryDetailState, RouterState],
      (state: CountryDetailStateModel, routerState: RouterStateModel) =>
        state.countryDetail[routerState.state.root.params.id],
    );
  }

  static selectLoadingStates() {
    return createSelector([CountryDetailState], (state: CountryDetailStateModel) => ({
      isLoading: state.isLoading,
      isSuccess: state.isSuccess,
      isFailed: state.isFailed,
    }));
  }

  static selectCountryCode() {
    return createSelector([RouterState], (state: RouterStateModel) => state.state.root.params.id);
  }
}
