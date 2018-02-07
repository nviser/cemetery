import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { MapPage } from '../map/map';
import { SettingsPage } from '../settings/settings';
import { HolidaysPage } from '../holidays/holidays';
import { PersonPage } from '../person/person';
import { ListPage } from '../list/list';
import { CalendarPage } from '../calendar/calendar';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild(Slides) slides: Slides;

  map = MapPage;

  constructor(public navCtrl: NavController) {

  }

  slideNext() {
    this.slides.slideNext();
  }

  slidePrev() {
    this.slides.slidePrev();
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
