var SERVICES = {
    CUSTOMER: 'customer',
    CUSTOMERS: 'customers'
};

//different base urls can be setup here to test different environments
//var baseUrl = '/myapp/';
var baseUrl = 'http://djaxlrts9521:8080/vcf-ref-app/ws/ers/';

//sets up full url (ie. http://djaxlrts9521:8080/vcf-ref-app/ws/ers/customers )
Object.keys(SERVICES).forEach(function(serviceName) {
    SERVICES[serviceName] = baseUrl + SERVICES[serviceName];
});

SERVICES.OM_DATA = 'http://www.voya.com/api/voya-orange-money/oms/40/40000/0.00/0.03';

export {
    SERVICES
};
