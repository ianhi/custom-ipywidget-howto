# connecting-widgets

Exploring how to give access of a widget's typescript model to a different widget. To give `widget1` access to `widget2` the technique is to:

1. In python get the `comm_id` of `widget2` with `widget2.comm.comm_id`
2. Send to widget1 on typescript in a message or a trait
3. In `widget1`'s typescript model use `this.widget_manager.get_model(comm_id)` to get a promise that resolves to the model for that instance of `widget2`.

**Important questions:**

Q: Is this good practice? - A: I have no idea

Q: Is this the best way to achieve this? - A: This is the only way I could think of

## Development Installation

```bash
# First install the python package. This will also build the JS packages.
pip install -e ".[test, examples]"
```

When developing your extensions, you need to manually enable your extensions with the
notebook / lab frontend. For lab, this is done by the command:

```
jupyter labextension install @jupyter-widgets/jupyterlab-manager --no-build
jupyter labextension install .
```

For classic notebook, you can run:

```
jupyter nbextension install --sys-prefix --symlink --overwrite --py connecting_widgets
jupyter nbextension enable --sys-prefix --py connecting_widgets
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
