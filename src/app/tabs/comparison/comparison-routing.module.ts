import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { –°omparisonPage } from './comparison.page';

const routes: Routes = [
  {
    path: '',
    component: –°omparisonPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class –°omparisonPageRoutingModule {}
