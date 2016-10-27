import { Component } from '@angular/core';
import { Github } from '../../providers/github';

@Component({
  templateUrl: 'hello-ionic.html',
   providers: [Github]
})
export class HelloIonicPage {
      myIcon: string = "logo-github";
    errorMessage: string;

user:any;      
repos:any;
  
   constructor( public Github: Github) {
 
 }
    ngOnInit() { this.getUser(), this.getRepos();} 
  

getUser(){
this.Github.getUser().subscribe(user => 
//console.log(user);	
this.user = user,
error => this.errorMessage = <any>error
				       );}


getRepos(){
this.Github.getRepos().subscribe(repos => 
					 
//console.log(repos);
this.repos = repos, error => this.errorMessage =
<any>error
					 );}
}
