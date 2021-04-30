import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchDataAction } from './store/countries.actions';
import { CountriesSelectors } from './store/countries.selectors';
import { CountriesState } from './store/countries.state';

@Component({
  selector: 'app-countries',
  templateUrl: 'countries.page.html',
  styleUrls: ['countries.page.scss'],
})
export class CountriesPage implements OnInit {
  @Select(CountriesSelectors.selectLoadingStates(CountriesState)) loadingStates$: Observable<{
    isLoading: boolean;
    isFailed: boolean;
    isSuccess: boolean;
  }>;
  @Select(CountriesSelectors.selectCountries(CountriesState)) countries$: Observable<any[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchDataAction.FetchData());
  }
}
