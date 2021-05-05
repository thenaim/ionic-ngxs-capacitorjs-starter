import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesCardComponent } from '../../components/countries-card/countries-card.component';
import { CountriesPage } from './countries.page';
import { CountriesPageRoutingModule } from './countries-routing.module';

@NgModule({
  imports: [CommonModule, CountriesPageRoutingModule, SharedModule],
  declarations: [CountriesPage, CountriesCardComponent],
})
export class CountriesPageModule {}
