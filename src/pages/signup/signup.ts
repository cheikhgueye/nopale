import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { Etudiant } from '../../providers/main/etudiant';
import { MainServiceProvider } from '../../providers/main/main-service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newuser ={} as  Etudiant;
  etudiants: Etudiant[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController, public toastCtrl: ToastController,private mpro:MainServiceProvider) {
                mpro.getEtudiants().then(data=>{
                  this.etudiants=data as Etudiant[];
                })
  }

  signup() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'top'
    });
    if (this.newuser.nom == '' || this.newuser.password == '' || this.newuser.numCarte == '' || this.newuser.numero == null ) {
      toaster.setMessage('toutes les champs sont obligatoires');
      toaster.present();
    }
    else if (this.newuser.password.length < 4 ) {
      toaster.setMessage('Password is not strong. Try giving more than six characters');
      toaster.present();
    }
    else {


      var nu= this.newuser;
      var numT =  this.etudiants.find(function(e) {
        return e.numero== nu.numero ;
      });
      var numC =  this.etudiants.find(function(e) {
        return e.numCarte== nu.numCarte ;
      });
      if(numT){
        toaster.setMessage('un utilisateur avec ce num existe deja !!');
        toaster.present();

      }else if(numC){
        toaster.setMessage('un utilisateur avec ce numC existe deja !!');
        toaster.present();
      }
      else{
        let loader = this.loadingCtrl.create({
          content: 'Please wait'
        });
        loader.present();
        this.mpro.save(this.newuser).subscribe(data=>{
          loader.dismiss();
          console.log(data)

        })




      }

      console.log( this.newuser as Etudiant)
    }
  }

  goback() {
    this.navCtrl.setRoot(  LoginPage);


  }

}
