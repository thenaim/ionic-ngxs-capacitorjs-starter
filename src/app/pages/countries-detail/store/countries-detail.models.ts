import { CountryModel } from 'src/app/tabs/countries/countries.models';

export class CountryDetailStateModel {
  isLoading: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  countryDetail: {
    [key: string]: CountryModel;
  };
  errors: any[];
}
