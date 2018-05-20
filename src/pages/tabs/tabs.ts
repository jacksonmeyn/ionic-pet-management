import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { AddPage } from '../add/add';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = AddPage;

  constructor() {

  }
}
