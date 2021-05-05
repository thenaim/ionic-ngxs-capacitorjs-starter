import { CountryModel } from '../../../tabs/countries/countries.models';

export class CountryDetailStateModel {
  isLoading: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  countryDetail: {
    [key: string]: CountryModel;
  };
  errors: any[];
}
