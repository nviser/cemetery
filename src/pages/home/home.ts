import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  enterType: any;
  authData: any = {};
  regData: any = {};

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public loadingCtrl: LoadingController ) {

    this.enterType = 'login';

  }

  presentAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'Ошибка',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  checkAuthData() {
    if(this.authData.phone && this.authData.password && this.authData.phone.length > 0 && this.authData.password > 0){
      let loading = this.loadingCtrl.create({
            content: 'Авторизация. Подождите...'
        });
        loading.present();
      setTimeout(() => {
        this.goToMainPage();
        loading.dismiss();
      }, 3000);
    } else {
      this.presentAlert('Неправильные данные для входа');
    }
  }

  checkRegData() {
    if(this.validateRegData(this.regData.name, this.regData.lastName, this.regData.phone, this.regData.password, this.regData.confPassword) 
      && this.checkPassIdentity(this.regData.password, this.regData.confPassword)
    ){
      let loading = this.loadingCtrl.create({
            content: 'Регистрация. Подождите...'
        });
        loading.present();
      setTimeout(() => {
        this.goToMainPage();
        loading.dismiss();
      }, 3000);
    }
  }

  validateRegData(name, lname, phone, pass, confpass) {
    if(this.regData.name 
      && this.regData.lastName 
      && this.regData.phone 
      && this.regData.password 
      && this.regData.confPassword 
    ) {
      return true;
    } else {
      this.presentAlert('Неправильные данные для регистрации');
      return false;
    }
  }

  checkPassIdentity(pass, confpass) {
    if(pass === confpass){
      return true;
    } else {
      this.presentAlert('Пароли не совпадают');
      return false;
    }
  }

  goToMainPage(){
    this.navCtrl.push(AboutPage, {
      id: "about",
      name: "About"
    });
  }
  
}
