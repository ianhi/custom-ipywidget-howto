# What and why
Documentation for making a custom jupyter widget that I wish was in the official docs. The docs are pretty limited on details with creating a custom widget. This is probably because its really hard to write good documentation. Indeed I make no claims that this repo is "good" it's currently just a jumble of things I figured out, and is far less coherent and far more casual than official documentation would be. Thus it's much easier to create - eventually I hope to clean it and open a PR to ipywidgets.

beware that I am not sure if everything here is correct...

# Good resources
To learn widgets I recommend the following resources outside this:
1. [Low Level Widget Tutorial](https://github.com/jupyter-widgets/ipywidgets/blob/master/docs/source/examples/Widget%20Low%20Level.ipynb)
   - [Rendered on readthedocs - less good](https://ipywidgets.readthedocs.io/en/latest/examples/Widget%20Low%20Level.html)
      - The images aren't rendering properly for some reason see [this issue](https://github.com/jupyter-widgets/ipywidgets/issues/2908)
2. Look at widgets made by the people at QuantStack - they know the most about making widgets. Some widgets I have found to be particularly helpful to look are:
   - [ipympl](https://github.com/matplotlib/ipympl)
   - [ipycanvas](https://github.com/martinRenou/ipycanvas)
3. [QuantStack Gitter](https://gitter.im/QuantStack/Lobby)
   - They've been very helpful everytime I've asked a question
## Starting making a widget
When you want to start making a widget start from https://github.com/jupyter-widgets/widget-ts-cookiecutter 
```bash
pip install cookiecutter
cookiecutter https://github.com/jupyter-widgets/widget-ts-cookiecutter.git
```
I'd also recommend including the changes in this PR https://github.com/jupyter-widgets/widget-ts-cookiecutter/pull/72 that add development install instructions to the project that gets generated. Until that gets merged I just copy paste from that PR every time.

# Contributing

If you find something wrong or figure out somethign that isn't in here totally open an issue or a PR and I'll include it. 

# shameless plug

If you want to help make a widget I'm partway through making an image segmentation widget and most discovering these things along the way. If that's interesting feel free to help with it and maybe we can both learn more :) https://github.com/ianhi/ipysegment

