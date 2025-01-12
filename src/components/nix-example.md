```nix
mkSet = attrs @ {
  checkVSCodeVersion ? false,
  vscodeVersion ? "*",
}: {
  vscode-marketplace = loadGenerated
    (attrs // {site = vscode-marketplace;});
  open-vsx = loadGenerated (attrs //
    {site = open-vsx;});
  vscode-marketplace-release = loadGenerated (attrs
    // {
      needLatest = false;
      site = vscode-marketplace;
    });
  open-vsx-release = loadGenerated (attrs
    // {
      needLatest = false;
      site = open-vsx;
    });
};

```
