import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogregComponent } from './logreg/logreg.component';
import { HomeComponent } from './home/home.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { BrowseComponent } from './browse/browse.component';



const routes: Routes = [
  {
    path: '',
    component: LogregComponent
  },
  {
    path:'home',
    component: HomeComponent,
    children: [
      {
        path:'my-list',
        component: MyListingsComponent
      },
      {
        path:'browse',
        component: BrowseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
