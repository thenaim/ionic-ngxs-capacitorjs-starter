import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsModuleOptions } from '@ngxs/store';
import { environment } from '../../../environments/environment';
import { CountryDetailState } from '../../pages/countries-detail/store/countries-detail.state';
import { ComparisonState } from '../../tabs/comparison/store/comparison.state';
import { CountriesState } from '../../tabs/countries/store/countries.state';
import { FaviritesState } from '../../tabs/favorites/store/favorites.state';
import { TabsState } from '../../tabs/tabs.state';
import { AuthGuardState } from '../auth-guard/auth-guard.state';

const ngxsMainStates = [AuthGuardState, CountriesState, CountryDetailState, FaviritesState, ComparisonState, TabsState];
const ngxsStorageStates = [AuthGuardState, CountriesState, CountryDetailState, FaviritesState];

const ngxsConfig: NgxsModuleOptions = {
  developmentMode: !environment.production,
  selectorOptions: {
    suppressErrors: false,
    injectContainerState: false,
  },
  compatibility: {
    strictContentSecurityPolicy: true,
  },
};

export const ngxsImports = [
  NgxsModule.forRoot(ngxsMainStates, ngxsConfig),
  NgxsStoragePluginModule.forRoot({
    key: ngxsStorageStates,
  }),
  NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: true, disabled: environment.production }),
  NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
  NgxsFormPluginModule.forRoot(),
  NgxsRouterPluginModule.forRoot(),
];
