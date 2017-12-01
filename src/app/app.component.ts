import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RubricaPage} from '../pages/rubrica/rubrica';
import { HomePage } from '../pages/home/home';
import {AboutPage} from "../pages/about/about";
import {GlobalVariables} from "../providers/global-variables";
import {WelcomePage} from "../pages/welcome/welcome";
import {SplitPaneProvider} from "../providers/split-pane";


@Component({
  templateUrl: 'app.html',
  providers: [GlobalVariables]
})


export class EstarMobile {



  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage; // qui ci va impostata la classe entry point, dalla quale si avvia l'app

  pages: Array<{title: string, component: any}>;

  appname: string;
  appversion: string;
  name: string;

  userData: {"username", "password", "esito"};

  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public splitPaneProvider: SplitPaneProvider) {
    console.log('export class EstarMobile');

    this.appname = GlobalVariables.myvars.appname;
    this.appversion = GlobalVariables.myvars.appversion;

    var userData = localStorage.getItem('userData');
    if (userData !=null) this.name = JSON.parse(userData).userData.name;


    this.initializeApp();

    // qui si elencano le pagine da visualizzare nel menu laterale

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Rubrica', component: RubricaPage },
      { title: 'About', component: AboutPage }
    ];

  }

  initializeApp() {
      this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      localStorage.clear();

    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  public logout(){

    // Remove API token
    localStorage.clear();
    this.nav.push(WelcomePage);

  }

  public loggedin(){

    if (localStorage.getItem('userData')){
      var userData = localStorage.getItem('userData');
      this.name = JSON.parse(userData).userData.name;
      return true;
    }
    else return false;
  }



}

