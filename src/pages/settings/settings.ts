import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  melody: string = 'Выбрать мелодию';

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

  }

  goBack(){
    this.navCtrl.pop();
  }

  chooseMelody() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Выбрать мелодию',
      buttons: [
        {
          text: 'Melody1',
          handler: () => {
            this.melody = 'Melody1';
          }
        },
        {
          text: 'Melody2',
          handler: () => {
            this.melody = 'Melody2';
          }
        },
        {
          text: 'Melody3',
          handler: () => {
            this.melody = 'Melody3';
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
