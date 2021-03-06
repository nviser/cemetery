import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController, App } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { FeastPage } from '../feast/feast';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-holidays',
  templateUrl: 'holidays.html'
})
export class HolidaysPage {

confession: string = 'Христианство';

  constructor(public navCtrl: NavController, private app: App, public actionSheetCtrl: ActionSheetController) {

  }

  goback() {
    this.app.getRootNav().setRoot(AboutPage);
  }

  goToFeast(){
    this.navCtrl.push(FeastPage, {
      id: "feast",
      name: "Feast"
    });
  }

  goToSettings(){
    this.navCtrl.push(SettingsPage, {
      id: "set",
      name: "settings"
    });
  }

  chooseConfession() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Выбрать религию',
      buttons: [
        {
          text: 'Христианство',
          handler: () => {
            this.confession = 'Христианство1';
          }
        },
        {
          text: 'Христианство2',
          handler: () => {
            this.confession = 'Христианство2';
          }
        },
        {
          text: 'Христианство3',
          handler: () => {
            this.confession = 'Христианство3';
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
