import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RubricaPage} from "../rubrica/rubrica";
import {AboutPage} from "../about/about";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  rubricaPage: any;


  constructor(public navCtrl: NavController,private splashScreen: SplashScreen, public app: App) {

    this.rubricaPage = RubricaPage;

    this.splashScreen.show();
    this.splashScreen.hide();

  }

  openAbout(){
    // this.navCtrl.push(AboutPage); con tasto back
    this.navCtrl.setRoot(AboutPage); // senza tasto back
  }


}
