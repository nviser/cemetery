import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { MapPage } from '../map/map';
import { SettingsPage } from '../settings/settings';
import { HolidaysPage } from '../holidays/holidays';
import { PersonPage } from '../person/person';
import { ListPage } from '../list/list';

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
    this.navCtrl.push(ListPage, {
      id: "list",
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
    this.navCtrl.push(HolidaysPage, {
      id: "holly",
      name: "Holy"
    });
  }

  goToPerson(){
    this.navCtrl.push(PersonPage, {
      id: "person",
      name: "Person"
    });
  }

}
