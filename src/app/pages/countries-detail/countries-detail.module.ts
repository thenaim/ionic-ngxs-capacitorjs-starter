import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { CountriesCardComponentModule } from '../../components/countries-card/countries-card.module';
import { CountryDetailComponentModule } from '../../components/country-detail/country-detail.module';
import { CountriesDetailPageRoutingModule } from './countries-detail-routing.module';

import { CountriesDetailPage } from './countries-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountriesDetailPageRoutingModule,
    SharedModule,
    CountriesCardComponentModule,
    CountryDetailComponentModule,
  ],
  declarations: [CountriesDetailPage],
})
export class CountriesDetailPageModule {}
