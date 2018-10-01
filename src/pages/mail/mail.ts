import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the MailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mail',
  templateUrl: 'mail.html',
})
export class MailPage {

  constructor(private emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailPage');
  }
  send()
  {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });

     let email = {
       to: 'kheuchebambiste@gmail.com',
       cc: 'erika@mustermann.de',
     //  bcc: ['john@doe.com', 'jane@doe.com'],
       attachments: [

       ],
       subject: 'nopale',
       body: 'cheikh gueye yangui yeungueul ',
       isHtml: true
     };

     // Send a text message using default options
     this.emailComposer.open(email);
  }

}
