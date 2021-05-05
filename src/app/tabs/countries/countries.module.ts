import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesCardLoadingComponent } from 'src/app/components/countries-card-loading/countries-card-loading.component';
import { CountriesCardComponent } from '../../components/countries-card/countries-card.component';
import { CountriesPage } from './countries.page';
import { CountriesPageRoutingModule } from './countries-routing.module';

@NgModule({
  imports: [CommonModule, CountriesPageRoutingModule, SharedModule],
  declarations: [CountriesPage, CountriesCardComponent, CountriesCardLoadingComponent],
})
export class CountriesPageModule {}
