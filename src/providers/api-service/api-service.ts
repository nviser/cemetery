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
            
                formData.append('auth_data', form);
                // formData.append('password', form.password);
                // formData.append('login', form.login);
            
            // formData.append('data', JSON.stringify(this.form));
          this.http.post(App.API, formData)
            /* .map(res => res.json()) */
            .subscribe(data => {
              resolve(data);
            },
            error=>{
                reject({error:"error"});
            });
        });
  }

}
