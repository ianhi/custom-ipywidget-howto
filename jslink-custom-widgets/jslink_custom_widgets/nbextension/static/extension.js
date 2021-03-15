// Entry point for the notebook bundle containing custom model definitions.
//
define(function () {
  'use strict';

  window['requirejs'].config({
    map: {
      '*': {
        'jslink-custom-widgets': 'nbextensions/jslink_custom_widgets/index',
      },
    },
  });
  // Export the required load_ipython_extension function
  return {
    load_ipython_extension: function () {},
  };
});
