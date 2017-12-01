import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, URLSearchParams, Request, RequestOptions, RequestMethod } from '@angular/http';
import { Loading} from 'ionic-angular';
import {MyLoader} from "./myloader";
import {GlobalVariables} from "./global-variables";


/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/


@Injectable()


export class AuthService {

  myload: MyLoader;

  constructor(public http: Http, public loader: MyLoader) {
    this.myload = loader;
    console.log('Hello AuthService Provider');
  }

  /**
   *
   * @param credentials
   * @param type
   * @returns {Promise<any>}
   */

  postData(credentials, type) {

    type = "";

    let headers = new Headers();

    let params: URLSearchParams = new URLSearchParams();

    params.set('username', credentials.username);
    params.set('password', credentials.password);

    let options = new RequestOptions({
      method: RequestMethod.Post,
      url: GlobalVariables.myvars.auth_server, // indirizzo del servizio
      search: '', //querystring simile alla get
      body: params, // parametri passati nel body
      headers: headers
    });

    return new Promise((resolve, reject) =>{
      let localloading: Loading;
      localloading = this.myload.presentLoadingDefault();
      this.http.request(new Request(options)).
      subscribe(res =>{
        resolve(res.json());
        localloading.dismiss();
      }, (err) =>{
        reject(err);
      });
    });
  }
}




