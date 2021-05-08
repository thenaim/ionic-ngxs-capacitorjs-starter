import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';
import { Params } from '@angular/router';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { appConfig } from '../app.config';
import { environment } from '../../environments/environment';
import { CountriesState } from '../tabs/countries/store/countries.state';
import { CountryDetailState } from '../pages/countries-detail/store/countries-detail.state';
import { FaviritesState } from '../tabs/favorites/store/favorites.state';
import { TabsState } from '../tabs/tabs.state';
import { ComparisonState } from '../tabs/comparison/store/comparison.state';
import { AuthHandler } from './auth-guard/auth-guard.handler';
import { AuthGuardState } from './auth-guard/auth-guard.state';
import { AppErrorHandler } from './error-handler/app-error-handler.service';
import { CustomRouterStateSerializer } from './router/custom-router-serializer';

export interface RouterStateParams {
  root: {
    url: string;
    params: Params;
    queryParams: Params;
  };
}

@NgModule({
  imports: [
    /* Angular */
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    /* NGXS */
    NgxsModule.forRoot(
      [AuthGuardState, CountriesState, CountryDetailState, FaviritesState, ComparisonState, TabsState],
      {
        developmentMode: !environment.production,
      },
    ),
    NgxsStoragePluginModule.forRoot({
      key: [AuthGuardState, CountriesState, CountryDetailState, FaviritesState],
    }),
    NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: true, disabled: environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
    NgxsFormPluginModule.forRoot(),
    // NgxsIonicRouterModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),

    /* NGX TRANSLATE */
    TranslateModule.forRoot({
      defaultLanguage: appConfig.langs.default,
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [AuthHandler],
      multi: true,
    },
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  exports: [FormsModule, TranslateModule],
})
export class CoreModule {
  constructor() {}
}
