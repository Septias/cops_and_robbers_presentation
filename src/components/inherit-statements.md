```nix
# A simple inherit statement
let
  set1 = { y = 1; };
  set2 = { inherit set1; };
in {};
# Is equivalent to
let
  set1 = { y = 1; };
  set2 = { set1 = set1; };
in {};

# Inherit using a base-path
let x = { y = { z = 1; };}; in {
  inherit (x.y) z;
};
```
