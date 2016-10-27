import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer} from '@angular/platform-browser';
import {Ytube} from '../../providers/video';
import { Youtubes } from '../../providers/youtube';
import {YoutubeVideoPlayer} from 'ionic-native';


/*
  Generated class for the Youtube page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
  providers: [Youtubes]
})
export class Youtube {


		      errorMessage: string;
		      	          videos: Ytube[];
  constructor(public navCtrl: NavController, public Youtubes: Youtubes, public sanitizer: DomSanitizer) {}

  ionViewDidLoad() {
    console.log('Hello Youtube Page');
  }





				  		         openVideo(id){
      YoutubeVideoPlayer.openVideo(id);
    }


									   																			 
									    
									   							   
									   							
						ngOnInit() { this.getVideos();}

																								  							           getVideos() {
																																	   									           this.Youtubes.getVideos()
																																											   										               .subscribe(
																																																							       												                       videos => this.videos = videos,
																																																																						       															                       error => this.errorMessage = <any>error
																																																																					       														                   );

																																																																																					   																       }


}
