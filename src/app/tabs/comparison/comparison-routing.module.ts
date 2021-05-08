import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { СomparisonPage } from './comparison.page';

const routes: Routes = [
  {
    path: '',
    component: СomparisonPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class СomparisonPageRoutingModule {}
