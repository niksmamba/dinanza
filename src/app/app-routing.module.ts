import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'chefSelection', loadChildren: './chef-selection/chef-selection.module#ChefSelectionPageModule' },
  { path: 'chefProfile', loadChildren: './chef-profile/chef-profile.module#ChefProfilePageModule' },
  { path: 'bookingDetails', loadChildren: './booking-details/booking-details.module#BookingDetailsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
