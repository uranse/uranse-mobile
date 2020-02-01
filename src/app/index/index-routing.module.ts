import { WelcomeGuard } from './../guards/welcome.guard';
import { IndexGuard } from './../guards/index.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    canActivate: [IndexGuard],
    children: [
      {
        path: '',
        canActivate: [WelcomeGuard],
        loadChildren: () => 
          import('../pages/welcome/welcome.module').then(
            m => m.WelcomePageModule
          )
      },
       {
        path: 'login',
        loadChildren: () => 
          import('../pages/login/login.module').then(
            m => m.LoginPageModule
          )
      },
      {
        path: 'authenticate',
        loadChildren: () => 
          import('../pages/authentication/authentication.module').then(
            m => m.AuthenticationPageModule
          )
      },
      {
        path: 'verification',
        loadChildren: () => 
          import('../pages/verification/verification.module').then(
            m => m.VerificationPageModule
          )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
