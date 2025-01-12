```nix
  {
    # A set with two fields
    set1 = { name = "john"; surname = "smith"; };

    # A recursive set that references itself in the definition
    set2 = rec { age = 35; age2 = age; };

    # A recursive set with primitive recursion
    set3 = rec { x = { y = x;}};

    # A recursive set with illegal mutual recursion.
    illegal_set = rec { x = y; y = x; };
  }
```
