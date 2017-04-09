import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Cyclone } from './cyclone';

@NgModule({
  declarations: [
    Cyclone,
  ],
  imports: [
    IonicModule.forChild(Cyclone),
  ],
  exports: [
    Cyclone
  ]
})
export class CycloneModule {}
