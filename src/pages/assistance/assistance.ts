import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { MailPage } from '../../pages/mail/mail';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the AssistancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assistance',
  templateUrl: 'assistance.html',
})
export class AssistancePage {

  constructor(private emailComposer: EmailComposer,
    private callNumber: CallNumber,
    public navCtrl: NavController,
     public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssistancePage');
  }
  appeler()
  {
    this.callNumber.callNumber("774262278", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
  send()
  {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });

     let email = {
       to: 'nopale@gmail.com',
       cc: 'kheuche@gmail.com',
     //  bcc: ['john@doe.com', 'jane@doe.com'],
       attachments: [

       ],
       subject: '',
       body: '',
       isHtml: true
     };

     // Send a text message using default options
     this.emailComposer.open(email);
  }


}
