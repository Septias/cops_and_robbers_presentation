```rust
fn type_term(context: &mut Context, term: &Ast) {
  match term {
    Ast::Identifier(Identifier { name }) => {
      context.lookup(name).to_type()
    }
    Ast::BinaryOp => {
      match op {
        BinOp::HasAttribute => {},
        BinOp::AttributeSelection => {},
        // ...
    },
    Ast::AttrSet => {},
    Ast::LetBinding => {},
    // ...
  }
}
```
