import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, App } from 'ionic-angular';
import { PersonPage } from '../person/person';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  kin: string = 'Степень родства';

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  goback() {
    this.app.getRootNav().setRoot(AboutPage);
  }

  goToSettings(){
    this.navCtrl.push(SettingsPage, {
      id: "set",
      name: "Set"
    });
  }

  goToPerson(){
    this.navCtrl.push(PersonPage, {
      id: "list",
      name: "List"
    });
  }

  chooseKin() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Выбрать',
      buttons: [
        {
          text: 'Первая',
          handler: () => {
            this.kin = 'Первая';
          }
        },
        {
          text: 'Вторая',
          handler: () => {
            this.kin = 'Вторая';
          }
        },
        {
          text: 'Третья',
          handler: () => {
            this.kin = 'Третья';
          }
        },
        {
          text: 'Отмена',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

}
