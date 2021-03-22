# jslink-custom-widgets

[![Build Status](https://travis-ci.org//jslink-custom-widgets.svg?branch=master)](https://travis-ci.org//jslink_custom_widgets)
[![codecov](https://codecov.io/gh//jslink-custom-widgets/branch/master/graph/badge.svg)](https://codecov.io/gh//jslink-custom-widgets)

An example of linking attributes of two different widgets in the frontend. This is useful because Typescript -> Python -> Typescript can easily take 100ms or more which results in a laggy experience.

To accomplish this use the ipywidgets `jslink` function which does some sort of magic for us.

There is also jsdlink which is a directional link

A Custom Jupyter Widget Library

## Installation

```bash
# First install the python package. This will also build the JS packages.
pip install -e .
```

When developing your extensions, you need to manually enable your extensions with the
notebook / lab frontend. For lab, this is done by the command:

```
jupyter labextension install @jupyter-widgets/jupyterlab-manager --no-build
jupyter labextension install .
```

For classic notebook, you can run:

```
jupyter nbextension install --sys-prefix --symlink --overwrite --py <your python package name>
jupyter nbextension enable --sys-prefix --py <your python package name>
```

Note that the `--symlink` flag doesn't work on Windows, so you will here have to run
the `install` command every time that you rebuild your extension. For certain installations
you might also need another flag instead of `--sys-prefix`, but we won't cover the meaning
of those flags here.

### How to see your changes

#### Typescript:

To continuously monitor the project for changes and automatically trigger a rebuild, start Jupyter in watch mode:

```bash
jupyter lab --watch
```

And in a separate session, begin watching the source directory for changes:

```bash
npm run watch
```

After a change wait for the build to finish and then refresh your browser and the changes should take effect.

#### Python:

If you make a change to the python code then you will need to restart the notebook kernel to have it take effect.
