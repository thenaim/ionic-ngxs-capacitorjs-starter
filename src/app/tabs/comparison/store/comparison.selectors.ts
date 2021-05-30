import { createSelector } from '@ngxs/store';
import { CountriesStateModel } from '../../countries/store/countries.model';
import { CountriesState } from '../../countries/store/countries.state';
import { ComparisonStateModel } from './comparison.model';
import { ComparisonState } from './comparison.state';

export class ComparisonSelectors {
  static selectComparisons() {
    return createSelector(
      [CountriesState, ComparisonState],
      (countries: CountriesStateModel, comparison: ComparisonStateModel) =>
        countries.listData.filter((country) => comparison.listData.includes(country.alpha3Code)),
    );
  }

  static selectComparisonsExist() {
    return createSelector([ComparisonState], (comparison: ComparisonStateModel) => !!comparison.listData);
  }
}
