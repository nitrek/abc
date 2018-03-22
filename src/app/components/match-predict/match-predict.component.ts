import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import * as moment from 'moment';

declare var jQuery:any;

@Component({
  selector: 'app-match-predict',
  templateUrl: './match-predict.component.html',
  styleUrls: ['./match-predict.component.css']
})
export class MatchPredictComponent implements OnInit, AfterViewInit {

  todaysTeams;
  isDataLoaded:boolean = false;

  //data fields
  tossWinner:string;
  highestScorer:string;
  highestWicketTaker:string;
  matchWinner:string;
  manOfTheMatch:string;
  score:number;

  tossWinnerBet:string;
  highestScorerBet:string;
  highestWicketTakerBet:string;
  matchWinnerBet:string;
  manOfTheMatchBet:string;
  scoreBet:number;

  constructor(private http : Http) { }

  ngOnInit() {
    const url = './../assets/teams.json';
    console.log("isDataLoaded" + this.isDataLoaded);

    this.http.get(url).subscribe(
      (data) => {
        this.todaysTeams = data.json().filter(team => team.teamid == 'CSK' || team.teamid == 'DD');
        console.log("Todays team ", this.todaysTeams);
        this.isDataLoaded = true;
        console.log("isDataLoaded " + this.isDataLoaded);
        jQuery('select').material_select();
      }
    )
  }

  ngAfterViewInit() {
    jQuery('select').material_select();
    console.log("Materilize initialized");
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

  handleEvent(eventData, action:string) {
    console.log("Entered handleEvent");
    
    switch(action) {
      case 'tossWinnerEvent' :
        this.tossWinner = eventData.target.value;
        console.log("Toss Winner : ", this.tossWinner);
        break;
      case 'highestScorerEvent' :
        this.highestScorer = eventData;
        console.log("Highest Scorer : " + this.highestScorer);
        break;
    }
  }
}
