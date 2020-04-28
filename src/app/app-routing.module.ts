import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlipPageComponent } from './flip-page/flip-page.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {path:'',component:FlipPageComponent,data:{animation:'isLeft'}},
  {path:'landing',component:LandingComponent,data:{animation:''}},
  {path:'about',component:AboutComponent,data:{animation:'isRight'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
