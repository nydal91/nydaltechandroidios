import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class About {
   items: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, af: AngularFire) {

     this.items = af.database.object('/items');
  }


  ionViewDidLoad() {
    console.log('Hello About Page');
  }
    

}
