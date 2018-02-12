import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController, App } from 'ionic-angular';
import { PersonPage } from '../person/person';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';

import { ApiServiceProvider } from '../../providers/api-service/api-service';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  kin: string = 'Степень родства';

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private app: App, public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController, public apiServiceProvider: ApiServiceProvider
  ) {
    
  }

  ionViewWillEnter() {
    this.getUserData();
  }

  getUserData() {
    let loading = this.loadingCtrl.create({
        content: 'Загрузка данных пользователя...'
    });
    loading.present();

    const client_id = localStorage.getItem('mb_client_id');

    this.apiServiceProvider.get_user_data(client_id).then((data: any) => {
    
        /* this.userData.client_id = data.client_id;
        this.userData.name = data.client_name;
        this.userData.surname = data.client_surname;
        this.userData.telephone = data.client_telephone;
        this.userData.email = data.client_email;
        this.userData.password = data.client_password; */

        loading.dismiss();
      });
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
