import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { CountriesCardComponentModule } from '../countries-card/countries-card.module';
import { CountryDetailComponent } from './country-detail.component';

@NgModule({
  imports: [CommonModule, IonicModule, SharedModule, CountriesCardComponentModule],
  declarations: [CountryDetailComponent],
  exports: [CountryDetailComponent],
})
export class CountryDetailComponentModule {}
