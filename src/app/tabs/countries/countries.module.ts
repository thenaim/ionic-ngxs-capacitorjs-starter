import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesPage } from './countries.page';
import { CountriesPageRoutingModule } from './countries-routing.module';

@NgModule({
  imports: [CommonModule, CountriesPageRoutingModule, SharedModule],
  declarations: [CountriesPage],
})
export class CountriesPageModule {}
