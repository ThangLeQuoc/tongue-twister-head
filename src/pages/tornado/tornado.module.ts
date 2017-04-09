import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Tornado } from './tornado';

@NgModule({
  declarations: [
    Tornado,
  ],
  imports: [
    IonicModule.forChild(Tornado),
  ],
  exports: [
    Tornado
  ]
})
export class TornadoModule {}
