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
    console.log('Hello ApiServiceProvider Provider');

  }

  apiСonnect(form){
    return new Promise((resolve,reject) => {
            const formData = new FormData();
            formData.append('auth_data[login]', form.login);
            formData.append('auth_data[password]', form.password);

          this.http.post(App.API, formData)
            .subscribe(data => {
              resolve(data);
            },
            error=>{
                reject(error);
            } );
        });
  }

}
