```nix
# A Simple let binding
let let1 = 1; in x;

# A let binding with two bound variables
let let2 = 1; y = x + 1; in y + 2;

# A selfreferential let binding
let let3 = {y = x;} in x;
```
