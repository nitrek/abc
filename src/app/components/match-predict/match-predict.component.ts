import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-match-predict',
  templateUrl: './match-predict.component.html',
  styleUrls: ['./match-predict.component.css']
})
export class MatchPredictComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jQuery('select').material_select();
  }

  updateRange(event) {
    console.log("Inside updateRange ", event.target.value);
  }

  updateMe() {
    console.log("Update me");
  }

  onClickMe() {
    console.log("You are my hero!");
  }
}
