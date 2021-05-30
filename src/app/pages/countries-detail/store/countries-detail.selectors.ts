import { createSelector } from '@ngxs/store';
import { RouterState, RouterStateModel } from '@ngxs/router-plugin';
import { cloneDeep } from 'lodash';
import { FaviritesState } from '../../../tabs/favorites/store/favorites.state';
import { FavoritesStateModel } from '../../../tabs/favorites/store/favorites.model';
import { ComparisonState } from '../../../tabs/comparison/store/comparison.state';
import { ComparisonStateModel } from '../../../tabs/comparison/store/comparison.model';
import { CountryDetailStateModel } from './countries-detail.models';
import { CountryDetailState } from './countries-detail.state';

export class CountryDetailSelectors {
  static selectCountry() {
    return createSelector(
      [CountryDetailState, FaviritesState, ComparisonState, RouterState],
      (
        countryDetailState: CountryDetailStateModel,
        favoritesState: FavoritesStateModel,
        comparisonState: ComparisonStateModel,
        routerState: RouterStateModel,
      ) => {
        const country = cloneDeep(countryDetailState.listData[routerState.state.root.params.alpha3Code]);

        country?.bordersList.forEach((borderCountry, index) => {
          country.bordersList[index] = {
            ...borderCountry,
            like: !!favoritesState.listData.find((like) => like === borderCountry.alpha3Code),
            comparison: !!comparisonState.listData.find((comparison) => comparison === borderCountry.alpha3Code),
          };
        });

        return country;
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

  static selectCountryCodeParam() {
    return createSelector([RouterState], (state: RouterStateModel) => state.state.root.params.alpha3Code);
  }
}
