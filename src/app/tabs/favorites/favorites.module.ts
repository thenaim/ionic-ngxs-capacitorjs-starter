import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesCardComponent } from '../../components/countries-card/countries-card.component';
import { FavoritesPage } from './favorites.page';
import { FavoritesPageRoutingModule } from './favorites-routing.module';

@NgModule({
  imports: [CommonModule, FavoritesPageRoutingModule, SharedModule],
  declarations: [FavoritesPage, CountriesCardComponent],
})
export class FavoritesPageModule {}
