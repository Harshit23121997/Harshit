import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlipPageComponent } from './flip-page/flip-page.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'',component:FlipPageComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
