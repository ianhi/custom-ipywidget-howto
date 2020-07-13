// Copyright (c) Ian Hunt-Isaak
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import { MODULE_NAME, MODULE_VERSION } from './version';

// Import the CSS
import '../css/widget.css';

export class widgetModel1 extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: widgetModel1.model_name,
      _model_module: widgetModel1.model_module,
      _model_module_version: widgetModel1.model_module_version,
      _view_name: widgetModel1.view_name,
      _view_module: widgetModel1.view_module,
      _view_module_version: widgetModel1.view_module_version,
      value1: 'Hello World',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'widgetModel1';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'view1'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class view1 extends DOMWidgetView {
  render(): void {
    console.log('view2');
    this.el.classList.add('custom-widget');

    this.value_changed();
    this.model.on('change:value1', this.value_changed, this);
  }

  value_changed(): void {
    this.el.textContent = this.model.get('value1');
  }
}

export class widgetModel2 extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: widgetModel2.model_name,
      _model_module: widgetModel2.model_module,
      _model_module_version: widgetModel2.model_module_version,
      _view_name: widgetModel2.view_name,
      _view_module: widgetModel2.view_module,
      _view_module_version: widgetModel2.view_module_version,
      value2: 'Hello World',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'widgetModel2';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'view2'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class view2 extends DOMWidgetView {
  render() {
    console.log('view2');
    this.el.classList.add('custom-widget');

    this.value_changed();
    this.model.on('change:value2', this.value_changed, this);
  }

  value_changed(): void {
    this.el.textContent = this.model.get('value2');
  }
}
