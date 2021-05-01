export type Regions = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

export class CountriesStateModel {
  isLoading: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  listData: any[];
  regions: Regions[];
  activeRegion: Regions;
  errors: any[];
}
