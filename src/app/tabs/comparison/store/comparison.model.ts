import { AppStoreLoadingStatesModel } from '../../../core/store/store.model';

export interface ComparisonStateModel extends AppStoreLoadingStatesModel {
  listData: string[];
  minComparisons: number;
  maxComparisons: number;
}
