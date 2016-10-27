import { Component } from '@angular/core';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { Youtube } from '../youtube/youtube';
import { About } from '../about/about';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {

  tab1Root: any = HelloIonicPage;
  tab2Root: any = About;
  tab3Root: any = Youtube;

  constructor() {

  }

}
