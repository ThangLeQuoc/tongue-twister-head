import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { GoogleChartComponent } from "../../components/google-chart.component";

/**
 * Generated class for the Overview page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class Overview {

  // Twister List
  whirlwindTwisterList: FirebaseListObservable<any>;
  cycloneTwisterList: FirebaseListObservable<any>;
  tornadoTwisterList: FirebaseListObservable<any>;

  numberOfTwisters: number = 12;


  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private angularFire: AngularFire) {
    this.whirlwindTwisterList = angularFire.database.list('/whirlwind');
    this.cycloneTwisterList = angularFire.database.list('/cyclone');
    this.tornadoTwisterList = angularFire.database.list('/tornado');
  }

  
 
}
