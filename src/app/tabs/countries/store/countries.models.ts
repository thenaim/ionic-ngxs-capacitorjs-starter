export class CountriesStateModel {
  isLoading: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  listData: any[];
  errors: any[];
  pagination: {
    pagesCount: number;
    page: number;
    pageSize: number;
  };
}
