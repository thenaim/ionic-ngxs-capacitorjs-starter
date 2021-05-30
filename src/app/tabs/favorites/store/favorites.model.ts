import { AppStoreLoadingStatesModel } from '../../../core/store/store.model';

export interface FavoritesStateModel extends AppStoreLoadingStatesModel {
  listData: string[];
}
