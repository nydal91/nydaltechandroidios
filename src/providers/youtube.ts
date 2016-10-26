import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import {Ytube} from './video';
/*
  Generated class for the Youtube provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Youtubes {


  constructor(public http: Http) {
    console.log('Hello Youtube Provider');
  }

      private ytubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCawWymaUsPb5PW8DuGKPrKQ&maxResults=50&order=date&key=AIzaSyCeHtt_GzJwkjRwWutAbhEDxCan0Ws8yME';
				    getVideos() {
					    			            return this.http.get(this.ytubeURL)
									    				                .map(res => <Ytube[]> res.json().items)
																					            .do(data => console.log(data))
																						    							                .catch(this.errorHandler);
																																								    }
																																								    									        private errorHandler (error: Response) {
																																																														        console.error(error);
																																																																											        return Observable.throw(error.json().error || 'Server error');
																																																																																									    }




}
