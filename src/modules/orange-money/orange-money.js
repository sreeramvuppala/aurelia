import {computedFrom} from 'aurelia-framework';
import { omCalculator } from 'om-js-calc';
import {SERVICES} from 'config/services.js';
import {HttpClient} from 'aurelia-http-client';

export class OrangeMoney{
  static inject() { return [HttpClient]; }
  constructor(http) {
      this.http = http;
      //return http.get(SERVICES.OM_DATA).then(response => {
      //no external service available...need mock services
      //})
      //this.calc = omCalculator();

      voya.componentUtils.setConfig('voya-dollar-graph',{
        incomeSlices: [{
            value: 78,
            color: 'orange-gradient'
        }]
    });
  } //end constructor()

}
