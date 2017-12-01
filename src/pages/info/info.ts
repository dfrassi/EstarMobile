import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";
import { Loading} from 'ionic-angular';
import {MyLoader} from "../../providers/myloader";

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

	dipendente: {};




	constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber, public loader: MyLoader) {

    /// recuperiamo l'oggetto loader già instanziato
    let localloading: Loading;
     localloading =  loader.presentLoadingDefault();
    this.dipendente = navParams.get('dipendente');
    localloading.dismiss();


	}

	public xcallNumber(number){
    this.callNumber.callNumber(number, true).
    then(()=>console.log('Chiamata telefonica in corso.....')).
    catch(()=>alert('Il tuo dispositivo non supporta la chiamata diretta'));

  }

  public launchMailTo(mail){
	  window.open('mailto:'+mail);

  }

  public launchDirections(address) {

   /* if (this.platform.is('ios')) {
      alert("sei su ios");
    }
    if (this.platform.is('android')) {
      alert("sei su android");
    }
    if (this.platform.is('browser')) {
      alert("sei su browser");
    }*/
    address = "https://www.google.com/maps/search/" + address;
     window.open(address, '_blank');
  }


}
