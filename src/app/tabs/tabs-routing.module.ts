import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'countries',
        children: [
          {
            path: '',
            loadChildren: () => import('./countries/countries.module').then((m) => m.CountriesPageModule),
          },
          {
            path: 'country/:alpha3Code',
            loadChildren: () =>
              import('../pages/countries-detail/countries-detail.module').then((m) => m.CountriesDetailPageModule),
          },
        ],
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: () => import('./favorites/favorites.module').then((m) => m.FavoritesPageModule),
          },
          {
            path: 'country/:alpha3Code',
            loadChildren: () =>
              import('../pages/countries-detail/countries-detail.module').then((m) => m.CountriesDetailPageModule),
          },
        ],
      },
      {
        path: 'comparison',
        children: [
          {
            path: '',
            loadChildren: () => import('./comparison/comparison.module').then((m) => m.СomparisonPageModule),
          },
        ],
      },
      {
        path: 'tab4',
        loadChildren: () => import('./tab4/tab4.module').then((m) => m.Tab4PageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/countries',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
