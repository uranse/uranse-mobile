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
  countries = [];
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
  };
  constructor(private router: Router, private alert: AlertService, private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.countries = COUNTRYLIST;

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
  }
  next() {
    this.step += 1;
    this.progressValue = this.step / this.totalStep;
  }

  prev() {
    if (this.step === 1) {
      this.router.navigate(['home/ship']);
      this.senderForm.reset();
      this.destinationForm.reset();
    } else {
      this.step -= 1;
      this.progressValue = this.step / this.totalStep;
    }
  }
  navigateHome() {
    this.router.navigate(['/home']);
    this.senderForm.reset();
    this.destinationForm.reset();
  }
}
