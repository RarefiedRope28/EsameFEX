import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractionsListComponent } from './attractions-list/attractions-list.component';
import { DetailsAttractionComponent } from './details-attraction/details-attraction.component';
import { GiveFeedbackComponent } from './give-feedback/give-feedback.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: AttractionsListComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'attractions-list', component: AttractionsListComponent },
  { path: 'attraction/:id', component: DetailsAttractionComponent },
  { path: 'feedback', component: GiveFeedbackComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
