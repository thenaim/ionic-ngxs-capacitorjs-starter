import { CountryModel } from '../countries.models';
import { apiAllCountries } from './countries.constant';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CountriesActions {
  export class Fetch {
    static readonly type = '[Countries Tab] Fetch countries';
    constructor(public api: string = apiAllCountries) {}
  }

  export class FetchSuccess {
    static readonly type = '[Countries Tab] Fetch countries success';
    constructor(public listData: CountryModel[]) {}
  }

  export class FetchFail {
    static readonly type = '[Countries Tab] Fetch countries fail';
    constructor(public error: string) {}
  }
}
