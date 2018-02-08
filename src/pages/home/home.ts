import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ApiServiceProvider } from '../../providers/api-service/api-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  enterType: any;
  authData: any = {};
  regData: any = {};
  sendData: any = {};

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, 
    public loadingCtrl: LoadingController, public apiServiceProvider: ApiServiceProvider ) {

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

  /* apiСonnect(){
    return new Promise((resolve,reject) => {
          this.http.post('http://memorybook.secall.ru/index.php?route=client/auth/login', this.authData)
            .map(res => res.json())
            .subscribe(data => {
              resolve(data);
            },
            error=>{
                reject({error:"error"});
            });
        });
  } */

  checkAuthData() {
    if(this.authData.phone && this.authData.password && this.authData.phone.length > 0 && this.authData.password.length > 0){
      let loading = this.loadingCtrl.create({
            content: 'Авторизация. Подождите...'
        });
        loading.present();
        this.sendData.login = this.authData.phone;
        this.sendData.password = this.authData.password;

      this.apiServiceProvider.authorization(this.sendData).then((data: any) => {
        console.log(data);
        if(data.auth.client_id && data.auth.token){
            this.goToMainPage();
          } else {
            this.presentAlert(data.auth.no_client);
          }
        loading.dismiss();
      });
        
    } else {
      this.presentAlert('Неправильные данные для входа');
    }
  }

  checkRegData() {
    if(this.validateRegData(this.regData.name, this.regData.surname, this.regData.telephone, this.regData.password, this.regData.confPassword) 
      && this.checkPassIdentity(this.regData.password, this.regData.confPassword)
    ){
      let loading = this.loadingCtrl.create({
            content: 'Регистрация. Подождите...'
        });
        loading.present();
        this.regData.email = this.regData.telephone + '@test.ru'

        this.apiServiceProvider.registration(this.regData).then((data: any) => {
          console.log(data);
          if(data.register && data.register.client_id && data.register.token){ 
            this.goToMainPage();
           } else {
            this.presentAlert(data.error.email);
          } 
          loading.dismiss();
        });
    }
  }

  validateRegData(name, lname, phone, pass, confpass) {
    if(name && lname && phone && pass && confpass) {
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
