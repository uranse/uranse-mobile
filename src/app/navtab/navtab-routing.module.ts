import { HomeGuard } from './../guards/home.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavtabPage } from './navtab.page';

const routes: Routes = [
  {
    path: '',
    component: NavtabPage
   // canActivate: [HomeGuard],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavtabPageRoutingModule {}
