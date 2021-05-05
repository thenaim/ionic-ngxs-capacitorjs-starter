import { CountryModel } from '../countries.models';

export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

export interface ActiveRegionFormModel {
  model?: {
    region: Region;
  };
  dirty: boolean;
  status: string;
  errors: any;
}

export class CountriesStateModel {
  isLoading: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  listData: CountryModel[];
  regions: Region[];
  activeRegion: ActiveRegionFormModel;
  errors: any[];
}
