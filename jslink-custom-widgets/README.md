
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
jupyter labextension develop --overwrite .
npm run build
```

For classic notebook, you need to run:

```
jupyter nbextension install --sys-prefix --symlink --overwrite --py jslink_custom_widgets
jupyter nbextension enable --sys-prefix --py jslink_custom_widgets
```

### How to see your changes
#### Typescript:
If you use JupyterLab to develop then you can watch the source directory and run JupyterLab at the same time in different
terminals to watch for changes in the extension's source and automatically rebuild the widget.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
npm run watch
# Run JupyterLab in another terminal
jupyter lab
```

After a change wait for the build to finish and then refresh your browser and the changes should take effect.

#### Python:
If you make a change to the python code then you will need to restart the notebook kernel to have it take effect.
