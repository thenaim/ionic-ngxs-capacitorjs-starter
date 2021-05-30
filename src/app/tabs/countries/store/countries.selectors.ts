import { createSelector } from '@ngxs/store';
import { reduce } from 'lodash';
import { ComparisonStateModel } from '../../comparison/store/comparison.model';
import { ComparisonState } from '../../comparison/store/comparison.state';
import { FavoritesStateModel } from '../../favorites/store/favorites.model';
import { FaviritesState } from '../../favorites/store/favorites.state';
import { CountriesStateModel } from './countries.model';
import { CountriesState } from './countries.state';

export class CountriesSelectors {
  static selectCountries() {
    return createSelector(
      [CountriesState, FaviritesState, ComparisonState],
      (
        countriesState: CountriesStateModel,
        favoritesState: FavoritesStateModel,
        comparisonState: ComparisonStateModel,
      ) =>
        reduce(
          countriesState.listData,
          (filtered, option) => {
            const activeRegionType = countriesState.activeRegion.model.region;
            if (option.region === activeRegionType) {
              filtered.push({
                ...option,
                like: !!favoritesState.listData.find((like) => like === option.alpha3Code),
                comparison: !!comparisonState.listData.find((comparison) => comparison === option.alpha3Code),
              });
            }
            return filtered;
          },
          [],
        ),
    );
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
