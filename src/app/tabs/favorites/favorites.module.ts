import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CountriesCardComponentModule } from '../../components/countries-card/countries-card.module';
import { FavoritesPage } from './favorites.page';
import { FavoritesPageRoutingModule } from './favorites-routing.module';

@NgModule({
  imports: [CommonModule, FavoritesPageRoutingModule, SharedModule, CountriesCardComponentModule],
  declarations: [FavoritesPage],
})
export class FavoritesPageModule {}
