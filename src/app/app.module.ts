import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { MatchPredictComponent } from './components/match-predict/match-predict.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardComponent,
    MatchInfoComponent,
    MatchPredictComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterializeModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }) // <-- debugging purposes only)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
