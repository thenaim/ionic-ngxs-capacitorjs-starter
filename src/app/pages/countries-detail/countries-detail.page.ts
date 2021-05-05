import { Component, OnInit } from '@angular/core';
import { Actions, Select, Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { CountryModel } from '../../tabs/countries/countries.models';
import { CountryDetailSelectors } from './store/countries-detail.selectors';
import { FetchCountryAction } from './store/countries-detail.actions';

@Component({
  selector: 'app-countries-detail',
  templateUrl: './countries-detail.page.html',
  styleUrls: ['./countries-detail.page.scss'],
})
export class CountriesDetailPage implements OnInit {
  @Select(CountryDetailSelectors.selectLoadingStates()) loadingStates$: Observable<{
    isLoading: boolean;
    isFailed: boolean;
    isSuccess: boolean;
  }>;
  @Select(CountryDetailSelectors.selectCountry()) country$: Observable<CountryModel>;
  @Select(CountryDetailSelectors.selectCountryCode()) countryCode$: Observable<string>;

  private destroy$ = new Subject<void>();

  constructor(private store: Store, private actions$: Actions, private navController: NavController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    const countryCode = this.store.selectSnapshot(CountryDetailSelectors.selectCountryCode());
    if (countryCode) {
      return this.store.dispatch(new FetchCountryAction.FetchData(countryCode));
    }
    this.navController.navigateRoot('/tabs/countries');
  }

  ionViewDidLeave() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
