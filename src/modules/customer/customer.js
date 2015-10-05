import {computedFrom} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {OrangeMoney} from 'modules/orange-money/orange-money.js';
import {SERVICES} from 'config/services.js';

export class Customer{
  static inject() { return [HttpClient, OrangeMoney]; }
  constructor(http, orangeMoney) {
      this.http = http;
      this.heading = 'Add/Edit a Customer';
      this.fields = {
          id: 16,
          firstName: 'John',
          lastName: 'Doe',
          age: '50',
          address: {
              street1: 'Park Ave',
              street2: 'Apt #2',
              city: 'Austin',
              state: 'TX',
              zipCode: '01121'
          }
      };
  }



  submit() {
      this.http.post(SERVICES.CUSTOMERS,this.fields).then(response => {
        window.location = '/#/customers';  //better way to do this?  maybe not.
      });
  }

}
