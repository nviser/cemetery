import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  melody: string = 'Выбрать мелодию';
  userData: any = {};
  eventDay: string = '0';
  eventNtf: string = 'push';
  

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController,
              public apiServiceProvider: ApiServiceProvider, public loadingCtrl: LoadingController) {

  }

  ionViewWillEnter() {
    this.getUserData();
  }

  toastShow(msg) {
      let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000,
          position: 'top'
      });

      toast.present();
  }

  getUserData() {
    let loading = this.loadingCtrl.create({
        content: 'Загрузка данных пользователя...'
    });
    loading.present();

    const client_id = localStorage.getItem('mb_client_id');

    this.apiServiceProvider.get_user_data(client_id).then((data: any) => {
    
        this.userData.client_id = data.client_id;
        this.userData.name = data.client_name;
        this.userData.surname = data.client_surname;
        this.userData.telephone = data.client_telephone;
        this.userData.email = data.client_email;
        this.userData.password = data.client_password;

        loading.dismiss();
      });
  }

  checkMail(value) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
  }

  setUserData() {
    this.userData.client_id = Number(localStorage.getItem('mb_client_id'));
    this.userData.client_notification_date = this.eventDay;
    this.userData.client_notification_type = this.eventNtf;
    this.userData.client_melody = this.melody;
    this.userData.password = this.userData.password || null;
    //console.log(this.userData.client_notification_date, this.userData.client_notification_type, this.userData.client_melody, this.userData.telephone, this.userData.email, this.userData.password);
    if(this.userData.client_id 
        && this.validateRegData(this.userData.name, this.userData.surname, this.userData.telephone, this.userData.email, this.userData.password, this.userData.confPassword)
        && this.checkPassIdentity(this.userData.password, this.userData.confPassword)
      ) {
      let loading = this.loadingCtrl.create({
          content: 'Сохранение данных пользователя...'
      });
      loading.present();
      this.apiServiceProvider.set_user_data(this.userData).then((data: any) => {
        loading.dismiss();
        this.toastShow('Данные пользователя сохранены');
      });
    } /* else {
        this.toastShow('Пустые поля не допустимы');
    } */
  }

  validateRegData(name, lname, phone, email, pass, confpass) {
    if(name == undefined || name == ''){
      this.toastShow('Введите имя');
      return false;
    } else if (lname == undefined || lname == '') {
      this.toastShow('Введите фамилию');
      return false;
    } else if (phone == undefined || phone == '') {
      this.toastShow('Введите телефон');
      return false;
    } else if (email == undefined || email == '') {
      this.toastShow('Введите Email');
      return false;
    } else if (!this.checkMail(email)) {
      this.toastShow('Не валидный Email');
      return false;
    } else if (pass == undefined || pass == '') {
      this.toastShow('Введите пароль');
      return false;
    } else if (confpass == undefined || confpass == '') {
      this.toastShow('Подтвердите пароль');
      return false;
    }
    return true;
  }

  checkPassIdentity(pass, confpass) {
    if(pass === confpass){
      return true;
    } else {
      //this.presentAlert('Пароли не совпадают');
      this.toastShow('Пароли не совпадают');
      return false;
    }
  }

  switchDay(arg) {
    this.eventDay = arg;
  }

  switchNtf(arg) {
    this.eventNtf = arg;
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

  saveData() {
    this.setUserData();
  }

}
