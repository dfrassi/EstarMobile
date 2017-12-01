import { LoadingController, Loading } from 'ionic-angular';
import { Injectable } from '@angular/core';


@Injectable()


/**
 * claase Injectable che espone un oggeto Loading pronto per il loader nelle attese di caricamento
 */

export class MyLoader {

  public loading: Loading;

  constructor(public loadingCtrl: LoadingController) {
  }


  public presentLoadingDefault() {

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();

    setTimeout(() => {
      this.loading.dismiss();
    }, 10000);

    return this.loading;

  }
}
