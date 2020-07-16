/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Copyright (c) Ian Hunt-Isaak
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
  WidgetModel,
} from '@jupyter-widgets/base';

import { MODULE_NAME, MODULE_VERSION } from './version';

// Import the CSS
import '../css/widget.css';

export class model1 extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: model1.model_name,
      _model_module: model1.model_module,
      _model_module_version: model1.model_module_version,
      _view_name: model1.view_name,
      _view_module: model1.view_module,
      _view_module_version: model1.view_module_version,
      value: 'Hello World',
    };
  }

  initialize(attributes: any, options: any) {
    super.initialize(attributes, options);
    this.on('msg:custom', this._on_msg.bind(this));
  }

  private _on_msg(command: any, buffers: any) {
    if (command.what && command.what === 'grab-model') {
      Promise.resolve(this.widget_manager.get_model(command.comm_id)).then(
        (value) => {
          if (value) {
            this.otherModels.push(value);
            value.set('value', 'set by model1!!!');
          }
        }
      );
    }
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  private otherModels: WidgetModel[] = [];
  static model_name = 'model1';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'view1'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class view1 extends DOMWidgetView {
  render(): void {
    console.log(this.model.widget_manager.comm_target_name);
    const promise = this.model.widget_manager.get_model(
      this.model.comm.comm_id
    );
    Promise.resolve(promise).then((value) => {
      console.log('in then');
      console.log(value);
    });
    console.log(promise);
    this.el.classList.add('custom-widget');

    this.value_changed();
    this.model.on('change:value', this.value_changed, this);
  }

  value_changed(): void {
    this.el.textContent = this.model.get('value');
  }
}

export class model2 extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: model2.model_name,
      _model_module: model2.model_module,
      _model_module_version: model2.model_module_version,
      _view_name: model2.view_name,
      _view_module: model2.view_module,
      _view_module_version: model2.view_module_version,
      value: 'Hello World',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };
  // set_value()

  static model_name = 'model2';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'view2'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class view2 extends DOMWidgetView {
  render(): void {
    // console.log(this.model.widget_manager.comm_target_name);
    // const promise = this.model.widget_manager.get_model(
    //   this.model.comm.comm_id
    // );
    // Promise.resolve(promise).then((value) => {
    //   console.log('in then');
    //   console.log(value);
    // });
    // console.log(promise);
    this.el.classList.add('custom-widget');

    this.value_changed();
    this.model.on('change:value', this.value_changed, this);
  }

  value_changed(): void {
    this.el.textContent = this.model.get('value');
  }
}
