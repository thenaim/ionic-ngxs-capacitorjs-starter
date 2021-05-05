import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { RemoveCountryLikeAction, AddCountryLikeAction } from '../favorites/store/favorites.actions';
import { CountryCardModel } from '../../components/countries-card/countries-card.models';
import { FetchCountriesAction } from './store/countries.actions';
import { Region } from './store/countries.models';
import { CountriesSelectors } from './store/countries.selectors';
import { CountryModel } from './countries.models';

@Component({
  selector: 'app-countries',
  templateUrl: 'countries.page.html',
  styleUrls: ['countries.page.scss'],
})
export class CountriesPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;

  @Select(CountriesSelectors.selectLoadingStates()) loadingStates$: Observable<{
    isLoading: boolean;
    isFailed: boolean;
    isSuccess: boolean;
  }>;
  @Select(CountriesSelectors.selectCountries()) countries$: Observable<CountryModel[]>;
  @Select(CountriesSelectors.selectRegions()) regions$: Observable<Region[]>;

  activeRegion: FormGroup = this.fb.group({
    region: this.fb.control('', [Validators.required]),
  });

  private subscription = true;
  constructor(private store: Store, private fb: FormBuilder, private navController: NavController) {}

  async onActionCard(event: CountryCardModel) {
    await this.navController.navigateForward(`/tabs/countries/detail/` + event.country.alpha3Code);
  }

  async onActionLike(event: CountryCardModel) {
    if (event.country.like) {
      return this.store.dispatch(new RemoveCountryLikeAction(event.country.alpha3Code));
    }
    this.store.dispatch(new AddCountryLikeAction(event.country.alpha3Code));
  }

  async onActionShare(event: CountryCardModel) {
    console.log(event);
  }

  async goToCountry(country) {
    await this.navController.navigateForward(`/tabs/countries/detail/` + country.alpha3Code);
  }

  onSubmit() {
    //
  }

  ngOnInit() {
    this.store.dispatch(new FetchCountriesAction.FetchData());

    this.activeRegion.valueChanges.pipe(takeWhile(() => this.subscription)).subscribe(async () => {
      if (this.ionContent) {
        await this.ionContent.scrollToTop();
      }
    });
  }

  ionViewDidEnter() {
    this.subscription = true;
  }

  ionViewDidLeave() {
    this.subscription = false;
  }
}
