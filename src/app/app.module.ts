/**
 *
 * La classe app.module.ts è la classe iniziale di ogni app Ionic,
 * in essa vengono definite tutte le funzionalità previste
 * tramite il decorator @NgModule
 *
 */

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EstarMobile } from './app.component';
import { HomePage } from '../pages/home/home';
import { RubricaPage } from '../pages/rubrica/rubrica';
import { InfoPage } from '../pages/info/info';
import { AboutPage } from '../pages/about/about';
import { DipendenteService } from '../providers/dipendente-service';
import { CallNumber } from "@ionic-native/call-number";
import {GlobalVariables} from "../providers/global-variables";
import {WelcomePage} from "../pages/welcome/welcome";
import {LoginPage} from "../pages/login/login";
import { SplitPaneProvider } from '../providers/split-pane';
import { AuthService } from '../providers/auth-service';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import {MyLoader} from "../providers/myloader";


@NgModule({
  declarations: [
    EstarMobile,
    HomePage,
    AboutPage,
    RubricaPage,
    WelcomePage,
    LoginPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(EstarMobile)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    EstarMobile,
    HomePage,
    AboutPage,
    WelcomePage,
    LoginPage,
    RubricaPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DipendenteService,
    CallNumber,
    AuthService,
    Network,
    MyLoader,
    GlobalVariables,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplitPaneProvider
  ]
})

export class AppModule {}
