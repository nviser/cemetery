import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  slideNext() {
    this.slides.slideNext();
  }

  slidePrev() {
    this.slides.slidePrev();
  }

}
