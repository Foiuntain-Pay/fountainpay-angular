<p align="center">
    <img title="Fountainpay" height="200" src="https://fountainpay.ng/static/media/logo.ae427b76c4cf99998a6be8c0cc1336f6.svg" width="50%"/>
</p>

# Fountainpay-v1 Angular Library
![Publish Angular Package](https://github.com/Foiuntain-Pay/Fountainpay-Angular/workflows/Publish%20React%20Package/badge.svg)
![npm](https://img.shields.io/badge/Fountain-pay-red)
![npm](https://img.shields.io/badge/Fountain-pay-green)
![NPM](https://img.shields.io/badge/Fountain-pay-green)



## Introduction

The Angular SDK helps you create seamless payment experiences in your Angular mobile or web app. By connecting to our modal, you can start collecting payment in no time.

Available features include:

- Collections: Card, Account, Mobile money, Direct Debit, Bank Transfers, NQR.
- Recurring payments: Tokenization and Subscriptions.


## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Initialization](#initialization)
4. [Usage](#usage)
5. [Support](#support)
6. [Contribution Guidelines](#contribution-guidelines)
7. [License](#license)
8. [Contributors](#contributors)
9. [Changelog](#)


## Requirements

1. Fountainpay version 1 API keys
2. Node version >= 6.9.x and npm >= 3.x.x
3. Angular version  >= 9


## Installation

Install the SDK

```bash
$ npm i fountainpay-angular

# or
$ yarn add fountainpay-angular

```


## Initialization
Import FountainpayModule in your application module section
Import FountainpayService to any component in your application
Add private fpService: FountainpayService to your component constructor


```javascript
 const config = {
  publicKey: 'FP-PUBK-**************************',
  tnxRef: Date.now(),
  amount: 100,
  currency: 'NGN',
  channels: ["card", "qrcode", "directDebit"],
  customer: {
    email: 'user@gmail.com',
    phoneNo: '070********',
    lastname: 'john',
    firstname:''
  }
};
```

## Usage

Add Fountainpay to your projects as a component or a angular service:

1. [In your Module](#service)
2. [As a Component](#components)
3. [Directly in your code](#service)




```javascript

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FountainpayModule } from 'fountainpay-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FountainpayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```javascript

import { Component } from '@angular/core';
import { FpcheckoutResponse } from 'projects/fountainpay-angular/src/lib/types';
import {FountainpayService} from "fountainpay-angular"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public config: any
  constructor(private fpService: FountainpayService) {
  }
  ngOnInit() {
    this.config={
      publicKey: "FP-PUBK-9603605594851666993306925",
      tnxRef: `${Date.now()}`,
      amount: 1000,
      currency: 'NGN',
      channels: ["card", "qrcode", "directDebit"],
      customer: {
        email: 'user@gmail.com',
        phoneNo: '08102909304',
        lastname: 'test',
        firstname:'user'
      },
    };
  }
  public onPayment(response: any){
    console.log(response)
  }
  public onClose(){
    alert("window close")
  }
  public innitializePayment(): void {
    const newconfig = {
    ...this.config,
      callback: (response: FpcheckoutResponse | any) => {
        this.onPayment!(response);
      },
      close: () => {
        this.onClose!();
      },
    };
    this.fpService.payWithFountainpay(newconfig as any);
  }

}

```


### Service

```html
<div>Testing Fountainpay checkout angular sdk library</div>
<div>
    <button (click)="innitializePayment()">Pay now</button>
</div>
```

### Component

```html
<div>Testing Fountainpay checkout angular sdk library</div>
<div>
    <fountainpay [config]="config" (onComplete)="onPayment($event)" (onClose)="onClose()">Make payment with FP Component</fountainpay>
</div>
```


### Parameters

Read more about our parameters and how they can be used [here](https://doc.fountainpay.ng/docs/collecting-payments/inline).

| Parameter           | Always Required ? | Description                                                                                                                                                                                                                             |
| ------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| publicKey          | True              | Your API public key                                                                                                                                                                                                                     |
| tnxRef              | True              | Your transaction reference. This MUST be unique for every transaction                                                                                                                                                                   |
| amount              | True              | Amount to charge the customer.                                                                                                                                                                                                          |
| currency            | False             | currency to charge in. Defaults to NGN                                                                                                                                                                                                                                                         
| channels            | True              | This specifies the payment options to be displayed e.g - card, mobilemoney, ussd and so on.                                                                                                                                                                                                                                                         
| redirect_url        | False             | URL to redirect to when a transaction is completed. This is useful for 3DSecure payments so we can redirect your customer back to a custom page you want to show them.                                                                  |
| customer            | True              | This is an object that can contains your customer details: e.g - 'customer': {'email': 'example@example.com','phoneNo': '080********', 'lastname': 'Richards', firstname:'Adedeji' }                                                                                        |
| metadata                | False             | This is an object that helps you include additional payment information to your request e.g {'container': '','theme': {disableDarkMode: false} }                                                                                     |
                                                                                                                                                                           |

## Other methods and descriptions:

Methods provided by the Angular SDK:

| Method Name  | Parameters  | Returns |Description |
| ------------- | ------------- | ------------- | ------------- |
| onPayment  |  Null | response | This methods is a callback that recieve payment response in an object format. |
| onClose  |  Null | Null | This methods allows you to close the payment modal via code. |

Please check [Fountainpay Documentation](https://docs.fountainpay.ng/docs/standard) for other available options you can add to the tag.



## Debugging Errors

We understand that you may run into some errors while integrating our library. You can read more about our error messages [here](https://docs.fountainpay.ng/docs/integration-guides/errors).

For `authorization` and `validation` error responses, double-check your API keys and request. If you get a `server` error, kindly engage the team for support.



# Support

For additional assistance using this library, please create an issue on the Github repo or contact the developer experience (DX) team via [email](mailto:developers@fountainpay.ng).

You can also follow us [@fountainpayng](https://twitter.com/fountainpayng) and let us know what you think 😊.



## Contribution Guidelines

We welcome contributions from the community. Read more about our community contribution guidelines [here](/CONTRIBUTING.md).


<a id="license"></a>

## License

By contributing to this library, you agree that your contributions will be licensed under its [MIT license](/LICENSE.md).

Copyright (c) Fountainpay Systems and Solutions.



## Contributors

- [Adedeji Richards](https://twitter.com/AbscentMan)
