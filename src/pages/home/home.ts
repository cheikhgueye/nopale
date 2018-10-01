import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RechargerPage } from '../../pages/recharger/recharger';
import { SoldePage } from '../../pages/solde/solde';
import { HistoriquesPage } from '../../pages/historiques/historiques';
import { AbonnementPage } from '../../pages/abonnement/abonnement';
import { AssistancePage } from '../../pages/assistance/assistance';
import { AproposPage } from '../../pages/apropos/apropos';






@IonicPage({
  name:"page-home"
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{title: string, component: any}>= [
    { title: 'Acuueil', component: HomePage },
    { title: 'recharger', component: RechargerPage },
    { title: 'solde', component: SoldePage },
    { title: 'historique', component: HistoriquesPage },
    { title: 'abonnement', component: AbonnementPage },
    { title: 'assistance', component: AssistancePage },
    { title: 'A propos', component: AproposPage },
  ];;



  constructor(public navCtrl:NavController, public navParams:NavParams) {
  }
  ionViewDidLoad() {


    }
     nav(page){
      switch (page) {
        case 'rech':  this.navCtrl.push(RechargerPage)

          break;
        case 'sold':  this.navCtrl.push(SoldePage)

          break;
        case 'his':  this.navCtrl.push(HistoriquesPage)

          break;

        case 'ab':  this.navCtrl.push(AbonnementPage)

          break;
        case 'ass':  this.navCtrl.push(AssistancePage )

          break;


        default:  this.navCtrl.push(HomePage)
          break;
      }
    ;
     }
}
