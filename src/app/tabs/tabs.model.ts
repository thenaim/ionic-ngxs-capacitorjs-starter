export type TabListModel = 'countries' | 'favorites' | 'comparison' | 'tab4';

export class TabModel {
  id: TabListModel;
  badge: number;
  icon: string;
  disabled: boolean;
}

export class TabsStateModel {
  active: TabListModel;
  listData: TabModel[];
}
