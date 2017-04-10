import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Twister } from "../../models/twister";
/**
 * Generated class for the Whirlwind page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-whirlwind',
  templateUrl: 'whirlwind.html',
})
export class Whirlwind {
  whirlwindTwisterList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private angularFire: AngularFire) {
    this.whirlwindTwisterList = angularFire.database.list('/whirlwind');
  }



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
          this.whirlwindTwisterList.push({ text: data.txtTwister });
        }
      }]
    });

    alert.present();
  }
}
