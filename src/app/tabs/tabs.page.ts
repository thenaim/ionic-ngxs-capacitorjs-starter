import { Component } from '@angular/core';

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
  activeTab = 'tab1';
  tabs: Tab[] = [
    { id: 'countries', badge: 0, icon: 'chatbubble-ellipses-outline' },
    { id: 'tab2', badge: 0, icon: 'barbell-outline' },
    { id: 'tab3', badge: 0, icon: 'reader-outline' },
    { id: 'tab4', badge: 0, icon: 'person-circle-outline' },
  ];

  constructor() {}

  /**
   * Set active tab on change
   *
   * @param event { tab: string }
   */
  onTabChange(event: { tab: string }) {
    this.activeTab = event.tab;
  }
}
