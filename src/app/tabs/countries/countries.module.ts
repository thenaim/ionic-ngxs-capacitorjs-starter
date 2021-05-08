import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CountriesCardLoadingComponent } from '../../components/countries-card-loading/countries-card-loading.component';
import { CountriesCardComponentModule } from '../../components/countries-card/countries-card.module';
import { CountriesPage } from './countries.page';
import { CountriesPageRoutingModule } from './countries-routing.module';

@NgModule({
  imports: [CommonModule, CountriesPageRoutingModule, CountriesCardComponentModule, SharedModule],
  declarations: [CountriesPage, CountriesCardLoadingComponent],
})
export class CountriesPageModule {}
