import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

export interface Tab {
  id: string;
  badge: number;
  icon: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  activeTab = 'countries';
  tabs: Tab[] = [
    { id: 'countries', badge: 0, icon: 'globe-outline' },
    { id: 'favorites', badge: 0, icon: 'heart-outline' },
    { id: 'tab3', badge: 0, icon: 'reader-outline' },
    { id: 'tab4', badge: 0, icon: 'person-circle-outline' },
  ];

  constructor(private store: Store) {}

  /**
   * Set active tab on change
   *
   * @param event { tab: string }
   */
  onTabChange(event: { tab: string }) {
    this.activeTab = event.tab;
  }
}
