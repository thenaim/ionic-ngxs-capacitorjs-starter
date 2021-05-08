import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { CountryCardModel } from '../../components/countries-card/countries-card.models';
import { CountriesSelectors, Region, CountriesActions } from './store';
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
    region: this.fb.control(''),
  });

  private subscriptions = true;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private navController: NavController,
  ) {}

  async onActionCard(event: CountryCardModel) {
    await this.navController.navigateForward(['./', 'country', event.country.alpha3Code], {
      relativeTo: this.route,
    });
  }

  async onActionLike(event: CountryCardModel) {
    console.log(event);
  }

  async onActionShare(event: CountryCardModel) {
    console.log(event);
  }

  ngOnInit() {
    this.store.dispatch(new CountriesActions.Fetch());

    this.activeRegion.valueChanges.pipe(takeWhile(() => this.subscriptions)).subscribe(async () => {
      if (this.ionContent) {
        await this.ionContent.scrollToTop();
      }
    });
  }

  ionViewDidEnter() {
    this.subscriptions = true;
  }

  ionViewDidLeave() {
    this.subscriptions = false;
  }
}
