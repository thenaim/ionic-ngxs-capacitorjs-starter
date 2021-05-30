import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
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
  @Select(CountryDetailSelectors.selectCountryCodeParam()) countryCode$: Observable<string>;

  private subscriptions = true;
  constructor(private store: Store, private route: ActivatedRoute, private navController: NavController) {}

  ngOnInit() {}

  async onActionCard(country: CountryModel) {
    console.log(country);
    //console.log(await this.route.url.toPromise());
    await this.navController.navigateForward(['../', country.alpha3Code], { relativeTo: this.route });
  }

  getObjectKeys(object) {
    return Object.keys(object);
  }

  ionViewDidEnter() {
    const countryCode = this.store.selectSnapshot(CountryDetailSelectors.selectCountryCodeParam());
    if (countryCode) {
      return this.store.dispatch(new FetchCountryAction.FetchData(countryCode));
    }
    this.navController.navigateRoot('/tabs/countries');
  }

  ionViewDidLeave() {}
}
