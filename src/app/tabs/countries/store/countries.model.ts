import { AppStoreLoadingStatesModel } from '../../../core/store/store.model';
import { CountryModel } from '../countries.models';

export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

export interface ActiveRegionFormModel {
  model?: {
    region: Region;
  };
  dirty?: boolean;
  status?: string;
  errors?: any;
}

export interface CountriesStateModel extends AppStoreLoadingStatesModel {
  listData: CountryModel[];
  regions: Region[];
  activeRegion: ActiveRegionFormModel;
}
