import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { Overview } from "../pages/overview/overview";
import { Whirlwind } from "../pages/whirlwind/whirlwind";
import { Cyclone } from "../pages/cyclone/cyclone";
import { Tornado } from "../pages/tornado/tornado";
import { Broadcasting } from "../pages/broadcasting/broadcasting";
import { GoogleChartComponent } from "../components/google-chart.component";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from "angularfire2";

import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

export const firebaseConfig = {
  apiKey: "AIzaSyDU7vWpWfEpYqagkmcmOEVqZDlzS0lTHt4",
  authDomain: "tongue-twister-puzzles.firebaseapp.com",
  databaseURL: "https://tongue-twister-puzzles.firebaseio.com",
  projectId: "tongue-twister-puzzles",
  storageBucket: "tongue-twister-puzzles.appspot.com",
  messagingSenderId: "633182245850"
}


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Overview,
    Whirlwind,
    Cyclone,
    Tornado,
    GoogleChartComponent,
    Broadcasting
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    Overview,
    Whirlwind,
    Cyclone,
    Tornado,
    Broadcasting
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TextToSpeech,
    SpeechRecognition
  ]
})
export class AppModule { }
