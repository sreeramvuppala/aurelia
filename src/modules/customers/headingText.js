/*
 * Note: This should not be needed...
 */

import {inject, customAttribute} from 'aurelia-framework';

@customAttribute('heading-text')
@inject(Element)
export class HeadingText {
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue){
    this.element.setAttribute('heading-text',newValue);
  }
}
