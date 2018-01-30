import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { PersonPage } from '../person/person';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  kin: string = 'Степень родства';

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
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
