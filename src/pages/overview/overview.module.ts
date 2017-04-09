import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Overview } from './overview';

@NgModule({
  declarations: [
    Overview,
  ],
  imports: [
    IonicModule.forChild(Overview),
  ],
  exports: [
    Overview
  ]
})
export class OverviewModule {}
