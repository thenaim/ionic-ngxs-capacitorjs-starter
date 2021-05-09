import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesDetailPage } from './countries-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CountriesDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesDetailPageRoutingModule {}
