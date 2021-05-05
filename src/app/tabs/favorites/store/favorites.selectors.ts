import { createSelector } from '@ngxs/store';
import { CountryModel } from '../../countries/countries.models';
import { CountriesStateModel } from '../../countries/store/countries.models';
import { CountriesState } from '../../countries/store/countries.state';
import { FavoritesStateModel } from './favorites.models';
import { FaviritesState } from './favorites.state';

export class FavoritesSelectors {
  static selectFavorites() {
    return createSelector(
      [CountriesState, FaviritesState],
      (countries: CountriesStateModel, favorites: FavoritesStateModel) => {
        const foundedCountries: CountryModel[] = [];
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', favorites);

        favorites.items.forEach((favorite) => {
          const findCountry = countries.listData.find((country) => country.alpha3Code === favorite);
          if (findCountry) {
            foundedCountries.push({ ...findCountry, like: true });
          }
        });

        return foundedCountries;
      },
    );
  }
}
