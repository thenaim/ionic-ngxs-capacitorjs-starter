import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { CountriesCardComponent } from './countries-card.component';

@NgModule({
  imports: [CommonModule, IonicModule, SharedModule],
  declarations: [CountriesCardComponent],
  exports: [CountriesCardComponent],
})
export class CountriesCardComponentModule {}
