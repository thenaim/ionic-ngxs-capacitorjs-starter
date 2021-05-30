import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CountryModel } from '../../tabs/countries/countries.models';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  @Input() country: CountryModel = null;
  // @Input() countryBorders: CountryModel[];
  @Output() onActionCard = new EventEmitter<CountryModel>();
  @Output() onActionLike = new EventEmitter<CountryModel>();
  @Output() onActionShare = new EventEmitter<CountryModel>();

  constructor(private route: ActivatedRoute, private navController: NavController) {}

  getObjectKeys(object) {
    return Object.keys(object);
  }

  onCard(country: CountryModel) {
    this.onActionCard.emit(country);
  }

  onLike(event: Event, country: CountryModel) {
    this.onActionLike.emit(country);
  }

  onShare(event: Event, country: CountryModel) {
    event.preventDefault();
    event.stopPropagation();

    this.onActionShare.emit(country);
  }

  ngOnInit() {}
}
