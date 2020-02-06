import { SHIPPINGPAGEROUTES } from './../../config/routes.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {
  shippingmenus = SHIPPINGPAGEROUTES;
  constructor() {
   }
  ngOnInit() {
  }
}
