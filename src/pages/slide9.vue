<template lang="pug">
slide
  h1 Function Type Inference
  .grid.gap-10.cols-2
    type_function.modal.overflow-auto
    .flex.flex-col.grow.mr-2
      h2 Type inference
      ul.mt-0
        li Create a type variable for the function parameter
        li Add the type variable to the context and infer a type for the function body
        li If the argument is a pattern, all pattern identifiers have to be added to the context
        li If the pattern has an alias, the alias has to be added to the context
        li Return a function type with the inferred return type
</template>

<route lang="yaml">
meta:
  heading: 'SimpleNix in Action'
</route>
