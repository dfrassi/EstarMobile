import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {GlobalVariables} from "../../providers/global-variables";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage {

  appname: string;

  constructor(public navCtrl: NavController) {
    this.appname = GlobalVariables.myvars.appname;
  }

  login(){
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

}
