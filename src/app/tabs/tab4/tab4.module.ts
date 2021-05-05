import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Tab4Page } from './tab4.page';
import { Tab4PageRoutingModule } from './tab4-routing.module';

@NgModule({
  imports: [CommonModule, Tab4PageRoutingModule, SharedModule],
  declarations: [Tab4Page],
})
export class Tab4PageModule {}
