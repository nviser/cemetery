import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController, Slides } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {

  @ViewChild(Slides) slides: Slides;

  kin: string = 'Степень родства';
  confession: string = 'Вероисповедание';
  melody: string = 'Выбрать мелодию';

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
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

  goToMap(){
    this.navCtrl.push(MapPage, {
      id: "map",
      name: "Map"
    });
  }

  slideNext() {
    this.slides.slideNext();
  }

  slidePrev() {
    this.slides.slidePrev();
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

  chooseConfession() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Выбрать',
      buttons: [
        {
          text: 'Православная',
          handler: () => {
            this.confession = 'Православная';
          }
        },
        {
          text: 'Католическая',
          handler: () => {
            this.confession = 'Католическая';
          }
        },
        {
          text: 'Протестантская',
          handler: () => {
            this.confession = 'Протестантская';
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
