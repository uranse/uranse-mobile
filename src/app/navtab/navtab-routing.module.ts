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
        loadChildren: () => import('../pages/shipping/shipping.module').then(m => m.ShippingPageModule)
        // children: [
        //   {
        //     path: '',
        //     loadChildren: () =>
        //       import('../pages/shipping/shipping.module').then(m => m.ShippingPageModule)
        //   },
          // {
          //   path: 'shippingform',
          //   loadChildren: () =>
          //     import('../pages/shipping/shipping-form/shipping-form.module').then(m => m.ShippingFormPageModule)
          // },
          // {
          //   path: 'shippinghistory',
          //   loadChildren: () =>
          //     import('../pages/shipping/shipping-history/shipping-history.module').then(m => m.ShippingHistoryPageModule)
          // }
        //]
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
