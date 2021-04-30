import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { appConfig } from '../app.config';
import { environment } from '../../environments/environment';
import { CountriesState } from '../tabs/countries/store/countries.state';
import { AuthHandler } from './auth-guard/auth-guard.handler';
import { AuthGuardState } from './auth-guard/auth-guard.state';

@NgModule({
  imports: [
    /* Angular */
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    /* NGXS */
    NgxsModule.forRoot([AuthGuardState, CountriesState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: [AuthGuardState],
    }),
    NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: true, disabled: environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),

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
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [AuthHandler],
      multi: true,
    },
  ],
  exports: [FormsModule, TranslateModule],
})
export class CoreModule {
  constructor() {}
}
