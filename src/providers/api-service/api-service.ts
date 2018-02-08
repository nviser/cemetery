import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as App from '../../config/app';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpClient) {

  }

  authorization(form) {
            const formData = new FormData();
            formData.append('auth_data[login]', form.login);
            formData.append('auth_data[password]', form.password);
            return this.apiConnect(formData, App.API_LOGIN); 
  }

  registration(form) {
            const formData = new FormData();
            formData.append('auth_data[name]', form.name);
            formData.append('auth_data[surname]', form.surname);
            formData.append('auth_data[email]', form.email);
            formData.append('auth_data[telephone]', form.telephone);
            formData.append('auth_data[password]', form.password);
            return this.apiConnect(formData, App.API_REG); 
  }

  apiConnect(formData, api) {
    return new Promise((resolve,reject) => {

          this.http.post(api, formData)
            .subscribe(data => {
              resolve(data);
            },
            error=>{
                reject(error);
            });
        });

  }

}
