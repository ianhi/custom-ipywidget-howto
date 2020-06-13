# Variable types

On the typescript side it was clear to me how to allow multiple types for a variable. e.g.: `var: string | number;`. To achieve the same on the python side with Traitlets you need to use the `Union` function https://traitlets.readthedocs.io/en/stable/trait_types.html#traitlets.Union