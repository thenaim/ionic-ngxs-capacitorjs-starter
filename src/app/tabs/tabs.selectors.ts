import { createSelector } from '@ngxs/store';
import { map } from 'lodash';
import { ComparisonStateModel } from './comparison/store/comparison.model';
import { ComparisonState } from './comparison/store/comparison.state';
import { TabsStateModel } from './tabs.model';
import { TabsState } from './tabs.state';

export class TabsSelectors {
  static selectTabs() {
    return createSelector(
      [TabsState, ComparisonState],
      (tabState: TabsStateModel, comparisonState: ComparisonStateModel) =>
        map(tabState.listData, (tab) => {
          if (tab.id === 'comparison') {
            if (comparisonState.listData.length < comparisonState.minComparisons) {
              return { ...tab, disabled: true };
            }
          }
          return tab;
        }),
    );
  }
}
