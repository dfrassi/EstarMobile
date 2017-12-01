import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalVariables} from "../../providers/global-variables";

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',

})

export class AboutPage {

  appname: any;
  appversion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.appname = GlobalVariables.myvars.appname;
    this.appversion = GlobalVariables.myvars.appversion;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page);
  }
}
