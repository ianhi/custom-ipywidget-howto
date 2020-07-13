#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Ian Hunt-Isaak.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import Unicode
from ._frontend import module_name, module_version


class widget1(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('widgetModel1').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('view1').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    value1 = Unicode('Hello World').tag(sync=True)

class widget2(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('widgetModel2').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('view2').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    value2 = Unicode('Hello World').tag(sync=True)
