import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { IonicRouterState } from './ionic-router.state';

// NOTE: Must mark as `dynamic` due to
// https://github.com/dherges/ng-packagr/issues/767
// export const NgxsModuleRouterState = NgxsModule.forFeature([IonicRouterState]);

@NgModule({
  imports: [NgxsModule.forFeature([IonicRouterState])],
})
export class NgxsIonicRouterModule {
  static forRoot(): ModuleWithProviders<NgxsIonicRouterModule> {
    return {
      ngModule: NgxsIonicRouterModule,
      providers: [],
    };
  }
}
