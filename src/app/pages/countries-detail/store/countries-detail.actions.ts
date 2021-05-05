/* eslint-disable @typescript-eslint/no-namespace */
export namespace FetchCountryAction {
  export class FetchData {
    static readonly type = '[FetchData] Fetch country detail';
    constructor(public countryCode: string) {}
  }

  export class Start {
    static readonly type = '[FetchData.Start] Fetch country is start';
    constructor(public isLoading: boolean = true, public isSuccess: boolean = false, public isFail: boolean = false) {}
  }

  export class Success {
    static readonly type = '[FetchData.Success] Fetch country is success';
    constructor(public isLoading: boolean = false, public isSuccess: boolean = true, public isFail: boolean = false) {}
  }

  export class Fail {
    static readonly type = '[FetchData.Fail] Fetch country is fail';
    constructor(
      public error: string,
      public isFail: boolean = true,
      public isSuccess: boolean = false,
      public isLoading: boolean = false,
    ) {}
  }
}
