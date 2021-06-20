import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { CountryCardModel } from '../../components/countries-card/countries-card.models';
import { AlertService } from '../../services/alert/alert.service';
import { CountryModel } from '../countries/countries.models';
import { ClearBadgeAction } from '../tabs.state';
import { FavoritesSelectors } from './store/favorites.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss'],
})
export class FavoritesPage {
  @Select(FavoritesSelectors.selectFavorites()) favorites$: Observable<CountryModel[]>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private navController: NavController,
    private alertService: AlertService,
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

  ionViewDidEnter() {
    this.store.dispatch(new ClearBadgeAction('favorites'));
  }
}
