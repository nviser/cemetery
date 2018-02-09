import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';


@IonicPage()
@Component({
  selector: 'page-feast',
  templateUrl: 'feast.html',
})
export class FeastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeastPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  goToSettings(){
    this.navCtrl.push(SettingsPage, {
      id: "set",
      name: "Set"
    });
  }

}
