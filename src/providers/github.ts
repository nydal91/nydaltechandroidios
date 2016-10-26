import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';

/*
  Generated class for the Github provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Github {


 
  constructor(public http: Http) {
    console.log('Hello Github Provider');
  }
 

	       getUser(){
			return  this.http.get('https://api.github.com/users/nydal91')
			.map(res => res.json());
			  }


			    getRepos(){
				    	  return  this.http.get('https://api.github.com/users/nydal91/repos')
					  	  .map(res => res.json());
						  	    }

}
