import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { MapPage } from '../map/map';

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

  goToMap(){
    this.navCtrl.push(MapPage, {
      id: "map",
      name: "Map"
    });
  }

}
