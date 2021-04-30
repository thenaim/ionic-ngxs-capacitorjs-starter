import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Tab2Page } from './tab2.page';
import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [CommonModule, Tab2PageRoutingModule, SharedModule],
  declarations: [Tab2Page],
})
export class Tab2PageModule {}
