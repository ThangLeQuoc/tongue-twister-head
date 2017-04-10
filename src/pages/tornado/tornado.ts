import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from "angularfire2";

/**
 * Generated class for the Tornado page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tornado',
  templateUrl: 'tornado.html',
})
export class Tornado {
  tornadoTwisterList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private angularFire: AngularFire) {
    this.tornadoTwisterList = angularFire.database.list('/tornado');
  }



  /**
   * Add Twister
   */
  addTwister() {
    let alert = this.alertCtrl.create({
      title: "Create new twister",
      message: "Let's create some cruel storm",
      inputs: [{
        name: 'txtTwister',
        placeholder: 'Text'
      }],
      buttons: [{
        text: 'Cancel',
        role: "Cancel"
      }, {
        text: 'Save',
        handler: data => {
          this.tornadoTwisterList.push({ text: data.txtTwister });
        }
      }]
    });
    alert.present();
  }


/**
 * Update Twister
 * @param twisterKey : TwisterKey to be updated
 * @param twisterText : Twister Text
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
          this.tornadoTwisterList.update(twisterKey, {text: data.txtTwister});
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
          this.tornadoTwisterList.remove(twisterKey);
        }
      }, {
        text: 'Nope',
        role: 'cancel'
      }]
    });

    alert.present();
  }

}
