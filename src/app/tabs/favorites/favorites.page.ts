import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { CountryModel } from '../countries/countries.models';
import { FavoritesSelectors } from './store/favorites.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss'],
})
export class FavoritesPage {
  @Select(FavoritesSelectors.selectFavorites()) favorites$: Observable<CountryModel[]>;
  constructor() {}
}
