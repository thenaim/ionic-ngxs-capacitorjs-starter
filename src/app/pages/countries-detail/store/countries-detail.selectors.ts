import { createSelector } from '@ngxs/store';
import { RouterState, RouterStateModel } from '@ngxs/router-plugin';
import { CountriesState } from '../../../tabs/countries/store/countries.state';
import { CountriesStateModel } from '../../../tabs/countries/store/countries.models';
import { FaviritesState } from '../../../tabs/favorites/store/favorites.state';
import { FavoritesStateModel } from '../../../tabs/favorites/store/favorites.models';
import { ComparisonState } from '../../../tabs/comparison/store/comparison.state';
import { ComparisonStateModel } from '../../../tabs/comparison/store/comparison.models';
import { CountryDetailStateModel } from './countries-detail.models';
import { CountryDetailState } from './countries-detail.state';

export class CountryDetailSelectors {
  static selectCountry() {
    return createSelector(
      [CountryDetailState, RouterState],
      (state: CountryDetailStateModel, routerState: RouterStateModel) =>
        state.countryDetail[routerState.state.root.params.alpha3Code],
    );
  }

  static selectCountryBorders() {
    return createSelector(
      [CountriesState, CountryDetailState, FaviritesState, ComparisonState, RouterState],
      (
        counstries: CountriesStateModel,
        state: CountryDetailStateModel,
        favoritesState: FavoritesStateModel,
        comparisonState: ComparisonStateModel,
        routerState: RouterStateModel,
      ) => {
        const currentCountry = state.countryDetail[routerState.state.root.params.alpha3Code];
        const currentCountryBorders = counstries.listData.reduce((filtered, option) => {
          if (currentCountry.borders.includes(option.alpha3Code)) {
            filtered.push({
              ...option,
              like: !!favoritesState.listData.find((like) => like === option.alpha3Code),
              comparison: !!comparisonState.listData.find((comparison) => comparison === option.alpha3Code),
            });
          }
          return filtered;
        }, []);
        return currentCountryBorders;
      },
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
    return createSelector([RouterState], (state: RouterStateModel) => state.state.root.params.alpha3Code);
  }
}
