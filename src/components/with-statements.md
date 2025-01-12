```nix
{
  # Making all fields from pkgs (80.000 elements) available
  packages1 = [ pkgs.code pkgs.fz pkgs.git ];
  packages2 = with pkgs; [code fz git];
}
```
