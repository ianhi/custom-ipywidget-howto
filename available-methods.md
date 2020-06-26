There doesn't seem to be a canonical list of all the functions availiable to Widget objects for either python or typescript. so here is a list of many functions with some questionable commentary by yours truly.


# typescript:
For widgets on the typescript side useful to look at the file where `WidgetModel`, `DOMWidgetModel`, `WidgetView` and `DOMWidgetView` are defined:

https://github.com/jupyter-widgets/ipywidgets/blob/6be18d9b75353f7b4a1c328c6ea06d8959f978f6/packages/base/src/widget.ts

The model view framework is based off [backbone.js](https://backbonejs.org/#) which provides the methods to do things like listen to changes in the model https://backbonejs.org/#Events

backbonejs provides:
```
on
off
trigger
once
listenTo
stopListening
listenToOnce
```
and `WidgetModel` adds `on_some_change` to this list. see defintion [here](https://github.com/jupyter-widgets/ipywidgets/blob/6be18d9b75353f7b4a1c328c6ea06d8959f978f6/packages/base/src/widget.ts#L528)
With documentation:

> `on_some_change(['key1', 'key2'], foo, context)` differs from `on('change:key1 change:key2', foo, context)`. If the widget attributes `key1` and `key2` are both modified, the second form will result in foo being called twice while the first will call foo only once

An example taken from ipycanvas: https://github.com/martinRenou/ipycanvas/blob/7c738b2640d1d87207970740a8f2b7f16a72457f/src/widget.ts#L72

in the `CanvasModel` extends `DOMWidgetModel`:
```javascript
this.on_some_change(['width', 'height'], this.resizeCanvas, this);
this.on('change:sync_image_data', this.syncImageData.bind(this));
this.on('msg:custom', this.onCommand.bind(this));
```
the [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) is useful to make `this` refer to the Canvas object rather than the object of event.

These listening methods can be used (and maybe should only be used with - bc i don't understand how to extend) with the backbonejs builtin events:
https://backbonejs.org/#Events-catalog

- **add** (model, collection, options) — when a model is added to a collection.
- **remove** (model, collection, options) — when a model is removed from a collection.

- **update** (collection, options) — single event triggered after any number of models have been added, removed or changed in a collection.
- **reset** (collection, options) — when the collection's entire contents have been reset.
- **sort** (collection, options) — when the collection has been re-sorted.
- **change** (model, options) — when a model's attributes have changed.
- **change:[attribute]** (model, value, options) — when a specific attribute has been updated.
- **destroy** (model, collection, options) — when a model is destroyed.
- **request** (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
- **sync** (model_or_collection, response, options) — when a model or collection has been successfully synced with the server.
- **error** (model_or_collection, xhr, options) — when a model's or collection's request to the server has failed.
- **invalid** (model, error, options) — when a model's validation fails on the client.
- **route:[name]** (params) — Fired by the router when a specific route is matched.
- **route** (route, params) — Fired by the router when any route has been matched.
- **route** (router, route, params) — Fired by history when any route has been matched.
- **all** — this special event fires for any triggered event, passing the event name as the first argument followed by all trigger arguments.


of these `change` is probably far and away the most useful. 

### Views
WidgetViews also add:
- **callbacks**  Create msg callbacks for a comm msg. Used in the `touch` method. Probably don't use this yourself
- **send**   Send a custom msg associated with this view.
- **touch**  Use the view method touch instead of model.save_changes to associate the changes with the current view, thus associating any response messages with the view’s cell. (from low level widget tutorial)



### Typescript Miscellany

every view( maybe only DOMWidgetViews?) has a `this.el` which corresponds to the the DOM element to which the view belongs. From backbone documentation:
> **elview.el:**
All views have a DOM element at all times (the el property), whether they've already been inserted into the page or not. In this fashion, views can be rendered at any time, and inserted into the DOM all at once, in order to get high-performance UI rendering with as few reflows and repaints as possible. 


`initialize` is a function that is called at the end the constructor by all backbone objects (both model and view). FOr model:
> constructor / initializenew Model([attributes], [options])
When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model. If you define an initialize function, it will be invoked when the model is created. 

for a view:
>  constructor / initializenew View([options])
There are several special options that, if passed, will be attached directly to the view: model, collection, el, id, className, tagName, attributes and events. If the view defines an initialize function, it will be called when the view is first created. If you'd like to create a view that references an element already in the DOM, pass in the element as an option: new View({el: existingElement}) 

Iterating over the views owned by a model:

https://github.com/martinRenou/ipycanvas/blob/7c738b2640d1d87207970740a8f2b7f16a72457f/src/widget.ts#L293
callback argument isn't necessary, just that in this case its being used to apply a callback to all of them.

```javascript

  private forEachView(callback: (view: CanvasView) => void) {
    for (const view_id in this.views) {
      this.views[view_id].then((view: CanvasView) => {
        callback(view);
      });
    }
  }
```

It's probably better for each view to register a callback with `this.model.on` than to use this as doing so is simpler. I had gravitated towards this because I was worried that the callbacks would continue to be called even after that view was inaccesible - but it turns out this is not the case.


# python

defined in this file: https://github.com/jupyter-widgets/ipywidgets/blob/6be18d9b75353f7b4a1c328c6ea06d8959f978f6/ipywidgets/widgets/widget.py
which is ultimately a subclass of [traitlets.HasTraits](https://traitlets.readthedocs.io/en/stable/api.html?highlight=HasTraits#traitlets-api-reference)
**class methods and staticmethods**
- **close_all(cls)** - closes all widgets of a certain class i think?
- **on_widget_constructed(callback)** - Registers a callback to be called when a widget is constructed.
        The callback must have the following signature:
        callback(widget)"""
- **handle_comm_opened(comm, msg)** - heck if know what this does - don't plan on using.
- **get_manager_state(drop_defaults=False, widgets=None):** - "Returns the full state for a widget manager for embedding
        :param drop_defaults: when True, it will not include default value
        :param widgets: list with widgets to include in the state (or all widgets when None)"" - either this or `get_state` are probably useful for embedding the widget standalone. Use this to get the contents of the script at the bottom of my comment https://github.com/QuantStack/ipycytoscape/issues/80#issuecomment-635470671 


Other functions. Things that seem potentially useful are in bold
- `open` - "Open a comm to the frontend if one isn't already open" idk when this is necessary
- **`model_id`** - get the model id of the widget
- **`close`** -  "Closes the underlying comm. When the comm is closed, all of the widget views are automatically removed from the front-end."
- `send_state` -"Sends the widget state, or a piece of it, to the front-end, if it exists."
- **`get_state`** - get the widget state. I imagine this being useful for doing something like having a function to embed the widget standalone. Like i discuss here: https://github.com/QuantStack/ipycytoscape/issues/80#issuecomment-635470671 use this function to get the contents of the bottom script tag. Maybe this is for the python side of state, and the manager_state gives the embeddable state?
- `set_state` - "Called when a state is received from the front-end."
- **`send(content, buffers=None)`** - "Sends a custom msg to the widget model in the front-end." content is dict, buffers = list of binary buffers.
- **`on_msg`** - "(Un)Register a custom msg receive callback." `callback` will be given three arguments when a message arrives: ` callback(widget, content, buffers)`
- **`add_traits`** - "dynamically add traits to the widget"
- `notify_change` - "Called when a property has changed. Send the state to the frontend before the user-registered callbacks are called."
- `hold_sync` - context manager to hold off syncing state until exiting the context

The [DOMWidget](https://github.com/jupyter-widgets/ipywidgets/blob/6be18d9b75353f7b4a1c328c6ea06d8959f978f6/ipywidgets/widgets/domwidget.py) gets a few extra methods and attributes.

Attributes:
- `tabbable` - Is widget tabbable
- `tooltip` - tooltup caption - unclear what this is tooltip for? defaults to None which is probably why I don't think i've seen an example of this
- `layout` dictionary - the [docs](https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20Styling.html) for this are far and away the most complete section of documentation

**Methods**:
- `add_class` - "Adds a class to the top level element of the widget. Doesn't add the class if it already exists."
- `remove_class` - "Removes a class from the top level element of the widget.  Doesn't remove the class if it doesn't exist."
- `focus` - 'focus on widgets'
- `blur` - "[blur](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/blur) the widget" - I think this name is meant to evoke `defocus` because what it does is remove keyboard focus from the widget - this is the name from javascript though, not ipywidgets.
