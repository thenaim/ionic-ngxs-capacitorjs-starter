import { createSelector } from '@ngxs/store';
import { FavoritesStateModel } from '../../favorites/store/favorites.models';
import { FaviritesState } from '../../favorites/store/favorites.state';
import { CountriesStateModel } from './countries.models';
import { CountriesState } from './countries.state';

export class CountriesSelectors {
  static selectCountries() {
    return createSelector(
      [CountriesState, FaviritesState],
      (countriesState: CountriesStateModel, favoritesState: FavoritesStateModel) =>
        countriesState.listData.reduce((filtered, option) => {
          const activeRegionType = countriesState.activeRegion.model.region;
          if (option.region === activeRegionType) {
            filtered.push({
              ...option,
              like: !!favoritesState.items.find((like) => like === option.alpha3Code),
            });
          }
          return filtered;
        }, []),
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
