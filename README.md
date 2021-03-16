# Custom Jupyter Widgets by Example

[![Github Actions Status](https://github.com/jupyter-widgets/widget-examples/workflows/CI/badge.svg)](https://github.com/jupyter-widgets/widget-examples/actions?query=workflow%3ACI)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/jupyterlab/extension-examples/master?urlpath=lab)

The goal of this repository is to show how to develop custom [Jupyter Widgets](https://github.com/jupyter-widgets/widget-examples), presented as short tutorial series.

## Getting Started

```bash
# clone the repository
git clone https://github.com/jupyter-widgets/widget-examples.git jupyter-widget-examples
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

## About JupyterLab

TODO

## Community Guidelines and Code of Conduct

This examples repository is a Jupyter project and follows the Jupyter
[Community Guides and Code of Conduct](https://jupyter.readthedocs.io/en/latest/community/content-community.html).
