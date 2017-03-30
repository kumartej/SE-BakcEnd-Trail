import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Calendar} from '@ionic-native/calendar';

/*
  Generated class for the Calendar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) { 
  	this.calendar.createCalendar('MyCalendar').then(
	  (msg) => { console.log(msg); },
	  (err) => { console.log(err); }
	);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  addToCalendar(){
  	console.log("addToCalendar");
  }

}
