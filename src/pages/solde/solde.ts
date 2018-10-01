import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NFC } from "@ionic-native/nfc";

/**
 * Generated class for the SoldePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solde',
  templateUrl: 'solde.html',
})
export class SoldePage {

num;


  constructor(public navCtrl: NavController, private nfc: NFC) {

  }



  ionViewDidEnter() {
    this.num=localStorage.getItem('numero')

  }


}
