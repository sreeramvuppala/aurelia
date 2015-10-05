import {HttpClient} from 'aurelia-http-client';
import {SERVICES} from 'config/services.js';

export class Customer{
    static inject() { return [HttpClient]; }
    constructor(http, orangeMoney) {
        this.http = http;
        this.heading = 'List Customers';
        this.customers = [];
  }


  activate() {
      var self = this;
      return this.http.get(SERVICES.CUSTOMERS).then(response => {
        self.customers = JSON.parse(response.response);
      });
  }

}
