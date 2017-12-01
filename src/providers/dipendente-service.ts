import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
import {ToastController} from "ionic-angular";
import {GlobalVariables} from "../providers/global-variables";


@Injectable()


export class DipendenteService {

    constructor(private http:Http, private network: Network, private toastCtrl:ToastController) {

      // watch network for a disconnect
      this.network.onDisconnect().subscribe(() => {
        this.presentToast("network was disconnected :-(");
        console.log('network was disconnected :-(');
      });
    }


  /**
   *
   * @param dipendenteName
   * @returns {Observable<any>}
   */

    searchDipendentes(dipendenteName) {
      var serverUrl = GlobalVariables.myvars.rubrica_server;
      var url = serverUrl+'?chiave=' + encodeURI(dipendenteName);
      var response = this.http.get(url).map(res => res.json());
    return response;
    }

  /**
   *
   * @param msg
   */

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
