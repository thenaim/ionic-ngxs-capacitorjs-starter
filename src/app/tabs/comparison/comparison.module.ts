import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CountryDetailComponentModule } from '../../components/country-detail/country-detail.module';
import { СomparisonPage } from './comparison.page';
import { СomparisonPageRoutingModule } from './comparison-routing.module';

@NgModule({
  imports: [CommonModule, СomparisonPageRoutingModule, SharedModule, CountryDetailComponentModule],
  declarations: [СomparisonPage],
})
export class СomparisonPageModule {}
