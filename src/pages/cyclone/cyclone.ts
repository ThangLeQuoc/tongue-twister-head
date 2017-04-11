import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from "angularfire2";
// Text to speech
import { TextToSpeech } from '@ionic-native/text-to-speech';

/**
 * Generated class for the Cyclone page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-cyclone',
  templateUrl: 'cyclone.html',
})
export class Cyclone {

  cycloneTwisterList: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private angularFire: AngularFire,private textToSpeech: TextToSpeech ) {
    this.cycloneTwisterList = angularFire.database.list('/cyclone');
  }

playTwister(twisterText) {
    this.textToSpeech.speak(twisterText).catch((err) => {
      let alert = this.alertCtrl.create({
        title: "Something happened",
        message: err
      });
      alert.present();
    });
  }
  

  /** Add new twister */
  addTwister() {
    let alert = this.alertCtrl.create({
      title: "Create new twister",
      message: "Let's create some cruel storm",
      inputs: [{
        name: "txtTwister",
        placeholder: "Text"
      }],
      buttons: [{
        text: "Cancel",
        role: "cancel"
      }, {
        text: 'Save',
        handler: data => {
          this.cycloneTwisterList.push({ text: data.txtTwister });
        }
      }]
    });

    alert.present();
  }

  /**
   * Edit Twister
   * @param twisterKey : Twisterkey
   * @param twisterText : TwisterText
   */
  editTwister(twisterKey, twisterText) {
    let alert = this.alertCtrl.create({
      title: 'Edit twister',
      message: ' Lessen, or pump it up!',
      inputs: [{
        name: "txtTwister",
        placeholder: "Text",
        value: twisterText
      }],
      buttons: [{
        text: 'Update',
        handler: (data) => {
          this.cycloneTwisterList.update(twisterKey, {text: data.txtTwister});
        }
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    });

    alert.present();
  }

 /**
  * Remove twister
  * @param twisterKey Twister key to be removed
  */
  removeTwister(twisterKey) {
    let alert = this.alertCtrl.create({
      title: 'Remove twister',
      message: 'Shall we dispel this lovely one ?',
      buttons: [{
        text: 'Yup !',
        handler: () => {
          this.cycloneTwisterList.remove(twisterKey);
        }
      }, {
        text: 'Nope',
        role: 'cancel'
      }]
    });

    alert.present();
  }

}
