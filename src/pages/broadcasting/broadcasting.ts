import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

/**
 * Generated class for the Broadcasting page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-broadcasting',
  templateUrl: 'broadcasting.html',
})
export class Broadcasting {

  public startListening: boolean = false;
  public isAvailable: boolean;
  public hasPermission: boolean;

  speechList: Array<string> = [];

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, private alertController: AlertController) {



    /**
     * Perform feature check
     */
    this.speechRecognition.isRecognitionAvailable().then((available: boolean) => {
      this.isAvailable = available;
    }).catch(err => {
      let alert = this.alertController.create({
        title: "Something happened...",
        message: err
      });
      alert.present();
    });

    /**
     * Perform permission check
     */
    this.speechRecognition.hasPermission().then((permission: boolean) => {
      this.hasPermission = permission;
    }).catch(err => {
      let alert = this.alertController.create({
        title: "Something happened...",
        message: err
      });
      alert.present();
    });

    /**
     * Perform request check
     */
    this.speechRecognition.requestPermission().then(() => { }, () => {
      let alert = this.alertController.create({
        title: "Request Permission",
        message: "Denied"
      });
      alert.present();
    });
  }

  startRecording(): void {
    this.startListening = true;
    // Start the recognition process
    this.speechRecognition.startListening()
      .subscribe(
      (matches: Array<string>) => {
        this.speechList = matches;
        this.startListening = false;
      },
      (err) => {
        let alert = this.alertController.create({
          title: "Speech Recognition Error",
          message: err
        });
        alert.present();
        this.startListening = false;
      }
      );
  }










}
