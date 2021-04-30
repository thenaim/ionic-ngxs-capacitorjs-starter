import { createSelector } from '@ngxs/store';
import { CountriesStateModel } from './countries.models';

export class CountriesSelectors {
  static selectCountries(stateClass) {
    return createSelector([stateClass], (state: CountriesStateModel) => state.listData);
  }

  static selectLoadingStates(stateClass) {
    return createSelector([stateClass], (state: CountriesStateModel) => ({
      isLoading: state.isLoading,
      isSuccess: state.isSuccess,
      isFailed: state.isFailed,
    }));
  }
}
