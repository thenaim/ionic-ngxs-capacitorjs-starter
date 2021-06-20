import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { AlertService } from '../../services/alert/alert.service';
import {
  AddCountryComparisonAction,
  RemoveCountryComparisonAction,
} from '../../tabs/comparison/store/comparison.actions';
import { CountryModel } from '../../tabs/countries/countries.models';
import { RemoveCountryLikeAction, AddCountryLikeAction } from '../../tabs/favorites/store/favorites.actions';

@Component({
  selector: 'app-countries-card',
  templateUrl: './countries-card.component.html',
  styleUrls: ['./countries-card.component.scss'],
})
export class CountriesCardComponent implements OnInit {
  @Input() isMainPage = true;
  @Input() countries: CountryModel[];
  @Output() onActionCard = new EventEmitter<CountryModel>();
  @Output() onActionLike = new EventEmitter<CountryModel>();
  @Output() onActionComparison = new EventEmitter<CountryModel>();
  @Output() onActionShare = new EventEmitter<CountryModel>();

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private navController: NavController,
    private alertService: AlertService,
  ) {}

  onCard(event: Event, country: CountryModel) {
    this.onActionCard.emit(country);
  }

  onComparison(event: Event, country: CountryModel) {
    event.preventDefault();
    event.stopPropagation();

    if (country.comparison) {
      this.store.dispatch(new RemoveCountryComparisonAction(country.alpha3Code));
    } else {
      this.store.dispatch(new AddCountryComparisonAction(country.alpha3Code));
    }

    this.onActionComparison.emit(country);
  }

  async onLike(event: Event, country: CountryModel) {
    event.preventDefault();
    event.stopPropagation();

    if (country.like) {
      if (this.isMainPage) {
        return this.store.dispatch(new RemoveCountryLikeAction(country.alpha3Code));
      }

      const alert = await this.alertService.presentAlert({
        header: 'Remove from favorites',
        message: `Are you sure you want to remove <b>${country.name}</b>?`,
        buttons: [
          {
            text: 'Delete',
            role: 'delete',
          },
          {
            text: 'Cancel',
            role: 'cancel',
          },
        ],
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      if (role === 'delete') {
        return this.store.dispatch(new RemoveCountryLikeAction(country.alpha3Code));
      }
    }

    this.store.dispatch(new AddCountryLikeAction(country.alpha3Code));
    this.onActionLike.emit(country);
  }

  onShare(event: Event, country: CountryModel) {
    event.preventDefault();
    event.stopPropagation();

    this.onActionShare.emit(country);
  }

  trackByFn(index: number) {
    return index;
  }

  ngOnInit() {}
}
