import { createSelector } from '@ngxs/store';
import { ComparisonStateModel } from '../../comparison/store/comparison.model';
import { ComparisonState } from '../../comparison/store/comparison.state';
import { CountryModel } from '../../countries/countries.models';
import { CountriesStateModel } from '../../countries/store/countries.model';
import { CountriesState } from '../../countries/store/countries.state';
import { FavoritesStateModel } from './favorites.model';
import { FaviritesState } from './favorites.state';

export class FavoritesSelectors {
  static selectFavorites() {
    return createSelector(
      [CountriesState, FaviritesState, ComparisonState],
      (countries: CountriesStateModel, favorites: FavoritesStateModel, comparisonState: ComparisonStateModel) => {
        const foundedCountries: CountryModel[] = [];

        favorites.listData.forEach((favorite) => {
          const findCountry = countries.listData.find((country) => country.alpha3Code === favorite);
          if (findCountry) {
            foundedCountries.push({
              ...findCountry,
              like: true,
              comparison: !!comparisonState.listData.find((comparison) => comparison === findCountry.alpha3Code),
            });
          }
        });

        return foundedCountries;
      },
    );
  }
}
