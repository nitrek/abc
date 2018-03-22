import { RouterModule, Routes } from '@angular/router';
import { MatchPredictComponent } from './components/match-predict/match-predict.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const appRoutes : Routes = [
    {path: '', component : HomePageComponent },
    {path: 'matchpredict', component : MatchPredictComponent}
];