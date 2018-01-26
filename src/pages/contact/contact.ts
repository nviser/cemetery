import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  melody: string = 'Выбрать мелодию';

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

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
