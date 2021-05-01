import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChangeActiveRegion, FetchDataAction } from './store/countries.actions';
import { Regions } from './store/countries.models';
import { CountriesSelectors } from './store/countries.selectors';

@Component({
  selector: 'app-countries',
  templateUrl: 'countries.page.html',
  styleUrls: ['countries.page.scss'],
})
export class CountriesPage implements OnInit {
  @Select(CountriesSelectors.selectLoadingStates()) loadingStates$: Observable<{
    isLoading: boolean;
    isFailed: boolean;
    isSuccess: boolean;
  }>;
  @Select(CountriesSelectors.selectCountries()) countries$: Observable<any[]>;
  @Select(CountriesSelectors.selectRegions()) regions$: Observable<Regions[]>;
  @Select(CountriesSelectors.selectActiveRegion()) activeRegion$: Observable<string>;

  constructor(private store: Store) {}

  onChangeRegion(region: Regions) {
    this.store.dispatch(new ChangeActiveRegion(region));
  }

  ngOnInit() {
    this.store.dispatch(new FetchDataAction.FetchData());
  }
}
