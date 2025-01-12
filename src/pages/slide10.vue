<template lang="pug">
slide
  h1 Application constraining
  .grid.gap-10.cols-2
    application.modal.overflow-auto.flex.items-center
    constrain_application.modal.flex.items-center
  h2.mt-5 Type Inference and Constraining
  ul
    li type_term creates a type variable for the return type
    li The function type is then constrained to be a function that takes given argument
    li During constraining, the return type is shaped
</template>
