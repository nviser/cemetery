import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as App from '../../config/app';

@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpClient) {

  }

  authorization(form) {
    const sendForm = {auth_data: form};
    return this.apiConnect(sendForm, App.API + App.API_LOGIN); 
  }

  registration(form) {
    const sendForm = {auth_data: form};
    return this.apiConnect(sendForm, App.API + App.API_REG); 
  }

  get_user_data(id) {
    const client_id = {client_id: id};
    return this.apiConnect(client_id, App.API + App.API_GET_CLIENT);
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
