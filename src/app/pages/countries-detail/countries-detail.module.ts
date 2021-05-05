import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesDetailPageRoutingModule } from './countries-detail-routing.module';

import { CountriesDetailPage } from './countries-detail.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CountriesDetailPageRoutingModule, SharedModule],
  declarations: [CountriesDetailPage],
})
export class CountriesDetailPageModule {}