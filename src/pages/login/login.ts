import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { HomePage} from '../home/home';
import {AuthService} from "../../providers/auth-service";
import {Md5} from 'ts-md5/dist/md5';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {

  responseData : any;
  public userData = {"username":"", "password":"", "esito":"0"};
  network: Network;


  /**
   *
   * @param {NavController} navCtrl
   * @param {AuthService} authService
   * @param {ToastController} toastCtrl
   * @param {Storage} storage
   */

  constructor(network: Network, public navCtrl: NavController, public authService: AuthService, private toastCtrl:ToastController, public storage: Storage) {


    this.network = network;

    var username = "";
    this.storage.get('username').then((thisUid) => {
      console.log('storage->username: ', thisUid);
      username = thisUid;
      this.userData.username = username;
    });


    var password = "";
    this.storage.get('password').then((thisUid) => {
      console.log('storage->password: ', thisUid);
      password = thisUid;
      this.userData.password = password;
    });

    /*this.storage.get('userData').then((storedUserData) => {
      this.userData = storedUserData;
    });*/

  }

  /**
   *
   */

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  /**
   *
   */

  login(){

    if(this.userData.username && this.userData.password){

    //  this.storage.set('userData',this.userData);

      this.storage.set('username',this.userData.username);
      this.storage.set('password',this.userData.password);

      console.log("username e password salvate nello storage");

      this.userData.password = Md5.hashStr(this.userData.password).toString();

      let disconnectSubscription = this.network.onDisconnect().subscribe(() => {

        this.presentToast('network was disconnected :-(',10000);
        this.navCtrl.push(HomePage);
      });

      this.authService.postData(this.userData, "login").then((result) =>{
        // watch network for a disconnect

        this.responseData = result;
        disconnectSubscription.unsubscribe();
        console.log(this.responseData);
        if(this.responseData.userData && this.responseData.userData.esito=="1"){
          localStorage.setItem('userData', JSON.stringify(this.responseData) )
          this.navCtrl.push(HomePage);
        }
        else{
          this.presentToast("Please give valid username and password");
        }
      }, (err) => {
        this.presentToast("Please check network connection");
      });
    }
    else{
      this.presentToast("Give username and password");
    }

  }

  /**
   *
   * @param msg
   */

  presentToast(msg, myDuration=4000) {

    let toast = this.toastCtrl.create({
      message: msg,
      duration: myDuration
    });
    toast.present();
  }

  /**
   *
   * @returns {{username: ""; password: ""; esito: string}}
   */

  public getUserid(){

    var username = "";
    this.storage.get('username').then((thisUid) => {
      console.log('storage->username: ', thisUid);
      username = thisUid;
    });
    return username;

  }

  /**
   *
   * @returns {string}
   */

  public getPasswd(){

    var password = "";
    this.storage.get('password').then((thisUid) => {
      console.log('storage->password: ', thisUid);
      password = thisUid;
    });

    return password;
  }
}
