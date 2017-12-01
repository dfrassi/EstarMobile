import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RubricaPage} from "../rubrica/rubrica";
import {AboutPage} from "../about/about";
import {GlobalVariables} from "../../providers/global-variables";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  rubricaPage: any;
  appname: string;
  appversion: string;

  constructor(public navCtrl: NavController,private splashScreen: SplashScreen, public app: App) {

    this.rubricaPage = RubricaPage;

    this.appname = GlobalVariables.myvars.appname;
    this.appversion = GlobalVariables.myvars.appversion;

    this.splashScreen.show();
    this.splashScreen.hide();

  }

  openAbout(){
    // this.navCtrl.push(AboutPage); con tasto back
    this.navCtrl.setRoot(AboutPage); // senza tasto back
  }


}
