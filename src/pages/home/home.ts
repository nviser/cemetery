import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  enterType: any;

  constructor(public navCtrl: NavController) {

    this.enterType = 'login';

  }

  goToMainPage(){
    this.navCtrl.push(AboutPage, {
      id: "about",
      name: "About"
    });
  }
  
}
