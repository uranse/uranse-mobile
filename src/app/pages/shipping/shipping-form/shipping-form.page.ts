import { SpinnerService } from './../../../services/spinner.service';
import { AlertService } from './../../../services/alert.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {COUNTRYLIST} from './../../../config/countries';


@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.page.html',
  styleUrls: ['./shipping-form.page.scss'],
})
export class ShippingFormPage implements OnInit {
  senderForm: FormGroup;
  destinationForm: FormGroup;
  packageForm: FormGroup;
  countries = [];
  states = [];
  step = 1;
  totalStep = 4;
  progressValue = this.step / this.totalStep;

  validations = {
    'name': [
      { type: 'required', message: 'Name is required.' },
    ],
    'businessname': [
      { type: 'minlength', message: 'Business name must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Business name cannot be more than 50 characters long.' },
    ],
    'address1': [
      { type: 'required', message: 'Address is required.' },
      { type: 'minlength', message: 'Address must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Address cannot be more than 50 characters long.' },
    ],
    'address2': [
      { type: 'minlength', message: 'Address must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Address cannot be more than 50 characters long.' },
    ],
    'postalcode': [
      { type: 'minlength', message: 'Address must be at least 3 characters long.' },
      { type: 'maxlength', message: 'Address cannot be more than 6 characters long.' },
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'pattern', message: 'Enter a valid phone number.' }
    ],
    'city': [
      { type: 'required', message: 'City is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'weight':[
      { type: 'required', message: 'Weight is required.' },
      { type: 'pattern', message: 'Weight entered is not a number.' },
      { type: 'min', message: 'Weight min value not met.' },
      { type: 'max', message: 'Weight max value exceeded.' },
    ],
    'length':[
      { type: 'required', message: 'Length is required.' },
      { type: 'pattern', message: 'Length entered is not a whole number.' },
      { type: 'min', message: 'Length min value not met.' },
      { type: 'max', message: 'Length max value exceeded.' },
    ],
    'width':[
      { type: 'required', message: 'Width is required.' },
      { type: 'pattern', message: 'Width entered is not a whole number.' },
      { type: 'min', message: 'Width min value not met.' },
      { type: 'max', message: 'Width max value exceeded.' },
    ],
    'height':[
      { type: 'required', message: 'Height is required.' },
      { type: 'pattern', message: 'Height entered is not a number.' },
      { type: 'min', message: 'Height min value not met.' },
      { type: 'max', message: 'Height max value exceeded.' },
    ],
    'value':[
      { type: 'pattern', message: 'Weight entered is not a number.' }
    ]
  };
  constructor(private router: Router, private alert: AlertService, private spinner: SpinnerService) { }

  ionViewWillEnter() {
   this.spinner.presentLoading();
  }
  ionViewDidEnter() {
   this.spinner.dismiss();
  }

  ngOnInit(): void {
    this.countries = COUNTRYLIST;
    this.states = COUNTRYLIST[0].states;

    this.senderForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'businessname': new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5)
      ])),
      'country': new FormControl(this.countries[0], Validators.required),
      'address1': new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5),
        Validators.required
      ])),
      'address2': new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5)
      ])),
      'postalcode': new FormControl('', Validators.compose([
        Validators.maxLength(6),
        Validators.minLength(3)
      ])),
      'city': new FormControl('', Validators.required),
      'state': new FormControl(this.countries[0].states[0], Validators.required),
      'phone': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^\\+[1-9]\\d{1,14}$')
      ])),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    });

    this.destinationForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'businessname': new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5)
      ])),
      'country': new FormControl(this.countries[0], Validators.required),
      'address1': new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5),
        Validators.required
      ])),
      'address2': new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5)
      ])),
      'postalcode': new FormControl('', Validators.compose([
        Validators.maxLength(6),
        Validators.minLength(3)
      ])),
      'city': new FormControl('', Validators.required),
      'state': new FormControl(this.countries[0].states[0], Validators.required),
      'phone': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^\\+[1-9]\\d{1,14}$')
      ])),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    });

    this.packageForm = new FormGroup({
      'packageType': new FormControl('', Validators.required),
      'weight': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^\\d{0,3}(\\.\\d{1,2})?$'),
        Validators.min(1),
        Validators.max(150)
      ])),
      'length': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
        Validators.max(100)
      ])),
      'width': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
        Validators.max(100)
      ])),
      'height': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
        Validators.max(100)
      ])),
    });

  }
  onCountryChange(e) {
    this.states = e.target.value.states;
  };

  next() {
    this.spinner.presentLoading();
    this.step += 1;
    this.spinner.dismiss();
    this.progressValue = this.step / this.totalStep;
  }

  prev() {
    this.spinner.presentLoading();
    if (this.step === 1) {
      this.router.navigate(['home/ship']);
      this.senderForm.reset();
      this.destinationForm.reset();
      this.spinner.dismiss();
    } else {
      this.step -= 1;
      this.spinner.dismiss();
      this.progressValue = this.step / this.totalStep;
    }
  }
  navigateHome() {
    this.router.navigate(['/home']);
    this.senderForm.reset();
    this.destinationForm.reset();
  }
}
