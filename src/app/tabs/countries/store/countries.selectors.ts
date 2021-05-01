import { createSelector } from '@ngxs/store';
import { CountriesStateModel } from './countries.models';
import { CountriesState } from './countries.state';

export class CountriesSelectors {
  static selectCountries() {
    return createSelector([CountriesState], (state: CountriesStateModel) =>
      state.listData.filter((countries) => countries.region === state.activeRegion),
    );
  }

  static selectCountriesFilter() {
    return createSelector([CountriesState], (state: CountriesStateModel) => state.listData);
  }

  static selectLoadingStates() {
    return createSelector([CountriesState], (state: CountriesStateModel) => ({
      isLoading: state.isLoading,
      isSuccess: state.isSuccess,
      isFailed: state.isFailed,
    }));
  }

  static selectRegions() {
    return createSelector([CountriesState], (state: CountriesStateModel) => state.regions);
  }

  static selectActiveRegion() {
    return createSelector([CountriesState], (state: CountriesStateModel) => state.activeRegion);
  }
}
