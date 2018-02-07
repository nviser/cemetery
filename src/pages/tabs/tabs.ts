import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { HolidaysPage } from '../holidays/holidays';
import { ListPage } from '../list/list';
import { CalendarPage } from '../calendar/calendar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  tab2Root = CalendarPage;
  tab3Root = HolidaysPage;

  tab: string = '0';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab = navParams.get('id');
    console.log(this.tab);
  }
}
