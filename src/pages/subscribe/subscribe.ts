import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
/*
  Generated class for the Subscribe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html',
    providers: [ UserService ]
})
export class SubscribePage {
   public depts=[];
   public types=['student','faculty','staff'];
   public years=['Firstyear','Second Year','third Year','fourth year'];
   
   public subArray = [];
   public i=0;
   
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
		this.userService.getNextLevel('1')
		.then(data => {
			console.log(data);
			this.subArray.push(data['data']);
		})
  	this.i=0;
  }
 
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribePage');
  }
    
   
    goToSlide(value) {
     	this.slides.lockSwipeToNext(false);
     	console.log(value);
		var i = this.i;
   		if(i>4){
   			this.navCtrl.pop();
   		}else{
   			this.userService.getNextLevel(value)
			.then(data => {
				console.log(data);
				this.subArray.push(data['data']);
				this.slides.slideNext(500, false);
			})
   		}
     	// let currentIndex = this.slides.getActiveIndex();
     	// this.slides.slideTo(currentIndex+1, 500);
    }
    
    popSlide(){
    	console.log(this.i);
    	if(this.i==0){
    		return false;
    	}else{
    		this.subArray.pop();
    		this.i=this.i-1;
    		return true;
    	}
    }
  }
