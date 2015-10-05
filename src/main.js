import 'jquery';
//import 'voya-button'; //JDP: not sure why but it appears to be trying to register the element twice
//maybe because voya-top-nav also does this import...need to research
import 'bootstrap';

import voyaHeaderConfig from './config/voya-header.js';
import voyaFooterConfig from './config/voya-footer.js';

export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging();

    //Uncomment the line below to enable animation.
    //aurelia.use.plugin('aurelia-animator-css');

    //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
    //aurelia.use.plugin('aurelia-html-import-template-loader')
    //window.voya.componentUtils.setConfig('voya-header',voyaHeaderConfig);
    //window.voya.componentUtils.setConfig('voya-footer',voyaFooterConfig);

    aurelia.start().then(a => a.setRoot());

}
