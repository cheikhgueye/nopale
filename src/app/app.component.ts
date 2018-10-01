import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RechargerPage } from '../pages/recharger/recharger';
import { SoldePage } from '../pages/solde/solde';
import { HistoriquesPage } from '../pages/historiques/historiques';
import { AbonnementPage } from '../pages/abonnement/abonnement';
import { AssistancePage } from '../pages/assistance/assistance';
import { AproposPage } from '../pages/apropos/apropos';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Acuueil', component: HomePage },
      { title: 'recharger', component: RechargerPage },
      { title: 'solde', component: SoldePage },
      { title: 'historique', component: HistoriquesPage },
      { title: 'abonnement', component: AbonnementPage },
      { title: 'assistance', component: AssistancePage },
      { title: 'A propos', component: AproposPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
