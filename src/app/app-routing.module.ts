import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlipPageComponent } from './flip-page/flip-page.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { FriendsLandingComponent } from './friends-landing/friends-landing.component';


const routes: Routes = [
  {path:'',component:FlipPageComponent,data:{animation:'isLeft'}},
  {path:'landing',component:LandingComponent,data:{animation:'isRight'}},
  {path:'gallery',component:FriendsLandingComponent,data:{animation:'isLeft'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
