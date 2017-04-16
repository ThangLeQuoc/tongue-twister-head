import { Component } from '@angular/core';

import { Overview } from "../overview/overview";
import { Whirlwind } from "../whirlwind/whirlwind";
import { Cyclone } from "../cyclone/cyclone";
import { Tornado } from "../tornado/tornado";
import { Broadcasting } from "../broadcasting/broadcasting";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  overviewRoot = Overview;
  whirlwindRoot = Whirlwind;
  cycloneRoot = Cyclone;
  tornadoRoot = Tornado
  broadcastingRoot = Broadcasting;
  constructor() {

  }
}
