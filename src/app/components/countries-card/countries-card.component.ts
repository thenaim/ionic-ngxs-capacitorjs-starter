import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryModel } from '../../tabs/countries/countries.models';
import { CountryCardModel } from './countries-card.models';

@Component({
  selector: 'app-countries-card',
  templateUrl: './countries-card.component.html',
  styleUrls: ['./countries-card.component.scss'],
})
export class CountriesCardComponent implements OnInit {
  @Input() countries: CountryModel[];
  @Output() onActionCard = new EventEmitter<CountryCardModel>();
  @Output() onActionLike = new EventEmitter<CountryCardModel>();
  @Output() onActionShare = new EventEmitter<CountryCardModel>();

  constructor() {}

  onCard(country: CountryModel) {
    this.onActionCard.emit({ country });
  }

  onLike(event: Event, country: CountryModel) {
    event.preventDefault();
    event.stopPropagation();

    this.onActionLike.emit({ country });
  }

  onShare(event: Event, country: CountryModel) {
    event.preventDefault();
    event.stopPropagation();

    this.onActionShare.emit({ country });
  }

  trackByFn(index: number) {
    return index;
  }

  ngOnInit() {}
}
