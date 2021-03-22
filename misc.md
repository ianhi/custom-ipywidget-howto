# Variable types

On the typescript side it was clear to me how to allow multiple types for a variable. e.g.: `var: string | number;`. To achieve the same on the python side with Traitlets you need to use the `Union` function https://traitlets.readthedocs.io/en/stable/trait_types.html#traitlets.Union

# Listening to widget resize events

users can always resize a widget by modifying `widget.layout.height` or `widget.layout.width` which both accept values like `'400px'`. However these values live in the layout object (which is itself a widget) so on the typescript side you can't just do

```typescript
this.model.on('change:width', this.whatever, this);
```

Instead you should do:

```typescript
const layout = this.model.get('layout');
if (layout) {
  layout.on_some_change(['width', 'height'], this.whatver, this);
}
```

Where `this.whatever` is whatever callback you want.
Above is written to live inside of a view, if instead you want the callback to live in the model then you should swap `this.model.get('layout')` to `this.get('layout')`.

# preventing contextmenu

In order to prevent the contextmenu from showing up it is not enough to `preventDefault` you also need to `stopPropagation` in order to prevent the lumino context menu from appearing. See ipympl https://github.com/matplotlib/ipympl/blob/6b44a6f90cf74b12cfcf930b440010984d8a9b4d/js/src/mpl_widget.js#L450-L455 I modified it slightly to make it typescripty:

```typescript
this.top_canvas.addEventListener('contextmenu', (e: MouseEvent) {
            e.preventDefault();
            e.stopPropagation();
        });
```
