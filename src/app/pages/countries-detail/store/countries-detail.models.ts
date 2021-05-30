import { AppStoreLoadingStatesModel } from '../../../core/store/store.model';
import { CountryModel } from '../../../tabs/countries/countries.models';

export interface CountryDetailStateModel extends AppStoreLoadingStatesModel {
  listData: {
    [key: string]: CountryModel;
  };
}
