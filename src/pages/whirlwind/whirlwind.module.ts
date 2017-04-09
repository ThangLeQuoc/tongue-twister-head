import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Whirlwind } from './whirlwind';

@NgModule({
  declarations: [
    Whirlwind,
  ],
  imports: [
    IonicModule.forChild(Whirlwind),
  ],
  exports: [
    Whirlwind
  ]
})
export class WhirlwindModule {}
