import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsItemComponent } from './pages/details-item/details-item.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'details/:id', component: DetailsItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
