import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { Youtube } from '../pages/youtube/youtube';
import { About } from '../pages/about/about';
import { Tabs } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
   About,
    Youtube,
    Tabs
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
  About,
    Youtube,
    Tabs
  ],
  providers: []
})
export class AppModule {}
