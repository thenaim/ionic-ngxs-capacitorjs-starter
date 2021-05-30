import { CountryDetailStateModel } from '../../pages/countries-detail/store/countries-detail.models';
import { CountriesStateModel } from '../../tabs/countries/store/countries.model';
import { FavoritesStateModel } from '../../tabs/favorites/store/favorites.model';
import { AuthStateModel } from '../auth-guard/auth-guard.models';

export interface AppStoreModel {
  auth: AuthStateModel;
  countries: CountriesStateModel;
  favorites: FavoritesStateModel;
  countriesDetail: CountryDetailStateModel;
}

export interface AppStoreLoadingStatesModel {
  isLoading: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  error: string;
}
