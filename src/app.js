export class App {
  configureRouter(config, router) {
      config.title = 'Voya Deep UI Reference App';
      config.map([
        {route: ['','welcome'], name: 'welcome', moduleId: 'modules/welcome/welcome', nav: true, title: 'Welcome'},
        {route: ['customer'], name: 'customer', moduleId: 'modules/customer/customer', nav: true, title: 'Enter/Edit Customer'},
        {route: ['customers'], name: 'customers', moduleId: 'modules/customers/customers', nav: true, title: 'List Customers'}
      ]);

      this.router = router;
  }
}
