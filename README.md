# What and why
Documentation on how to make a custom jupyter widget. The docs are currently pretty limited on details with creating a custom widget (being worked on - see [here](https://github.com/jupyter-widgets/ipywidgets/issues/2731)). This is probably because its really hard to write good documentation. So here I take the opposite approach, whenever I learn something about widgets I try to write about it here immediately (not worrying about writing it well). So I make no guarantees as to intelligibility or even correctness (though I strive for both). When I don't have the time/motivation to open the files and actually write things down I will put whatever links and scattered thoughts into an [issue](https://github.com/ianhi/custom-ipywidget-howto/issues) so it may be helpful to look at those as well. 

# Good resources
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
## Starting making a widget
When you want to start making a widget start from https://github.com/jupyter-widgets/widget-ts-cookiecutter 
```bash
pip install cookiecutter
cookiecutter https://github.com/jupyter-widgets/widget-ts-cookiecutter.git
```
It's also nice to add linting for the typescript side of things. See this PR https://github.com/jupyter-widgets/widget-ts-cookiecutter/pull/78 for adding it.

# Contributing

If you find something wrong or figure out something that isn't in here you should totally open an issue or a PR and I'll include it. 

# shameless plugs

1. If you want to help make a widget I'm partway through making an image segmentation widget and mostly writing stuff here as I discover them things along the way. If that's interesting feel free to help with it and maybe we can both learn more :) https://github.com/ianhi/ipysegment

2. I'm also trying to build better tools for looking at microscopy data in jupyter. This will likely involve making custom widgets https://github.com/ianhi/jupyter-microscopy this would be another low stakes widget playground.
