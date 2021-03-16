# Custom Jupyter Widgets by Example

[![Github Actions Status](https://github.com/ianhi/custom-ipywidget-howto/workflows/CI/badge.svg)](https://github.com/ianhi/custom-ipywidget-howto/actions?query=workflow%3ACI)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/jupyterlab/extension-examples/master?urlpath=lab)

The goal of this repository is to show how to develop custom [Jupyter Widgets](https://github.com/ianhi/custom-ipywidget-howto), presented as short tutorial series.

## What and why

Documentation on how to make a custom jupyter widget. The docs are currently pretty limited on details with creating a custom widget (being worked on - see [here](https://github.com/jupyter-widgets/ipywidgets/issues/2731)). This is probably because its really hard to write good documentation. So here I take the opposite approach, whenever I learn something about widgets I try to write about it here immediately (not worrying about writing it well). So I make no guarantees as to intelligibility or even correctness (though I strive for both). When I don't have the time/motivation to open the files and actually write things down I will put whatever links and scattered thoughts into an [issue](https://github.com/ianhi/custom-ipywidget-howto/issues) so it may be helpful to look at those as well.

## Getting Started

```bash
# clone the repository
git clone https://github.com/ianhi/custom-ipywidget-howto.git jupyter-widget-examples
```

## Develop by Examples

Start with the [Hello World](hello-world) and then jump to the topic you are interested in.

- [Hello World](hello-world)

### [Hello World](hello-world)

Set up the development environment and print to the console.

TODO: add screenshot

## Develop and Use the Examples

### Build and Install all the widgets at once

```bash
# install the dependencies
yarn

# install the Python packages
yarn run install-py

# rebuild the packages
yarn run build-ext

# (optional) link your development version of the extension with JupyterLab
yarn run install:ext
```

### Build and Install one Example

Go to the example directory you want to install, e.g. `cd ./hello-world`, and run the following commands:

```bash
# install the package in development mode
python -m pip install -e .

# (optional) link your development version of the extension with JupyterLab
yarn run install:extension

# rebuild the package
yarn run build
```

### Change the Sources

If you want to develop and iterate on the code, you will need to open 2 terminals.

In terminal 1, go to the extension folder and run the following:

```bash
yarn watch
```

Then in terminal 2, start JupyterLab with the watch flag:

```bash
jupyter lab --watch
```

From there, you can change your extension source code, it will be recompiled,
and you can refresh your browser to see your changes.

We are using [embedme](https://github.com/zakhenry/embedme) to embed code snippets into the markdown READMEs. If you make changes to the source code, ensure you update the README and run `yarn embedme` from the root of the repository to regenerate the READMEs.

### Add a new example

You can use the TypeScript cookiecutter to quickly bootstrap a new custom widget example:

```bash
# install cookiecutter
pip install cookiecutter

# create a new custom widget
cookiecutter https://github.com/jupyter-widgets/widget-ts-cookiecutter
```

Then answer the prompts to give a new name to the example.

## Install a Custom Jupyter Widget

Once your widget is published on [pypi.org](https://pypi.org/) (outside of this scope), you can install it
with the following command:

```bash
pip install <published_widget>
```

## Additional resources

To learn widgets I recommend the following resources outside this:

1. [Low Level Widget Tutorial](https://github.com/jupyter-widgets/ipywidgets/blob/master/docs/source/examples/Widget%20Low%20Level.ipynb)
   - [Rendered on readthedocs - less good](https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20Low%20Level.html)
     - The images aren't rendering properly for some reason see [this issue](https://github.com/jupyter-widgets/ipywidgets/issues/2908)
2. Look at widgets made by the people at QuantStack - they know the most about making widgets. Some widgets I have found to be particularly helpful are:
   - [ipympl](https://github.com/matplotlib/ipympl)
   - [ipycanvas](https://github.com/martinRenou/ipycanvas)
   - [ipycytoscape](https://github.com/quantstack/ipycytoscape)
3. [QuantStack Gitter](https://gitter.im/QuantStack/Lobby)
   - They've been very helpful everytime I've asked a question

### Shameless plugs

1. If you want to help make a widget I'm partway through making an image segmentation widget and mostly writing stuff here as I discover them things along the way. If that's interesting feel free to help with it and maybe we can both learn more :) https://github.com/ianhi/ipysegment

2. I'm also trying to build better tools for looking at microscopy data in jupyter. This will likely involve making custom widgets https://github.com/ianhi/jupyter-microscopy this would be another low stakes widget playground.

## About Jupyter Widgets

TODO

## Community Guidelines and Code of Conduct

This examples repository is a Jupyter project and follows the Jupyter
[Community Guides and Code of Conduct](https://jupyter.readthedocs.io/en/latest/community/content-community.html).
