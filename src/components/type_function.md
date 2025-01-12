```rust
Ast::Lambda {
  pattern,
  body,
  span,
} => {
  let ty = match pattern {
      crate::ast::Pattern::Record {
          patterns,
          is_wildcard,
          name,
      } => {
          let mut items = vec![];
          for pattern in patterns {
              match pattern {
                  Identifier(ident) => {
                      items.push(Type::Var(ctx.fresh_var()));
                  }
                  DefaultIdentifier(name, expr) => {
                      // handle default identifier
                  }
              }
          }

          // handle wildcart ..

          Type::Pattern(items, *is_wildcard);
      }
      Identifier(Identifier { name, .. }) => {
        let ty = Type::Var(ctx.fresh_var());
        vars.push((name.to_string(), ContextType::Type(ty)));
        ty
      }
  };

  let ret = ctx.with_scope(vars, |ctx| type_term(ctx, body));
  Ok(Function(ty, ret))
}

```
