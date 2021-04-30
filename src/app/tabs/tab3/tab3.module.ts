import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Tab3Page } from './tab3.page';
import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [CommonModule, Tab3PageRoutingModule, SharedModule],
  declarations: [Tab3Page],
})
export class Tab3PageModule {}
