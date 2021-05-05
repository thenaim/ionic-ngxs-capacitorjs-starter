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

            data: {
              title: 'hello',
            },
            loadChildren: () => import('./countries/countries.module').then((m) => m.CountriesPageModule),
          },
          {
            path: 'detail/:id',
            loadChildren: () =>
              import('../pages/countries-detail/countries-detail.module').then((m) => m.CountriesDetailPageModule),
          },
        ],
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.module').then((m) => m.FavoritesPageModule),
      },
      {
        path: 'tab3',
        loadChildren: () => import('./tab3/tab3.module').then((m) => m.Tab3PageModule),
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
