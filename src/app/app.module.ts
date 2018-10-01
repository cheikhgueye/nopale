import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MailPage } from '../pages/mail/mail';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RechargerPage } from '../pages/recharger/recharger';
import { SoldePage } from '../pages/solde/solde';
import { HistoriquesPage } from '../pages/historiques/historiques';
import { AbonnementPage } from '../pages/abonnement/abonnement';
import { AssistancePage } from '../pages/assistance/assistance';
import { NFC } from "@ionic-native/nfc";
import { EmailComposer } from '@ionic-native/email-composer';
import { LoginPage } from '../pages/login/login';

import { CallNumber } from '@ionic-native/call-number';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RechargerPage,
    SoldePage ,
    HistoriquesPage ,
    AbonnementPage,
    AssistancePage,
    LoginPage ,
    MailPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RechargerPage,
    SoldePage ,
    HistoriquesPage ,
    AbonnementPage,
    AssistancePage,
    LoginPage ,
    MailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    EmailComposer,
    NFC ,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
