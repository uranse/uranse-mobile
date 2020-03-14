import { PackageTypes } from './../../../config/packageTypes';
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
  packageTypes = [];
  step = 0;
  totalStep = 4;
  progressValue = this.step / this.totalStep;
  maxWeight;
  maxHeight;
  maxLength;
  maxWidth;

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
    'weight': [
      { type: 'required', message: 'Weight is required.' },
      { type: 'pattern', message: 'Weight entered is invalid.' },
      { type: 'min', message: 'Weight min value not met.' },
      { type: 'max', message: 'Weight max value exceeded.' },
    ],
    'length': [
      { type: 'required', message: 'Length is required.' },
      { type: 'pattern', message: 'Length entered is invalid.' },
      { type: 'min', message: 'Length min value not met.' },
      { type: 'max', message: 'Length max value exceeded.' },
    ],
    'width': [
      { type: 'required', message: 'Width is required.' },
      { type: 'pattern', message: 'Width entered is invalid.' },
      { type: 'min', message: 'Width min value not met.' },
      { type: 'max', message: 'Width max value exceeded.' },
    ],
    'height': [
      { type: 'required', message: 'Height is required.' },
      { type: 'pattern', message: 'Height entered is invalid.' },
      { type: 'min', message: 'Height min value not met.' },
      { type: 'max', message: 'Height max value exceeded.' },
    ],
    'value': [
      { type: 'pattern', message: 'value entered is invalid.' }
    ],
    'description': [
      { type: 'minlength', message: 'description must be at least 5 characters long.' },
      { type: 'maxlength', message: 'description cannot be more than 100 characters long.' },
    ],
  };
  constructor(private router: Router, private alert: AlertService, private spinner: SpinnerService) { }

  ionViewWillEnter() {
   this.spinner.presentLoading();
  }
  ionViewDidEnter() {
   this.spinner.dismiss();
  }

  ngOnInit(): void {
    this.step = 0;
    this.countries = COUNTRYLIST;
    this.states = this.countries[0].states;
   // this.packageTypes = PackageTypes;
   // this.packaging = '';
    this.maxWeight = 150;
    this.maxHeight = 100;
    this.maxLength = 100;
    this.maxWidth = 100;
    // this.maxHeight = PackageTypes[0].maxHeight;
    // this.maxLength = PackageTypes[0].maxLength;
    // this.maxWidth = PackageTypes[0].maxLength;
    //this.dimenssionUnit = '';
    //this.packageDescription = PackageTypes[0].description;
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
      'state': new FormControl({disabled: true}, Validators.required),
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
      'state': new FormControl({disabled: true}, Validators.required),
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
      //'packageType': new FormControl(this.packageTypes[0], Validators.required),
      'weight': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*(\\.\\d{1,2})?$'),
        Validators.min(1),
        Validators.max(this.maxWeight)
      ])),
      'length': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
        Validators.max(this.maxLength)
      ])),
      'width': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
        Validators.max(this.maxWidth)
      ])),
      'height': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
        Validators.max(this.maxHeight)
      ])),
      'description': new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(100)
      ])),
      'value': new FormControl('', Validators.pattern('^[0-9]*$')),
      'isHazardous': new FormControl('false'),
      'requireSignature': new FormControl('false'),
    });

  }
  onCountryChange(e) {
    this.states = e.target.value.states;
  }
  // onChangePackaging(e) {
  //   //this.packaging = e.target.value.type;
  //   this.maxWeight = e.target.value.maxWeight;
  //   this.maxHeight = e.target.value.maxHeight;
  //   this.maxLength = e.target.value.maxLength;
  //   this.maxWidth = e.target.value.maxWidth;
  //   this.dimenssionUnit = e.target.value.lengthUnit;
  //   this.packageDescription = e.target.value.description;
  // }

  next() {
    this.spinner.presentLoading();
    this.step += 1;
    this.spinner.dismiss();
    this.progressValue = this.step / this.totalStep;
  }

  prev() {
    this.spinner.presentLoading();
    if (this.step === 0) {
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
