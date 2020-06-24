From:
https://gitter.im/QuantStack/Lobby?at=5ecd7dc727513a72fbb4b783

If you want python to respond to an HTML event (e.g. MouseMove) then you gotta have a typescript event listener which should then call `this.send` you can put arbitrary json as the message. Ultimately what it is doing is creating a jupyter comm message https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20Low%20Level.html#Comms to the backend and wrapping the message in the `content` property of the comm.

On the python side you can listen for messages using `on_msg` and then look at `msg.contents` in order to determine what you want to do. 

For example the button widget does the following:
https://github.com/jupyter-widgets/ipywidgets/blob/6be18d9b75353f7b4a1c328c6ea06d8959f978f6/packages/controls/src/widget_button.ts
https://github.com/jupyter-widgets/ipywidgets/blob/master/ipywidgets/widgets/widget_button.py

**Typescript**:
Has an eventlistener that points to `_handle_click`:
```typescript
_handle_click(event: MouseEvent): void {
   event.preventDefault();
   this.send({ event: 'click' });
}
```

**python**:
and the corresponding python is:

```python
def __init__(self, **kwargs):
    super().__init__(**kwargs)
    self._click_handlers = CallbackDispatcher()
    self.on_msg(self._handle_button_msg)

def on_click(self, callback, remove=False):
    """
    Register a callback to execute when the button is clicked.
        The callback will be called with one argument, the clicked button
        widget instance.
    """
    self._click_handlers.register_callback(callback, remove=remove)

def click(self):
    """Programmatically trigger a click event.
    This will call the callbacks registered to the clicked button
    widget instance.
    """
    self._click_handlers(self)

def _handle_button_msg(self, widget, content, buffers):
    """Handle a msg from the front-end.
    Parameters
    ----------
    content: dict
        Content of the msg.
    """
    if content.get('event', '') == 'click':
        self.click()
```


This also shows how to allow a widget user to add a callback, for that it's easiest to use CallbackDispatcher. I think that this is basically a really fancy list that does some helpful stuff, idk what that helpful stuff and am happy to remain ignorant. 