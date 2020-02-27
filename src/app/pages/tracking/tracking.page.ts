import { SpinnerService } from './../../services/spinner.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {

  constructor(public spinner: SpinnerService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.spinner.presentLoading();
  }
  ionViewDidEnter() {
    this.spinner.dismiss();
  }

}
