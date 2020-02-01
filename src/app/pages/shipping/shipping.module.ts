import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterModule, Routes } from '@angular/router';

import { ShippingPage } from './shipping.page';

const routes: Routes = [
  {
    path: '',
    component: ShippingPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShippingPage]
})
export class ShippingPageModule {}
