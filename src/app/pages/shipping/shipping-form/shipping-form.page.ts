import { PhoneValidator } from './../../../validators/phone-validator';
import { COUNTRIES } from './../../../config/countries-support';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.page.html',
  styleUrls: ['./shipping-form.page.scss'],
})
export class ShippingFormPage implements OnInit {

  @ViewChild('shippingFormSlider', {static: false}) shippingFormSlider;
  senderForm: FormGroup;
  destinationForm: FormGroup;
  country_phone_group: FormGroup;
  countries = COUNTRIES;

  validations = {
    'name': [
      { type: 'required', message: 'Name is required.' },
    ],
    'businessname': [
      { type: 'pattern', message: 'Enter a valid business name' },
    ],
    'address1': [
      { type: 'required', message: 'Address is required.' },
      { type: 'minlength', message: 'Address must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Address cannot be more than 50 characters long.' },
    ],
    'address2': [
      { type: 'required', message: 'Address is required.' },
      { type: 'minlength', message: 'Address must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Address cannot be more than 50 characters long.' },
    ],
    'postalcode': [
      { type: 'required', message: 'Address is required.' },
      { type: 'pattern', message: 'Enter a postal code.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'invalidCountryPhone', message: 'Phone is incorrect for the selected country.' }
    ],
    'city': [
      { type: 'required', message: 'City is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
  };
  constructor() { }

  ngOnInit(): void {

    const country = new FormControl(this.countries[0], Validators.required);
    const phone = new FormControl('', Validators.compose([
      Validators.required,
      PhoneValidator.invalidCountryPhone(country)
    ]));

    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    this.senderForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'businessname': new FormControl('', Validators.pattern('[\s\S][a-zA-Z0-9]')),
      'address1': new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5),
        Validators.required
      ])),
      'address2': new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5),
        Validators.required
      ])),
      'postalcode': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]')
      ])),
      'phone': new FormControl('', Validators.required),
      'country_phone': this.country_phone_group,
      'city': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    });

    this.destinationForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'businessname': new FormControl('', Validators.pattern('[\s\S][a-zA-Z0-9]')),
      'address1': new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5),
        Validators.required
      ])),
      'address2': new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5),
        Validators.required
      ])),
      'postalcode': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]')
      ])),
      'phone': new FormControl('', Validators.required),
      'country_phone': this.country_phone_group,
      'city': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    });
  }
  next() {
    this.shippingFormSlider.slideNext();
  }

  prev() {
    this.shippingFormSlider.slidePrev();
  }

}
