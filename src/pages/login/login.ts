import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { usercreds } from '../../../model/userscred';
import { Etudiant } from '../../providers/main/etudiant';
import { MainServiceProvider } from '../../providers/main/main-service';
import { SignupPage } from '../../pages/signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;
  etudiants:Etudiant[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private mpro:MainServiceProvider, public toastCtrl: ToastController ) {
    mpro.getEtudiants().then(data=>{
      this.etudiants=data as Etudiant[];
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin() {
  //  localStorage.setItem('numero', "774262278")


  var numCre=this.credentials.numero
  var pass=this.credentials.password
  var x =  this.etudiants.find(function(e) {
    return e.numero== numCre && e.password==pass;
  });
       if(x){
this.navCtrl.setRoot(HomePage);
 localStorage.setItem('currentUser', JSON.stringify(x));

       }

    console.log(this.etudiants)


  }

  passwordreset() {

  }

  signup() {
    this.navCtrl.setRoot( SignupPage );


  }

}
