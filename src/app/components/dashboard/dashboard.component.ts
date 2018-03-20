import { Component, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  balance : number = 200;
  totalPointsInCirculation : number = 5500;
  rank : number = 2;
  wins : number = 3;
  losses : number = 5;
  totalPlayers : number = 335;

  constructor() { }

  ngOnInit() {
    
  }

}
