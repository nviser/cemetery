import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { MapPage } from '../map/map';
import { SettingsPage } from '../settings/settings';
import { HolidaysPage } from '../holidays/holidays';
import { PersonPage } from '../person/person';
import { ListPage } from '../list/list';
import { CalendarPage } from '../calendar/calendar';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild(Slides) slides: Slides;

  map = MapPage;

  constructor(public navCtrl: NavController, private app: App,) {

  }

  slideNext() {
    this.slides.slideNext();
  }

  slidePrev() {
    this.slides.slidePrev();
  }

  exit() {
    this.app.getRootNav().setRoot(HomePage);
  }

  goToList(){
    this.navCtrl.push(TabsPage, {
      id: "0",
      name: "List"
    });
  }

  goToSettings(){
    this.navCtrl.push(SettingsPage, {
      id: "set",
      name: "Set"
    });
  }

  goToHolidays(){
    this.navCtrl.push(TabsPage, {
      id: "2",
      name: "Holy"
    });
  }

  goToCalendar(){
    this.navCtrl.push(TabsPage, {
      id: "1",
      name: "Calendar"
    });
  }

}
