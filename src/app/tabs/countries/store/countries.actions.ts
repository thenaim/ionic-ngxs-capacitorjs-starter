import { CountryModel } from '../countries.models';
import { apiAllCountries } from './countries.constant';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace FetchCountriesAction {
  export class FetchData {
    static readonly type = '[FetchData] Fetch all countries';
    constructor(public api: string = apiAllCountries) {}
  }

  export class Start {
    static readonly type = '[FetchData.Start] Fetch data is start';
    constructor(public isLoading: boolean = true) {}
  }

  export class Success {
    static readonly type = '[FetchData.Success] Fetch data is success';
    constructor(public listData: CountryModel[], public isSuccess: boolean = true, public isLoading: boolean = false) {}
  }

  export class Fail {
    static readonly type = '[FetchData.Fail] Fetch data is fail';
    constructor(
      public error: string,
      public isFail: boolean = true,
      public isSuccess: boolean = false,
      public isLoading: boolean = false,
    ) {}
  }
}
