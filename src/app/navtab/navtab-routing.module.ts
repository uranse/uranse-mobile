import { NgModule } from '@angular/core';
import { HomeGuard } from './../guards/home.guard';
import { Routes, RouterModule } from '@angular/router';
import { NavtabPage } from './navtab.page';

const routes: Routes = [
  {
    path: 'home',
    component: NavtabPage,
    canActivate: [HomeGuard],
    children: [
      {
        path: 'track',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/tracking/tracking.module').then(m => m.TrackingPageModule)
          }
        ]
      },
      {
        path: 'ship',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/shipping/shipping.module').then(m => m.ShippingPageModule)
          }
        ]
      },
      {
        path: 'estimate',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/estimate/estimate.module').then(m => m.EstimatePageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/track',
        pathMatch: 'full'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavtabPageRoutingModule {}
